import { Navigate, Route, Routes } from "react-router-dom";

import { Header } from "@/Components/Header";
import { Dashboard } from "@/Pages/Dashboard";
import { ProductsList } from "@/Pages/ProductsList";
import Product from "@/Pages/ProductsList/Product";
import { CategoryProducts } from "@/Pages/ProductsList/CategoryProducts";

export function MainRoutes() {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="categories/:id" element={<CategoryProducts />} />
                <Route path="products/:search?" element={<ProductsList />} />
                <Route path="product/:id" element={<Product />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}