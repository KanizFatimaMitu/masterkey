import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://api.hiring.masterkey.tech/api/v1/products",
});

export default axiosInstance;
