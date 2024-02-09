import { User } from "@/@types/user";
import { UserContext } from "@/Context/UserContext";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function useAuth() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { setAuthenticated, setCurrentAuth } = useContext(UserContext);
    const navigate = useNavigate();
    const api = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const logout = async (e: any) => {
        try {
            e.preventDefault();
            await api.post('auth/logout');
            setAuthenticated(false);
            setCurrentAuth({} as User);
            sessionStorage.removeItem('token');

            navigate('/auth/login');
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
