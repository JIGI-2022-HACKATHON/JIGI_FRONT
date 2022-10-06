import axios, { AxiosRequestConfig } from "axios";

export const instance = axios.create({
  baseURL: "",
  timeout: 10000,
});

instance.interceptors.request.use(
  async function (request) {
    const accessToken = localStorage.getItem("access_token");
    accessToken &&
      (request.headers = {
        Authorization: accessToken,
      });

    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);
