import axios from "axios";

const baseURL = process.env.MODE === "production" ? process.env.API_BASE_URL : "http://localhost:8000/api";

const api = axios.create({
  baseURL: "https://awdiz-35-backend.onrender.com/api",
  withCredentials: true,
});

export default api;
