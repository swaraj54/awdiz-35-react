import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  //   baseURL: "https://amazon-backend.com/api/v1",
  //   baseURL:
  //     process.env.mode == "local"
  //       ? "http://localhost:8000/api/v1"
  //       : "https://amazon-backend.com/api/v1",
});

export default api;
