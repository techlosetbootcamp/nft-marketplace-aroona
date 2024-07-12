import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: "https://api.opensea.io/api/v2",
  headers: {
    "X-API-KEY": API_KEY,
  },
});

export default api;
