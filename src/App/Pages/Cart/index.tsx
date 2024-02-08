import { useAuth } from "@/hooks/useAuth"
import { useEffect, useState } from "react"

type product = {
    product: {
        id: number;
        average_rating: number;
        details: string;
        image: string;
        name: string;
        price: number;
        shop_id: null;
        stock_quantity: number;
        total_ratings: null;
        user_id: number;
    }
    product_id: number;     
    product_quantity: number;
}

export function Cart() {
    const { api } = useAuth();
    const [productsCart, setProductsCart] = useState([])

    const fetchData = async () => {
        try {
            const { data } = await api.get('/cart')

            console.log(data)
            setProductsCart(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="d-flex h-88 flex-column gap-3 align-items-center">
            {productsCart.map(({ product }: product) => (
                <div key={product.id}>
                    {product.id}
                </div>
            ))}
        </div>
    )
}