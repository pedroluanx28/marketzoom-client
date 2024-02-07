import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthRoutes } from "@/Routes/AuthRoutes";
import { MainRoutes } from "@/Routes/MainRoutes";
import { PrivateRoutes } from "@/Routes/PrivateRoutes";
import { UserContextProvider } from "@/Context/UserContext";

export function AppRoutes() {
    return (
        <div className="div-container">
            <UserContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<MainRoutes />} />
                        <Route path="/user/*" element={<PrivateRoutes />} />
                        <Route path="/auth/*" element={<AuthRoutes />} />
                    </Routes>
                </BrowserRouter>
            </UserContextProvider>
        </div>
    )
}
