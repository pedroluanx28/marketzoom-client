import axios from "axios";

export function useAuth() {
    const api = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });

    return {
        api,
        useAuth
    };
}
