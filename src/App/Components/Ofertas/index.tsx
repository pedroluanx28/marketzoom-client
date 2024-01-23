import { CardOfertas } from "./Card"

const mock = [
    {
        "title": "Volta às aulas",
        "span": "Explore nossas promoções  de materiais escolar",
        "link": "#",
        "button": "Mostrar produtos"
    },
    {
        "title": "Mais vendidos",
        "span": "Confira os produtos que são tendências",
        "link": "#",
        "button": "Ir para mais vendidos"
    },
    {
        "title": "Menos de R$100",
        "span": "Confira produtos com preços baixos",
        "link": "#",
        "button": "Mostrar produtos"
    },
    {
        "title": "Nossas categorias",
        "span": "Encontre imóveis, roupas e muito mais!",
        "link": "#",
        "button": "Ir para categiorias"
    }
]

export function ListOfertas() {
    return (
        <div style={{ height: "42%" }} className="d-flex justify-content-around">
            {mock?.map((item) => (
                <CardOfertas title={item.title} span={item.span} link={item.link} button={item.button} />
            ))}
        </div>
    )
}
