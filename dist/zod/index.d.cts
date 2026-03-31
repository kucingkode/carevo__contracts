import * as zod from "zod";

//#region generated/zod/index.d.ts
/**
 * @summary [registerUser] Register a new user using email and password

 */
declare const registerUserBodyUsernameRegExp: RegExp;
declare const registerUserBodyEmailMax = 255;
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
declare const loginUserBodyEmailMax = 255;
declare const loginUserBodyPasswordMin = 8;
declare const loginUserBodyPasswordMax = 128;
declare const LoginUserBody: zod.ZodObject<{
  email: zod.ZodEmail;
  password: zod.ZodString;
  rememberMe: zod.ZodBoolean;
}, zod.z.core.$strip>;
declare const LoginUserResponse: zod.ZodObject<{
  userId: zod.ZodOptional<zod.ZodUUID>;
  accessToken: zod.ZodOptional<zod.ZodString>;
}, zod.z.core.$strip>;
/**
 * @summary [refreshUserToken] Refresh token

 */
declare const RefreshUserTokenResponse: zod.ZodObject<{
  accessToken: zod.ZodString;
}, zod.z.core.$strip>;
/**
 * Send reset password token to the user's email address.
Previous token will be invalidated and a new one will be issued.

 * @summary [sendPasswordResetEmail] Request password reset token

 */
declare const sendPasswordResetEmailBodyEmailMax = 255;
declare const SendPasswordResetEmailBody: zod.ZodObject<{
  email: zod.ZodEmail;
}, zod.z.core.$strip>;
/**
 * @summary [resetUserPassword] Reset user password using token

 */
