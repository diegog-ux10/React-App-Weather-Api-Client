import axios from "axios";

const BASE_URL = "http://api.openweathermap.org/data/2.5";

export const instance = axios.create({
  baseURL: BASE_URL,
});
