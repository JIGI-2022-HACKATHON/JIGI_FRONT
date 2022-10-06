import axios, { AxiosRequestConfig } from "axios";

export const instance = axios.create({
  baseURL: "http://43.201.65.249:8080/",
  timeout: 10000,
});

instance.interceptors.request.use(
  async function (request) {
    if (typeof window === "undefined") return request;
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
