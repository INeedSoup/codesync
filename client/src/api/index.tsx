import axios, { AxiosInstance } from "axios"

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim() || "/api/piston"

const instance: AxiosInstance = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance
