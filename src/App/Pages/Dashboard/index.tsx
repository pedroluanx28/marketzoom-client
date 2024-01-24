import { Header } from "@/Components/Header";
import { ListOffers } from "@/Components/Ofertas";
import { Slide } from "@/Components/Slide";

import "./style.scss"

export function Dashboard() {
    return (
        <div style={{ height: "100vh" }} className="div-container">
            <Header />  
            <div className="d-flex flex-column gap-2 py-3" style={{ height: "88%", overflowY: "scroll" }}>
                <div style={{ height: "55%", padding: "0 3rem" }}>
                    <Slide />
                </div>
                <ListOffers />
            </div>
        </div>
    )
}