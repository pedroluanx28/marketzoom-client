import { CardProduct } from "@/Components/Cards/CardProducts";
import { useParams } from "react-router-dom";

export function ProductsList() {
    const { search } = useParams();

    const mock = [
        {
            id: 1,
            avaliacao: [5, 5, 5, 5, 5],
            avaliacoes: 5,
            nome: "IPHONE PROO PLUS MAX",
            descrição: "Compre e se arrependa, pois ele quebra",
            preco: 120.00,
            detalhe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a viverra mi. Nunc pulvinar felis nec hendrerit iaculis. Ut eu odio ac quam varius bibendum. Cras vel vehicula enim, in tempor nunc. "
        },
        {
            id: 2,
            avaliacao: [5, 5, 5, 5, 5],
            avaliacoes: 5,
            nome: "IPHONE PROO PLUS MAX",
            descrição: "Compre e se arrependa, pois ele quebra",
            preco: 120.00,
            detalhe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a viverra mi. Nunc pulvinar felis nec hendrerit iaculis. Ut eu odio ac quam varius bibendum. Cras vel vehicula enim, in tempor nunc. "
        },
        {
            id: 3,
            avaliacao: [5, 5, 5, 5, 5],
            avaliacoes: 5,
            nome: "IPHONE PROO PLUS MAX",
            descrição: "Compre e se arrependa, pois ele quebra",
            preco: 120.00,
            detalhe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a viverra mi. Nunc pulvinar felis nec hendrerit iaculis. Ut eu odio ac quam varius bibendum. Cras vel vehicula enim, in tempor nunc. "
        },
        {
            id: 4,
            avaliacao: [5, 5, 5, 5, 5],
            avaliacoes: 5,
            nome: "IPHONE PROO PLUS MAX",
            descrição: "Compre e se arrependa, pois ele quebra",
            preco: 120.00,
            detalhe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a viverra mi. Nunc pulvinar felis nec hendrerit iaculis. Ut eu odio ac quam varius bibendum. Cras vel vehicula enim, in tempor nunc. "
        },
        {
            id: 5,
            avaliacao: [5, 5, 5, 5, 5],
            avaliacoes: 5,
            nome: "IPHONE PROO PLUS MAX",
            descrição: "Compre e se arrependa, pois ele quebra",
            preco: 120.00,
            detalhe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a viverra mi. Nunc pulvinar felis nec hendrerit iaculis. Ut eu odio ac quam varius bibendum. Cras vel vehicula enim, in tempor nunc. "
        }
    ]
    return (
        <div className="overflow-auto py-4 px-3 h-88">
            {search && (
                <>Resultados para "{search}"</>
            )}
            <div className="d-flex flex-wrap gap-5 justify-content-evenly py-4">
                {!search ? (
                    <>
                        {mock.map((product) => (
                            <a href={`/product/${product.id}`}>
                                <CardProduct product={product} />
                            </a>
                        ))}
                    </>
                ) : (
                    <>
                        {mock.filter((products) => products.nome.toLowerCase() == search.toLowerCase()).map((product) => (
                            <a href={`/product/${product.id}`}>
                                <CardProduct product={product} />
                            </a>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}