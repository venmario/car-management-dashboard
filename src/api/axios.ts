import axios from "axios";

const baseURL =
  import.meta.env["VITE_BACKEND_URL"] || "https://bcr-restapi-mario.fly.dev/";
const instance = axios.create({
  baseURL
});

export default instance;
