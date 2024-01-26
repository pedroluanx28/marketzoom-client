import { Product } from '@/@types/Product';
import Col from 'react-bootstrap/Col';

import image from "@public/produto.svg";
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';

import './styles.scss';

type cardProductProps = {
    product: Product;
}

export function CardProduct({ product }: cardProductProps) {
    const navigate = useNavigate();

    return (
        <Col onClick={() => navigate(`/product/${product.id}`)} className="mb-4 bg-transparent hover-scale">
            <div className="position-relative d-flex justify-content-center align-items-center m-auto rounded bg-card-product mb-2">
                <img src={image} className="w-75 rounded bg-card-product product-card-image" />
                <label className="label-card">-40%</label>
            </div>
            <div className="d-flex flex-column justify-content-between px-3">
                <span className="fw-bolder">{product.nome}</span>
                <span className="text-market">7x por 0,99 sem juros</span>
                <div className="d-flex align-items-center">
                    <span className="fs-5 fw-bolder me-2 text-market">R${product.preco}</span>
                    <Rating value={Number(product.avaliacoes)} precision={0.1} size="small" readOnly />
                    <span className="ms-1 fw-bolder text-market">(88)</span>
                </div>
            </div>
        </Col>
    )
}