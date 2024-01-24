// import { ListOffers } from "@/Components/Ofertas";
// import { Slide } from "@/Components/Slide";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { IoIosArrowDown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

import "./style.scss"
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { Rating } from '@mui/material';


type Product = {
    avaliacao: number[],
    avaliacoes: number,
    nome: string,
    descrição: string,
    preco: number,
    detalhe: string,
}
const mock: Product = {
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "IPHONE PROO PLUS MAX",
    descrição: "Compre e n se arrependa, pois ele nunca quebra",
    preco: 120.00,
    detalhe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a viverra mi. Nunc pulvinar felis nec hendrerit iaculis. Ut eu odio ac quam varius bibendum. Cras vel vehicula enim, in tempor nunc. "
}

export function Dashboard() {
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (e: string) => {
        if (e == "-") {
            setQuantity(quantity - 1)
        }
        else {
            setQuantity(quantity + 1)
        }
    }

    const totalPrice = mock.preco * quantity;
    const installment = totalPrice / 12;
    return (
        <div className="div-container">
            <div className="d-flex flex-column gap-2 py-3 px-5">
                 {/* <div>
                    <Slide />
                </div>
                <ListOffers /> */}
                <div className="bg-product align-self-center d-flex justify-content-center align-items-center gap-3 rounded rounded-4">
                    <div className="w-50 height-50 bg-white d-flex justify-content-center aligm-items-center rounded rounded-4">
                        <img src="./produto.svg" />
                    </div>
                    <div className="w-50 height-85 bg-transparent d-flex flex-column gap-2 mx-3 p-3">
                        <Row lg={12}>
                            <Col lg={3}>
                                <Rating name="half-rating-read" defaultValue={mock.avaliacoes} precision={0.1} readOnly />
                            </Col>
                            <Col>
                                ({mock.avaliacoes})
                            </Col>
                        </Row>
                        <Row lg={12}>
                            <h3><strong>{mock.nome}</strong></h3>
                            <span>{mock.descrição}</span>
                        </Row>
                        <Row lg={12}>
                            <h3 className="text-market">R${totalPrice.toFixed(2)}</h3>
                            <h5>12x de <span className="text-market">{installment.toFixed(2)}</span></h5>
                        </Row>
                        <Row lg={12}>
                            <Col lg={1} className="bg-white d-flex justify-content-center align-items-center border-radius-left">
                                <button className="btn text-market" disabled={quantity === 1 ? true : false} value="-" onClick={(e) => handleQuantity(e.currentTarget.value)}>-</button>
                            </Col>
                            <Col lg={1} className="bg-white d-flex justify-content-center align-items-center">
                                <span>{quantity}</span>
                            </Col>
                            <Col lg={1} className="bg-white d-flex justify-content-center align-items-center border-radius-right">
                                <button className="btn text-market" value="+" onClick={(e) => handleQuantity(e.currentTarget.value)}>+</button>
                            </Col>
                            <Col lg={9} className="pe-0">
                                <button className="btn btn-bg-white-text-purple w-100">Comprar agora</button>
                            </Col>
                        </Row>
                        <Row lg={12}>
                            <button className="w-100 btn btn-bg-purple-text-white">Adicionar ao carrinho</button>
                        </Row>
                        <Row lg={12} className="overflow-auto">
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<IoIosArrowDown />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    Informação adicional
                                </AccordionSummary>
                                <AccordionDetails className="d-flex flex-column">
                                    <span>Detalhes</span>
                                    {mock.detalhe}
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<IoIosArrowDown />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    Comentários (11)
                                </AccordionSummary>
                                <AccordionDetails className="d-flex flex-column">
                                    <div className="mb-2">
                                        <div className="d-inline-flex align-items-center gap-2">
                                            <span><FaUserCircle className="me-1" />Gustavo</span>
                                            <Rating name="half-rating-read" value={5} precision={1} size="small" readOnly />
                                        </div>
                                        <br />
                                        Gostei muito do celular (tenho 1.80, escuto lana del rey e odeio cólica).
                                    </div>
                                    <div className="mb-2">
                                        <div className="d-inline-flex align-items-center gap-2">
                                            <span><FaUserCircle className="me-1" />Cleiton 3 capas</span>
                                            <Rating name="half-rating-read" value={1} precision={1} size="small" readOnly />
                                        </div>
                                        <br />
                                        Meio ruim, não roda free fire no ultra
                                    </div>
                                    <div className="mb-2">
                                        <div className="d-inline-flex align-items-center gap-2">
                                            <span><FaUserCircle className="me-1" />Cleitin Matador de porco</span>
                                            <Rating name="half-rating-read" value={4} precision={1} size="small" readOnly />
                                        </div>
                                        <br />
                                        fAIx o eli
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </Row>
                    </div>
                </div>
            </div>

        </div >
    )
}