import axios from "axios";

export function useAuth() {
    const api = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        withCredentials: true,
    });

    // Antes de cada requisição, obtenha o token CSRF
    api.interceptors.request.use(async (config) => {
        await api.get("/sanctum/csrf-cookie"); // Obtenha o token CSRF

        const xsrfCookie = document.cookie
            .split(";")
            .find((c) => c.trim().startsWith("XSRF-TOKEN="));

        const token = xsrfCookie ? xsrfCookie.split("=")[1] : null;

        // Configure o cabeçalho X-XSRF-TOKEN com o token CSRF
        if (token) {
            config.headers["X-XSRF-TOKEN"] = decodeURIComponent(token);
        }

        return config;
    });

    return {
        api,
        useAuth
    };
}
