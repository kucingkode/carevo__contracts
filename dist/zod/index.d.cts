import * as zod from "zod";

//#region generated/zod/index.d.ts
/**
 * @summary [registerUser] Register a new user using email and password

 */
declare const registerUserBodyUsernameRegExp: RegExp;
declare const registerUserBodyPasswordMin = 8;
declare const registerUserBodyPasswordMax = 128;
declare const RegisterUserBody: zod.ZodObject<{
  username: zod.ZodString;
  email: zod.ZodEmail;
  password: zod.ZodString;
}, zod.z.core.$strip>;
/**
 * @summary [loginUser] Login using email and password

 */
declare const loginUserBodyPasswordMin = 8;
declare const loginUserBodyPasswordMax = 128;
declare const LoginUserBody: zod.ZodObject<{
  email: zod.ZodEmail;
  password: zod.ZodString;
}, zod.z.core.$strip>;
declare const LoginUserResponse: zod.ZodObject<{
  userId: zod.ZodOptional<zod.ZodUUID>;
  accessToken: zod.ZodOptional<zod.ZodString>;
}, zod.z.core.$strip>;
/**
 * @summary [refreshToken] Refresh token

 */
declare const RefreshTokenResponse: zod.ZodObject<{
  accessToken: zod.ZodString;
}, zod.z.core.$strip>;
/**
 * Send reset password token to the user's email address.
Previous token will be invalidated and a new one will be issued.

 * @summary [sendPasswordResetEmail] Request password reset token

 */
declare const SendPasswordResetEmailBody: zod.ZodObject<{
  email: zod.ZodEmail;
}, zod.z.core.$strip>;
/**
 * @summary [resetUserPassword] Reset user password using token

 */
declare const resetUserPasswordBodyOldPasswordMin = 8;
declare const resetUserPasswordBodyOldPasswordMax = 128;
declare const resetUserPasswordBodyNewPasswordMin = 8;
declare const resetUserPasswordBodyNewPasswordMax = 128;
declare const ResetUserPasswordBody: zod.ZodObject<{
  oldPassword: zod.ZodString;
  newPassword: zod.ZodString;
}, zod.z.core.$strip>;
/**
 * @summary [changeUserPassword] Change user password

 */
declare const changeUserPasswordBodyOldPasswordMin = 8;
declare const changeUserPasswordBodyOldPasswordMax = 128;
declare const changeUserPasswordBodyNewPasswordMin = 8;
declare const changeUserPasswordBodyNewPasswordMax = 128;
declare const ChangeUserPasswordBody: zod.ZodObject<{
  oldPassword: zod.ZodString;
  newPassword: zod.ZodString;
}, zod.z.core.$strip>;
/**
 * @summary [verifyUserEmail] Verify user email address

 */
declare const VerifyUserEmailBody: zod.ZodObject<{
  token: zod.ZodString;
}, zod.z.core.$strip>;
/**
 * Resend email verification token to the user's email address.
Previous token will be invalidated and a new one will be issued.

 * @summary [authEmailResend] Resend email verification token

 */
