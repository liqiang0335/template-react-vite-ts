import axios from "axios";
import { notification } from "antd";

export const http = axios.create({
  baseURL: "",
  timeout: 60000,
  headers: { "Content-Type": "application/json" },
});

http.interceptors.request.use((config) => {
  const t = window.token;
  if (t) {
    config.headers.token = t;
  }
  return config;
});

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const { response } = error;
    if (response.status === 401) {
      localStorage.token = "";
      notification.error({
        message: response.data.message,
        description: "请重新登录",
      });
      window.location.reload();
      return;
    }

    notification.error({
      message: "错误: " + response.status,
      description: response.data.message,
    });

    return Promise.reject(error);
  },
);
