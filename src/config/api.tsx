// libraries/frameworks
import axios, { AxiosError } from "axios";

interface ResponseError {
  errorMessage?: string;
  message?: string;
  error?: string;
}

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const errorResponseHandler = (error: AxiosError<ResponseError>) => {
  if (error.response) {
    const status = error.response.status;
    const message =
      error.response.data.message ||
      error.response.data.errorMessage ||
      error.response.data.error;
    const reject = {
      status,
      message,
    };

    // The request was made and the server responded with a status code
    if (status === 401) {
    }

    if (status === 404) {
      return Promise.reject(reject);
    }

    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      // TODO adicionar o history traz um efeito colateral com compoentens
      //   return history.push("/");
    }

    if (status >= 400 && status < 500) {
      //   window.valid.utils.notifications.openNotificationWithIcon(
      //     "error",
      //     "Por favor, verifique os seguintes erros.",
      //     message
      //   );
    }

    if (status === 500) {
      //   _Alert.error(
      //     "Por favor, tente mais tarde.",
      //     "Ops. Houve um problema com o nosso servidor!"
      //   );
      //   return Promise.reject({
      //     status: 500,
      //     message: "Ops. Houve um problema com o nosso servidor!",
      //   });
    }

    // Se houver um error de redirect voltar o erro para ser tratado pelo app
    if (status === 302) {
      return Promise.reject(error.response);
    }

    return Promise.reject(reject);
  } else if (error.request) {
    // The request was made but no response was received
    // return error.request;
    return Promise.reject(error);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error", error.message);
  }

  return Promise.reject(error);
};

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (!!token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use((response) => response, errorResponseHandler);
export default api;
