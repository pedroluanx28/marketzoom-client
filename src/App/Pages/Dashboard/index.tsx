import { Header } from "@/Components/Header";
// import { ListOffers } from "@/Components/Ofertas";
// import { Slide } from "@/Components/Slide";
import { CiStar } from "react-icons/ci";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { IoIosArrowDown } from "react-icons/io";

import "./style.scss"
import { Col, Row } from "react-bootstrap";

const mock = {
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "IPHONE PROO PLUS MAX",
    descrição: "Compre e n se arrependa, pois ele nunca quebra",
    preco: "R$120.00",
    parcelas: "12x de R$10.00",
    detalhe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a viverra mi. Nunc pulvinar felis nec hendrerit iaculis. Ut eu odio ac quam varius bibendum. Cras vel vehicula enim, in tempor nunc. "
}

export function Dashboard() {
    return (
        <div style={{ height: "100vh" }} className="div-container">
            <Header />
            <div className="d-flex flex-column gap-2 py-3 overflow-auto" style={{ height: "88%" }}>
                {/* <div style={{ height: "55%", padding: "0 3rem" }}>
                    <Slide />
                </div>
                <ListOffers /> */}
                <div className="bg-danger w-85 align-self-center d-flex justify-content-center align-items-center gap-3 px-5 rounded rounded-4" style={{ height: "80vh" }}>
                    <div className="w-50 height-85 bg-white d-flex justify-content-center aligm-items-center rounded rounded-4">
                        <img src="./produto.svg" />
                    </div>
                    <div className="w-50 height-85 bg-transparent overflow-auto d-flex flex-column gap-2">
                        <Row lg={12}>
                            <Col lg={3}>
                                {mock.avaliacao.map((starts) =>
                                    starts == 5 ? <CiStar /> : ""
                                )}
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
                            <h3>{mock.preco}</h3>
                            <h5>{mock.parcelas}</h5>
                        </Row>
                        <Row lg={12}>
                            <Row className="bg-white" lg={3}>
                                <Col lg={3}>
                                    <button className="btn">-</button>
                                </Col>
                                <Col lg={3}>
                                    1
                                </Col>
                                <Col>
                                    <button className="btn">+</button>
                                </Col>
                            </Row>
                            <Col>
                                <button className="btn btn-bg-white-text-purple">Comprar agora</button>
                            </Col>
                        </Row>
                        <Row lg={12}>
                            <button className="w-100 btn btn-bg-purple-text-white">Adicionar ao carrinho</button>
                        </Row>
                        <Row lg={12}>
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
                                    Comentários
                                </AccordionSummary>
                                <AccordionDetails className="d-flex flex-column">
                                    Comentario 1
                                    <span>bomzinho ele viu</span>
                                </AccordionDetails>
                            </Accordion>
                        </Row>
                    </div>
                </div>
            </div>

        </div>
    )
}