import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  process.env.API_URL ??
  "https://localhost:8080/api";

const LOGIN_PATH =
  process.env.NEXT_PUBLIC_LOGIN_PATH ?? process.env.LOGIN_PATH ?? "/auth/login";

// types
interface QueueItem {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}

// state
let accessToken: string | null = null;
let isRefreshing = false;
let queue: QueueItem[] = [];

// token helpers
export const setAccessToken = (token: string) => {
  accessToken = token;
};

export const clearAccessToken = () => {
  accessToken = null;
};

// client
const client: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// request interceptor
client.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

// session expired helper
const handleSessionExpired = () => {
  if (typeof window !== "undefined") {
    window.location.href = LOGIN_PATH;
  }
};

// refresh helper
const refreshAccessToken = async (
  config: InternalAxiosRequestConfig,
): Promise<string> => {
  // if already refreshing, queue this request and wait
  if (isRefreshing) {
    return new Promise<string>((resolve, reject) => {
      queue.push({ resolve, reject });
    });
  }

  isRefreshing = true;

  try {
    const res = await client.post<{
      accessToken: string;
    }>("/v1/auth/refresh", undefined, {
      baseURL: BASE_URL,
      withCredentials: true,
      adapter: config.adapter,
    });

    const newToken = res.data.accessToken;
    setAccessToken(newToken);

    // flush queue with new token
    queue.forEach((item) => item.resolve(newToken));
    queue = [];

    return newToken;
  } catch (err) {
    // flush queue with error
    queue.forEach((item) => item.reject(err));
    queue = [];

    clearAccessToken();
    throw err;
  } finally {
    isRefreshing = false;
  }
};

client.interceptors.response.use(
  (response) => response,
  async (err) => {
    const original = err.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    const isTokenInvalid = err.response?.data.error === "REFRESH_TOKEN_INVALID";

    if (isTokenInvalid) {
      clearAccessToken();
      handleSessionExpired();
      return Promise.reject(err);
    }

    const alreadyRetried = original._retry;
    const isUnauthorized = err.response?.data.error === "UNAUTHORIZED";

    if (isUnauthorized && !alreadyRetried) {
      original._retry = true;

      try {
        const newToken = await refreshAccessToken(original);
        original.headers.Authorization = `Bearer ${newToken}`;
        return client(original);
      } catch {
        clearAccessToken();
        handleSessionExpired();
        return Promise.reject(err);
      }
    }

    return Promise.reject(err);
  },
);

export const AXIOS_INSTANCE = client;

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = axios.CancelToken.source();

  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
  }).then(({ data }) => data) as Promise<T> & { cancel?: () => void };

  promise.cancel = () => source.cancel("Request cancelled");

  return promise;
};
