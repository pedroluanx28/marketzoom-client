import { Navigate, Route, Routes } from "react-router-dom";

import { Cart } from '@/Pages/Cart';
import { Header } from "@/Components/Header";

import { Profile } from "@/Pages/Profile";

export function PrivateRoutes() {
    const authenticated = localStorage.getItem('token');
    return (
        <>
            <Header />
            <Routes>
                {authenticated ? (
                    <>
                        <Route path="cart" element={<Cart />} />
                        <Route path="profile" element={<Profile />} />
                    </>
                ) : <Route path="*" element={<Navigate to="/"/>}/>}
            </Routes>
        </>
    )
}