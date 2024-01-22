import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard } from "@/Pages/Dashboard";
import { Login } from "@/Pages/Login";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}
