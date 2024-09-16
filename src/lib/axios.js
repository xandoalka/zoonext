import axios from "axios";

export const axiosInstance = axios.create({
   baseURL: "https://zoobackend.vercel.app",
   withCredentials: true
});