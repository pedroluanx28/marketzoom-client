import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";

import "./style.scss"

type Props = {
    title: string,
    image?: string,
    span: string,
    link: string,
    button: string,
}

export function CardOffers({
    title,
    image,
    span,
    link,
    button
}: Props) {
    return (
        <Col className="card-ofertas d-flex flex-column justify-content-between align-items-center bg-offers rounded gap-3 p-3">
            <h4>{title}</h4>
            <img src="./bag.svg" alt={image} className="imagem-ofertas" />
            <span className="text-center">{span}</span>
            <button
                className="btn btn-bg-purple-text-white">
                <Link to={link} className="text-white">
                    {button}
                </Link>
            </button>
        </Col>
    )
}