declare const resetUserPasswordBodyNewPasswordMin = 8;
declare const resetUserPasswordBodyNewPasswordMax = 128;
declare const ResetUserPasswordBody: zod.ZodObject<{
  token: zod.ZodString;
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

 * @summary [resendVerificationEmail] Resend email verification token

 */
declare const resendVerificationEmailBodyEmailMax = 255;
declare const ResendVerificationEmailBody: zod.ZodObject<{
  email: zod.ZodEmail;
}, zod.z.core.$strip>;
declare const getUserResponseUsernameRegExp: RegExp;
declare const getUserResponseEmailMax = 255;
declare const GetUserResponse: zod.ZodObject<{
  userId: zod.ZodUUID;
  username: zod.ZodString;
  email: zod.ZodEmail;
}, zod.z.core.$strip>;
declare const listBootcampsQueryQueryMax = 255;
declare const listBootcampsQueryProfessionRoleMax = 255;
declare const ListBootcampsQueryParams: zod.ZodObject<{
  query: zod.ZodOptional<zod.ZodString>;
  professionRole: zod.ZodOptional<zod.ZodString>;
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
  thumbnailUrl: zod.ZodUUID;
  name: zod.ZodString;
  redirectUrl: zod.ZodURL;
  publisher: zod.ZodString;
  startDate: zod.z.ZodISODate;
  createdAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>;
declare const ListBootcampsResponse: zod.ZodArray<zod.ZodObject<{
  id: zod.ZodUUID;
  professionRole: zod.ZodString;
  thumbnailUrl: zod.ZodUUID;
  name: zod.ZodString;
  redirectUrl: zod.ZodURL;
  publisher: zod.ZodString;
  startDate: zod.z.ZodISODate;
  createdAt: zod.z.ZodISODateTime;
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
  thumbnailUrl: zod.ZodUUID;
  name: zod.ZodString;
  redirectUrl: zod.ZodURL;
  publisher: zod.ZodString;
  startDate: zod.z.ZodISODate;
  createdAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>;
declare const GetBootcampsFeedResponse: zod.ZodArray<zod.ZodObject<{
  id: zod.ZodUUID;
  professionRole: zod.ZodString;
  thumbnailUrl: zod.ZodUUID;
  name: zod.ZodString;
  redirectUrl: zod.ZodURL;
  publisher: zod.ZodString;
  startDate: zod.z.ZodISODate;
  createdAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>>;
declare const listCertificationsQueryQueryMax = 255;
declare const listCertificationsQueryProfessionRoleMax = 255;
declare const ListCertificationsQueryParams: zod.ZodObject<{
  query: zod.ZodOptional<zod.ZodString>;
  professionRole: zod.ZodOptional<zod.ZodString>;
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
  thumbnailUrl: zod.ZodUUID;
  name: zod.ZodString;
  redirectUrl: zod.ZodURL;
  publisher: zod.ZodString;
  createdAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>;
declare const ListCertificationsResponse: zod.ZodArray<zod.ZodObject<{
  id: zod.ZodUUID;
  professionRole: zod.ZodString;
  thumbnailUrl: zod.ZodUUID;
  name: zod.ZodString;
  redirectUrl: zod.ZodURL;
  publisher: zod.ZodString;
  createdAt: zod.z.ZodISODateTime;
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
  thumbnailUrl: zod.ZodUUID;
  name: zod.ZodString;
  redirectUrl: zod.ZodURL;
  publisher: zod.ZodString;
  createdAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>;
declare const GetCertificationsFeedResponse: zod.ZodArray<zod.ZodObject<{
  id: zod.ZodUUID;
  professionRole: zod.ZodString;
  thumbnailUrl: zod.ZodUUID;
  name: zod.ZodString;
  redirectUrl: zod.ZodURL;
  publisher: zod.ZodString;
  createdAt: zod.z.ZodISODateTime;
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
  createdAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>;
declare const ListCommunitiesResponse: zod.ZodArray<zod.ZodObject<{
  id: zod.ZodUUID;
  name: zod.ZodString;
  totalMembers: zod.ZodNumber;
  avatarFileId: zod.ZodUUID;
  description: zod.ZodString;
  createdAt: zod.z.ZodISODateTime;
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
  createdAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>;
declare const GetCommunitiesFeedResponse: zod.ZodArray<zod.ZodObject<{
  id: zod.ZodUUID;
  name: zod.ZodString;
  totalMembers: zod.ZodNumber;
  avatarFileId: zod.ZodUUID;
  description: zod.ZodString;
  createdAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>>;
declare const createPostBodyOneContentMax = 2000;
declare const CreatePostBody: zod.ZodIntersection<zod.ZodObject<{
  communityId: zod.ZodOptional<zod.ZodUUID>;
  content: zod.ZodOptional<zod.ZodString>;
}, zod.z.core.$strip>, zod.ZodUnknown>;
declare const GetPostsFeedQueryParams: zod.ZodObject<{
  sharedPostId: zod.ZodOptional<zod.ZodUUID>;
}, zod.z.core.$strip>;
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
  id: zod.ZodUUID;
  userId: zod.ZodUUID;
  postId: zod.ZodUUID;
  parentId: zod.ZodOptional<zod.ZodUUID>;
  content: zod.ZodString;
  createdAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>;
declare const ListCommentsResponse: zod.ZodArray<zod.ZodObject<{
  id: zod.ZodUUID;
  userId: zod.ZodUUID;
  postId: zod.ZodUUID;
  parentId: zod.ZodOptional<zod.ZodUUID>;
  content: zod.ZodString;
  createdAt: zod.z.ZodISODateTime;
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
declare const aiGenerateCvBodyInputMax = 2000;
declare const AiGenerateCvBody: zod.ZodObject<{
  input: zod.ZodString;
  section: zod.ZodEnum<{
    PROFILE: "PROFILE";
    WORK_EXPERIENCE_DESCRIPTION: "WORK_EXPERIENCE_DESCRIPTION";
    ORGANIZATION_DESCRIPTION: "ORGANIZATION_DESCRIPTION";
    COURSE_DESCRIPTION: "COURSE_DESCRIPTION";
    EDUCATION_DESCRIPTION: "EDUCATION_DESCRIPTION";
  }>;
}, zod.z.core.$strip>;
declare const listUsersQueryQueryMax = 255;
declare const ListUsersQueryParams: zod.ZodObject<{
  query: zod.ZodOptional<zod.ZodString>;
  page: zod.ZodOptional<zod.ZodNumber>;
  limit: zod.ZodOptional<zod.ZodNumber>;
}, zod.z.core.$strip>;
declare const listUsersResponseUsernameRegExp: RegExp;
declare const listUsersResponseNameMax = 255;
declare const listUsersResponseProfessionRoleMax = 255;
declare const ListUsersResponseItem: zod.ZodObject<{
  userId: zod.ZodUUID;
  username: zod.ZodString;
  name: zod.ZodString;
  avatarFileId: zod.ZodUUID;
  professionRole: zod.ZodString;
}, zod.z.core.$strip>;
declare const ListUsersResponse: zod.ZodArray<zod.ZodObject<{
  userId: zod.ZodUUID;
  username: zod.ZodString;
  name: zod.ZodString;
  avatarFileId: zod.ZodUUID;
  professionRole: zod.ZodString;
}, zod.z.core.$strip>>;
declare const ListUserCommunitiesParams: zod.ZodObject<{
  userId: zod.ZodUUID;
}, zod.z.core.$strip>;
declare const ListUserCommunitiesResponseItem: zod.ZodUUID;
declare const ListUserCommunitiesResponse: zod.ZodArray<zod.ZodUUID>;
declare const getUserProftoPathUsernameMin = 3;
declare const getUserProftoPathUsernameMax = 30;
declare const getUserProftoPathUsernameRegExp: RegExp;
declare const GetUserProftoParams: zod.ZodObject<{
  username: zod.ZodString;
}, zod.z.core.$strip>;
declare const getUserProftoResponseOneNameMax = 255;
declare const getUserProftoResponseOneProfessionRoleMax = 255;
declare const getUserProftoResponseOneLastEducationMax = 255;
declare const getUserProftoResponseOneEmailMax = 255;
declare const getUserProftoResponseOneSummaryMax = 2000;
declare const getUserProftoResponseOneCertificatesItemNameMax = 255;
declare const getUserProftoResponseOneCertificatesItemPublisherMax = 255;
declare const getUserProftoResponseOneExperiencesItemNameMax = 255;
declare const getUserProftoResponseOneExperiencesItemDescriptionMax = 2000;
declare const getUserProftoResponseOneProjectsItemNameMax = 255;
declare const getUserProftoResponseOneProjectsItemProfessionRoleMax = 255;
declare const getUserProftoResponseOneProjectsItemImageFileIdMax = 255;
declare const getUserProftoResponseOneProjectsItemDescriptionMax = 2000;
declare const getUserProftoResponseOneLinksItemNameMax = 255;
declare const getUserProftoResponseOneLinksItemUrlMax = 500;
declare const GetUserProftoResponse: zod.ZodIntersection<zod.ZodObject<{
  avatarFileId: zod.ZodOptional<zod.ZodUUID>;
  name: zod.ZodOptional<zod.ZodString>;
  professionRole: zod.ZodOptional<zod.ZodString>;
  lastEducation: zod.ZodOptional<zod.ZodString>;
  email: zod.ZodOptional<zod.ZodEmail>;
  summary: zod.ZodOptional<zod.ZodString>;
  cvFileId: zod.ZodOptional<zod.ZodUUID>;
  certificates: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    imageFileId: zod.ZodUUID;
    name: zod.ZodString;
    publishDate: zod.z.ZodISODate;
    publisher: zod.ZodString;
  }, zod.z.core.$strip>>>;
  experiences: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodString;
    startYear: zod.ZodNumber;
    endYear: zod.ZodNumber;
    description: zod.ZodString;
  }, zod.z.core.$strip>>>;
  projects: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodString;
    professionRole: zod.ZodString;
    imageFileId: zod.ZodString;
    date: zod.z.ZodISODate;
    description: zod.ZodString;
  }, zod.z.core.$strip>>>;
  links: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodString;
    url: zod.ZodURL;
  }, zod.z.core.$strip>>>;
}, zod.z.core.$strip>, zod.ZodObject<{
  userId: zod.ZodUUID;
  updatedAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>>;
declare const UpdateUserProftoParams: zod.ZodObject<{
  userId: zod.ZodUUID;
}, zod.z.core.$strip>;
declare const updateUserProftoBodyNameMax = 255;
declare const updateUserProftoBodyProfessionRoleMax = 255;
declare const updateUserProftoBodyLastEducationMax = 255;
declare const updateUserProftoBodyEmailMax = 255;
declare const updateUserProftoBodySummaryMax = 2000;
declare const updateUserProftoBodyCertificatesItemNameMax = 255;
declare const updateUserProftoBodyCertificatesItemPublisherMax = 255;
declare const updateUserProftoBodyExperiencesItemNameMax = 255;
declare const updateUserProftoBodyExperiencesItemDescriptionMax = 2000;
declare const updateUserProftoBodyProjectsItemNameMax = 255;
declare const updateUserProftoBodyProjectsItemProfessionRoleMax = 255;
declare const updateUserProftoBodyProjectsItemImageFileIdMax = 255;
declare const updateUserProftoBodyProjectsItemDescriptionMax = 2000;
declare const updateUserProftoBodyLinksItemNameMax = 255;
declare const updateUserProftoBodyLinksItemUrlMax = 500;
declare const UpdateUserProftoBody: zod.ZodObject<{
  avatarFileId: zod.ZodOptional<zod.ZodUUID>;
  name: zod.ZodOptional<zod.ZodString>;
  professionRole: zod.ZodOptional<zod.ZodString>;
  lastEducation: zod.ZodOptional<zod.ZodString>;
  email: zod.ZodOptional<zod.ZodEmail>;
  summary: zod.ZodOptional<zod.ZodString>;
  cvFileId: zod.ZodOptional<zod.ZodUUID>;
  certificates: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    imageFileId: zod.ZodUUID;
    name: zod.ZodString;
    publishDate: zod.z.ZodISODate;
    publisher: zod.ZodString;
  }, zod.z.core.$strip>>>;
  experiences: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodString;
    startYear: zod.ZodNumber;
    endYear: zod.ZodNumber;
    description: zod.ZodString;
  }, zod.z.core.$strip>>>;
  projects: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodString;
    professionRole: zod.ZodString;
    imageFileId: zod.ZodString;
    date: zod.z.ZodISODate;
    description: zod.ZodString;
  }, zod.z.core.$strip>>>;
  links: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodString;
    url: zod.ZodURL;
  }, zod.z.core.$strip>>>;
}, zod.z.core.$strip>;
declare const GetCvParams: zod.ZodObject<{
  userId: zod.ZodUUID;
}, zod.z.core.$strip>;
declare const getCvResponseOnePersonalInformationFirstNameMax = 255;
declare const getCvResponseOnePersonalInformationLastNameMax = 255;
declare const getCvResponseOnePersonalInformationProfileMax = 2000;
declare const getCvResponseOnePersonalInformationWebsiteUrlMax = 500;
declare const getCvResponseOnePersonalInformationPhoneRegExp: RegExp;
declare const getCvResponseOneSkillsItemNameMax = 255;
declare const getCvResponseOneEducationsItemInstitutionMax = 255;
declare const getCvResponseOneEducationsItemCityMax = 255;
declare const getCvResponseOneEducationsItemStudyProgramMax = 255;
declare const getCvResponseOneEducationsItemDescriptionMax = 2000;
declare const getCvResponseOneWorkExperiencesItemPositionMax = 255;
declare const getCvResponseOneWorkExperiencesItemCompanyNameMax = 255;
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
  personalInformation: zod.ZodOptional<zod.ZodObject<{
    firstName: zod.ZodOptional<zod.ZodString>;
    lastName: zod.ZodOptional<zod.ZodString>;
    profile: zod.ZodOptional<zod.ZodString>;
    websiteUrl: zod.ZodOptional<zod.ZodURL>;
    phone: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>;
  skills: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodString;
    score: zod.ZodNumber;
  }, zod.z.core.$strip>>>;
  educations: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    educationLevel: zod.ZodEnum<{
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
    institution: zod.ZodString;
    city: zod.ZodOptional<zod.ZodString>;
    studyProgram: zod.ZodOptional<zod.ZodString>;
    startYear: zod.ZodOptional<zod.ZodNumber>;
    endYear: zod.ZodOptional<zod.ZodNumber>;
    score: zod.ZodOptional<zod.ZodNumber>;
    maxScale: zod.ZodOptional<zod.ZodNumber>;
    description: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>>;
  workExperiences: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    position: zod.ZodString;
    companyName: zod.ZodURL;
    employmentStatus: zod.ZodOptional<zod.ZodEnum<{
      "Pegawai Tetap": "Pegawai Tetap";
      "Pegawai Kontrak": "Pegawai Kontrak";
      "Pegawai Magang": "Pegawai Magang";
      Freelance: "Freelance";
      "Paruh Waktu": "Paruh Waktu";
    }>>;
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
}, zod.z.core.$strip>, zod.ZodObject<{
  userId: zod.ZodUUID;
  updatedAt: zod.z.ZodISODateTime;
}, zod.z.core.$strip>>;
declare const UpdateCvParams: zod.ZodObject<{
  userId: zod.ZodUUID;
}, zod.z.core.$strip>;
declare const updateCvBodyPersonalInformationFirstNameMax = 255;
declare const updateCvBodyPersonalInformationLastNameMax = 255;
declare const updateCvBodyPersonalInformationProfileMax = 2000;
declare const updateCvBodyPersonalInformationWebsiteUrlMax = 500;
declare const updateCvBodyPersonalInformationPhoneRegExp: RegExp;
declare const updateCvBodySkillsItemNameMax = 255;
declare const updateCvBodyEducationsItemInstitutionMax = 255;
declare const updateCvBodyEducationsItemCityMax = 255;
declare const updateCvBodyEducationsItemStudyProgramMax = 255;
declare const updateCvBodyEducationsItemDescriptionMax = 2000;
declare const updateCvBodyWorkExperiencesItemPositionMax = 255;
declare const updateCvBodyWorkExperiencesItemCompanyNameMax = 255;
declare const updateCvBodyWorkExperiencesItemCityMax = 255;
declare const updateCvBodyWorkExperiencesItemDescriptionMax = 2000;
declare const updateCvBodyCoursesItemNameMax = 255;
declare const updateCvBodyCoursesItemOrganizerMax = 255;
declare const updateCvBodyCoursesItemUrlMax = 500;
declare const updateCvBodyCoursesItemDescriptionMax = 2000;
declare const updateCvBodyCoursesItemStartYearMin = 1900;
declare const updateCvBodyCoursesItemEndYearMin = 1900;
declare const updateCvBodyCoursesItemLocationMax = 255;
declare const updateCvBodyOrganizationsItemPositionMax = 255;
declare const updateCvBodyOrganizationsItemOrganizationNameMax = 255;
declare const updateCvBodyOrganizationsItemDescriptionMax = 2000;
declare const updateCvBodyOrganizationsItemCityMax = 255;
declare const updateCvBodyCertificationsItemNameMax = 255;
declare const updateCvBodyCertificationsItemPublisherMax = 255;
declare const updateCvBodyCertificationsItemVerificationUrlMax = 500;
declare const updateCvBodyCertificationsItemCertificateNumberMax = 255;
declare const UpdateCvBody: zod.ZodObject<{
  personalInformation: zod.ZodOptional<zod.ZodObject<{
    firstName: zod.ZodOptional<zod.ZodString>;
    lastName: zod.ZodOptional<zod.ZodString>;
    profile: zod.ZodOptional<zod.ZodString>;
    websiteUrl: zod.ZodOptional<zod.ZodURL>;
    phone: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>;
  skills: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    name: zod.ZodString;
    score: zod.ZodNumber;
  }, zod.z.core.$strip>>>;
  educations: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    educationLevel: zod.ZodEnum<{
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
    institution: zod.ZodString;
    city: zod.ZodOptional<zod.ZodString>;
    studyProgram: zod.ZodOptional<zod.ZodString>;
    startYear: zod.ZodOptional<zod.ZodNumber>;
    endYear: zod.ZodOptional<zod.ZodNumber>;
    score: zod.ZodOptional<zod.ZodNumber>;
    maxScale: zod.ZodOptional<zod.ZodNumber>;
    description: zod.ZodOptional<zod.ZodString>;
  }, zod.z.core.$strip>>>;
  workExperiences: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
    position: zod.ZodString;
    companyName: zod.ZodURL;
    employmentStatus: zod.ZodOptional<zod.ZodEnum<{
      "Pegawai Tetap": "Pegawai Tetap";
      "Pegawai Kontrak": "Pegawai Kontrak";
      "Pegawai Magang": "Pegawai Magang";
      Freelance: "Freelance";
      "Paruh Waktu": "Paruh Waktu";
    }>>;
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
}, zod.z.core.$strip>;
declare const DownloadCvParams: zod.ZodObject<{
  userId: zod.ZodUUID;
}, zod.z.core.$strip>;
declare const DownloadCvQueryParams: zod.ZodObject<{
  preview: zod.ZodBoolean;
}, zod.z.core.$strip>;
declare const SaveCvParams: zod.ZodObject<{
  userId: zod.ZodUUID;
}, zod.z.core.$strip>;
//#endregion
export { AiGenerateCvBody, ChangeUserPasswordBody, CreateCommentBody, CreateCommentParams, CreatePostBody, DeleteCommentParams, DeletePostLikeParams, DownloadCvParams, DownloadCvQueryParams, GetBootcampsFeedQueryParams, GetBootcampsFeedResponse, GetBootcampsFeedResponseItem, GetCertificationsFeedQueryParams, GetCertificationsFeedResponse, GetCertificationsFeedResponseItem, GetCommunitiesFeedQueryParams, GetCommunitiesFeedResponse, GetCommunitiesFeedResponseItem, GetCvParams, GetCvResponse, GetFileParams, GetPostsFeedQueryParams, GetPostsFeedResponse, GetPostsFeedResponseItem, GetUserProftoParams, GetUserProftoResponse, GetUserResponse, JoinCommunityBody, LeaveCommunityBody, LikePostParams, ListBootcampsQueryParams, ListBootcampsResponse, ListBootcampsResponseItem, ListCertificationsQueryParams, ListCertificationsResponse, ListCertificationsResponseItem, ListCommentsParams, ListCommentsResponse, ListCommentsResponseItem, ListCommunitiesQueryParams, ListCommunitiesResponse, ListCommunitiesResponseItem, ListUserCommunitiesParams, ListUserCommunitiesResponse, ListUserCommunitiesResponseItem, ListUsersQueryParams, ListUsersResponse, ListUsersResponseItem, LoginUserBody, LoginUserResponse, RefreshUserTokenResponse, RegisterUserBody, ResendVerificationEmailBody, ResetUserPasswordBody, SaveCvParams, SendPasswordResetEmailBody, UpdateCvBody, UpdateCvParams, UpdateUserProftoBody, UpdateUserProftoParams, UploadFileBody, VerifyUserEmailBody, aiGenerateCvBodyInputMax, changeUserPasswordBodyNewPasswordMax, changeUserPasswordBodyNewPasswordMin, changeUserPasswordBodyOldPasswordMax, changeUserPasswordBodyOldPasswordMin, createCommentBodyContentMax, createPostBodyOneContentMax, getBootcampsFeedResponseNameMax, getBootcampsFeedResponseProfessionRoleMax, getBootcampsFeedResponsePublisherMax, getBootcampsFeedResponseRedirectUrlMax, getCertificationsFeedResponseNameMax, getCertificationsFeedResponseProfessionRoleMax, getCertificationsFeedResponsePublisherMax, getCertificationsFeedResponseRedirectUrlMax, getCommunitiesFeedResponseDescriptionMax, getCommunitiesFeedResponseNameMax, getCvResponseOneCertificationsItemCertificateNumberMax, getCvResponseOneCertificationsItemNameMax, getCvResponseOneCertificationsItemPublisherMax, getCvResponseOneCertificationsItemVerificationUrlMax, getCvResponseOneCoursesItemDescriptionMax, getCvResponseOneCoursesItemEndYearMin, getCvResponseOneCoursesItemLocationMax, getCvResponseOneCoursesItemNameMax, getCvResponseOneCoursesItemOrganizerMax, getCvResponseOneCoursesItemStartYearMin, getCvResponseOneCoursesItemUrlMax, getCvResponseOneEducationsItemCityMax, getCvResponseOneEducationsItemDescriptionMax, getCvResponseOneEducationsItemInstitutionMax, getCvResponseOneEducationsItemStudyProgramMax, getCvResponseOneOrganizationsItemCityMax, getCvResponseOneOrganizationsItemDescriptionMax, getCvResponseOneOrganizationsItemOrganizationNameMax, getCvResponseOneOrganizationsItemPositionMax, getCvResponseOnePersonalInformationFirstNameMax, getCvResponseOnePersonalInformationLastNameMax, getCvResponseOnePersonalInformationPhoneRegExp, getCvResponseOnePersonalInformationProfileMax, getCvResponseOnePersonalInformationWebsiteUrlMax, getCvResponseOneSkillsItemNameMax, getCvResponseOneWorkExperiencesItemCityMax, getCvResponseOneWorkExperiencesItemCompanyNameMax, getCvResponseOneWorkExperiencesItemDescriptionMax, getCvResponseOneWorkExperiencesItemPositionMax, getPostsFeedResponseOneContentMax, getUserProftoPathUsernameMax, getUserProftoPathUsernameMin, getUserProftoPathUsernameRegExp, getUserProftoResponseOneCertificatesItemNameMax, getUserProftoResponseOneCertificatesItemPublisherMax, getUserProftoResponseOneEmailMax, getUserProftoResponseOneExperiencesItemDescriptionMax, getUserProftoResponseOneExperiencesItemNameMax, getUserProftoResponseOneLastEducationMax, getUserProftoResponseOneLinksItemNameMax, getUserProftoResponseOneLinksItemUrlMax, getUserProftoResponseOneNameMax, getUserProftoResponseOneProfessionRoleMax, getUserProftoResponseOneProjectsItemDescriptionMax, getUserProftoResponseOneProjectsItemImageFileIdMax, getUserProftoResponseOneProjectsItemNameMax, getUserProftoResponseOneProjectsItemProfessionRoleMax, getUserProftoResponseOneSummaryMax, getUserResponseEmailMax, getUserResponseUsernameRegExp, listBootcampsQueryProfessionRoleMax, listBootcampsQueryQueryMax, listBootcampsResponseNameMax, listBootcampsResponseProfessionRoleMax, listBootcampsResponsePublisherMax, listBootcampsResponseRedirectUrlMax, listCertificationsQueryProfessionRoleMax, listCertificationsQueryQueryMax, listCertificationsResponseNameMax, listCertificationsResponseProfessionRoleMax, listCertificationsResponsePublisherMax, listCertificationsResponseRedirectUrlMax, listCommentsResponseContentMax, listCommunitiesQueryQueryMax, listCommunitiesResponseDescriptionMax, listCommunitiesResponseNameMax, listUsersQueryQueryMax, listUsersResponseNameMax, listUsersResponseProfessionRoleMax, listUsersResponseUsernameRegExp, loginUserBodyEmailMax, loginUserBodyPasswordMax, loginUserBodyPasswordMin, registerUserBodyEmailMax, registerUserBodyPasswordMax, registerUserBodyPasswordMin, registerUserBodyUsernameRegExp, resendVerificationEmailBodyEmailMax, resetUserPasswordBodyNewPasswordMax, resetUserPasswordBodyNewPasswordMin, sendPasswordResetEmailBodyEmailMax, updateCvBodyCertificationsItemCertificateNumberMax, updateCvBodyCertificationsItemNameMax, updateCvBodyCertificationsItemPublisherMax, updateCvBodyCertificationsItemVerificationUrlMax, updateCvBodyCoursesItemDescriptionMax, updateCvBodyCoursesItemEndYearMin, updateCvBodyCoursesItemLocationMax, updateCvBodyCoursesItemNameMax, updateCvBodyCoursesItemOrganizerMax, updateCvBodyCoursesItemStartYearMin, updateCvBodyCoursesItemUrlMax, updateCvBodyEducationsItemCityMax, updateCvBodyEducationsItemDescriptionMax, updateCvBodyEducationsItemInstitutionMax, updateCvBodyEducationsItemStudyProgramMax, updateCvBodyOrganizationsItemCityMax, updateCvBodyOrganizationsItemDescriptionMax, updateCvBodyOrganizationsItemOrganizationNameMax, updateCvBodyOrganizationsItemPositionMax, updateCvBodyPersonalInformationFirstNameMax, updateCvBodyPersonalInformationLastNameMax, updateCvBodyPersonalInformationPhoneRegExp, updateCvBodyPersonalInformationProfileMax, updateCvBodyPersonalInformationWebsiteUrlMax, updateCvBodySkillsItemNameMax, updateCvBodyWorkExperiencesItemCityMax, updateCvBodyWorkExperiencesItemCompanyNameMax, updateCvBodyWorkExperiencesItemDescriptionMax, updateCvBodyWorkExperiencesItemPositionMax, updateUserProftoBodyCertificatesItemNameMax, updateUserProftoBodyCertificatesItemPublisherMax, updateUserProftoBodyEmailMax, updateUserProftoBodyExperiencesItemDescriptionMax, updateUserProftoBodyExperiencesItemNameMax, updateUserProftoBodyLastEducationMax, updateUserProftoBodyLinksItemNameMax, updateUserProftoBodyLinksItemUrlMax, updateUserProftoBodyNameMax, updateUserProftoBodyProfessionRoleMax, updateUserProftoBodyProjectsItemDescriptionMax, updateUserProftoBodyProjectsItemImageFileIdMax, updateUserProftoBodyProjectsItemNameMax, updateUserProftoBodyProjectsItemProfessionRoleMax, updateUserProftoBodySummaryMax };