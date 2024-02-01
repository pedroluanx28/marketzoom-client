import axios from "axios"

export function useAuth() {
    const api = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL
    })

    const userAuth = "Junin";

    return {
        api,
        userAuth
    }
}