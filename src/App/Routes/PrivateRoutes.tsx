import { Route, Routes } from "react-router-dom";
import { Cart } from '@/Pages/Cart';
import { Header } from "@/Components/Header";

export function PrivateRoutes() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="cart" element={<Cart />} />
                <Route path="profile" element={<>Profile</>} />
            </Routes>
        </>
    )
}