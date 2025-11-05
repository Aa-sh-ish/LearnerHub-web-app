import { apiClient } from "../client"; 

// Login API
export const loginUser = async (email, password) => {
  try {
    const response = await apiClient.post("/login", { email, password });
    return response.data;
  } catch (error) {
    if (error.response) throw new Error(error.response.data.message || "Login failed");
    else throw new Error(error.message);
  }
};

// Register API
export const registerUser = async (formData) => {
  try {
    const response = await apiClient.post("/register", formData);
    return response.data;
  } catch (error) {
    if (error.response) throw new Error(error.response.data.message || "Registration failed");
    else throw new Error(error.message);
  }
};