import { ListOffers } from "@/Components/Ofertas";
import { Slide } from "@/Components/Slide";
import { Products } from "@/Components/Ofertas/List";

import "./style.scss"

export function Dashboard() {
    
    return (
        <div className="div-dashboard d-flex flex-column gap-5  py-3 px-5 overflow-auto">
            <div>
                <Slide />
            </div>
            <ListOffers />
            <Products/>
        </div >
    )
}