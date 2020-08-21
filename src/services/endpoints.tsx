const apiBase = process.env.REACT_APP_API;
const apiPathV1 = `${apiBase}/api/v1`;

export const userEndpoint = {
  ROOT: `${apiPathV1}/user`,
  ACTIVE: `${apiPathV1}/user/enable`,
  RESEND_MAIL: `${apiPathV1}/user/resendemail`,
};

export const assignerEndpoint = {
  ROOT: `${apiPathV1}/assigner`,
  DETAILS: `${apiPathV1}/assigner/details/:uuidAssigner`,
  UPDATE_LIST: `${apiPathV1}/assigner/updateList`,
  TRANSACTION: `${apiPathV1}/assigner/transaction`,
};

export const loginEndpoint = {
  LOGIN_USER: `${apiPathV1}/auth`,
  LOGIN_USER_GOOGLE: `${apiPathV1}/oauth2/google/authorize`,
};
