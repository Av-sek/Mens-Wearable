import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log("axios response");
    return response;
  },
  async (error) => {
    const originalConfig = error.config;
    if (originalConfig.url !== "users/token" && error.response) {
      // Access Token was expired
      if (error.response.status === 401 && !originalConfig._retry) {
        console.log("axios error");
        originalConfig._retry = true;

        try {
          const rs = await instance.post("users/token/refresh/", {
            refresh: localStorage.getItem("refreshToken"),
          });

          const { access } = rs.data;

          localStorage.setItem("accessToken", access);

          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
