import axios from "axios"

export function useAuth() {
    const api = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        withCredentials: true,
    })

    api.interceptors.request.use((config) => {
        const token = decodeURIComponent(document.cookie.replace('XSRF-TOKEN=', ''));
        api.defaults.headers['X-XSRF-TOKEN'] = token;
      
        return config;
    });


    return {
        api,
        // userAuth
    }
}