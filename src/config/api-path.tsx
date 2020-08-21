const webSocketBase = process.env.REACT_APP_API_WS;

export const paths = {
  LOGIN: `/login`,
  REGISTER: `/register`,
  REGISTER_USER_STEP_COMPANY: `/register/company`,
  REGISTER_USER_STEP_SIGNATORY: `/register/signatory`,
  DASHBOARD: `/dashboard`,
};

export const webSockets = {
  TEMPLATE_LOAD_FILES: `${webSocketBase}/api/v1/loadFiles`,
};
