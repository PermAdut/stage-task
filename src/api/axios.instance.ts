import axios, { AxiosError } from "axios";
import userInstance from "./user.api";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error: unknown) => {
    const axiosErr = error as AxiosError & {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      config: any;
    };
    const originalRequest = axiosErr.config;

    if (
      error instanceof AxiosError &&
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = false;
      try {
        const response = await userInstance.refreshToken();
        localStorage.setItem("accessToken", response.data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  },
);
export default axiosInstance;
