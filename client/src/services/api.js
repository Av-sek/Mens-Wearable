import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
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
        return response;
    },
    async (error)=>{
        const originalConfig = error.config;
        if (originalConfig.url !== "/auth/signin" && err.response) {
            // Access Token was expired
            if (err.response.status === 401 && !originalConfig._retry) {
              originalConfig._retry = true;
    
              try {
                const rs = await axiosInstance.post("/auth/refreshtoken", {
                  refreshToken: TokenService.getLocalRefreshToken(),
                });
    
                const { accessToken } = rs.data;
    
                dispatch(refreshToken(accessToken));
                TokenService.updateLocalAccessToken(accessToken);
    
                return axiosInstance(originalConfig);
              } catch (_error) {
                return Promise.reject(_error);
              }
            }
          }
        return Promise.reject(error);

    }
);

export default instance;