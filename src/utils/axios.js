import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.hiring.masterkey.tech/api/v1",
});

export default axiosInstance;
