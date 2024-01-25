import { useState } from "react";
import { useParams } from "react-router-dom";

import { Col, Modal, Row } from "react-bootstrap";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Rating from '@mui/material/Rating';

import { IoIosArrowDown } from "react-icons/io";

import image from "@public/produto.svg";

import "./style.scss"

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
  descrição: "Compre e se arrependa, pois ele quebra",
  preco: 120.00,
  detalhe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a viverra mi. Nunc pulvinar felis nec hendrerit iaculis. Ut eu odio ac quam varius bibendum. Cras vel vehicula enim, in tempor nunc. "
}
export default function Product() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <div className="overflow-auto p-5 h-88">
      <div className="bg-product align-self-center d-flex justify-content-center align-items-center gap-3 rounded rounded-4">
        <div className="w-50 height-85 bg-white d-flex justify-content-center aligm-items-center">
          <img src={image} />
        </div>
        <div className="w-50 height-85 bg-transparent d-flex flex-column gap-2 mx-3 p-3">
          <Row lg={12}>
            <Col lg={3}>
              <Rating name="half-rating-read" defaultValue={Number(id)} precision={0.1} readOnly />
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
              <button className="btn btn-bg-white-text-purple w-100"  onClick={handleShow}>Comprar agora</button>
            </Col>
          </Row>
          <Row lg={12}>
            <button className="w-100 btn btn-bg-purple-text-white">Adicionar ao carrinho</button>
          </Row>
          <Row lg={12} className="d-flex flex-colunm gap-3 overflow-auto">
            <Accordion className="bg-transparent">
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
            <Accordion className="bg-transparent">
              <AccordionSummary
                expandIcon={<IoIosArrowDown />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Comentários (11)
              </AccordionSummary>
              <AccordionDetails className="d-flex flex-column">
                <div className="mb-3">
                  <div className="d-inline-flex align-items-center gap-2">
                    <span className="fw-bold d-inline-flex align-items-center">
                      <img src="https://lastfm.freetls.fastly.net/i/u/ar0/66fbe23d1fecdca7e166f1e2af63a2d2" alt="Foto do usuário" className="user-pic" />
                      Gustavo
                    </span>
                    <Rating name="half-rating-read" value={5} precision={1} size="small" readOnly />
                  </div>
                  <br />
                  <span className="user-comment">Celular topzeira demais slk</span>
                </div>

                <div className="mb-3">
                  <div className="d-inline-flex align-items-center gap-2">
                    <span className="fw-bold d-inline-flex align-items-center">
                      <img src="https://s2.glbimg.com/eDYqEGMxNwL2lHc9IgNst8IvTTI=/e.glbimg.com/og/ed/f/original/2017/08/25/safadao1.jpg" alt="Foto do usuário" className="user-pic" />
                      Wesley
                    </span>
                    <Rating name="half-rating-read" value={5} precision={1} size="small" readOnly />
                  </div>
                  <br />
                  <span className="user-comment">eu SEMPRE compro no Marketzoom!!!</span>
                </div>

                <div className="mb-3">
                  <div className="d-inline-flex align-items-center gap-2">
                    <span className="fw-bold d-inline-flex align-items-center">
                      <img src="https://th.bing.com/th/id/OIP.JFQpAO3wGHNFIaUvaRmuxAHaE8?rs=1&pid=ImgDetMain" alt="Foto do usuário" className="user-pic" />
                      Neimá
                    </span>
                    <Rating name="half-rating-read" value={5} precision={1} size="small" readOnly />
                  </div>
                  <br />
                  <span className="user-comment">Vou traí mia izposa kkkkkk</span>
                </div>
              </AccordionDetails>
            </Accordion>
          </Row>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caloteiro</Modal.Title>
        </Modal.Header>
        <Modal.Body>Paga logo isso enfiiz</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={handleClose}>
            Fechar
          </button>

        </Modal.Footer>
      </Modal>
    </div>
  )
}
