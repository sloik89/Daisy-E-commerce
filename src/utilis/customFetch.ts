import axios from "axios";
const localUrl = "http://localhost:3000/api";
const netUrl = "https://e-commerce-api-otdo.onrender.com/api";
export const customFetch = axios.create({
  baseURL: netUrl,
});
