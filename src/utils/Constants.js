export const Base_API_DEV = 'https://patient-qa.jlhl.in/api/v1';
export const Base_API_PROD = 'https://apps.jlhl.in/api/v1';

export const apiURL = {
  verifyUser: 'patientportal/Login/VerifySession',
  userDetails: 'iam/Authentication/GetUserDetails',
  forgotPassword: 'iam/Authentication/ForgotPassword',
  moduleMenuList: 'iam/Authentication/GetMenulist?moduleId=3',
  categoryList: 'bmwm/master/categorylist',
  pickupLocationList: 'bmwm/master/pickuplocations',
  collectionDetails: 'bmwm/Collection/get',
  createCollection: 'bmwm/Collection/create',
  resetPassword: 'IAM/Authentication/ResetPassword',
  loggedInUserModule: 'IAM/Authentication/GetLoggedInUserModule',
};

export const LocalStorageKey = {
  userData: 'userData',
  currentOrganizationId: 'currentOrganizationId',
  biometricSkipped: 'biometricSkipped',
  token: 'token',
};

export const EXCLUDE_AUTH_TOKEN_ORG_HEADER_ENDPOINTS = [
  apiURL.forgotPassword,
  apiURL.verifyUser,
  apiURL.resetPassword,
];

export const NUMBER_CHECK_REGEX = /^[0-9]+$/;
