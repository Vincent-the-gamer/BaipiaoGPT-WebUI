import axios from "axios";

export default axios.create({
    baseURL: "http://{你自己的服务器ip}:{你的端口}"
})