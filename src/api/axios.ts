import axios from "axios"
import { API_BASE_URL } from "../lib/env"

const ApiClient = axios.create({
  baseURL: API_BASE_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

ApiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken")

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

ApiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refreshToken = localStorage.getItem("refreshToken")

        const res = await axios.post(import.meta.env.VITE_REFRESH_URL, {
          refreshToken,
        })

        const newAccessToken = res.data.accessToken

        localStorage.setItem("accessToken", newAccessToken)

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

        return ApiClient(originalRequest)
      } catch (refreshError) {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        console.error("Refresh token failed:", refreshError)
        window.location.href = "/login"
      }
    }

    return Promise.reject(error)
  }
)

export default ApiClient
