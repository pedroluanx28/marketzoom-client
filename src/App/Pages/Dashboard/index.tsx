import { ListOffers } from "@/Components/Ofertas";
import { Slide } from "@/Components/Slide";
import { Products } from "@/Components/Ofertas/List";

import "./style.scss"
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

export function Dashboard() {
    const {api} = useAuth();

    async function teste(){
        try {
            const response = await api.get('/user_types')

            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        teste()
    },[])
    return (
        <div className="div-dashboard d-flex flex-column gap-5  py-3 px-5 overflow-auto">
            <div>
                <Slide />
            </div>
            <ListOffers />
            <Products />
        </div >
    )
}