import axios from "axios";

const api = axios.create({
  baseURL: "https://api.opensea.io/api/v2",
  headers: {
    "X-API-KEY": "bc61ee4a3ddb40e4adce299e642569eb",
  },
});

export default api;
