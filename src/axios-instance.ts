import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import { authRefresh } from "../generated/api/index";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  process.env.API_URL ??
  "https://localhost:8080";

const LOGIN_PATH =
  process.env.NEXT_PUBLIC_LOGIN_PATH ?? process.env.LOGIN_PATH ?? "/login";

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
  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptor
client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

// session expired helper
const handleSessionExpired = () => {
  if (typeof window !== "undefined") {
    window.location.href = LOGIN_PATH;
  } else {
    throw new Error("SESSION_EXPIRED");
  }
};

// refresh helper
const renewAccessToken = async (): Promise<string> => {
  // if already renewing, queue this request and wait
  if (isRefreshing) {
    return new Promise<string>((resolve, reject) => {
      queue.push({ resolve, reject });
    });
  }

  isRefreshing = true;

  try {
    const { accessToken: newToken } = await authRefresh();
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

    const is401 = err.response?.status === 401;
    const isRenewEndpoint = original.url?.includes("/auth/refresh");
    const alreadyRetried = original._retry;

    // if 401 on renew itself, session is dead - redirect to login
    if (is401 && isRenewEndpoint) {
      clearAccessToken();
      handleSessionExpired();
      return Promise.reject(err);
    }

    // if 401 on any other endpoint, try renewing once
    if (is401 && !alreadyRetried) {
      original._retry = true;

      try {
        const newToken = await renewAccessToken();
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
