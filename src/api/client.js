import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // updated backend URL
  withCredentials: true, // allow cookies for auth
});

export default api;
