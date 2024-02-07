import { useContext } from 'react';

import Swal from 'sweetalert2';
import { BsCart3 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import { UserContext } from '@/Context/UserContext';

import { SearchInput } from '@/Components/SearchInput';

import Logo from "@public/Logo.png";

import './styles.scss';

export function Header() {
    const { authenticated } = useContext(UserContext)
    const navigate = useNavigate();

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
                            <label className="label-cart">3</label>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <span className="cart-span">Carrinho: </span>
                        <span className="cart-span cart-price">R$ 57,99</span>
                    </div>
                </div>
                {authenticated ? (
                    <a href="/user/profile">
                        <FaUserCircle className="fs-2" />
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