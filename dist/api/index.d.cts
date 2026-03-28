import { AxiosInstance, AxiosRequestConfig } from "axios";

//#region src/api/axios-instance.d.ts
declare const setAccessToken: (token: string) => void;
declare const clearAccessToken: () => void;
declare const AXIOS_INSTANCE: AxiosInstance;
declare const customInstance: <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig) => Promise<T>;
//#endregion
//#region generated/api/index.d.ts
type RegisterUserBody = {
  /** @pattern ^[a-zA-Z0-9_-]{3,30}$ */username: string; /** @maxLength 255 */
  email: string;
  /**
   * @minLength 8
   * @maxLength 128
   */
  password: string;
};
type RegisterUser400Error = typeof RegisterUser400Error[keyof typeof RegisterUser400Error];
declare const RegisterUser400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type RegisterUser400FieldsItem = {
  field: string;
  message: string;
};
type RegisterUser400 = {
  error: RegisterUser400Error;
  message: string;
  fields: RegisterUser400FieldsItem[];
};
type RegisterUser409 = {
  error: string;
  message: string;
} & ({
  error?: 'EMAIL_TAKEN' | 'USERNAME_TAKEN';
  message?: unknown;
});
type RegisterUser429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type RegisterUser500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type LoginUserBody = {
  /** @maxLength 255 */email: string;
  /**
   * @minLength 8
   * @maxLength 128
   */
  password: string;
  rememberMe: boolean;
};
type LoginUser200 = {
  userId?: string;
  accessToken?: string;
};
type LoginUser400Error = typeof LoginUser400Error[keyof typeof LoginUser400Error];
declare const LoginUser400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type LoginUser400FieldsItem = {
  field: string;
  message: string;
};
type LoginUser400 = {
  error: LoginUser400Error;
  message: string;
  fields: LoginUser400FieldsItem[];
};
type LoginUser401 = {
  error: string;
  message: string;
} & {
  error?: 'INCORRECT_CREDENTIALS';
  message?: unknown;
};
type LoginUser403 = {
  error: string;
  message: string;
} & {
  error?: 'EMAIL_NOT_VERIFIED';
  message?: unknown;
};
type LoginUser429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type LoginUser500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type LogoutUser400Error = typeof LogoutUser400Error[keyof typeof LogoutUser400Error];
declare const LogoutUser400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type LogoutUser400FieldsItem = {
  field: string;
  message: string;
};
type LogoutUser400 = {
  error: LogoutUser400Error;
  message: string;
  fields: LogoutUser400FieldsItem[];
};
type LogoutUser401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type LogoutUser429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type LogoutUser500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type RefreshUserToken200 = {
  accessToken: string;
};
type RefreshUserToken400Error = typeof RefreshUserToken400Error[keyof typeof RefreshUserToken400Error];
declare const RefreshUserToken400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type RefreshUserToken400FieldsItem = {
  field: string;
  message: string;
};
type RefreshUserToken400 = {
  error: RefreshUserToken400Error;
  message: string;
  fields: RefreshUserToken400FieldsItem[];
};
type RefreshUserToken401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type RefreshUserToken429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type RefreshUserToken500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type SendPasswordResetEmailBody = {
  /** @maxLength 255 */email: string;
};
type SendPasswordResetEmail400Error = typeof SendPasswordResetEmail400Error[keyof typeof SendPasswordResetEmail400Error];
declare const SendPasswordResetEmail400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type SendPasswordResetEmail400FieldsItem = {
  field: string;
  message: string;
};
type SendPasswordResetEmail400 = {
  error: SendPasswordResetEmail400Error;
  message: string;
  fields: SendPasswordResetEmail400FieldsItem[];
};
type SendPasswordResetEmail401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type SendPasswordResetEmail429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type SendPasswordResetEmail500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type ResetUserPasswordBody = {
  token: string;
  /**
   * @minLength 8
   * @maxLength 128
   */
  newPassword: string;
};
type ResetUserPassword400Error = typeof ResetUserPassword400Error[keyof typeof ResetUserPassword400Error];
declare const ResetUserPassword400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type ResetUserPassword400FieldsItem = {
  field: string;
  message: string;
};
type ResetUserPassword400 = {
  error: ResetUserPassword400Error;
  message: string;
  fields: ResetUserPassword400FieldsItem[];
};
type ResetUserPassword401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type ResetUserPassword429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type ResetUserPassword500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type ChangeUserPasswordBody = {
  /**
   * @minLength 8
   * @maxLength 128
   */
  oldPassword: string;
  /**
   * @minLength 8
   * @maxLength 128
   */
  newPassword: string;
};
type ChangeUserPassword400Error = typeof ChangeUserPassword400Error[keyof typeof ChangeUserPassword400Error];
declare const ChangeUserPassword400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type ChangeUserPassword400FieldsItem = {
  field: string;
  message: string;
};
type ChangeUserPassword400 = {
  error: ChangeUserPassword400Error;
  message: string;
  fields: ChangeUserPassword400FieldsItem[];
};
type ChangeUserPassword401 = {
  error: string;
  message: string;
} & ({
  error?: 'UNAUTHORIZED' | 'INCORRECT_PASSWORD';
});
type ChangeUserPassword429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type ChangeUserPassword500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type VerifyUserEmailBody = {
  token: string;
};
type VerifyUserEmail400Error = typeof VerifyUserEmail400Error[keyof typeof VerifyUserEmail400Error];
declare const VerifyUserEmail400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type VerifyUserEmail400FieldsItem = {
  field: string;
  message: string;
};
type VerifyUserEmail400 = {
  error: VerifyUserEmail400Error;
  message: string;
  fields: VerifyUserEmail400FieldsItem[];
};
type VerifyUserEmail401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type VerifyUserEmail429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type VerifyUserEmail500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type ResendVerificationEmailBody = {
  /** @maxLength 255 */email: string;
};
type ResendVerificationEmail400Error = typeof ResendVerificationEmail400Error[keyof typeof ResendVerificationEmail400Error];
declare const ResendVerificationEmail400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type ResendVerificationEmail400FieldsItem = {
  field: string;
  message: string;
};
type ResendVerificationEmail400 = {
  error: ResendVerificationEmail400Error;
  message: string;
  fields: ResendVerificationEmail400FieldsItem[];
};
type ResendVerificationEmail429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type ResendVerificationEmail500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type GetUser200 = {
  userId: string; /** @pattern ^[a-zA-Z0-9_-]{3,30}$ */
  username: string; /** @maxLength 255 */
  email: string;
};
type GetUser401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type GetUser429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type GetUser500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type ListBootcampsParams = {
  /**
   * @maxLength 255
   */
  query?: string;
  /**
   * @maxLength 255
   */
  professionRole?: string;
  page?: number;
  limit?: number;
};
type ListBootcamps200Item = {
  id: string; /** @maxLength 255 */
  professionRole: string;
  thumbnailUrl: string; /** @maxLength 255 */
  name: string; /** @maxLength 500 */
  redirectUrl: string; /** @maxLength 255 */
  publisher: string;
  startDate: string;
  createdAt: string;
};
type ListBootcamps400Error = typeof ListBootcamps400Error[keyof typeof ListBootcamps400Error];
declare const ListBootcamps400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type ListBootcamps400FieldsItem = {
  field: string;
  message: string;
};
type ListBootcamps400 = {
  error: ListBootcamps400Error;
  message: string;
  fields: ListBootcamps400FieldsItem[];
};
type ListBootcamps401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type ListBootcamps429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type ListBootcamps500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type GetBootcampsFeedParams = {
  page?: number;
  limit?: number;
};
type GetBootcampsFeed200Item = {
  id: string; /** @maxLength 255 */
  professionRole: string;
  thumbnailUrl: string; /** @maxLength 255 */
  name: string; /** @maxLength 500 */
  redirectUrl: string; /** @maxLength 255 */
  publisher: string;
  startDate: string;
  createdAt: string;
};
type GetBootcampsFeed400Error = typeof GetBootcampsFeed400Error[keyof typeof GetBootcampsFeed400Error];
declare const GetBootcampsFeed400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type GetBootcampsFeed400FieldsItem = {
  field: string;
  message: string;
};
type GetBootcampsFeed400 = {
  error: GetBootcampsFeed400Error;
  message: string;
  fields: GetBootcampsFeed400FieldsItem[];
};
type GetBootcampsFeed401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type GetBootcampsFeed429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type GetBootcampsFeed500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type ListCertificationsParams = {
  /**
   * @maxLength 255
   */
  query?: string;
  /**
   * @maxLength 255
   */
  professionRole?: string;
  page?: number;
  limit?: number;
};
type ListCertifications200Item = {
  id: string; /** @maxLength 255 */
  professionRole: string;
  thumbnailUrl: string; /** @maxLength 255 */
  name: string; /** @maxLength 500 */
  redirectUrl: string; /** @maxLength 255 */
  publisher: string;
  createdAt: string;
};
type ListCertifications400Error = typeof ListCertifications400Error[keyof typeof ListCertifications400Error];
declare const ListCertifications400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type ListCertifications400FieldsItem = {
  field: string;
  message: string;
};
type ListCertifications400 = {
  error: ListCertifications400Error;
  message: string;
  fields: ListCertifications400FieldsItem[];
};
type ListCertifications401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type ListCertifications429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type ListCertifications500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type GetCertificationsFeedParams = {
  page?: number;
  limit?: number;
};
type GetCertificationsFeed200Item = {
  id: string; /** @maxLength 255 */
  professionRole: string;
  thumbnailUrl: string; /** @maxLength 255 */
  name: string; /** @maxLength 500 */
  redirectUrl: string; /** @maxLength 255 */
  publisher: string;
  createdAt: string;
};
type GetCertificationsFeed400Error = typeof GetCertificationsFeed400Error[keyof typeof GetCertificationsFeed400Error];
declare const GetCertificationsFeed400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type GetCertificationsFeed400FieldsItem = {
  field: string;
  message: string;
};
type GetCertificationsFeed400 = {
  error: GetCertificationsFeed400Error;
  message: string;
  fields: GetCertificationsFeed400FieldsItem[];
};
type GetCertificationsFeed401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type GetCertificationsFeed429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type GetCertificationsFeed500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type ListCommunitiesParams = {
  /**
   * @maxLength 255
   */
  query?: string;
  page?: number;
  limit?: number;
};
type ListCommunities200Item = {
  id: string; /** @maxLength 255 */
  name: string;
  totalMembers: number;
  avatarFileId: string; /** @maxLength 2000 */
  description: string;
  createdAt: string;
};
type ListCommunities400Error = typeof ListCommunities400Error[keyof typeof ListCommunities400Error];
declare const ListCommunities400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type ListCommunities400FieldsItem = {
  field: string;
  message: string;
};
type ListCommunities400 = {
  error: ListCommunities400Error;
  message: string;
  fields: ListCommunities400FieldsItem[];
};
type ListCommunities401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type ListCommunities429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type ListCommunities500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type JoinCommunityBody = {
  communityId: string;
};
type JoinCommunity400Error = typeof JoinCommunity400Error[keyof typeof JoinCommunity400Error];
declare const JoinCommunity400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type JoinCommunity400FieldsItem = {
  field: string;
  message: string;
};
type JoinCommunity400 = {
  error: JoinCommunity400Error;
  message: string;
  fields: JoinCommunity400FieldsItem[];
};
type JoinCommunity401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type JoinCommunity429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type JoinCommunity500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type LeaveCommunityBody = {
  communityId: string;
};
type LeaveCommunity400Error = typeof LeaveCommunity400Error[keyof typeof LeaveCommunity400Error];
declare const LeaveCommunity400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type LeaveCommunity400FieldsItem = {
  field: string;
  message: string;
};
type LeaveCommunity400 = {
  error: LeaveCommunity400Error;
  message: string;
  fields: LeaveCommunity400FieldsItem[];
};
type LeaveCommunity401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type LeaveCommunity429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type LeaveCommunity500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type GetCommunitiesFeedParams = {
  page?: number;
  limit?: number;
};
type GetCommunitiesFeed200Item = {
  id: string; /** @maxLength 255 */
  name: string;
  totalMembers: number;
  avatarFileId: string; /** @maxLength 2000 */
  description: string;
  createdAt: string;
};
type GetCommunitiesFeed400Error = typeof GetCommunitiesFeed400Error[keyof typeof GetCommunitiesFeed400Error];
declare const GetCommunitiesFeed400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type GetCommunitiesFeed400FieldsItem = {
  field: string;
  message: string;
};
type GetCommunitiesFeed400 = {
  error: GetCommunitiesFeed400Error;
  message: string;
  fields: GetCommunitiesFeed400FieldsItem[];
};
type GetCommunitiesFeed401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type GetCommunitiesFeed429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type GetCommunitiesFeed500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type CreatePostBody = unknown & {
  communityId?: string; /** @maxLength 2000 */
  content?: string;
};
type CreatePost201 = {
  postId?: string;
  createdAt: string;
};
type CreatePost400Error = typeof CreatePost400Error[keyof typeof CreatePost400Error];
declare const CreatePost400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type CreatePost400FieldsItem = {
  field: string;
  message: string;
};
type CreatePost400 = {
  error: CreatePost400Error;
  message: string;
  fields: CreatePost400FieldsItem[];
};
type CreatePost401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type CreatePost429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type CreatePost500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type GetPostsFeedParams = {
  sharedPostId?: string;
};
type GetPostsFeed200Item = {
  communityId?: string; /** @maxLength 2000 */
  content?: string;
} & {
  id: string;
  userId: string;
  totalLikes: number;
  createdAt: string;
} & Required<Pick<{
  communityId?: string; /** @maxLength 2000 */
  content?: string;
} & {
  id: string;
  userId: string;
  totalLikes: number;
  createdAt: string;
}, 'communityId' | 'content'>>;
type GetPostsFeed400Error = typeof GetPostsFeed400Error[keyof typeof GetPostsFeed400Error];
declare const GetPostsFeed400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type GetPostsFeed400FieldsItem = {
  field: string;
  message: string;
};
type GetPostsFeed400 = {
  error: GetPostsFeed400Error;
  message: string;
  fields: GetPostsFeed400FieldsItem[];
};
type GetPostsFeed401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type GetPostsFeed429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type GetPostsFeed500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type LikePost400Error = typeof LikePost400Error[keyof typeof LikePost400Error];
declare const LikePost400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type LikePost400FieldsItem = {
  field: string;
  message: string;
};
type LikePost400 = {
  error: LikePost400Error;
  message: string;
  fields: LikePost400FieldsItem[];
};
type LikePost401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type LikePost404 = {
  error: string;
  message: string;
} & {
  error?: 'NOT_FOUND';
  message?: unknown;
};
type LikePost409 = {
  error: string;
  message: string;
} & {
  error?: 'POST_ALREADY_LIKED';
  message?: unknown;
};
type LikePost429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type LikePost500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type DeletePostLike400Error = typeof DeletePostLike400Error[keyof typeof DeletePostLike400Error];
declare const DeletePostLike400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type DeletePostLike400FieldsItem = {
  field: string;
  message: string;
};
type DeletePostLike400 = {
  error: DeletePostLike400Error;
  message: string;
  fields: DeletePostLike400FieldsItem[];
};
type DeletePostLike401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type DeletePostLike404 = {
  error: string;
  message: string;
} & {
  error?: 'NOT_FOUND';
  message?: unknown;
};
type DeletePostLike429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type DeletePostLike500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type ListComments200Item = {
  id: string;
  userId: string;
  postId: string;
  parentId?: string; /** @maxLength 2000 */
  content: string;
  createdAt: string;
};
type ListComments400Error = typeof ListComments400Error[keyof typeof ListComments400Error];
declare const ListComments400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type ListComments400FieldsItem = {
  field: string;
  message: string;
};
type ListComments400 = {
  error: ListComments400Error;
  message: string;
  fields: ListComments400FieldsItem[];
};
type ListComments401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type ListComments404 = {
  error: string;
  message: string;
} & {
  error?: 'NOT_FOUND';
  message?: unknown;
};
type ListComments429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type ListComments500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type CreateCommentBody = {
  parentId?: string; /** @maxLength 2000 */
  content: string;
};
type CreateComment201 = {
  commentId?: string;
  createdAt: string;
};
type CreateComment400Error = typeof CreateComment400Error[keyof typeof CreateComment400Error];
declare const CreateComment400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type CreateComment400FieldsItem = {
  field: string;
  message: string;
};
type CreateComment400 = {
  error: CreateComment400Error;
  message: string;
  fields: CreateComment400FieldsItem[];
};
type CreateComment401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type CreateComment404 = {
  error: string;
  message: string;
} & {
  error?: 'NOT_FOUND';
  message?: unknown;
};
type CreateComment429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type CreateComment500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type DeleteComment400Error = typeof DeleteComment400Error[keyof typeof DeleteComment400Error];
declare const DeleteComment400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type DeleteComment400FieldsItem = {
  field: string;
  message: string;
};
type DeleteComment400 = {
  error: DeleteComment400Error;
  message: string;
  fields: DeleteComment400FieldsItem[];
};
type DeleteComment401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type DeleteComment404 = {
  error: string;
  message: string;
} & {
  error?: 'NOT_FOUND';
  message?: unknown;
};
type DeleteComment429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type DeleteComment500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type GetFile400Error = typeof GetFile400Error[keyof typeof GetFile400Error];
declare const GetFile400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type GetFile400FieldsItem = {
  field: string;
  message: string;
};
type GetFile400 = {
  error: GetFile400Error;
  message: string;
  fields: GetFile400FieldsItem[];
};
type GetFile401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type GetFile404 = {
  error: string;
  message: string;
} & {
  error?: 'NOT_FOUND';
  message?: unknown;
};
type GetFile429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type GetFile500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type UploadFileBody = {
  file: Blob;
};
type UploadFile201 = {
  fileId: string;
};
type UploadFile401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type UploadFile413 = {
  error: string;
  message: string;
} & {
  error?: 'PAYLOAD_TOO_LARGE';
  message?: unknown;
};
type UploadFile429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type UploadFile500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type UploadFile507 = {
  error: string;
  message: string;
} & {
  error?: 'INSUFFICIENT_STORAGE';
  message?: unknown;
};
type AiGenerateCvBodySection = typeof AiGenerateCvBodySection[keyof typeof AiGenerateCvBodySection];
declare const AiGenerateCvBodySection: {
  readonly PROFILE: "PROFILE";
  readonly WORK_EXPERIENCE_DESCRIPTION: "WORK_EXPERIENCE_DESCRIPTION";
  readonly ORGANIZATION_DESCRIPTION: "ORGANIZATION_DESCRIPTION";
  readonly COURSE_DESCRIPTION: "COURSE_DESCRIPTION";
  readonly EDUCATION_DESCRIPTION: "EDUCATION_DESCRIPTION";
};
type AiGenerateCvBody = {
  /** @maxLength 2000 */input: string;
  section: AiGenerateCvBodySection;
};
type AiGenerateCv400Error = typeof AiGenerateCv400Error[keyof typeof AiGenerateCv400Error];
declare const AiGenerateCv400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type AiGenerateCv400FieldsItem = {
  field: string;
  message: string;
};
type AiGenerateCv400 = {
  error: AiGenerateCv400Error;
  message: string;
  fields: AiGenerateCv400FieldsItem[];
};
type AiGenerateCv401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type AiGenerateCv429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type AiGenerateCv500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type ListUsersParams = {
  /**
   * @maxLength 255
   */
  query?: string;
  page?: number;
  limit?: number;
};
type ListUsers200Item = {
  userId: string; /** @pattern ^[a-zA-Z0-9_-]{3,30}$ */
  username: string; /** @maxLength 255 */
  name: string;
  avatarFileId: string; /** @maxLength 255 */
  professionRole: string;
};
type ListUsers400Error = typeof ListUsers400Error[keyof typeof ListUsers400Error];
declare const ListUsers400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type ListUsers400FieldsItem = {
  field: string;
  message: string;
};
type ListUsers400 = {
  error: ListUsers400Error;
  message: string;
  fields: ListUsers400FieldsItem[];
};
type ListUsers401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type ListUsers429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type ListUsers500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type ListUserCommunities400Error = typeof ListUserCommunities400Error[keyof typeof ListUserCommunities400Error];
declare const ListUserCommunities400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type ListUserCommunities400FieldsItem = {
  field: string;
  message: string;
};
type ListUserCommunities400 = {
  error: ListUserCommunities400Error;
  message: string;
  fields: ListUserCommunities400FieldsItem[];
};
type ListUserCommunities401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type ListUserCommunities429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type ListUserCommunities500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type GetUserProfto200 = ({
  avatarFileId?: string | unknown; /** @maxLength 255 */
  name?: string | unknown; /** @maxLength 255 */
  professionRole?: string | unknown; /** @maxLength 255 */
  lastEducation?: string | unknown; /** @maxLength 255 */
  email?: string | unknown; /** @maxLength 2000 */
  summary?: string | unknown;
  cvFileId?: string | unknown;
  certificates?: {
    imageFileId?: string; /** @maxLength 255 */
    name?: string;
    publishDate?: string; /** @maxLength 255 */
    publisher?: string;
  }[];
  experiences?: {
    /** @maxLength 255 */name?: string;
    startYear?: number;
    endYear?: number; /** @maxLength 2000 */
    description?: string;
  }[];
  projects?: {
    /** @maxLength 255 */name?: string; /** @maxLength 255 */
    professionRole?: string; /** @maxLength 255 */
    imageFileId?: string;
    date?: string; /** @maxLength 2000 */
    description?: string;
  }[];
  links?: {
    /** @maxLength 255 */name?: string; /** @maxLength 500 */
    url?: string;
  }[];
}) & {
  userId: string;
  updatedAt: string;
} & Required<Pick<({
  avatarFileId?: string | unknown; /** @maxLength 255 */
  name?: string | unknown; /** @maxLength 255 */
  professionRole?: string | unknown; /** @maxLength 255 */
  lastEducation?: string | unknown; /** @maxLength 255 */
  email?: string | unknown; /** @maxLength 2000 */
  summary?: string | unknown;
  cvFileId?: string | unknown;
  certificates?: {
    imageFileId?: string; /** @maxLength 255 */
    name?: string;
    publishDate?: string; /** @maxLength 255 */
    publisher?: string;
  }[];
  experiences?: {
    /** @maxLength 255 */name?: string;
    startYear?: number;
    endYear?: number; /** @maxLength 2000 */
    description?: string;
  }[];
  projects?: {
    /** @maxLength 255 */name?: string; /** @maxLength 255 */
    professionRole?: string; /** @maxLength 255 */
    imageFileId?: string;
    date?: string; /** @maxLength 2000 */
    description?: string;
  }[];
  links?: {
    /** @maxLength 255 */name?: string; /** @maxLength 500 */
    url?: string;
  }[];
}) & {
  userId: string;
  updatedAt: string;
}, 'avatarFileId' | 'name' | 'professionRole' | 'lastEducation' | 'email' | 'summary' | 'cvField' | 'certificates' | 'experiences' | 'projects' | 'links'>>;
type GetUserProfto400Error = typeof GetUserProfto400Error[keyof typeof GetUserProfto400Error];
declare const GetUserProfto400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type GetUserProfto400FieldsItem = {
  field: string;
  message: string;
};
type GetUserProfto400 = {
  error: GetUserProfto400Error;
  message: string;
  fields: GetUserProfto400FieldsItem[];
};
type GetUserProfto401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type GetUserProfto404 = {
  error: string;
  message: string;
} & {
  error?: 'NOT_FOUND';
  message?: unknown;
};
type GetUserProfto429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type GetUserProfto500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type UpdateUserProftoBodyCertificatesItem = {
  imageFileId?: string; /** @maxLength 255 */
  name?: string;
  publishDate?: string; /** @maxLength 255 */
  publisher?: string;
};
type UpdateUserProftoBodyExperiencesItem = {
  /** @maxLength 255 */name?: string;
  startYear?: number;
  endYear?: number; /** @maxLength 2000 */
  description?: string;
};
type UpdateUserProftoBodyProjectsItem = {
  /** @maxLength 255 */name?: string; /** @maxLength 255 */
  professionRole?: string; /** @maxLength 255 */
  imageFileId?: string;
  date?: string; /** @maxLength 2000 */
  description?: string;
};
type UpdateUserProftoBodyLinksItem = {
  /** @maxLength 255 */name?: string; /** @maxLength 500 */
  url?: string;
};
type UpdateUserProftoBody = {
  avatarFileId?: string | unknown; /** @maxLength 255 */
  name?: string | unknown; /** @maxLength 255 */
  professionRole?: string | unknown; /** @maxLength 255 */
  lastEducation?: string | unknown; /** @maxLength 255 */
  email?: string | unknown; /** @maxLength 2000 */
  summary?: string | unknown;
  cvFileId?: string | unknown;
  certificates?: UpdateUserProftoBodyCertificatesItem[];
  experiences?: UpdateUserProftoBodyExperiencesItem[];
  projects?: UpdateUserProftoBodyProjectsItem[];
  links?: UpdateUserProftoBodyLinksItem[];
};
type UpdateUserProfto400Error = typeof UpdateUserProfto400Error[keyof typeof UpdateUserProfto400Error];
declare const UpdateUserProfto400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type UpdateUserProfto400FieldsItem = {
  field: string;
  message: string;
};
type UpdateUserProfto400 = {
  error: UpdateUserProfto400Error;
  message: string;
  fields: UpdateUserProfto400FieldsItem[];
};
type UpdateUserProfto401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type UpdateUserProfto429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type UpdateUserProfto500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type GetCv200 = ({
  personalInformation?: {
    /** @maxLength 255 */firstName?: string; /** @maxLength 255 */
    lastName?: string; /** @maxLength 2000 */
    profile?: string; /** @maxLength 500 */
    websiteUrl?: string; /** @pattern ^\+[1-9]\d{1,15}$ */
    phone?: string;
  };
  skills?: {
    /** @maxLength 255 */name: string;
    score: number;
  }[];
  educations?: ({
    educationLevel: 'SD' | 'SMP' | 'MTS' | 'SMA' | 'MA' | 'SMK' | 'Profesi' | 'D3' | 'D4' | 'S1' | 'S2' | 'S3'; /** @maxLength 255 */
    institution: string; /** @maxLength 255 */
    city?: string; /** @maxLength 255 */
    studyProgram?: string;
    startYear?: number;
    endYear?: number;
    score?: number;
    maxScale?: number; /** @maxLength 2000 */
    description?: string;
  })[];
  workExperiences?: ({
    /** @maxLength 255 */position: string; /** @maxLength 255 */
    companyName: string;
    employmentStatus?: 'Pegawai Tetap' | 'Pegawai Kontrak' | 'Pegawai Magang' | 'Freelance' | 'Paruh Waktu'; /** @maxLength 255 */
    city?: string;
    startYear?: number;
    endYear?: number; /** @maxLength 2000 */
    description?: string;
  })[];
  courses?: {
    /** @maxLength 255 */name: string; /** @maxLength 255 */
    organizer: string; /** @maxLength 500 */
    url?: string; /** @maxLength 2000 */
    description?: string; /** @minLength 1900 */
    startYear?: number; /** @minLength 1900 */
    endYear?: number; /** @maxLength 255 */
    location?: string;
  }[];
  organizations?: {
    /** @maxLength 255 */position: string; /** @maxLength 255 */
    organizationName: string; /** @maxLength 2000 */
    description?: string; /** @maxLength 255 */
    city?: string;
    startYear?: number;
    endYear?: number;
  }[];
  certifications?: {
    /** @maxLength 255 */name: string; /** @maxLength 255 */
    publisher: string;
    publishDate?: string; /** @maxLength 500 */
    verificationUrl?: string; /** @maxLength 255 */
    certificateNumber?: string;
  }[];
}) & {
  userId: string;
  updatedAt: string;
} & Required<Pick<({
  personalInformation?: {
    /** @maxLength 255 */firstName?: string; /** @maxLength 255 */
    lastName?: string; /** @maxLength 2000 */
    profile?: string; /** @maxLength 500 */
    websiteUrl?: string; /** @pattern ^\+[1-9]\d{1,15}$ */
    phone?: string;
  };
  skills?: {
    /** @maxLength 255 */name: string;
    score: number;
  }[];
  educations?: ({
    educationLevel: 'SD' | 'SMP' | 'MTS' | 'SMA' | 'MA' | 'SMK' | 'Profesi' | 'D3' | 'D4' | 'S1' | 'S2' | 'S3'; /** @maxLength 255 */
    institution: string; /** @maxLength 255 */
    city?: string; /** @maxLength 255 */
    studyProgram?: string;
    startYear?: number;
    endYear?: number;
    score?: number;
    maxScale?: number; /** @maxLength 2000 */
    description?: string;
  })[];
  workExperiences?: ({
    /** @maxLength 255 */position: string; /** @maxLength 255 */
    companyName: string;
    employmentStatus?: 'Pegawai Tetap' | 'Pegawai Kontrak' | 'Pegawai Magang' | 'Freelance' | 'Paruh Waktu'; /** @maxLength 255 */
    city?: string;
    startYear?: number;
    endYear?: number; /** @maxLength 2000 */
    description?: string;
  })[];
  courses?: {
    /** @maxLength 255 */name: string; /** @maxLength 255 */
    organizer: string; /** @maxLength 500 */
    url?: string; /** @maxLength 2000 */
    description?: string; /** @minLength 1900 */
    startYear?: number; /** @minLength 1900 */
    endYear?: number; /** @maxLength 255 */
    location?: string;
  }[];
  organizations?: {
    /** @maxLength 255 */position: string; /** @maxLength 255 */
    organizationName: string; /** @maxLength 2000 */
    description?: string; /** @maxLength 255 */
    city?: string;
    startYear?: number;
    endYear?: number;
  }[];
  certifications?: {
    /** @maxLength 255 */name: string; /** @maxLength 255 */
    publisher: string;
    publishDate?: string; /** @maxLength 500 */
    verificationUrl?: string; /** @maxLength 255 */
    certificateNumber?: string;
  }[];
}) & {
  userId: string;
  updatedAt: string;
}, 'personalInformation' | 'skills' | 'educations' | 'workExperiences' | 'courses' | 'organizations' | 'certifications'>>;
type GetCv400Error = typeof GetCv400Error[keyof typeof GetCv400Error];
declare const GetCv400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type GetCv400FieldsItem = {
  field: string;
  message: string;
};
type GetCv400 = {
  error: GetCv400Error;
  message: string;
  fields: GetCv400FieldsItem[];
};
type GetCv401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type GetCv429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type GetCv500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type UpdateCvBodyPersonalInformation = {
  /** @maxLength 255 */firstName?: string; /** @maxLength 255 */
  lastName?: string; /** @maxLength 2000 */
  profile?: string; /** @maxLength 500 */
  websiteUrl?: string; /** @pattern ^\+[1-9]\d{1,15}$ */
  phone?: string;
};
type UpdateCvBodySkillsItem = {
  /** @maxLength 255 */name: string;
  score: number;
};
type UpdateCvBodyEducationsItemEducationLevel = typeof UpdateCvBodyEducationsItemEducationLevel[keyof typeof UpdateCvBodyEducationsItemEducationLevel];
declare const UpdateCvBodyEducationsItemEducationLevel: {
  readonly SD: "SD";
  readonly SMP: "SMP";
  readonly MTS: "MTS";
  readonly SMA: "SMA";
  readonly MA: "MA";
  readonly SMK: "SMK";
  readonly Profesi: "Profesi";
  readonly D3: "D3";
  readonly D4: "D4";
  readonly S1: "S1";
  readonly S2: "S2";
  readonly S3: "S3";
};
type UpdateCvBodyEducationsItem = {
  educationLevel: UpdateCvBodyEducationsItemEducationLevel; /** @maxLength 255 */
  institution: string; /** @maxLength 255 */
  city?: string; /** @maxLength 255 */
  studyProgram?: string;
  startYear?: number;
  endYear?: number;
  score?: number;
  maxScale?: number; /** @maxLength 2000 */
  description?: string;
};
type UpdateCvBodyWorkExperiencesItemEmploymentStatus = typeof UpdateCvBodyWorkExperiencesItemEmploymentStatus[keyof typeof UpdateCvBodyWorkExperiencesItemEmploymentStatus];
declare const UpdateCvBodyWorkExperiencesItemEmploymentStatus: {
  readonly Pegawai_Tetap: "Pegawai Tetap";
  readonly Pegawai_Kontrak: "Pegawai Kontrak";
  readonly Pegawai_Magang: "Pegawai Magang";
  readonly Freelance: "Freelance";
  readonly Paruh_Waktu: "Paruh Waktu";
};
type UpdateCvBodyWorkExperiencesItem = {
  /** @maxLength 255 */position: string; /** @maxLength 255 */
  companyName: string;
  employmentStatus?: UpdateCvBodyWorkExperiencesItemEmploymentStatus; /** @maxLength 255 */
  city?: string;
  startYear?: number;
  endYear?: number; /** @maxLength 2000 */
  description?: string;
};
type UpdateCvBodyCoursesItem = {
  /** @maxLength 255 */name: string; /** @maxLength 255 */
  organizer: string; /** @maxLength 500 */
  url?: string; /** @maxLength 2000 */
  description?: string; /** @minLength 1900 */
  startYear?: number; /** @minLength 1900 */
  endYear?: number; /** @maxLength 255 */
  location?: string;
};
type UpdateCvBodyOrganizationsItem = {
  /** @maxLength 255 */position: string; /** @maxLength 255 */
  organizationName: string; /** @maxLength 2000 */
  description?: string; /** @maxLength 255 */
  city?: string;
  startYear?: number;
  endYear?: number;
};
type UpdateCvBodyCertificationsItem = {
  /** @maxLength 255 */name: string; /** @maxLength 255 */
  publisher: string;
  publishDate?: string; /** @maxLength 500 */
  verificationUrl?: string; /** @maxLength 255 */
  certificateNumber?: string;
};
type UpdateCvBody = {
  personalInformation?: UpdateCvBodyPersonalInformation;
  skills?: UpdateCvBodySkillsItem[];
  educations?: UpdateCvBodyEducationsItem[];
  workExperiences?: UpdateCvBodyWorkExperiencesItem[];
  courses?: UpdateCvBodyCoursesItem[];
  organizations?: UpdateCvBodyOrganizationsItem[];
  certifications?: UpdateCvBodyCertificationsItem[];
};
type UpdateCv400Error = typeof UpdateCv400Error[keyof typeof UpdateCv400Error];
declare const UpdateCv400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type UpdateCv400FieldsItem = {
  field: string;
  message: string;
};
type UpdateCv400 = {
  error: UpdateCv400Error;
  message: string;
  fields: UpdateCv400FieldsItem[];
};
type UpdateCv401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type UpdateCv429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type UpdateCv500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type DownloadCvParams = {
  preview: boolean;
};
type DownloadCv400Error = typeof DownloadCv400Error[keyof typeof DownloadCv400Error];
declare const DownloadCv400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type DownloadCv400FieldsItem = {
  field: string;
  message: string;
};
type DownloadCv400 = {
  error: DownloadCv400Error;
  message: string;
  fields: DownloadCv400FieldsItem[];
};
type DownloadCv401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type DownloadCv404 = {
  error: string;
  message: string;
} & {
  error?: 'NOT_FOUND';
  message?: unknown;
};
type DownloadCv429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type DownloadCv500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type SaveCv400Error = typeof SaveCv400Error[keyof typeof SaveCv400Error];
declare const SaveCv400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type SaveCv400FieldsItem = {
  field: string;
  message: string;
};
type SaveCv400 = {
  error: SaveCv400Error;
  message: string;
  fields: SaveCv400FieldsItem[];
};
type SaveCv401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type SaveCv429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type SaveCv500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
* @summary [registerUser] Register a new user using email and password

