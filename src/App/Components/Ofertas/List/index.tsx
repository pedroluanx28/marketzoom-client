import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "./style.scss"
import { CardProduct } from "@/Components/Cards/CardProducts";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useContext, useEffect, useState } from "react";
import { api } from "@/services";


export function Products() {
  const [product, setProducts] = useState([])

  const fetchData = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  function LeftArrow() {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
      <button onClick={() => scrollPrev()} className="btn position-absolute top-0 right-0 position-arrow-scroll">
        <IoIosArrowBack className="text-market" />
      </button>
    );
  }

  function RightArrow() {
    const { scrollNext } = useContext(VisibilityContext);

    return (
      <button onClick={() => scrollNext()} className="btn position-absolute top-0 end-0" >
        <IoIosArrowForward className="text-market" />
      </button>
    );
  }

  return (
    <div className="w-100 bg-white d-flex flex-column gap-4 py-4 px-2 rounded rounded-3 position-relative">
      <div className="d-flex justify-content-between px-2">
        <div className="d-flex align-items-center gap-2">
          <div className="title-more-see" />
          <div className="d-flex align-items-center">
            <h4 className="text-market m-0">Produtos mais visto da Marketzoom</h4>
          </div>
        </div>
      </div>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} scrollContainerClassName="list-products px-3 py-4 gap-3" wrapperClassName="w-100">
        {product.map((produto, index) => (
          <CardProduct product={produto} key={index} />
        ))}
      </ScrollMenu>
      <div className="d-flex justify-content-center">
        <a href="/products">
          <button className="btn btn-bg-purple-text-white">Visualizar todos os produtos</button>
        </a>
      </div>
    </div>
)}