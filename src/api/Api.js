import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { Navigate } from "react-router-dom";
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken");
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
    if (
      error.response.status === 401 &&
      error.response.data.error === "token_expired"
    ) {
      // Attempt to refresh the token
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        try {
          const refreshResponse = await axios.post(`${BASE_URL}/auth/token`, {
            refresh_token: refreshToken,
          });

          const newAccessToken = refreshResponse.data.token.accessToken;
          console.log(newAccessToken);
          // Update the original request with the new access token
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          // Retry the original request with the new token
          return axios(originalRequest);
        } catch (refreshError) {
          // If refresh fails, clear local storage and redirect to login
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      } else {
        // If no refresh token is available, clear local storage and redirect to login
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
