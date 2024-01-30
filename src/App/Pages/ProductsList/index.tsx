import { CardProduct } from "@/Components/Cards/CardProducts";
import { api } from "@/services";
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";

export function ProductsList() {
    const { search } = useParams();

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
                <>Resultados para "{search}"</>
            )}
            <Row>
                {products.map((product) => (
                    <CardProduct product={product} widthClassNames={2} />
                ))}
            </Row>
        </div>
    )
}