import { SearchInput } from '@/Components/SearchInput';
import { BsCart3 } from "react-icons/bs";
import Logo from "@public/Logo.png";
import { FaUserCircle } from "react-icons/fa";

import './styles.scss';

export function Header() {
    const userLogged = true;

    return (
        <div className="header d-flex justify-content-between align-items-center header-border px-4">
            <a href="/">
                <img src={Logo} alt="Image Logo" className="image-logo" />
            </a>
            <div className="d-flex align-items-center gap-5">
                {!userLogged && (
                    <>
                        <SearchInput />
                        <div className="d-flex align-items-center gap-2">
                            <a href="/user/cart" className="text-decoration-none">
                                <div className="position-relative">
                                    <BsCart3 className="fs-3" />
                                    <label className="label-cart">3</label>
                                </div>
                            </a>
                            <div className="d-flex flex-column">
                                <span className="cart-span">Carrinho: </span>
                                <span className="cart-span cart-price">R$ 57,99</span>
                            </div>
                        </div>
                    </>
                )}
                {userLogged ? (
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