import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Cart } from '@/Pages/Cart';
import { Header } from "@/Components/Header";
import { UserContext } from "@/Context/UserContext";

export function PrivateRoutes() {
    const { authenticated } = useContext(UserContext)
    return (
        <>
            <Header />
            <Routes>
                {authenticated ? (
                    <>
                        <Route path="cart" element={<Cart />} />
                        <Route path="profile" element={<>Profile</>} />
                    </>
                ) : <Route path="*" element={<Navigate to="/"/>}/>}
            </Routes>
        </>
    )
}