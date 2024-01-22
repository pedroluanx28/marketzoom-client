import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Bag from "../../../Assets/bag.svg"

import "./style.scss"

export function CardOfertas() {
    return (
        <Card className="card-ofertas d-flex flex-column justify-content-between align-items-center">
            <h3>sdfçlsd</h3>
            <img src={Bag} alt="bag" className="imagem-ofertas" />
            <span>Explore nossas promoções de materiais escolar</span>
            <Button><Link to={'#'}>Mostrar produtos</Link></Button>
        </Card>
    )
}
