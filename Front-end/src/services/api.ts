import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const apiRandom = axios.create({
  baseURL: "https://randomuser.me/api",
});

export const apiRandomDog = axios.create({
  baseURL: "https://random.dog/woof.json",
});

export default api;
