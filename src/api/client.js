import axios from "axios";

const api = axios.create({
  baseURL: "https://wavenet-backend-9wvk.onrender.com/api", // updated backend URL
  withCredentials: true, // allow cookies for auth
});

export default api;