*/
declare const registerUser: (registerUserBody: RegisterUserBody, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
/**
 * @summary [loginUser] Login using email and password

 */
declare const loginUser: (loginUserBody: LoginUserBody, options?: SecondParameter<typeof customInstance<LoginUser200>>) => Promise<LoginUser200>;
/**
 * @summary [logoutUser] Logout user

 */
declare const logoutUser: (options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
/**
 * @summary [refreshUserToken] Refresh token

 */
declare const refreshUserToken: (options?: SecondParameter<typeof customInstance<RefreshUserToken200>>) => Promise<RefreshUserToken200>;
/**
 * Send reset password token to the user's email address.
Previous token will be invalidated and a new one will be issued.

 * @summary [sendPasswordResetEmail] Request password reset token

 */
declare const sendPasswordResetEmail: (sendPasswordResetEmailBody: SendPasswordResetEmailBody, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
/**
 * @summary [resetUserPassword] Reset user password using token

 */
declare const resetUserPassword: (resetUserPasswordBody: ResetUserPasswordBody, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
/**
 * @summary [changeUserPassword] Change user password

 */
declare const changeUserPassword: (changeUserPasswordBody: ChangeUserPasswordBody, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
/**
 * @summary [verifyUserEmail] Verify user email address

 */
declare const verifyUserEmail: (verifyUserEmailBody: VerifyUserEmailBody, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
/**
 * Resend email verification token to the user's email address.
Previous token will be invalidated and a new one will be issued.

 * @summary [resendVerificationEmail] Resend email verification token

 */
declare const resendVerificationEmail: (resendVerificationEmailBody: ResendVerificationEmailBody, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
/**
 * @summary Redirect to Google OAuth consent screen
 */
declare const authOauthGoogle: (options?: SecondParameter<typeof customInstance<unknown>>) => Promise<unknown>;
/**
 * Called by Google after user consents. Not intended to be called directly.
 * @summary Handle Google OAuth callback
 */
declare const authOauthGoogleCallback: (options?: SecondParameter<typeof customInstance<unknown>>) => Promise<unknown>;
declare const getUser: (options?: SecondParameter<typeof customInstance<GetUser200>>) => Promise<GetUser200>;
declare const listBootcamps: (params?: ListBootcampsParams, options?: SecondParameter<typeof customInstance<ListBootcamps200Item[]>>) => Promise<ListBootcamps200Item[]>;
declare const getBootcampsFeed: (params?: GetBootcampsFeedParams, options?: SecondParameter<typeof customInstance<GetBootcampsFeed200Item[]>>) => Promise<GetBootcampsFeed200Item[]>;
declare const listCertifications: (params?: ListCertificationsParams, options?: SecondParameter<typeof customInstance<ListCertifications200Item[]>>) => Promise<ListCertifications200Item[]>;
declare const getCertificationsFeed: (params?: GetCertificationsFeedParams, options?: SecondParameter<typeof customInstance<GetCertificationsFeed200Item[]>>) => Promise<GetCertificationsFeed200Item[]>;
declare const listCommunities: (params?: ListCommunitiesParams, options?: SecondParameter<typeof customInstance<ListCommunities200Item[]>>) => Promise<ListCommunities200Item[]>;
declare const joinCommunity: (joinCommunityBody: JoinCommunityBody, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
declare const leaveCommunity: (leaveCommunityBody: LeaveCommunityBody, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
declare const getCommunitiesFeed: (params?: GetCommunitiesFeedParams, options?: SecondParameter<typeof customInstance<GetCommunitiesFeed200Item[]>>) => Promise<GetCommunitiesFeed200Item[]>;
declare const createPost: (createPostBody: CreatePostBody, options?: SecondParameter<typeof customInstance<CreatePost201>>) => Promise<CreatePost201>;
declare const getPostsFeed: (params?: GetPostsFeedParams, options?: SecondParameter<typeof customInstance<GetPostsFeed200Item[]>>) => Promise<GetPostsFeed200Item[]>;
declare const likePost: (postId: string, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
declare const deletePostLike: (postId: string, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
declare const listComments: (postId: string, options?: SecondParameter<typeof customInstance<ListComments200Item[]>>) => Promise<ListComments200Item[]>;
declare const createComment: (postId: string, createCommentBody: CreateCommentBody, options?: SecondParameter<typeof customInstance<CreateComment201>>) => Promise<CreateComment201>;
declare const deleteComment: (postId: string, commentId: string, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
declare const getFile: (fileId: string, options?: SecondParameter<typeof customInstance<Blob>>) => Promise<Blob>;
declare const uploadFile: (uploadFileBody: UploadFileBody, options?: SecondParameter<typeof customInstance<UploadFile201>>) => Promise<UploadFile201>;
declare const aiGenerateCv: (aiGenerateCvBody: AiGenerateCvBody, options?: SecondParameter<typeof customInstance<string>>) => Promise<string>;
declare const listUsers: (params?: ListUsersParams, options?: SecondParameter<typeof customInstance<ListUsers200Item[]>>) => Promise<ListUsers200Item[]>;
declare const listUserCommunities: (userId: string, options?: SecondParameter<typeof customInstance<string[]>>) => Promise<string[]>;
declare const getUserProfto: (username: string, options?: SecondParameter<typeof customInstance<GetUserProfto200>>) => Promise<GetUserProfto200>;
declare const updateUserProfto: (userId: string, updateUserProftoBody: UpdateUserProftoBody, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
declare const getCv: (userId: string, options?: SecondParameter<typeof customInstance<GetCv200>>) => Promise<GetCv200>;
declare const updateCv: (userId: string, updateCvBody: UpdateCvBody, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
declare const downloadCv: (userId: string, params: DownloadCvParams, options?: SecondParameter<typeof customInstance<Blob>>) => Promise<Blob>;
declare const saveCv: (userId: string, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
type RegisterUserResult = NonNullable<Awaited<ReturnType<typeof registerUser>>>;
type LoginUserResult = NonNullable<Awaited<ReturnType<typeof loginUser>>>;
type LogoutUserResult = NonNullable<Awaited<ReturnType<typeof logoutUser>>>;
type RefreshUserTokenResult = NonNullable<Awaited<ReturnType<typeof refreshUserToken>>>;
type SendPasswordResetEmailResult = NonNullable<Awaited<ReturnType<typeof sendPasswordResetEmail>>>;
type ResetUserPasswordResult = NonNullable<Awaited<ReturnType<typeof resetUserPassword>>>;
type ChangeUserPasswordResult = NonNullable<Awaited<ReturnType<typeof changeUserPassword>>>;
type VerifyUserEmailResult = NonNullable<Awaited<ReturnType<typeof verifyUserEmail>>>;
type ResendVerificationEmailResult = NonNullable<Awaited<ReturnType<typeof resendVerificationEmail>>>;
type AuthOauthGoogleResult = NonNullable<Awaited<ReturnType<typeof authOauthGoogle>>>;
type AuthOauthGoogleCallbackResult = NonNullable<Awaited<ReturnType<typeof authOauthGoogleCallback>>>;
type GetUserResult = NonNullable<Awaited<ReturnType<typeof getUser>>>;
type ListBootcampsResult = NonNullable<Awaited<ReturnType<typeof listBootcamps>>>;
type GetBootcampsFeedResult = NonNullable<Awaited<ReturnType<typeof getBootcampsFeed>>>;
type ListCertificationsResult = NonNullable<Awaited<ReturnType<typeof listCertifications>>>;
type GetCertificationsFeedResult = NonNullable<Awaited<ReturnType<typeof getCertificationsFeed>>>;
type ListCommunitiesResult = NonNullable<Awaited<ReturnType<typeof listCommunities>>>;
type JoinCommunityResult = NonNullable<Awaited<ReturnType<typeof joinCommunity>>>;
type LeaveCommunityResult = NonNullable<Awaited<ReturnType<typeof leaveCommunity>>>;
type GetCommunitiesFeedResult = NonNullable<Awaited<ReturnType<typeof getCommunitiesFeed>>>;
type CreatePostResult = NonNullable<Awaited<ReturnType<typeof createPost>>>;
type GetPostsFeedResult = NonNullable<Awaited<ReturnType<typeof getPostsFeed>>>;
type LikePostResult = NonNullable<Awaited<ReturnType<typeof likePost>>>;
type DeletePostLikeResult = NonNullable<Awaited<ReturnType<typeof deletePostLike>>>;
type ListCommentsResult = NonNullable<Awaited<ReturnType<typeof listComments>>>;
type CreateCommentResult = NonNullable<Awaited<ReturnType<typeof createComment>>>;
type DeleteCommentResult = NonNullable<Awaited<ReturnType<typeof deleteComment>>>;
type GetFileResult = NonNullable<Awaited<ReturnType<typeof getFile>>>;
type UploadFileResult = NonNullable<Awaited<ReturnType<typeof uploadFile>>>;
type AiGenerateCvResult = NonNullable<Awaited<ReturnType<typeof aiGenerateCv>>>;
type ListUsersResult = NonNullable<Awaited<ReturnType<typeof listUsers>>>;
type ListUserCommunitiesResult = NonNullable<Awaited<ReturnType<typeof listUserCommunities>>>;
type GetUserProftoResult = NonNullable<Awaited<ReturnType<typeof getUserProfto>>>;
type UpdateUserProftoResult = NonNullable<Awaited<ReturnType<typeof updateUserProfto>>>;
type GetCvResult = NonNullable<Awaited<ReturnType<typeof getCv>>>;
type UpdateCvResult = NonNullable<Awaited<ReturnType<typeof updateCv>>>;
type DownloadCvResult = NonNullable<Awaited<ReturnType<typeof downloadCv>>>;
type SaveCvResult = NonNullable<Awaited<ReturnType<typeof saveCv>>>;
//#endregion
export { AXIOS_INSTANCE, AiGenerateCv400, AiGenerateCv400Error, AiGenerateCv400FieldsItem, AiGenerateCv401, AiGenerateCv429, AiGenerateCv500, AiGenerateCvBody, AiGenerateCvBodySection, AiGenerateCvResult, AuthOauthGoogleCallbackResult, AuthOauthGoogleResult, ChangeUserPassword400, ChangeUserPassword400Error, ChangeUserPassword400FieldsItem, ChangeUserPassword401, ChangeUserPassword429, ChangeUserPassword500, ChangeUserPasswordBody, ChangeUserPasswordResult, CreateComment201, CreateComment400, CreateComment400Error, CreateComment400FieldsItem, CreateComment401, CreateComment404, CreateComment429, CreateComment500, CreateCommentBody, CreateCommentResult, CreatePost201, CreatePost400, CreatePost400Error, CreatePost400FieldsItem, CreatePost401, CreatePost429, CreatePost500, CreatePostBody, CreatePostResult, DeleteComment400, DeleteComment400Error, DeleteComment400FieldsItem, DeleteComment401, DeleteComment404, DeleteComment429, DeleteComment500, DeleteCommentResult, DeletePostLike400, DeletePostLike400Error, DeletePostLike400FieldsItem, DeletePostLike401, DeletePostLike404, DeletePostLike429, DeletePostLike500, DeletePostLikeResult, DownloadCv400, DownloadCv400Error, DownloadCv400FieldsItem, DownloadCv401, DownloadCv404, DownloadCv429, DownloadCv500, DownloadCvParams, DownloadCvResult, GetBootcampsFeed200Item, GetBootcampsFeed400, GetBootcampsFeed400Error, GetBootcampsFeed400FieldsItem, GetBootcampsFeed401, GetBootcampsFeed429, GetBootcampsFeed500, GetBootcampsFeedParams, GetBootcampsFeedResult, GetCertificationsFeed200Item, GetCertificationsFeed400, GetCertificationsFeed400Error, GetCertificationsFeed400FieldsItem, GetCertificationsFeed401, GetCertificationsFeed429, GetCertificationsFeed500, GetCertificationsFeedParams, GetCertificationsFeedResult, GetCommunitiesFeed200Item, GetCommunitiesFeed400, GetCommunitiesFeed400Error, GetCommunitiesFeed400FieldsItem, GetCommunitiesFeed401, GetCommunitiesFeed429, GetCommunitiesFeed500, GetCommunitiesFeedParams, GetCommunitiesFeedResult, GetCv200, GetCv400, GetCv400Error, GetCv400FieldsItem, GetCv401, GetCv429, GetCv500, GetCvResult, GetFile400, GetFile400Error, GetFile400FieldsItem, GetFile401, GetFile404, GetFile429, GetFile500, GetFileResult, GetPostsFeed200Item, GetPostsFeed400, GetPostsFeed400Error, GetPostsFeed400FieldsItem, GetPostsFeed401, GetPostsFeed429, GetPostsFeed500, GetPostsFeedParams, GetPostsFeedResult, GetUser200, GetUser401, GetUser429, GetUser500, GetUserProfto200, GetUserProfto400, GetUserProfto400Error, GetUserProfto400FieldsItem, GetUserProfto401, GetUserProfto404, GetUserProfto429, GetUserProfto500, GetUserProftoResult, GetUserResult, JoinCommunity400, JoinCommunity400Error, JoinCommunity400FieldsItem, JoinCommunity401, JoinCommunity429, JoinCommunity500, JoinCommunityBody, JoinCommunityResult, LeaveCommunity400, LeaveCommunity400Error, LeaveCommunity400FieldsItem, LeaveCommunity401, LeaveCommunity429, LeaveCommunity500, LeaveCommunityBody, LeaveCommunityResult, LikePost400, LikePost400Error, LikePost400FieldsItem, LikePost401, LikePost404, LikePost409, LikePost429, LikePost500, LikePostResult, ListBootcamps200Item, ListBootcamps400, ListBootcamps400Error, ListBootcamps400FieldsItem, ListBootcamps401, ListBootcamps429, ListBootcamps500, ListBootcampsParams, ListBootcampsResult, ListCertifications200Item, ListCertifications400, ListCertifications400Error, ListCertifications400FieldsItem, ListCertifications401, ListCertifications429, ListCertifications500, ListCertificationsParams, ListCertificationsResult, ListComments200Item, ListComments400, ListComments400Error, ListComments400FieldsItem, ListComments401, ListComments404, ListComments429, ListComments500, ListCommentsResult, ListCommunities200Item, ListCommunities400, ListCommunities400Error, ListCommunities400FieldsItem, ListCommunities401, ListCommunities429, ListCommunities500, ListCommunitiesParams, ListCommunitiesResult, ListUserCommunities400, ListUserCommunities400Error, ListUserCommunities400FieldsItem, ListUserCommunities401, ListUserCommunities429, ListUserCommunities500, ListUserCommunitiesResult, ListUsers200Item, ListUsers400, ListUsers400Error, ListUsers400FieldsItem, ListUsers401, ListUsers429, ListUsers500, ListUsersParams, ListUsersResult, LoginUser200, LoginUser400, LoginUser400Error, LoginUser400FieldsItem, LoginUser401, LoginUser403, LoginUser429, LoginUser500, LoginUserBody, LoginUserResult, LogoutUser400, LogoutUser400Error, LogoutUser400FieldsItem, LogoutUser401, LogoutUser429, LogoutUser500, LogoutUserResult, RefreshUserToken200, RefreshUserToken400, RefreshUserToken400Error, RefreshUserToken400FieldsItem, RefreshUserToken401, RefreshUserToken429, RefreshUserToken500, RefreshUserTokenResult, RegisterUser400, RegisterUser400Error, RegisterUser400FieldsItem, RegisterUser409, RegisterUser429, RegisterUser500, RegisterUserBody, RegisterUserResult, ResendVerificationEmail400, ResendVerificationEmail400Error, ResendVerificationEmail400FieldsItem, ResendVerificationEmail429, ResendVerificationEmail500, ResendVerificationEmailBody, ResendVerificationEmailResult, ResetUserPassword400, ResetUserPassword400Error, ResetUserPassword400FieldsItem, ResetUserPassword401, ResetUserPassword429, ResetUserPassword500, ResetUserPasswordBody, ResetUserPasswordResult, SaveCv400, SaveCv400Error, SaveCv400FieldsItem, SaveCv401, SaveCv429, SaveCv500, SaveCvResult, SendPasswordResetEmail400, SendPasswordResetEmail400Error, SendPasswordResetEmail400FieldsItem, SendPasswordResetEmail401, SendPasswordResetEmail429, SendPasswordResetEmail500, SendPasswordResetEmailBody, SendPasswordResetEmailResult, UpdateCv400, UpdateCv400Error, UpdateCv400FieldsItem, UpdateCv401, UpdateCv429, UpdateCv500, UpdateCvBody, UpdateCvBodyCertificationsItem, UpdateCvBodyCoursesItem, UpdateCvBodyEducationsItem, UpdateCvBodyEducationsItemEducationLevel, UpdateCvBodyOrganizationsItem, UpdateCvBodyPersonalInformation, UpdateCvBodySkillsItem, UpdateCvBodyWorkExperiencesItem, UpdateCvBodyWorkExperiencesItemEmploymentStatus, UpdateCvResult, UpdateUserProfto400, UpdateUserProfto400Error, UpdateUserProfto400FieldsItem, UpdateUserProfto401, UpdateUserProfto429, UpdateUserProfto500, UpdateUserProftoBody, UpdateUserProftoBodyCertificatesItem, UpdateUserProftoBodyExperiencesItem, UpdateUserProftoBodyLinksItem, UpdateUserProftoBodyProjectsItem, UpdateUserProftoResult, UploadFile201, UploadFile401, UploadFile413, UploadFile429, UploadFile500, UploadFile507, UploadFileBody, UploadFileResult, VerifyUserEmail400, VerifyUserEmail400Error, VerifyUserEmail400FieldsItem, VerifyUserEmail401, VerifyUserEmail429, VerifyUserEmail500, VerifyUserEmailBody, VerifyUserEmailResult, aiGenerateCv, authOauthGoogle, authOauthGoogleCallback, changeUserPassword, clearAccessToken, createComment, createPost, customInstance, deleteComment, deletePostLike, downloadCv, getBootcampsFeed, getCertificationsFeed, getCommunitiesFeed, getCv, getFile, getPostsFeed, getUser, getUserProfto, joinCommunity, leaveCommunity, likePost, listBootcamps, listCertifications, listComments, listCommunities, listUserCommunities, listUsers, loginUser, logoutUser, refreshUserToken, registerUser, resendVerificationEmail, resetUserPassword, saveCv, sendPasswordResetEmail, setAccessToken, updateCv, updateUserProfto, uploadFile, verifyUserEmail };