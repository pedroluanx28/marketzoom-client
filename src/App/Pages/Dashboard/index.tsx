import { Header } from "@/Components/Header";
import { ListOffers } from "@/Components/Ofertas";
import { Slide } from "@/Components/Slide";

import "./style.scss"

export function Dashboard() {
    return (
        <div className="div-container">
            <div className="d-flex flex-column gap-2 py-3">
                <div>
                    <Slide />
                </div>
                <ListOffers />
            </div>
        </div>
    )
}