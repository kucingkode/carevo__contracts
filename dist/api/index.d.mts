import { AxiosRequestConfig } from "axios";

//#region src/axios-instance.d.ts
declare const customInstance: <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig) => Promise<T>;
//#endregion
//#region generated/api/index.d.ts
type RegisterUserBody = {
  /** @pattern ^[a-zA-Z0-9_-]{3,30}$ */username: string;
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
  email: string;
  /**
   * @minLength 8
   * @maxLength 128
   */
  password: string;
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
type RefreshToken200 = {
  accessToken: string;
};
type RefreshToken400Error = typeof RefreshToken400Error[keyof typeof RefreshToken400Error];
declare const RefreshToken400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type RefreshToken400FieldsItem = {
  field: string;
  message: string;
};
type RefreshToken400 = {
  error: RefreshToken400Error;
  message: string;
  fields: RefreshToken400FieldsItem[];
};
type RefreshToken401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type RefreshToken429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type RefreshToken500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type SendPasswordResetEmailBody = {
  email: string;
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
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
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
type VerifyUserEmail409 = {
  error: string;
  message: string;
} & {
  error?: 'EMAIL_ALREADY_VERIFIED';
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
type AuthEmailResendBody = {
  email: string;
};
type AuthEmailResend400Error = typeof AuthEmailResend400Error[keyof typeof AuthEmailResend400Error];
declare const AuthEmailResend400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type AuthEmailResend400FieldsItem = {
  field: string;
  message: string;
};
type AuthEmailResend400 = {
  error: AuthEmailResend400Error;
  message: string;
  fields: AuthEmailResend400FieldsItem[];
};
type AuthEmailResend429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type AuthEmailResend500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type ListProftosParams = {
  /**
   * @maxLength 255
   */
  query?: string;
  page?: number;
  limit?: number;
};
type ListProftos200Item = {
  userId: string; /** @pattern ^[a-zA-Z0-9_-]{3,30}$ */
  username: string; /** @maxLength 255 */
  name: string;
  avatarFileId: string; /** @maxLength 255 */
  professionRole: string;
};
type ListProftos400Error = typeof ListProftos400Error[keyof typeof ListProftos400Error];
declare const ListProftos400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type ListProftos400FieldsItem = {
  field: string;
  message: string;
};
type ListProftos400 = {
  error: ListProftos400Error;
  message: string;
  fields: ListProftos400FieldsItem[];
};
type ListProftos401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type ListProftos429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type ListProftos500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type UpdateProftoBodyCertificatesItem = {
  imageFileId?: string; /** @maxLength 255 */
  name?: string;
  publishDate?: string; /** @maxLength 255 */
  publisher?: string;
};
type UpdateProftoBodyExperiencesItem = {
  /** @maxLength 255 */name?: string;
  startYear?: number;
  endYear?: number; /** @maxLength 2000 */
  description?: string;
};
type UpdateProftoBodyProjectsItem = {
  /** @maxLength 255 */name?: string; /** @maxLength 255 */
  professionRole?: string; /** @maxLength 255 */
  imageFileId?: string;
  date?: string; /** @maxLength 2000 */
  description?: string;
};
type UpdateProftoBodyLinksItem = {
  /** @maxLength 255 */name?: string; /** @maxLength 500 */
  url?: string;
};
type UpdateProftoBody = unknown & ({
  userId?: string;
  avatarFileId?: string | unknown; /** @maxLength 255 */
  name?: string | unknown; /** @maxLength 255 */
  professionRole?: string | unknown; /** @maxLength 255 */
  lastEducation?: string | unknown; /** @maxLength 255 */
  email?: string | unknown; /** @maxLength 2000 */
  summary?: string | unknown;
  cvFileId?: string | unknown;
  certificates?: UpdateProftoBodyCertificatesItem[];
  experiences?: UpdateProftoBodyExperiencesItem[];
  projects?: UpdateProftoBodyProjectsItem[];
  links?: UpdateProftoBodyLinksItem[];
});
type UpdateProfto400Error = typeof UpdateProfto400Error[keyof typeof UpdateProfto400Error];
declare const UpdateProfto400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type UpdateProfto400FieldsItem = {
  field: string;
  message: string;
};
type UpdateProfto400 = {
  error: UpdateProfto400Error;
  message: string;
  fields: UpdateProfto400FieldsItem[];
};
type UpdateProfto401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type UpdateProfto429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type UpdateProfto500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type GetProfto200CertificatesItem = {
  imageFileId?: string; /** @maxLength 255 */
  name?: string;
  publishDate?: string; /** @maxLength 255 */
  publisher?: string;
};
type GetProfto200ExperiencesItem = {
  /** @maxLength 255 */name?: string;
  startYear?: number;
  endYear?: number; /** @maxLength 2000 */
  description?: string;
};
type GetProfto200ProjectsItem = {
  /** @maxLength 255 */name?: string; /** @maxLength 255 */
  professionRole?: string; /** @maxLength 255 */
  imageFileId?: string;
  date?: string; /** @maxLength 2000 */
  description?: string;
};
type GetProfto200LinksItem = {
  /** @maxLength 255 */name?: string; /** @maxLength 500 */
  url?: string;
};
type GetProfto200 = unknown & ({
  userId?: string;
  avatarFileId?: string | unknown; /** @maxLength 255 */
  name?: string | unknown; /** @maxLength 255 */
  professionRole?: string | unknown; /** @maxLength 255 */
  lastEducation?: string | unknown; /** @maxLength 255 */
  email?: string | unknown; /** @maxLength 2000 */
  summary?: string | unknown;
  cvFileId?: string | unknown;
  certificates?: GetProfto200CertificatesItem[];
  experiences?: GetProfto200ExperiencesItem[];
  projects?: GetProfto200ProjectsItem[];
  links?: GetProfto200LinksItem[];
});
type GetProfto400Error = typeof GetProfto400Error[keyof typeof GetProfto400Error];
declare const GetProfto400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type GetProfto400FieldsItem = {
  field: string;
  message: string;
};
type GetProfto400 = {
  error: GetProfto400Error;
  message: string;
  fields: GetProfto400FieldsItem[];
};
type GetProfto401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
  message?: unknown;
};
type GetProfto404 = {
  error: string;
  message: string;
} & {
  error?: 'NOT_FOUND';
  message?: unknown;
};
type GetProfto429 = {
  error: string;
  message: string;
} & {
  error?: 'RATE_LIMITED';
  message?: unknown;
};
type GetProfto500 = {
  error: string;
  message: string;
} & {
  error?: 'INTERNAL_ERROR';
};
type GetCv200PersonalInformation = {
  /** @maxLength 255 */firstName?: string; /** @maxLength 255 */
  lastName?: string; /** @maxLength 2000 */
  profile?: string; /** @maxLength 500 */
  websiteUrl?: string; /** @pattern ^\+[1-9]\d{1,14}$ */
  phone?: string;
};
type GetCv200SkillsItem = {
  /** @maxLength 255 */name?: string;
  score?: number;
};
type GetCv200EducationsItemInstitution = typeof GetCv200EducationsItemInstitution[keyof typeof GetCv200EducationsItemInstitution];
declare const GetCv200EducationsItemInstitution: {
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
type GetCv200EducationsItem = {
  /** @maxLength 255 */educationLevel: string;
  institution: GetCv200EducationsItemInstitution; /** @maxLength 255 */
  city?: string; /** @maxLength 255 */
  studyProgram?: string;
  startYear?: number;
  endYear?: number;
  score?: number;
  maxScale?: number;
};
type GetCv200WorkExperiencesItem = {
  /** @maxLength 255 */position: string; /** @maxLength 255 */
  companyName: string; /** @maxLength 255 */
  employmentStatus?: string; /** @maxLength 255 */
  city?: string;
  startYear?: number;
  endYear?: number; /** @maxLength 2000 */
  description?: string;
};
type GetCv200CoursesItem = {
  /** @maxLength 255 */name: string; /** @maxLength 255 */
  organizer: string; /** @maxLength 500 */
  url?: string; /** @maxLength 2000 */
  description?: string; /** @minLength 1900 */
  startYear?: number; /** @minLength 1900 */
  endYear?: number; /** @maxLength 255 */
  location?: string;
};
type GetCv200OrganizationsItem = {
  /** @maxLength 255 */position: string; /** @maxLength 255 */
  organizationName: string; /** @maxLength 2000 */
  description?: string; /** @maxLength 255 */
  city?: string;
  startYear?: number;
  endYear?: number;
};
type GetCv200CertificationsItem = {
  /** @maxLength 255 */name: string; /** @maxLength 255 */
  publisher: string;
  publishDate?: string; /** @maxLength 500 */
  verificationUrl?: string; /** @maxLength 255 */
  certificateNumber?: string;
};
type GetCv200 = unknown & {
  userId?: string;
  personalInformation?: GetCv200PersonalInformation;
  skills?: GetCv200SkillsItem[];
  educations?: GetCv200EducationsItem[];
  workExperiences?: GetCv200WorkExperiencesItem[];
  courses?: GetCv200CoursesItem[];
  organizations?: GetCv200OrganizationsItem[];
  certifications?: GetCv200CertificationsItem[];
};
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
  websiteUrl?: string; /** @pattern ^\+[1-9]\d{1,14}$ */
  phone?: string;
};
type UpdateCvBodySkillsItem = {
  /** @maxLength 255 */name?: string;
  score?: number;
};
type UpdateCvBodyEducationsItemInstitution = typeof UpdateCvBodyEducationsItemInstitution[keyof typeof UpdateCvBodyEducationsItemInstitution];
declare const UpdateCvBodyEducationsItemInstitution: {
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
  /** @maxLength 255 */educationLevel: string;
  institution: UpdateCvBodyEducationsItemInstitution; /** @maxLength 255 */
  city?: string; /** @maxLength 255 */
  studyProgram?: string;
  startYear?: number;
  endYear?: number;
  score?: number;
  maxScale?: number;
};
type UpdateCvBodyWorkExperiencesItem = {
  /** @maxLength 255 */position: string; /** @maxLength 255 */
  companyName: string; /** @maxLength 255 */
  employmentStatus?: string; /** @maxLength 255 */
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
type UpdateCvBody = unknown & {
  userId?: string;
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
  type: DownloadCvType;
  preview: boolean;
};
type DownloadCvType = typeof DownloadCvType[keyof typeof DownloadCvType];
declare const DownloadCvType: {
  readonly draft: "draft";
  readonly saved: "saved";
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
type AiGenerateCvBody = {
  [key: string]: unknown;
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
type ListBootcampsParams = {
  /**
   * @maxLength 255
   */
  query?: string;
  page?: number;
  limit?: number;
};
type ListBootcamps200Item = {
  id: string; /** @maxLength 255 */
  professionRole: string;
  thumbnailFileId: string; /** @maxLength 255 */
  name: string; /** @maxLength 500 */
  redirectUrl: string; /** @maxLength 255 */
  publisher: string;
  startDate: string;
  createdAt: string;
  updatedAt: string;
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
  thumbnailFileId: string; /** @maxLength 255 */
  name: string; /** @maxLength 500 */
  redirectUrl: string; /** @maxLength 255 */
  publisher: string;
  startDate: string;
  createdAt: string;
  updatedAt: string;
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
  page?: number;
  limit?: number;
};
type ListCertifications200Item = {
  id: string; /** @maxLength 255 */
  professionRole: string;
  thumbnailFileId: string; /** @maxLength 255 */
  name: string; /** @maxLength 500 */
  redirectUrl: string; /** @maxLength 255 */
  publisher: string;
  createdAt: string;
  updatedAt: string;
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
  thumbnailFileId: string; /** @maxLength 255 */
  name: string; /** @maxLength 500 */
  redirectUrl: string; /** @maxLength 255 */
  publisher: string;
  createdAt: string;
  updatedAt: string;
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
  userId: string;
  postId: string;
  parentId?: string; /** @maxLength 2000 */
  content: string;
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
type UploadFile400Error = typeof UploadFile400Error[keyof typeof UploadFile400Error];
declare const UploadFile400Error: {
  readonly VALIDATION_ERROR: "VALIDATION_ERROR";
};
type UploadFile400FieldsItem = {
  field: string;
  message: string;
};
type UploadFile400 = {
  error: UploadFile400Error;
  message: string;
  fields: UploadFile400FieldsItem[];
};
type UploadFile401 = {
  error: string;
  message: string;
} & {
  error?: 'UNAUTHORIZED';
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
 * @summary [refreshToken] Refresh token

 */
declare const refreshToken: (options?: SecondParameter<typeof customInstance<RefreshToken200>>) => Promise<RefreshToken200>;
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

 * @summary [authEmailResend] Resend email verification token

 */
declare const authEmailResend: (authEmailResendBody: AuthEmailResendBody, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
/**
 * @summary Redirect to Google OAuth consent screen
 */
declare const authOauthGoogle: (options?: SecondParameter<typeof customInstance<unknown>>) => Promise<unknown>;
/**
 * Called by Google after user consents. Not intended to be called directly.
 * @summary Handle Google OAuth callback
 */
declare const authOauthGoogleCallback: (options?: SecondParameter<typeof customInstance<unknown>>) => Promise<unknown>;
declare const listProftos: (params?: ListProftosParams, options?: SecondParameter<typeof customInstance<ListProftos200Item[]>>) => Promise<ListProftos200Item[]>;
declare const updateProfto: (updateProftoBody: UpdateProftoBody, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
declare const getProfto: (username: string, options?: SecondParameter<typeof customInstance<GetProfto200>>) => Promise<{
  userId?: string;
  avatarFileId?: string | unknown; /** @maxLength 255 */
  name?: string | unknown; /** @maxLength 255 */
  professionRole?: string | unknown; /** @maxLength 255 */
  lastEducation?: string | unknown; /** @maxLength 255 */
  email?: string | unknown; /** @maxLength 2000 */
  summary?: string | unknown;
  cvFileId?: string | unknown;
  certificates?: GetProfto200CertificatesItem[];
  experiences?: GetProfto200ExperiencesItem[];
  projects?: GetProfto200ProjectsItem[];
  links?: GetProfto200LinksItem[];
}>;
declare const getCv: (options?: SecondParameter<typeof customInstance<GetCv200>>) => Promise<{
  userId?: string;
  personalInformation?: GetCv200PersonalInformation;
  skills?: GetCv200SkillsItem[];
  educations?: GetCv200EducationsItem[];
  workExperiences?: GetCv200WorkExperiencesItem[];
  courses?: GetCv200CoursesItem[];
  organizations?: GetCv200OrganizationsItem[];
  certifications?: GetCv200CertificationsItem[];
}>;
declare const updateCv: (updateCvBody: UpdateCvBody, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
declare const downloadCv: (params: DownloadCvParams, options?: SecondParameter<typeof customInstance<Blob>>) => Promise<Blob>;
declare const saveCv: (options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
declare const aiGenerateCv: (aiGenerateCvBody: AiGenerateCvBody, options?: SecondParameter<typeof customInstance<string>>) => Promise<string>;
declare const listBootcamps: (params?: ListBootcampsParams, options?: SecondParameter<typeof customInstance<ListBootcamps200Item[]>>) => Promise<ListBootcamps200Item[]>;
declare const getBootcampsFeed: (params?: GetBootcampsFeedParams, options?: SecondParameter<typeof customInstance<GetBootcampsFeed200Item[]>>) => Promise<GetBootcampsFeed200Item[]>;
declare const listCertifications: (params?: ListCertificationsParams, options?: SecondParameter<typeof customInstance<ListCertifications200Item[]>>) => Promise<ListCertifications200Item[]>;
declare const getCertificationsFeed: (params?: GetCertificationsFeedParams, options?: SecondParameter<typeof customInstance<GetCertificationsFeed200Item[]>>) => Promise<GetCertificationsFeed200Item[]>;
declare const listCommunities: (params?: ListCommunitiesParams, options?: SecondParameter<typeof customInstance<ListCommunities200Item[]>>) => Promise<ListCommunities200Item[]>;
declare const joinCommunity: (joinCommunityBody: JoinCommunityBody, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
declare const leaveCommunity: (leaveCommunityBody: LeaveCommunityBody, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
declare const getCommunitiesFeed: (params?: GetCommunitiesFeedParams, options?: SecondParameter<typeof customInstance<GetCommunitiesFeed200Item[]>>) => Promise<GetCommunitiesFeed200Item[]>;
declare const createPost: (createPostBody: CreatePostBody, options?: SecondParameter<typeof customInstance<CreatePost201>>) => Promise<CreatePost201>;
declare const getPostsFeed: (options?: SecondParameter<typeof customInstance<GetPostsFeed200Item[]>>) => Promise<GetPostsFeed200Item[]>;
declare const likePost: (postId: string, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
declare const deletePostLike: (postId: string, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
declare const listComments: (postId: string, options?: SecondParameter<typeof customInstance<ListComments200Item[]>>) => Promise<ListComments200Item[]>;
declare const createComment: (postId: string, createCommentBody: CreateCommentBody, options?: SecondParameter<typeof customInstance<CreateComment201>>) => Promise<CreateComment201>;
declare const deleteComment: (postId: string, commentId: string, options?: SecondParameter<typeof customInstance<void>>) => Promise<void>;
declare const getFile: (fileId: string, options?: SecondParameter<typeof customInstance<Blob>>) => Promise<Blob>;
declare const uploadFile: (uploadFileBody: UploadFileBody, options?: SecondParameter<typeof customInstance<UploadFile201>>) => Promise<UploadFile201>;
type RegisterUserResult = NonNullable<Awaited<ReturnType<typeof registerUser>>>;
type LoginUserResult = NonNullable<Awaited<ReturnType<typeof loginUser>>>;
type LogoutUserResult = NonNullable<Awaited<ReturnType<typeof logoutUser>>>;
type RefreshTokenResult = NonNullable<Awaited<ReturnType<typeof refreshToken>>>;
type SendPasswordResetEmailResult = NonNullable<Awaited<ReturnType<typeof sendPasswordResetEmail>>>;
type ResetUserPasswordResult = NonNullable<Awaited<ReturnType<typeof resetUserPassword>>>;
type ChangeUserPasswordResult = NonNullable<Awaited<ReturnType<typeof changeUserPassword>>>;
type VerifyUserEmailResult = NonNullable<Awaited<ReturnType<typeof verifyUserEmail>>>;
type AuthEmailResendResult = NonNullable<Awaited<ReturnType<typeof authEmailResend>>>;
type AuthOauthGoogleResult = NonNullable<Awaited<ReturnType<typeof authOauthGoogle>>>;
type AuthOauthGoogleCallbackResult = NonNullable<Awaited<ReturnType<typeof authOauthGoogleCallback>>>;
type ListProftosResult = NonNullable<Awaited<ReturnType<typeof listProftos>>>;
type UpdateProftoResult = NonNullable<Awaited<ReturnType<typeof updateProfto>>>;
type GetProftoResult = NonNullable<Awaited<ReturnType<typeof getProfto>>>;
type GetCvResult = NonNullable<Awaited<ReturnType<typeof getCv>>>;
type UpdateCvResult = NonNullable<Awaited<ReturnType<typeof updateCv>>>;
type DownloadCvResult = NonNullable<Awaited<ReturnType<typeof downloadCv>>>;
type SaveCvResult = NonNullable<Awaited<ReturnType<typeof saveCv>>>;
type AiGenerateCvResult = NonNullable<Awaited<ReturnType<typeof aiGenerateCv>>>;
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
//#endregion
export { AiGenerateCv400, AiGenerateCv400Error, AiGenerateCv400FieldsItem, AiGenerateCv401, AiGenerateCv429, AiGenerateCv500, AiGenerateCvBody, AiGenerateCvResult, AuthEmailResend400, AuthEmailResend400Error, AuthEmailResend400FieldsItem, AuthEmailResend429, AuthEmailResend500, AuthEmailResendBody, AuthEmailResendResult, AuthOauthGoogleCallbackResult, AuthOauthGoogleResult, ChangeUserPassword400, ChangeUserPassword400Error, ChangeUserPassword400FieldsItem, ChangeUserPassword401, ChangeUserPassword429, ChangeUserPassword500, ChangeUserPasswordBody, ChangeUserPasswordResult, CreateComment201, CreateComment400, CreateComment400Error, CreateComment400FieldsItem, CreateComment401, CreateComment404, CreateComment429, CreateComment500, CreateCommentBody, CreateCommentResult, CreatePost201, CreatePost400, CreatePost400Error, CreatePost400FieldsItem, CreatePost401, CreatePost429, CreatePost500, CreatePostBody, CreatePostResult, DeleteComment400, DeleteComment400Error, DeleteComment400FieldsItem, DeleteComment401, DeleteComment404, DeleteComment429, DeleteComment500, DeleteCommentResult, DeletePostLike400, DeletePostLike400Error, DeletePostLike400FieldsItem, DeletePostLike401, DeletePostLike404, DeletePostLike429, DeletePostLike500, DeletePostLikeResult, DownloadCv400, DownloadCv400Error, DownloadCv400FieldsItem, DownloadCv401, DownloadCv404, DownloadCv429, DownloadCv500, DownloadCvParams, DownloadCvResult, DownloadCvType, GetBootcampsFeed200Item, GetBootcampsFeed400, GetBootcampsFeed400Error, GetBootcampsFeed400FieldsItem, GetBootcampsFeed401, GetBootcampsFeed429, GetBootcampsFeed500, GetBootcampsFeedParams, GetBootcampsFeedResult, GetCertificationsFeed200Item, GetCertificationsFeed400, GetCertificationsFeed400Error, GetCertificationsFeed400FieldsItem, GetCertificationsFeed401, GetCertificationsFeed429, GetCertificationsFeed500, GetCertificationsFeedParams, GetCertificationsFeedResult, GetCommunitiesFeed200Item, GetCommunitiesFeed400, GetCommunitiesFeed400Error, GetCommunitiesFeed400FieldsItem, GetCommunitiesFeed401, GetCommunitiesFeed429, GetCommunitiesFeed500, GetCommunitiesFeedParams, GetCommunitiesFeedResult, GetCv200, GetCv200CertificationsItem, GetCv200CoursesItem, GetCv200EducationsItem, GetCv200EducationsItemInstitution, GetCv200OrganizationsItem, GetCv200PersonalInformation, GetCv200SkillsItem, GetCv200WorkExperiencesItem, GetCv400, GetCv400Error, GetCv400FieldsItem, GetCv401, GetCv429, GetCv500, GetCvResult, GetFile400, GetFile400Error, GetFile400FieldsItem, GetFile401, GetFile404, GetFile429, GetFile500, GetFileResult, GetPostsFeed200Item, GetPostsFeed400, GetPostsFeed400Error, GetPostsFeed400FieldsItem, GetPostsFeed401, GetPostsFeed429, GetPostsFeed500, GetPostsFeedResult, GetProfto200, GetProfto200CertificatesItem, GetProfto200ExperiencesItem, GetProfto200LinksItem, GetProfto200ProjectsItem, GetProfto400, GetProfto400Error, GetProfto400FieldsItem, GetProfto401, GetProfto404, GetProfto429, GetProfto500, GetProftoResult, JoinCommunity400, JoinCommunity400Error, JoinCommunity400FieldsItem, JoinCommunity401, JoinCommunity429, JoinCommunity500, JoinCommunityBody, JoinCommunityResult, LeaveCommunity400, LeaveCommunity400Error, LeaveCommunity400FieldsItem, LeaveCommunity401, LeaveCommunity429, LeaveCommunity500, LeaveCommunityBody, LeaveCommunityResult, LikePost400, LikePost400Error, LikePost400FieldsItem, LikePost401, LikePost404, LikePost409, LikePost429, LikePost500, LikePostResult, ListBootcamps200Item, ListBootcamps400, ListBootcamps400Error, ListBootcamps400FieldsItem, ListBootcamps401, ListBootcamps429, ListBootcamps500, ListBootcampsParams, ListBootcampsResult, ListCertifications200Item, ListCertifications400, ListCertifications400Error, ListCertifications400FieldsItem, ListCertifications401, ListCertifications429, ListCertifications500, ListCertificationsParams, ListCertificationsResult, ListComments200Item, ListComments400, ListComments400Error, ListComments400FieldsItem, ListComments401, ListComments404, ListComments429, ListComments500, ListCommentsResult, ListCommunities200Item, ListCommunities400, ListCommunities400Error, ListCommunities400FieldsItem, ListCommunities401, ListCommunities429, ListCommunities500, ListCommunitiesParams, ListCommunitiesResult, ListProftos200Item, ListProftos400, ListProftos400Error, ListProftos400FieldsItem, ListProftos401, ListProftos429, ListProftos500, ListProftosParams, ListProftosResult, LoginUser200, LoginUser400, LoginUser400Error, LoginUser400FieldsItem, LoginUser401, LoginUser403, LoginUser429, LoginUser500, LoginUserBody, LoginUserResult, LogoutUser400, LogoutUser400Error, LogoutUser400FieldsItem, LogoutUser401, LogoutUser429, LogoutUser500, LogoutUserResult, RefreshToken200, RefreshToken400, RefreshToken400Error, RefreshToken400FieldsItem, RefreshToken401, RefreshToken429, RefreshToken500, RefreshTokenResult, RegisterUser400, RegisterUser400Error, RegisterUser400FieldsItem, RegisterUser409, RegisterUser429, RegisterUser500, RegisterUserBody, RegisterUserResult, ResetUserPassword400, ResetUserPassword400Error, ResetUserPassword400FieldsItem, ResetUserPassword401, ResetUserPassword429, ResetUserPassword500, ResetUserPasswordBody, ResetUserPasswordResult, SaveCv400, SaveCv400Error, SaveCv400FieldsItem, SaveCv401, SaveCv429, SaveCv500, SaveCvResult, SendPasswordResetEmail400, SendPasswordResetEmail400Error, SendPasswordResetEmail400FieldsItem, SendPasswordResetEmail401, SendPasswordResetEmail429, SendPasswordResetEmail500, SendPasswordResetEmailBody, SendPasswordResetEmailResult, UpdateCv400, UpdateCv400Error, UpdateCv400FieldsItem, UpdateCv401, UpdateCv429, UpdateCv500, UpdateCvBody, UpdateCvBodyCertificationsItem, UpdateCvBodyCoursesItem, UpdateCvBodyEducationsItem, UpdateCvBodyEducationsItemInstitution, UpdateCvBodyOrganizationsItem, UpdateCvBodyPersonalInformation, UpdateCvBodySkillsItem, UpdateCvBodyWorkExperiencesItem, UpdateCvResult, UpdateProfto400, UpdateProfto400Error, UpdateProfto400FieldsItem, UpdateProfto401, UpdateProfto429, UpdateProfto500, UpdateProftoBody, UpdateProftoBodyCertificatesItem, UpdateProftoBodyExperiencesItem, UpdateProftoBodyLinksItem, UpdateProftoBodyProjectsItem, UpdateProftoResult, UploadFile201, UploadFile400, UploadFile400Error, UploadFile400FieldsItem, UploadFile401, UploadFile429, UploadFile500, UploadFileBody, UploadFileResult, VerifyUserEmail400, VerifyUserEmail400Error, VerifyUserEmail400FieldsItem, VerifyUserEmail401, VerifyUserEmail409, VerifyUserEmail429, VerifyUserEmail500, VerifyUserEmailBody, VerifyUserEmailResult, aiGenerateCv, authEmailResend, authOauthGoogle, authOauthGoogleCallback, changeUserPassword, createComment, createPost, deleteComment, deletePostLike, downloadCv, getBootcampsFeed, getCertificationsFeed, getCommunitiesFeed, getCv, getFile, getPostsFeed, getProfto, joinCommunity, leaveCommunity, likePost, listBootcamps, listCertifications, listComments, listCommunities, listProftos, loginUser, logoutUser, refreshToken, registerUser, resetUserPassword, saveCv, sendPasswordResetEmail, updateCv, updateProfto, uploadFile, verifyUserEmail };