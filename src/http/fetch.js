import axios from "axios"
const token = import.meta.env.VITE_API_TOKEN
export const fetchWeather = axios.create({
  baseURL:"https://api.openweathermap.org/data/2.5",
})
fetchWeather.interceptors.request.use((config) =>{
  config.params = config.params || {};
  config.params['appid'] = token
  return config;
})