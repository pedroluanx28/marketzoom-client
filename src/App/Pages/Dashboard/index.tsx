import { ListOffers } from "@/Components/Ofertas";
import { Slide } from "@/Components/Slide";

export function Dashboard() {
    return (
        <div style={{ height: "100vh" }}>
            <header style={{ height: "12%" }}>
                ajshdjas
            </header>
            <div className="d-flex flex-column gap-2" style={{ height: "88%" }}>
                <div style={{ height: "55%", padding: "0 3rem" }}>
                    <Slide />
                </div>
                <ListOffers />
            </div>
        </div>
    )
}