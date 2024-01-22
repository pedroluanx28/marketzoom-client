import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "@/Pages/Dashboard";
import { Register } from "@/Pages/Register";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}
