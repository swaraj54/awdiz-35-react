import axios from "axios";


const api = axios.create({
  // baseURL: "https://awdiz-35-backend.onrender.com/api",
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

export default api;
