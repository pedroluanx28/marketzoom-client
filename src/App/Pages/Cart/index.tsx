import { useAuth } from "@/hooks/useAuth"
import { FormEvent, useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap";
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
    const [isLoading, setIsLoading] = useState(true);
    const [totalValueCart, setTotalValueCart] = useState([] as number[]);

    const fetchData = async () => {
        try {
            const { data } = await api.get('/cart')

            setProductsCart(data)
            setIsLoading(false);
        } catch (error) {
            console.error(error)
        }
    }

    const deleteCartItem = async (id: number) => {
        try {
            Swal.fire({
                customClass: {
                    cancelButton: 'text-dark',
                },
                icon: 'question',
                text: 'Você deseja excluir um item deste produto?',
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
            console.error(error)
        }
    }

    const addCartItem = async (id: number) => {
        try {
            Swal.fire({
                customClass: {
                    cancelButton: 'text-dark',
                },
                icon: 'question',
                text: 'Você deseja adicionar um item deste produto?',
                iconColor: '#9747FF',
                confirmButtonText: "Sim",
                cancelButtonColor: '#fff',
                showCancelButton: true,
                cancelButtonText: "Não",
                focusCancel: false,
                focusConfirm: false,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post(`/cart/add-item/${id}`, {
                        'product_quantity': 1
                    });
                    location.reload();
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

    const deleteCartProduct = async (product: product) => {
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
                    await api.delete(`/cart/remove-item/${product.product_id}`, {
                        data: {
                            product_quantity: product.product_quantity
                        }
                    });
                    location.reload();
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

    function updateTotalCartValue(event: FormEvent<HTMLInputElement>) {
        setTotalValueCart([
            ...totalValueCart,
            Number(event.currentTarget.value)
        ])
    }

    function deleteTotalCartValue(event: FormEvent<HTMLInputElement>) {
        setTotalValueCart(
            totalValueCart.filter(value =>
                value != Number(event.currentTarget.value)
            )
        )
    }

    const sumCartPrice = totalValueCart.reduce((accumulator, value) =>
        Number(accumulator) + Number(value), 0)
        .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="d-flex h-75 w-75 m-auto p-2 justify-content-center bg-white">
            <Col className="gap-2" lg={8}>
                {isLoading ? "Carregando..." : (
                    productsCart.map((productCart) => (
                        <Row key={productCart.product.id} className="d-flex">
                            <Col lg={1}>
                                <input type="checkbox" className="form-check-input" value={productCart.product_quantity * productCart.product.price} onClick={(e) => e.currentTarget.checked ? updateTotalCartValue(e) : deleteTotalCartValue(e)} />
                            </Col>
                            <Col lg={2}>
                                <img src={productCart.product.image} alt="sla" />
                            </Col>
                            <Col>
                                <Row>
                                    <span>{productCart.product.name} </span>
                                    <span>{productCart.product_quantity} x {productCart.product.price}</span>
                                </Row>
                                <div className="d-flex">
                                    <div className="d-flex align-items-center">
                                        <span>Quan.:</span>
                                        <button className="btn btn-bg-white-text-purple" onClick={() => deleteCartItem(productCart.product.id)}>-</button>
                                        <input type="number" className="border border-0 text-center w-10" value={productCart.product_quantity} />
                                        <button className="btn btn-bg-white-text-purple" onClick={() => addCartItem(productCart.product_id)}>+</button>
                                    </div>
                                    <button onClick={() => deleteCartProduct(productCart)} className="btn btn-danger fw-bold">Deletar</button>
                                </div>
                            </Col>
                        </Row>
                    ))
                )}
            </Col>
            <Col>
                {/* {totalValueCart.map((value) => (
                    <>{value}</>
                ))} */}
                {sumCartPrice}
            </Col>
        </div>
    )
}