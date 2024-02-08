import { UserContext } from "@/Context/UserContext";
import axios from "axios";
import { useContext } from "react";

export function useAuth() {
    const { setAuthenticated } = useContext(UserContext);
    const api = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });

    const logout = async () => {
        try {
            await api.post('auth/logout');
            setAuthenticated(false);
            localStorage.removeItem('token');
        } catch (error) {
            console.error(error);
        }
    }

    return {
        api,
        logout,
        useAuth
    };
}
