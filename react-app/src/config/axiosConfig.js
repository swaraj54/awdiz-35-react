import axios from "axios";

const baseURL = process.env.MODE === "production" ? process.env.API_BASE_URL : "http://localhost:8000/api";

const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export default api;
