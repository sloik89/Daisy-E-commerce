import axios from "axios";

export const customFetch = axios.create({
  baseURL: "https://e-commerce-api-otdo.onrender.com/api",
});
