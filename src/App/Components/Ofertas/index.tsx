import { Row } from "react-bootstrap"
import { CardOffers } from "./Card"

const mock = [
    {
        "title": "Volta às aulas",
        "span": "Explore nossas promoções  de materiais escolar",
        "link": "/products",
        "button": "Mostrar produtos"
    },
    {
        "title": "Mais vendidos",
        "span": "Confira os produtos que são tendências",
        "link": "products",
        "button": "Ir para mais vendidos"
    },
    {
        "title": "Menos de R$100",
        "span": "Confira produtos com preços baixos",
        "link": "products",
        "button": "Mostrar produtos"
    },
    {
        "title": "Nossas categorias",
        "span": "Encontre imóveis, roupas e muito mais!",
        "link": "products",
        "button": "Ir para categiorias"
    }
]

export function ListOffers() {
    return (
        <Row className="gap-5 px-2">
            {mock?.map((item, index) => (
                <CardOffers title={item.title} span={item.span} link={item.link} button={item.button} key={index} />
            ))}
        </Row>
    )
}
