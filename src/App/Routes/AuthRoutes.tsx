import { Login } from "@/Pages/Login";
import { Register } from "@/Pages/Register";
import { Routes, Route, Navigate } from "react-router-dom";

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Navigate to="login" />} />
        </Routes>
    )
}