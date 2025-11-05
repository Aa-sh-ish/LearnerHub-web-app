import axios from 'axios';

const BASE_URL = "https://learner-hub-chi.vercel.app/api";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🛰️ Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    console.log(
      `%c[API Request]`,
      "color: #1976d2; font-weight: bold;",
      `${config.method?.toUpperCase()} ${config.url}`,
      config.data ? "\nPayload:" : "",
      config.data || ""
    );

    // Example: attach auth token if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error("%c[Request Error]", "color: red;", error);
    return Promise.reject(error);
  }
);

// 📦 Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    console.log(
      `%c[API Response]`,
      "color: #2e7d32; font-weight: bold;",
      `${response.config.method?.toUpperCase()} ${response.config.url}`,
      "\nStatus:",
      response.status,
      "\nData:",
      response.data
    );
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(
        "%c[Response Error]",
        "color: red; font-weight: bold;",
        `${error.config?.method?.toUpperCase()} ${error.config?.url}`,
        "\nStatus:",
        error.response.status,
        "\nData:",
        error.response.data
      );
    } else {
      console.error("%c[Network Error]", "color: red;", error.message);
    }
    return Promise.reject(error);
  }
);

