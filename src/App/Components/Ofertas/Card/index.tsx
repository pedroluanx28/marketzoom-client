import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Bag from "../../../../Assets/bag.svg"

import "./style.scss"

type Props = {
    title: string,
    image?: string,
    span: string,
    link: string,
    button: string,
}

export function CardOfertas({title,image,span,link,button}: Props) {
    return (
        <Card className="card-ofertas d-flex flex-column justify-content-between align-items-center">
            <h4>{title}</h4>
            <img src={Bag} alt={image} className="imagem-ofertas" />
            <span className="text-center">{span}</span>
            <Button><Link to={link} className="text-white">{button}</Link></Button>
        </Card>
    )
}
