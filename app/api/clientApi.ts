import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: {
        "Content-Type": "application/json",
    }
})

export default axiosInstance


axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        window.location.href = '/';
      }
    });
  