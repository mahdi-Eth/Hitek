import axios from "axios";

export const BASE_INSTANCE = axios.create({
  baseURL: "https://hitek-api.onrender.com/api",
  timeout: 25000
});
