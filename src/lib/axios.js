import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-backend-3i49.onrender.com/api",
});
