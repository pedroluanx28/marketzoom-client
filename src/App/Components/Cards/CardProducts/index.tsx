import { Product } from '@/@types/Product';

import image from "@public/produto.svg";

import './styles.scss';

type cardProductProps = {
    product: Product;
}

export function CardProduct({product}: cardProductProps) {
    return (
        <div className="bg-white rounded rounded-3 d-flex flex-column align-items-center justify-content-center hover-scale">
            <div className="h-65 position-relative d-flex justify-content-center">
                <img src={image} className='w-85' />
                <label className="label-card">-40%</label>
            </div>
            <div className="h-35 w-100 d-flex flex-column justify-content-between px-3">
                <h3>{product.nome}</h3>
                <span className="fs-6">{product.descrição}</span>
                <h4>R$ {product.preco}</h4>
            </div>
        </div>
    )
}