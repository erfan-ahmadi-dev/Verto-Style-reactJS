import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { Navigate } from "react-router-dom";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  async function (config) {
    const accessToken = localStorage.getItem("newaccessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    // Check if the error is due to an expired token
    if (error.response.status === 401) {
      // Attempt to refresh the token
      const refreshToken = localStorage.getItem("accessToken");

      if (refreshToken) {
        try {
          const refreshResponse = await axios.post(`${BASE_URL}/auth/token`, {
            refreshToken: refreshToken,
          });

          const newAccessToken = refreshResponse.data.token.accessToken;

          // Update the original request with the new access token
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          localStorage.setItem("newaccessToken", newAccessToken);
          // Retry the original request with the new token
          return api(originalRequest);
        } catch (refreshError) {
          // If refresh fails, clear local storage and redirect to login
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          Navigate("/login");
          return Promise.reject(refreshError);
        }
      } else {
        // If no refresh token is available, clear local storage and redirect to login
        localStorage.removeItem("accessToken");
        Navigate("/login");
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
