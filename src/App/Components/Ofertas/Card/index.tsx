import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Bag from "../../../../Assets/bag.svg"

import "./style.scss"

type Props = {
    title: string,
    image?: string,
    span: string,
    link: string,
    button: string,
}

export function CardOffers({title,image,span,link,button}: Props) {
    return (
        <Card className="card-ofertas d-flex flex-column justify-content-between align-items-center">
            <h4>{title}</h4>
            <img src={Bag} alt={image} className="imagem-ofertas" />
            <span className="text-center">{span}</span>
            <button className="btn btn-bg-purple-text-white"><Link to={link} className="text-white">{button}</Link></button>
        </Card>
    )
}