declare const AuthEmailResendBody: zod.ZodObject<{
  email: zod.ZodEmail;
}, zod.z.core.$strip>;
declare const listProftosQueryQueryMax = 255;
declare const ListProftosQueryParams: zod.ZodObject<{
  query: zod.ZodOptional<zod.ZodString>;
  page: zod.ZodOptional<zod.ZodNumber>;
  limit: zod.ZodOptional<zod.ZodNumber>;
}, zod.z.core.$strip>;
declare const listProftosResponseUsernameRegExp: RegExp;
declare const listProftosResponseNameMax = 255;
declare const listProftosResponseProfessionRoleMax = 255;
declare const ListProftosResponseItem: zod.ZodObject<{
  userId: zod.ZodUUID;
  username: zod.ZodString;
  name: zod.ZodString;
  avatarFileId: zod.ZodUUID;
  professionRole: zod.ZodString;
}, zod.z.core.$strip>;
declare const ListProftosResponse: zod.ZodArray<zod.ZodObject<{
  userId: zod.ZodUUID;
  username: zod.ZodString;
  name: zod.ZodString;
  avatarFileId: zod.ZodUUID;
  professionRole: zod.ZodString;
}, zod.z.core.$strip>>;
declare const updateProftoBodyOneNameMax = 255;
declare const updateProftoBodyOneProfessionRoleMax = 255;
declare const updateProftoBodyOneLastEducationMax = 255;
declare const updateProftoBodyOneEmailMax = 255;
declare const updateProftoBodyOneSummaryMax = 2000;
declare const updateProftoBodyOneCertificatesItemNameMax = 255;
declare const updateProftoBodyOneCertificatesItemPublisherMax = 255;
declare const updateProftoBodyOneExperiencesItemNameMax = 255;
declare const updateProftoBodyOneExperiencesItemDescriptionMax = 2000;
declare const updateProftoBodyOneProjectsItemNameMax = 255;
declare const updateProftoBodyOneProjectsItemProfessionRoleMax = 255;
declare const updateProftoBodyOneProjectsItemImageFileIdMax = 255;
declare const updateProftoBodyOneProjectsItemDescriptionMax = 2000;
declare const updateProftoBodyOneLinksItemNameMax = 255;
declare const updateProftoBodyOneLinksItemUrlMax = 500;
declare const UpdateProftoBody: zod.ZodIntersection<zod.ZodObject<{
  userId: zod.ZodOptional<zod.ZodUUID>;
  avatarFileId: zod.ZodOptional<zod.ZodUUID>;
  name: zod.ZodOptional<zod.ZodString>;
  professionRole: zod.ZodOptional<zod.ZodString>;
  lastEducation: zod.ZodOptional<zod.ZodString>;
  email: zod.ZodOptional<zod.ZodEmail>;
  summary: zod.ZodOptional<zod.ZodString>;
  cvFileId: zod.ZodOptional<zod.ZodUUID>;
  certificates: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    imageFileId: zod.ZodOptional<zod.ZodUUID>;
    name: zod.ZodOptional<zod.ZodString>;
    publishDate: zod.ZodOptional<zod.z.ZodISODate>;
    publisher: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>>;
  experiences: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodOptional<zod.ZodString>;
    startYear: zod.ZodOptional<zod.ZodNumber>;
    endYear: zod.ZodOptional<zod.ZodNumber>;
    description: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>>;
  projects: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodOptional<zod.ZodString>;
    professionRole: zod.ZodOptional<zod.ZodString>;
    imageFileId: zod.ZodOptional<zod.ZodString>;
    date: zod.ZodOptional<zod.z.ZodISODate>;
    description: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>>;
  links: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodOptional<zod.ZodString>;
    url: zod.ZodOptional<zod.ZodURL>;
  }, zod.z.core.$strip>>>;
}, zod.z.core.$strip>, zod.ZodUnknown>;
declare const getProftoPathUsernameMin = 3;
declare const getProftoPathUsernameMax = 30;
declare const getProftoPathUsernameRegExp: RegExp;
declare const GetProftoParams: zod.ZodObject<{
  username: zod.ZodString;
}, zod.z.core.$strip>;
declare const getProftoResponseOneNameMax = 255;
declare const getProftoResponseOneProfessionRoleMax = 255;
declare const getProftoResponseOneLastEducationMax = 255;
declare const getProftoResponseOneEmailMax = 255;
declare const getProftoResponseOneSummaryMax = 2000;
declare const getProftoResponseOneCertificatesItemNameMax = 255;
declare const getProftoResponseOneCertificatesItemPublisherMax = 255;
declare const getProftoResponseOneExperiencesItemNameMax = 255;
declare const getProftoResponseOneExperiencesItemDescriptionMax = 2000;
declare const getProftoResponseOneProjectsItemNameMax = 255;
declare const getProftoResponseOneProjectsItemProfessionRoleMax = 255;
declare const getProftoResponseOneProjectsItemImageFileIdMax = 255;
declare const getProftoResponseOneProjectsItemDescriptionMax = 2000;
declare const getProftoResponseOneLinksItemNameMax = 255;
declare const getProftoResponseOneLinksItemUrlMax = 500;
declare const GetProftoResponse: zod.ZodIntersection<zod.ZodObject<{
  userId: zod.ZodOptional<zod.ZodUUID>;
  avatarFileId: zod.ZodOptional<zod.ZodUUID>;
  name: zod.ZodOptional<zod.ZodString>;
  professionRole: zod.ZodOptional<zod.ZodString>;
  lastEducation: zod.ZodOptional<zod.ZodString>;
  email: zod.ZodOptional<zod.ZodEmail>;
  summary: zod.ZodOptional<zod.ZodString>;
  cvFileId: zod.ZodOptional<zod.ZodUUID>;
  certificates: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    imageFileId: zod.ZodOptional<zod.ZodUUID>;
    name: zod.ZodOptional<zod.ZodString>;
    publishDate: zod.ZodOptional<zod.z.ZodISODate>;
    publisher: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>>;
  experiences: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodOptional<zod.ZodString>;
    startYear: zod.ZodOptional<zod.ZodNumber>;
    endYear: zod.ZodOptional<zod.ZodNumber>;
    description: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>>;
  projects: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodOptional<zod.ZodString>;
    professionRole: zod.ZodOptional<zod.ZodString>;
    imageFileId: zod.ZodOptional<zod.ZodString>;
    date: zod.ZodOptional<zod.z.ZodISODate>;
    description: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>>;
  links: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodOptional<zod.ZodString>;
    url: zod.ZodOptional<zod.ZodURL>;
  }, zod.z.core.$strip>>>;
}, zod.z.core.$strip>, zod.ZodUnknown>;
declare const getCvResponseOnePersonalInformationFirstNameMax = 255;
declare const getCvResponseOnePersonalInformationLastNameMax = 255;
declare const getCvResponseOnePersonalInformationProfileMax = 2000;
declare const getCvResponseOnePersonalInformationWebsiteUrlMax = 500;
declare const getCvResponseOnePersonalInformationPhoneRegExp: RegExp;
declare const getCvResponseOneSkillsItemNameMax = 255;
declare const getCvResponseOneEducationsItemEducationLevelMax = 255;
declare const getCvResponseOneEducationsItemCityMax = 255;
declare const getCvResponseOneEducationsItemStudyProgramMax = 255;
declare const getCvResponseOneWorkExperiencesItemPositionMax = 255;
declare const getCvResponseOneWorkExperiencesItemCompanyNameMax = 255;
declare const getCvResponseOneWorkExperiencesItemEmploymentStatusMax = 255;
declare const getCvResponseOneWorkExperiencesItemCityMax = 255;
declare const getCvResponseOneWorkExperiencesItemDescriptionMax = 2000;
declare const getCvResponseOneCoursesItemNameMax = 255;
declare const getCvResponseOneCoursesItemOrganizerMax = 255;
declare const getCvResponseOneCoursesItemUrlMax = 500;
declare const getCvResponseOneCoursesItemDescriptionMax = 2000;
declare const getCvResponseOneCoursesItemStartYearMin = 1900;
declare const getCvResponseOneCoursesItemEndYearMin = 1900;
declare const getCvResponseOneCoursesItemLocationMax = 255;
declare const getCvResponseOneOrganizationsItemPositionMax = 255;
declare const getCvResponseOneOrganizationsItemOrganizationNameMax = 255;
declare const getCvResponseOneOrganizationsItemDescriptionMax = 2000;
declare const getCvResponseOneOrganizationsItemCityMax = 255;
declare const getCvResponseOneCertificationsItemNameMax = 255;
declare const getCvResponseOneCertificationsItemPublisherMax = 255;
declare const getCvResponseOneCertificationsItemVerificationUrlMax = 500;
declare const getCvResponseOneCertificationsItemCertificateNumberMax = 255;
declare const GetCvResponse: zod.ZodIntersection<zod.ZodObject<{
  userId: zod.ZodOptional<zod.ZodUUID>;
  personalInformation: zod.ZodOptional<zod.ZodObject<{
    firstName: zod.ZodOptional<zod.ZodString>;
    lastName: zod.ZodOptional<zod.ZodString>;
    profile: zod.ZodOptional<zod.ZodString>;
    websiteUrl: zod.ZodOptional<zod.ZodURL>;
    phone: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>;
  skills: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodOptional<zod.ZodString>;
    score: zod.ZodOptional<zod.ZodNumber>;
  }, zod.z.core.$strip>>>;
  educations: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    educationLevel: zod.ZodString;
    institution: zod.ZodEnum<{
      SD: "SD";
      SMP: "SMP";
      MTS: "MTS";
      SMA: "SMA";
      MA: "MA";
      SMK: "SMK";
      Profesi: "Profesi";
      D3: "D3";
      D4: "D4";
      S1: "S1";
      S2: "S2";
      S3: "S3";
    }>;
    city: zod.ZodOptional<zod.ZodString>;
    studyProgram: zod.ZodOptional<zod.ZodString>;
    startYear: zod.ZodOptional<zod.ZodNumber>;
    endYear: zod.ZodOptional<zod.ZodNumber>;
    score: zod.ZodOptional<zod.ZodNumber>;
    maxScale: zod.ZodOptional<zod.ZodNumber>;
  }, zod.z.core.$strip>>>;
  workExperiences: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    position: zod.ZodString;
    companyName: zod.ZodURL;
    employmentStatus: zod.ZodOptional<zod.ZodString>;
    city: zod.ZodOptional<zod.ZodString>;
    startYear: zod.ZodOptional<zod.ZodNumber>;
    endYear: zod.ZodOptional<zod.ZodNumber>;
    description: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>>;
  courses: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodString;
    organizer: zod.ZodString;
    url: zod.ZodOptional<zod.ZodURL>;
    description: zod.ZodOptional<zod.ZodString>;
    startYear: zod.ZodOptional<zod.ZodNumber>;
    endYear: zod.ZodOptional<zod.ZodNumber>;
    location: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>>;
  organizations: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    position: zod.ZodString;
    organizationName: zod.ZodString;
    description: zod.ZodOptional<zod.ZodString>;
    city: zod.ZodOptional<zod.ZodString>;
    startYear: zod.ZodOptional<zod.ZodNumber>;
    endYear: zod.ZodOptional<zod.ZodNumber>;
  }, zod.z.core.$strip>>>;
  certifications: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodString;
    publisher: zod.ZodString;
    publishDate: zod.ZodOptional<zod.z.ZodISODate>;
    verificationUrl: zod.ZodOptional<zod.ZodURL>;
    certificateNumber: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>>;
}, zod.z.core.$strip>, zod.ZodUnknown>;
declare const updateCvBodyOnePersonalInformationFirstNameMax = 255;
declare const updateCvBodyOnePersonalInformationLastNameMax = 255;
declare const updateCvBodyOnePersonalInformationProfileMax = 2000;
declare const updateCvBodyOnePersonalInformationWebsiteUrlMax = 500;
declare const updateCvBodyOnePersonalInformationPhoneRegExp: RegExp;
declare const updateCvBodyOneSkillsItemNameMax = 255;
declare const updateCvBodyOneEducationsItemEducationLevelMax = 255;
declare const updateCvBodyOneEducationsItemCityMax = 255;
declare const updateCvBodyOneEducationsItemStudyProgramMax = 255;
declare const updateCvBodyOneWorkExperiencesItemPositionMax = 255;
declare const updateCvBodyOneWorkExperiencesItemCompanyNameMax = 255;
declare const updateCvBodyOneWorkExperiencesItemEmploymentStatusMax = 255;
declare const updateCvBodyOneWorkExperiencesItemCityMax = 255;
declare const updateCvBodyOneWorkExperiencesItemDescriptionMax = 2000;
declare const updateCvBodyOneCoursesItemNameMax = 255;
declare const updateCvBodyOneCoursesItemOrganizerMax = 255;
declare const updateCvBodyOneCoursesItemUrlMax = 500;
declare const updateCvBodyOneCoursesItemDescriptionMax = 2000;
declare const updateCvBodyOneCoursesItemStartYearMin = 1900;
declare const updateCvBodyOneCoursesItemEndYearMin = 1900;
declare const updateCvBodyOneCoursesItemLocationMax = 255;
declare const updateCvBodyOneOrganizationsItemPositionMax = 255;
declare const updateCvBodyOneOrganizationsItemOrganizationNameMax = 255;
declare const updateCvBodyOneOrganizationsItemDescriptionMax = 2000;
declare const updateCvBodyOneOrganizationsItemCityMax = 255;
declare const updateCvBodyOneCertificationsItemNameMax = 255;
declare const updateCvBodyOneCertificationsItemPublisherMax = 255;
declare const updateCvBodyOneCertificationsItemVerificationUrlMax = 500;
declare const updateCvBodyOneCertificationsItemCertificateNumberMax = 255;
declare const UpdateCvBody: zod.ZodIntersection<zod.ZodObject<{
  userId: zod.ZodOptional<zod.ZodUUID>;
  personalInformation: zod.ZodOptional<zod.ZodObject<{
    firstName: zod.ZodOptional<zod.ZodString>;
    lastName: zod.ZodOptional<zod.ZodString>;
    profile: zod.ZodOptional<zod.ZodString>;
    websiteUrl: zod.ZodOptional<zod.ZodURL>;
    phone: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>;
  skills: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodOptional<zod.ZodString>;
    score: zod.ZodOptional<zod.ZodNumber>;
  }, zod.z.core.$strip>>>;
  educations: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    educationLevel: zod.ZodString;
    institution: zod.ZodEnum<{
      SD: "SD";
      SMP: "SMP";
      MTS: "MTS";
      SMA: "SMA";
      MA: "MA";
      SMK: "SMK";
      Profesi: "Profesi";
      D3: "D3";
      D4: "D4";
      S1: "S1";
      S2: "S2";
      S3: "S3";
    }>;
    city: zod.ZodOptional<zod.ZodString>;
    studyProgram: zod.ZodOptional<zod.ZodString>;
    startYear: zod.ZodOptional<zod.ZodNumber>;
    endYear: zod.ZodOptional<zod.ZodNumber>;
    score: zod.ZodOptional<zod.ZodNumber>;
    maxScale: zod.ZodOptional<zod.ZodNumber>;
  }, zod.z.core.$strip>>>;
  workExperiences: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    position: zod.ZodString;
    companyName: zod.ZodURL;
    employmentStatus: zod.ZodOptional<zod.ZodString>;
    city: zod.ZodOptional<zod.ZodString>;
    startYear: zod.ZodOptional<zod.ZodNumber>;
    endYear: zod.ZodOptional<zod.ZodNumber>;
    description: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>>;
  courses: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodString;
    organizer: zod.ZodString;
    url: zod.ZodOptional<zod.ZodURL>;
    description: zod.ZodOptional<zod.ZodString>;
    startYear: zod.ZodOptional<zod.ZodNumber>;
    endYear: zod.ZodOptional<zod.ZodNumber>;
    location: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>>;
  organizations: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    position: zod.ZodString;
    organizationName: zod.ZodString;
    description: zod.ZodOptional<zod.ZodString>;
    city: zod.ZodOptional<zod.ZodString>;
    startYear: zod.ZodOptional<zod.ZodNumber>;
    endYear: zod.ZodOptional<zod.ZodNumber>;
  }, zod.z.core.$strip>>>;
  certifications: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodString;
    publisher: zod.ZodString;
    publishDate: zod.ZodOptional<zod.z.ZodISODate>;
    verificationUrl: zod.ZodOptional<zod.ZodURL>;
    certificateNumber: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>>;
}, zod.z.core.$strip>, zod.ZodUnknown>;
declare const DownloadCvParams: zod.ZodObject<{
  userId: zod.ZodUUID;
}, zod.z.core.$strip>;
declare const DownloadCvQueryParams: zod.ZodObject<{
  type: zod.ZodEnum<{
    draft: "draft";
    saved: "saved";
  }>;
  preview: zod.ZodBoolean;
}, zod.z.core.$strip>;
declare const AiGenerateCvBody: zod.ZodObject<{}, zod.z.core.$loose>;
declare const listBootcampsQueryQueryMax = 255;
declare const ListBootcampsQueryParams: zod.ZodObject<{
  query: zod.ZodOptional<zod.ZodString>;
  page: zod.ZodOptional<zod.ZodNumber>;
  limit: zod.ZodOptional<zod.ZodNumber>;
}, zod.z.core.$strip>;
declare const listBootcampsResponseProfessionRoleMax = 255;
declare const listBootcampsResponseNameMax = 255;
declare const listBootcampsResponseRedirectUrlMax = 500;
declare const listBootcampsResponsePublisherMax = 255;
declare const ListBootcampsResponseItem: zod.ZodObject<{
  id: zod.ZodUUID;
  professionRole: zod.ZodString;
  thumbnailFileId: zod.ZodUUID;
  name: zod.ZodString;
  redirectUrl: zod.ZodURL;
  publisher: zod.ZodString;
  startDate: zod.z.ZodISODate;
  createdAt: zod.z.ZodISODateTime;
  updatedAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>;
declare const ListBootcampsResponse: zod.ZodArray<zod.ZodObject<{
  id: zod.ZodUUID;
  professionRole: zod.ZodString;
  thumbnailFileId: zod.ZodUUID;
  name: zod.ZodString;
  redirectUrl: zod.ZodURL;
  publisher: zod.ZodString;
  startDate: zod.z.ZodISODate;
  createdAt: zod.z.ZodISODateTime;
  updatedAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>>;
declare const GetBootcampsFeedQueryParams: zod.ZodObject<{
  page: zod.ZodOptional<zod.ZodNumber>;
  limit: zod.ZodOptional<zod.ZodNumber>;
}, zod.z.core.$strip>;
declare const getBootcampsFeedResponseProfessionRoleMax = 255;
declare const getBootcampsFeedResponseNameMax = 255;
declare const getBootcampsFeedResponseRedirectUrlMax = 500;
declare const getBootcampsFeedResponsePublisherMax = 255;
declare const GetBootcampsFeedResponseItem: zod.ZodObject<{
  id: zod.ZodUUID;
  professionRole: zod.ZodString;
  thumbnailFileId: zod.ZodUUID;
  name: zod.ZodString;
  redirectUrl: zod.ZodURL;
  publisher: zod.ZodString;
  startDate: zod.z.ZodISODate;
  createdAt: zod.z.ZodISODateTime;
  updatedAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>;
declare const GetBootcampsFeedResponse: zod.ZodArray<zod.ZodObject<{
  id: zod.ZodUUID;
  professionRole: zod.ZodString;
  thumbnailFileId: zod.ZodUUID;
  name: zod.ZodString;
  redirectUrl: zod.ZodURL;
  publisher: zod.ZodString;
  startDate: zod.z.ZodISODate;
  createdAt: zod.z.ZodISODateTime;
  updatedAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>>;
declare const listCertificationsQueryQueryMax = 255;
declare const ListCertificationsQueryParams: zod.ZodObject<{
  query: zod.ZodOptional<zod.ZodString>;
  page: zod.ZodOptional<zod.ZodNumber>;
  limit: zod.ZodOptional<zod.ZodNumber>;
}, zod.z.core.$strip>;
declare const listCertificationsResponseProfessionRoleMax = 255;
declare const listCertificationsResponseNameMax = 255;
declare const listCertificationsResponseRedirectUrlMax = 500;
declare const listCertificationsResponsePublisherMax = 255;
declare const ListCertificationsResponseItem: zod.ZodObject<{
  id: zod.ZodUUID;
  professionRole: zod.ZodString;
  thumbnailFileId: zod.ZodUUID;
  name: zod.ZodString;
  redirectUrl: zod.ZodURL;
  publisher: zod.ZodString;
  createdAt: zod.z.ZodISODateTime;
  updatedAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>;
declare const ListCertificationsResponse: zod.ZodArray<zod.ZodObject<{
  id: zod.ZodUUID;
  professionRole: zod.ZodString;
  thumbnailFileId: zod.ZodUUID;
  name: zod.ZodString;
  redirectUrl: zod.ZodURL;
  publisher: zod.ZodString;
  createdAt: zod.z.ZodISODateTime;
  updatedAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>>;
declare const GetCertificationsFeedQueryParams: zod.ZodObject<{
  page: zod.ZodOptional<zod.ZodNumber>;
  limit: zod.ZodOptional<zod.ZodNumber>;
}, zod.z.core.$strip>;
declare const getCertificationsFeedResponseProfessionRoleMax = 255;
declare const getCertificationsFeedResponseNameMax = 255;
declare const getCertificationsFeedResponseRedirectUrlMax = 500;
declare const getCertificationsFeedResponsePublisherMax = 255;
declare const GetCertificationsFeedResponseItem: zod.ZodObject<{
  id: zod.ZodUUID;
  professionRole: zod.ZodString;
  thumbnailFileId: zod.ZodUUID;
  name: zod.ZodString;
  redirectUrl: zod.ZodURL;
  publisher: zod.ZodString;
  createdAt: zod.z.ZodISODateTime;
  updatedAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>;
declare const GetCertificationsFeedResponse: zod.ZodArray<zod.ZodObject<{
  id: zod.ZodUUID;
  professionRole: zod.ZodString;
  thumbnailFileId: zod.ZodUUID;
  name: zod.ZodString;
  redirectUrl: zod.ZodURL;
  publisher: zod.ZodString;
  createdAt: zod.z.ZodISODateTime;
  updatedAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>>;
declare const listCommunitiesQueryQueryMax = 255;
declare const ListCommunitiesQueryParams: zod.ZodObject<{
  query: zod.ZodOptional<zod.ZodString>;
  page: zod.ZodOptional<zod.ZodNumber>;
  limit: zod.ZodOptional<zod.ZodNumber>;
}, zod.z.core.$strip>;
declare const listCommunitiesResponseNameMax = 255;
declare const listCommunitiesResponseDescriptionMax = 2000;
declare const ListCommunitiesResponseItem: zod.ZodObject<{
  id: zod.ZodUUID;
  name: zod.ZodString;
  totalMembers: zod.ZodNumber;
  avatarFileId: zod.ZodUUID;
  description: zod.ZodString;
}, zod.z.core.$strip>;
declare const ListCommunitiesResponse: zod.ZodArray<zod.ZodObject<{
  id: zod.ZodUUID;
  name: zod.ZodString;
  totalMembers: zod.ZodNumber;
  avatarFileId: zod.ZodUUID;
  description: zod.ZodString;
}, zod.z.core.$strip>>;
declare const JoinCommunityBody: zod.ZodObject<{
  communityId: zod.ZodUUID;
}, zod.z.core.$strip>;
declare const LeaveCommunityBody: zod.ZodObject<{
  communityId: zod.ZodUUID;
}, zod.z.core.$strip>;
declare const GetCommunitiesFeedQueryParams: zod.ZodObject<{
  page: zod.ZodOptional<zod.ZodNumber>;
  limit: zod.ZodOptional<zod.ZodNumber>;
}, zod.z.core.$strip>;
declare const getCommunitiesFeedResponseNameMax = 255;
declare const getCommunitiesFeedResponseDescriptionMax = 2000;
declare const GetCommunitiesFeedResponseItem: zod.ZodObject<{
  id: zod.ZodUUID;
  name: zod.ZodString;
  totalMembers: zod.ZodNumber;
  avatarFileId: zod.ZodUUID;
  description: zod.ZodString;
}, zod.z.core.$strip>;
declare const GetCommunitiesFeedResponse: zod.ZodArray<zod.ZodObject<{
  id: zod.ZodUUID;
  name: zod.ZodString;
  totalMembers: zod.ZodNumber;
  avatarFileId: zod.ZodUUID;
  description: zod.ZodString;
}, zod.z.core.$strip>>;
declare const createPostBodyOneContentMax = 2000;
declare const CreatePostBody: zod.ZodIntersection<zod.ZodObject<{
  communityId: zod.ZodOptional<zod.ZodUUID>;
  content: zod.ZodOptional<zod.ZodString>;
}, zod.z.core.$strip>, zod.ZodUnknown>;
declare const getPostsFeedResponseOneContentMax = 2000;
declare const GetPostsFeedResponseItem: zod.ZodIntersection<zod.ZodObject<{
  communityId: zod.ZodOptional<zod.ZodUUID>;
  content: zod.ZodOptional<zod.ZodString>;
}, zod.z.core.$strip>, zod.ZodObject<{
  id: zod.ZodUUID;
  userId: zod.ZodUUID;
  totalLikes: zod.ZodNumber;
  createdAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>>;
declare const GetPostsFeedResponse: zod.ZodArray<zod.ZodIntersection<zod.ZodObject<{
  communityId: zod.ZodOptional<zod.ZodUUID>;
  content: zod.ZodOptional<zod.ZodString>;
}, zod.z.core.$strip>, zod.ZodObject<{
  id: zod.ZodUUID;
  userId: zod.ZodUUID;
  totalLikes: zod.ZodNumber;
  createdAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>>>;
declare const LikePostParams: zod.ZodObject<{
  postId: zod.ZodUUID;
}, zod.z.core.$strip>;
declare const DeletePostLikeParams: zod.ZodObject<{
  postId: zod.ZodUUID;
}, zod.z.core.$strip>;
declare const ListCommentsParams: zod.ZodObject<{
  postId: zod.ZodUUID;
}, zod.z.core.$strip>;
declare const listCommentsResponseContentMax = 2000;
declare const ListCommentsResponseItem: zod.ZodObject<{
  userId: zod.ZodUUID;
  postId: zod.ZodUUID;
  parentId: zod.ZodOptional<zod.ZodUUID>;
  content: zod.ZodString;
}, zod.z.core.$strip>;
declare const ListCommentsResponse: zod.ZodArray<zod.ZodObject<{
  userId: zod.ZodUUID;
  postId: zod.ZodUUID;
  parentId: zod.ZodOptional<zod.ZodUUID>;
  content: zod.ZodString;
}, zod.z.core.$strip>>;
declare const CreateCommentParams: zod.ZodObject<{
  postId: zod.ZodUUID;
}, zod.z.core.$strip>;
declare const createCommentBodyContentMax = 2000;
declare const CreateCommentBody: zod.ZodObject<{
  parentId: zod.ZodOptional<zod.ZodUUID>;
  content: zod.ZodString;
}, zod.z.core.$strip>;
declare const DeleteCommentParams: zod.ZodObject<{
  postId: zod.ZodUUID;
  commentId: zod.ZodUUID;
}, zod.z.core.$strip>;
declare const GetFileParams: zod.ZodObject<{
  fileId: zod.ZodUUID;
}, zod.z.core.$strip>;
declare const UploadFileBody: zod.ZodObject<{
  file: zod.ZodCustom<File, File>;
}, zod.z.core.$strip>;
//#endregion
export { AiGenerateCvBody, AuthEmailResendBody, ChangeUserPasswordBody, CreateCommentBody, CreateCommentParams, CreatePostBody, DeleteCommentParams, DeletePostLikeParams, DownloadCvParams, DownloadCvQueryParams, GetBootcampsFeedQueryParams, GetBootcampsFeedResponse, GetBootcampsFeedResponseItem, GetCertificationsFeedQueryParams, GetCertificationsFeedResponse, GetCertificationsFeedResponseItem, GetCommunitiesFeedQueryParams, GetCommunitiesFeedResponse, GetCommunitiesFeedResponseItem, GetCvResponse, GetFileParams, GetPostsFeedResponse, GetPostsFeedResponseItem, GetProftoParams, GetProftoResponse, JoinCommunityBody, LeaveCommunityBody, LikePostParams, ListBootcampsQueryParams, ListBootcampsResponse, ListBootcampsResponseItem, ListCertificationsQueryParams, ListCertificationsResponse, ListCertificationsResponseItem, ListCommentsParams, ListCommentsResponse, ListCommentsResponseItem, ListCommunitiesQueryParams, ListCommunitiesResponse, ListCommunitiesResponseItem, ListProftosQueryParams, ListProftosResponse, ListProftosResponseItem, LoginUserBody, LoginUserResponse, RefreshTokenResponse, RegisterUserBody, ResetUserPasswordBody, SendPasswordResetEmailBody, UpdateCvBody, UpdateProftoBody, UploadFileBody, VerifyUserEmailBody, changeUserPasswordBodyNewPasswordMax, changeUserPasswordBodyNewPasswordMin, changeUserPasswordBodyOldPasswordMax, changeUserPasswordBodyOldPasswordMin, createCommentBodyContentMax, createPostBodyOneContentMax, getBootcampsFeedResponseNameMax, getBootcampsFeedResponseProfessionRoleMax, getBootcampsFeedResponsePublisherMax, getBootcampsFeedResponseRedirectUrlMax, getCertificationsFeedResponseNameMax, getCertificationsFeedResponseProfessionRoleMax, getCertificationsFeedResponsePublisherMax, getCertificationsFeedResponseRedirectUrlMax, getCommunitiesFeedResponseDescriptionMax, getCommunitiesFeedResponseNameMax, getCvResponseOneCertificationsItemCertificateNumberMax, getCvResponseOneCertificationsItemNameMax, getCvResponseOneCertificationsItemPublisherMax, getCvResponseOneCertificationsItemVerificationUrlMax, getCvResponseOneCoursesItemDescriptionMax, getCvResponseOneCoursesItemEndYearMin, getCvResponseOneCoursesItemLocationMax, getCvResponseOneCoursesItemNameMax, getCvResponseOneCoursesItemOrganizerMax, getCvResponseOneCoursesItemStartYearMin, getCvResponseOneCoursesItemUrlMax, getCvResponseOneEducationsItemCityMax, getCvResponseOneEducationsItemEducationLevelMax, getCvResponseOneEducationsItemStudyProgramMax, getCvResponseOneOrganizationsItemCityMax, getCvResponseOneOrganizationsItemDescriptionMax, getCvResponseOneOrganizationsItemOrganizationNameMax, getCvResponseOneOrganizationsItemPositionMax, getCvResponseOnePersonalInformationFirstNameMax, getCvResponseOnePersonalInformationLastNameMax, getCvResponseOnePersonalInformationPhoneRegExp, getCvResponseOnePersonalInformationProfileMax, getCvResponseOnePersonalInformationWebsiteUrlMax, getCvResponseOneSkillsItemNameMax, getCvResponseOneWorkExperiencesItemCityMax, getCvResponseOneWorkExperiencesItemCompanyNameMax, getCvResponseOneWorkExperiencesItemDescriptionMax, getCvResponseOneWorkExperiencesItemEmploymentStatusMax, getCvResponseOneWorkExperiencesItemPositionMax, getPostsFeedResponseOneContentMax, getProftoPathUsernameMax, getProftoPathUsernameMin, getProftoPathUsernameRegExp, getProftoResponseOneCertificatesItemNameMax, getProftoResponseOneCertificatesItemPublisherMax, getProftoResponseOneEmailMax, getProftoResponseOneExperiencesItemDescriptionMax, getProftoResponseOneExperiencesItemNameMax, getProftoResponseOneLastEducationMax, getProftoResponseOneLinksItemNameMax, getProftoResponseOneLinksItemUrlMax, getProftoResponseOneNameMax, getProftoResponseOneProfessionRoleMax, getProftoResponseOneProjectsItemDescriptionMax, getProftoResponseOneProjectsItemImageFileIdMax, getProftoResponseOneProjectsItemNameMax, getProftoResponseOneProjectsItemProfessionRoleMax, getProftoResponseOneSummaryMax, listBootcampsQueryQueryMax, listBootcampsResponseNameMax, listBootcampsResponseProfessionRoleMax, listBootcampsResponsePublisherMax, listBootcampsResponseRedirectUrlMax, listCertificationsQueryQueryMax, listCertificationsResponseNameMax, listCertificationsResponseProfessionRoleMax, listCertificationsResponsePublisherMax, listCertificationsResponseRedirectUrlMax, listCommentsResponseContentMax, listCommunitiesQueryQueryMax, listCommunitiesResponseDescriptionMax, listCommunitiesResponseNameMax, listProftosQueryQueryMax, listProftosResponseNameMax, listProftosResponseProfessionRoleMax, listProftosResponseUsernameRegExp, loginUserBodyPasswordMax, loginUserBodyPasswordMin, registerUserBodyPasswordMax, registerUserBodyPasswordMin, registerUserBodyUsernameRegExp, resetUserPasswordBodyNewPasswordMax, resetUserPasswordBodyNewPasswordMin, resetUserPasswordBodyOldPasswordMax, resetUserPasswordBodyOldPasswordMin, updateCvBodyOneCertificationsItemCertificateNumberMax, updateCvBodyOneCertificationsItemNameMax, updateCvBodyOneCertificationsItemPublisherMax, updateCvBodyOneCertificationsItemVerificationUrlMax, updateCvBodyOneCoursesItemDescriptionMax, updateCvBodyOneCoursesItemEndYearMin, updateCvBodyOneCoursesItemLocationMax, updateCvBodyOneCoursesItemNameMax, updateCvBodyOneCoursesItemOrganizerMax, updateCvBodyOneCoursesItemStartYearMin, updateCvBodyOneCoursesItemUrlMax, updateCvBodyOneEducationsItemCityMax, updateCvBodyOneEducationsItemEducationLevelMax, updateCvBodyOneEducationsItemStudyProgramMax, updateCvBodyOneOrganizationsItemCityMax, updateCvBodyOneOrganizationsItemDescriptionMax, updateCvBodyOneOrganizationsItemOrganizationNameMax, updateCvBodyOneOrganizationsItemPositionMax, updateCvBodyOnePersonalInformationFirstNameMax, updateCvBodyOnePersonalInformationLastNameMax, updateCvBodyOnePersonalInformationPhoneRegExp, updateCvBodyOnePersonalInformationProfileMax, updateCvBodyOnePersonalInformationWebsiteUrlMax, updateCvBodyOneSkillsItemNameMax, updateCvBodyOneWorkExperiencesItemCityMax, updateCvBodyOneWorkExperiencesItemCompanyNameMax, updateCvBodyOneWorkExperiencesItemDescriptionMax, updateCvBodyOneWorkExperiencesItemEmploymentStatusMax, updateCvBodyOneWorkExperiencesItemPositionMax, updateProftoBodyOneCertificatesItemNameMax, updateProftoBodyOneCertificatesItemPublisherMax, updateProftoBodyOneEmailMax, updateProftoBodyOneExperiencesItemDescriptionMax, updateProftoBodyOneExperiencesItemNameMax, updateProftoBodyOneLastEducationMax, updateProftoBodyOneLinksItemNameMax, updateProftoBodyOneLinksItemUrlMax, updateProftoBodyOneNameMax, updateProftoBodyOneProfessionRoleMax, updateProftoBodyOneProjectsItemDescriptionMax, updateProftoBodyOneProjectsItemImageFileIdMax, updateProftoBodyOneProjectsItemNameMax, updateProftoBodyOneProjectsItemProfessionRoleMax, updateProftoBodyOneSummaryMax };