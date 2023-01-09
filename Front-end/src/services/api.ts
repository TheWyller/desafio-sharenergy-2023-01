import axios from "axios";
import env from "react-dotenv";

const PORT = env.PORT_BACK || 8080;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export const apiRandom = axios.create({
  baseURL: "https://randomuser.me/api",
});

export const apiRandomDog = axios.create({
  baseURL: "https://random.dog/woof.json",
});

export default api;
