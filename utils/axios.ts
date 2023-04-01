import axios from "axios";

export default axios.create({
    baseURL: "http://{你的服务ip}:{你的端口号}"
})