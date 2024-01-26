import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthRoutes } from "./AuthRoutes";
import { MainRoutes } from "./MainRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

export function AppRoutes() {
    return (
        <div className="div-container">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<MainRoutes />} />
                    <Route path="/user/*" element={<PrivateRoutes />} />
                    <Route path="/auth/*" element={<AuthRoutes />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
