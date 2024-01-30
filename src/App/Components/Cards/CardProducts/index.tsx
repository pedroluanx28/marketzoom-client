import { useState } from 'react';
import { ProductType } from '@/@types/Product';
import Col from 'react-bootstrap/Col';

import image from "@public/produto.svg";
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';
import Swal from 'sweetalert2';

import './styles.scss';

type cardProductProps = {
    product: ProductType;
    widthClassNames?: number
}

export function CardProduct({ product, widthClassNames }: cardProductProps) {
    const navigate = useNavigate();
    const userLogged = false;
    const [addCart, setAddCart] = useState(false);

    const hoverEnter = () => setAddCart(true);
    const hoverOver = () => setAddCart(false);

    const addToCart = () => {
        if (!userLogged) {
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

            return;
        }
    }

    return (
        <Col
            lg={widthClassNames}
            className="mb-4 bg-transparent hover-scale"
            onMouseEnter={hoverEnter}
            onMouseLeave={hoverOver}
        >
            <div className="position-relative d-flex justify-content-center align-items-center m-auto rounded bg-card-product mb-2 overflow-hidden">
                <img src={image} onClick={() => navigate(`/product/${product.id}`)} className="w-75 rounded bg-card-product product-card-image cursor-pointer" />
                <label className="label-card cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>-40%</label>
                {addCart && (
                    <button onClick={addToCart} className="btn add-cart-button">
                        Adicionar ao carrinho
                    </button>
                )}
            </div>
            <div className="d-flex flex-column justify-content-between px-3 cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
                <span className="fw-bolder">{product.name}</span>
                <span className="text-market">7x por {((product.price) / 7).toFixed(2)} sem juros</span>
                <div className="d-flex align-items-center">
                    <span className="fs-5 fw-bolder me-2 text-market">R${product.price}</span>
                    <Rating value={5} precision={0.1} size="small" readOnly />
                    <span className="ms-1 fw-bolder text-market">(88)</span>
                </div>
            </div>
        </Col>
    )
}