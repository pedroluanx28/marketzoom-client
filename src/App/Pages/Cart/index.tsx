import { useAuth } from "@/hooks/useAuth"
import { useEffect, useState } from "react"
import Swal from "sweetalert2";

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
    const [productsCart, setProductsCart] = useState([] as product[])

    const fetchData = async () => {
        try {
            const { data } = await api.get('/cart')

            console.log(data)
            setProductsCart(data)
        } catch (error) {
            console.error(error)
        }
    }

    const deleteCartProduct = async (id: number) => {
        try {
            Swal.fire({
                customClass: {
                    cancelButton: 'text-dark',
                },
                icon: 'question',
                text: 'Você deseja excluir esse produto?',
                iconColor: '#9747FF',
                confirmButtonText: "Sim",
                cancelButtonColor: '#fff',
                showCancelButton: true,
                cancelButtonText: "Não",
                focusCancel: false,
                focusConfirm: false,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.delete(`/cart/remove-item/${id}`, {
                        data: {
                            product_quantity: 1
                        }
                    });
                    location.reload();
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="d-flex h-75 w-75 m-auto p-3 justify-content-center bg-white">
            <div className="d-flex h-100 flex-column gap-3 align-items-center">
                {productsCart.map((productCart) => (
                    <div key={productCart.product.id}>
                        <span>{productCart.product.name} </span>
                        <span>{productCart.product_quantity} | </span>
                        <span>{productCart.product.price * productCart.product_quantity}</span>
                        <button onClick={() => deleteCartProduct(productCart.product.id)} className="ms-2 btn btn-danger fw-bold">Deletar</button>
                    </div>
                ))}
            </div>
        </div>
    )
}