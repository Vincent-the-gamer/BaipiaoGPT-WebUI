import axios, { AxiosInstance } from "axios";

/**
 * 设置你可用的后端服务URL即可
 */

// 有上下文的后端接口
export const axiosWithContext: AxiosInstance = axios.create({
    baseURL: "http://localhost:8081"
})

// 没有上下文的后端接口
export const axiosWithoutContext: AxiosInstance = axios.create({
    baseURL: ""
})