const ENV = import.meta.env.VITE_APP_ENV

const API_BASE_URL =
  ENV === "production"
    ? import.meta.env.VITE_API_LIVE_URL
    : import.meta.env.VITE_API_LOCAL_URL

export { API_BASE_URL }
