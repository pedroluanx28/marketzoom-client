import { Header } from "@/Components/Header";
import { Dashboard } from "@/Pages/Dashboard";
import { ProductsList } from "@/Pages/ProductsList";
import { Navigate, Route, Routes } from "react-router-dom";

export function MainRoutes() {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="products/:search?" element={<ProductsList />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}