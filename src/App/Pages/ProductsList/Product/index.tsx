import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Swal from "sweetalert2";


import { ProductType } from "@/@types/Product";
import { Comments } from "@/@types/comments";

import { useAuth } from "@/hooks/useAuth";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Rating from '@mui/material/Rating';

import { IoIosArrowDown } from "react-icons/io";

import image from "@public/produto.svg";

import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import "./style.scss"
import { UserContext } from "@/Context/UserContext";


export default function Product() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState({} as ProductType)
  const [ratingProduct, setRatingProduct] = useState(0)
  const { authenticated } = useContext(UserContext);
  const { api } = useAuth();
  const navigate = useNavigate()

  const handleQuantity = (e: string) => {
    if (e == "-") {
      setQuantity(quantity - 1)
    }
    else {
      setQuantity(quantity + 1)
    }
  }

  const addToCart = () => {
    if (!authenticated) {
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
    } else {
      Swal.fire({
        customClass: {
          cancelButton: 'text-dark',
        },
        icon: 'question',
        text: 'Deseja adicionar este item ao seu carrinho?',
        iconColor: '#9747FF',
        confirmButtonText: "Adicionar ao carrinho",
        cancelButtonColor: '#fff',
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        focusCancel: false,
        focusConfirm: false,
      }).then((result) => {
        if (result) {
          if (result.isConfirmed) {
            const addProductInCart = async () => {
              try {
                await api.post(`/cart/add-item/${id}`, {
                  'product_quantity': quantity
                })
              } catch (error) {
                console.error(error);
              }
            }

            addProductInCart()
          }
        }
      })
    }
  }


  const fetchData = async () => {
    try {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let Rating = 0
      response.data.comments.map((rating: Comments) => {
        Rating += rating.rating
      })
      const productRating = Rating / response.data.comments.length
      setRatingProduct(Number(productRating.toFixed(2)))
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const totalPrice = product.price * quantity;
  const installment = totalPrice / 12;
  return (
    <div className="overflow-auto p-5 h-88">
      <div className="bg-product align-self-center d-flex justify-content-center align-items-center gap-3 rounded rounded-4">
        <div className="w-50 height-85 bg-white d-flex justify-content-center aligm-items-center">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop
            pagination={{ clickable: true }}
            className='h-100 d-flex'
          >
            <SwiperSlide><img src={image} /></SwiperSlide>
            <SwiperSlide><img src={image} /></SwiperSlide>
            <SwiperSlide><img src={image} /></SwiperSlide>
          </Swiper>
        </div>
        <div className="w-50 height-85 bg-transparent d-flex flex-column gap-2 mx-3 p-3">
          <Row lg={12}>
            <Col lg={3}>
              <Rating name="half-rating-read" value={ratingProduct} precision={0.1} readOnly />
            </Col>
            <Col>
              ({product?.comments?.length})
            </Col>
          </Row>
          <Row lg={12}>
            <h3><strong>{product?.name}</strong></h3>
            <span>{product?.details}</span>
            <span>Estoque disponível: {product?.stock_quantity}</span>
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
            <button onClick={addToCart} className="w-100 btn btn-bg-purple-text-white">Adicionar ao carrinho</button>
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
                {product?.details}
              </AccordionDetails>
            </Accordion>
            <Accordion className="bg-transparent">
              <AccordionSummary
                expandIcon={<IoIosArrowDown />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Comentários ({product?.comments?.length})
              </AccordionSummary>
              <AccordionDetails className="d-flex flex-column">
                {product?.comments?.map((comment) => (
                  <div className="mb-3">
                    <div className="d-inline-flex align-items-center gap-2">
                      <span className="fw-bold d-inline-flex align-items-center">
                        <img src="https://lastfm.freetls.fastly.net/i/u/ar0/66fbe23d1fecdca7e166f1e2af63a2d2" alt="Foto do usuário" className="user-pic" />
                        {comment?.user?.name}
                      </span>
                      <Rating name="half-rating-read" value={comment?.rating} precision={1} size="small" readOnly />
                    </div>
                    <br />
                    <span className="user-comment">{comment?.content}</span>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          </Row>
        </div>
      </div>
    </div>
  )
}
