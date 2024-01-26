import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "./style.scss"
import { CardProduct } from "@/Components/Cards/CardProducts";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useContext } from "react";

const mock = [
  {
    id: 1,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 2,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 3,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 4,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 5,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 6,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 7,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 1,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 2,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 3,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 4,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 5,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 6,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 7,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },{
    id: 1,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 2,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 3,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 4,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 5,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 6,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 7,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },{
    id: 1,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 2,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 3,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 4,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 5,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 6,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  },
  {
    id: 7,
    avaliacao: [5, 5, 5, 5, 5],
    avaliacoes: 5,
    nome: "string",
    descrição: "ldfkdkslfjdslfjlsdfjlsdflkdsj",
    preco: 120,
    detalhe: "fsdlfsdklflakj",
  }
]

export function Products() {

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
      <button onClick={() => scrollNext()}  className="btn position-absolute top-0 end-0" >
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
            <h4 className="text-market">Produtos mais visto da Marketzoom</h4>
          </div>
        </div>
      </div>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} scrollContainerClassName="list-products" wrapperClassName="w-100">
        {mock.map((produto) => (
          <CardProduct product={produto} key={produto.id} />
        ))}
      </ScrollMenu>
      <div className="d-flex justify-content-center">
        <a href="/products">
          <button className="btn btn-bg-purple-text-white">Visualizar todos os produtos</button>
        </a>
      </div>
    </div>
  )
}
