import { useAuth } from "@/hooks/useAuth"
import { FormEvent, useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { convertToBRL } from '@/utils/convertToBRL';

import ProductImage from '@public/produto.svg';
import Spinner from "react-bootstrap/Spinner";

import './styles.scss';

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
    const [isChangingQuantity, setIsChangingQuantity] = useState(false);
    const [totalValueCart, setTotalValueCart] = useState([] as number[]);

    const fetchData = async () => {
        try {
            const { data } = await api.get('/cart')

            setProductsCart(data)
            setIsLoading(false);
            setIsChangingQuantity(false);
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
                    setIsChangingQuantity(true);
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
                    setIsChangingQuantity(true);
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
    }, [addCartItem, deleteCartItem]);

    return (
        <Row className="w-100 container py-3">
            <Col lg={8}>
                {isLoading ? "Carregando..." : (
                    productsCart.map((productCart, index) => (
                        <div key={`product-${index}`} className="d-flex align-items-center product-card-container">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                value={productCart.product_quantity * productCart.product.price}
                                onClick={(event) =>
                                    event.currentTarget.checked
                                        ? updateTotalCartValue(event)
                                        : deleteTotalCartValue(event)
                                }
                            />

                            {/* <img src={ProductImage} alt="Product image" className="product-image" /> */}
                            <img src="https://cdn.topmidianews.com.br/upload/dn_noticia/2018/06/34633227-2012674279047650-3461198355823067136-n.jpg" alt="Product image" className="product-image" />

                            <div className="d-flex flex-column">
                                <a href={`/product/${productCart.product_id}`}>{productCart.product.name}</a>
                                <span>{convertToBRL(productCart.product.price)}</span>
                            </div>

                            <div className="d-flex align-items-center">
                                <span className="me-2">Qntd.:</span>

                                <div className="d-flex">
                                    <button className="btn btn-bg-white-text-purple button-less" onClick={() => deleteCartItem(productCart.product.id)}>-</button>
                                    {isChangingQuantity ? (
                                        <div className="bg-white d-flex align-items-center">
                                            <Spinner size="sm" />
                                        </div>
                                    ) : (
                                        <input type="number" value={productCart.product_quantity} className="product-quantity-input" />
                                    )}
                                    <button className="btn btn-bg-white-text-purple button-more" onClick={() => addCartItem(productCart.product.id)}>+</button>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <span>Sub-total:</span>
                                <span className="sub-total">{convertToBRL(productCart.product.price * productCart.product_quantity)}</span>
                            </div>

                            <button className="btn delete-button" onClick={() => deleteCartProduct}>Deletar</button>
                        </div>
                    ))
                )}
            </Col>
            <Col>
                {sumCartPrice}
            </Col>
        </Row>
    )
}