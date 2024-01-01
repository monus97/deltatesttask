import axios from "axios";

const authInstance = axios.create({
  baseURL: "https://deltaserver.onrender.com/",
});

authInstance.interceptors.request.use(function (config) {
  let token = sessionStorage.getItem("token");

  config.headers["Authorization"] = "Bearer " + token;
  return config;
});

export default authInstance;
