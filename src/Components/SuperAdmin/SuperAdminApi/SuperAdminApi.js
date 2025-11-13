import { apiClient } from "../../../Apis/client"; 

// Login API
export const getAdminRequestList = async() => {
  try {
    const response = await apiClient.get("/admin-requests");
    return response.data;
  } catch (error) {
    if (error.response) throw new Error(error.response.data.message || "Admin request failed");
    else throw new Error(error.message);
  }
};