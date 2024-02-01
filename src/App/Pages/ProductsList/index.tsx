import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Row from 'react-bootstrap/Row';

import { useAuth } from "@/hooks/useAuth";

import { CardProduct } from "@/Components/Cards/CardProducts";

export function ProductsList() {
    const { search } = useParams();
    const { api } = useAuth();

    const [products, setProducts] = useState([])

    const fetchData = async () => {
        try {
            const response = await api.get('/products');
            setProducts(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="overflow-auto py-4 px-3 h-88">
            {search && (
                <span className="fs-2">Resultados para "<strong>{search}</strong>"</span>
            )}

            <Row className="px-4 mt-3">
                {products?.map((product) => (
                    <CardProduct product={product} widthClassNames={3} />
                ))}
            </Row>
        </div>
    )
}