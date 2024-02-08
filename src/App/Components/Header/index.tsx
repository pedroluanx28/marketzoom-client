import { useContext, useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import { BsCart3 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import { UserContext } from '@/Context/UserContext';

import { SearchInput } from '@/Components/SearchInput';

import Logo from "@public/Logo.png";
import { useAuth } from '@/hooks/useAuth';

import './styles.scss';

type Product = {
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

export function Header() {
    const [cart, setCart] = useState([] as Product[]);
    const { authenticated, currentAuth } = useContext(UserContext)
    const { api } = useAuth();
    const navigate = useNavigate();

    const fetchCart = async () => {
        try {
            const { data } = await api.get('/cart');

            setCart(data);
        } catch (error) {
            console.error(error);
        }
    }

    function isAuthenticated() {
        if (authenticated) {
            navigate('/user/cart');
        } else {
            Swal.fire({
                customClass: {
                    cancelButton: 'text-dark',
                },
                icon: 'warning',
                text: 'Para adicionar ao carrinho é necessário ter uma conta',
                iconColor: '#9747FF',
                confirmButtonText: "Criar conta",
                cancelButtonColor: '#fff',
                showCancelButton: true,
                cancelButtonText: "Login",
                focusCancel: false,
                focusConfirm: false,
            }).then((result) => {
                if (result) {
                    if (result.isConfirmed) {
                        navigate('/auth/register');
                    } else if (String(result.dismiss) === "cancel") {
                        navigate('/auth/login');
                    } else {
                        return;
                    }
                }
            })
        }
    }

    const totalPriceCart =
        cart.reduce((accumulator, produto) =>
            accumulator + produto.product_quantity * produto.product.price, 0)
            .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    useEffect(() => {
        fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="header d-flex justify-content-between align-items-center header-border px-4">
            <a href="/">
                <img src={Logo} alt="Image Logo" className="image-logo" />
            </a>
            <div className="d-flex align-items-center gap-5">
                <SearchInput />
                <div className="d-flex align-items-center gap-2">
                    <div onClick={isAuthenticated} role="button">
                        <div className="position-relative">
                            <BsCart3 className="fs-3" />
                            {(cart?.length > 0) && <label className="label-cart">{cart.length}</label>}
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <span className="cart-span">Carrinho: </span>
                        <span className="cart-span cart-price">{totalPriceCart}</span>
                    </div>
                </div>
                {localStorage.getItem('token') ? (
                    <a href="/user/profile">
                        <FaUserCircle className="fs-2" />
                        <span className="ms-2">{currentAuth.username?.split(' ')[0]}</span>
                    </a>
                ) : (
                    <a href="/auth/login">
                        <button className="btn button-header">Faça seu login</button>
                    </a>
                )}
            </div>
        </div>
    )
}