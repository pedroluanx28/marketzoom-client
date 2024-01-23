import { ListOfertas } from "@/Components/Ofertas";
import { Card } from "react-bootstrap";

export function Dashboard() {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <Card className="h-75">
                <ListOfertas/>
            </Card>
        </div>
    )
}