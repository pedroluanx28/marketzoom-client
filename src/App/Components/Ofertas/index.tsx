import { Row } from "react-bootstrap"
import { CardOffers } from "./Card"
import { useAuth } from "@/hooks/useAuth"
import { useEffect, useState } from "react";
import { Category } from "@/@types/category";

export function ListOffers() {
    const { api } = useAuth();
    const [categories, setCategories] = useState<Category[]>([]);

    async function fetchCatgories() {
        try {
            const { data } = await api.get('/categories');
            console.log('categories', data);
            setCategories(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCatgories();
    }, [])

    return (
        <Row className="gap-5 px-2">
            {categories?.map((category, index) => (
                <CardOffers title={category.name} span={category.slogan} link={`categories/${category.id}`} button="Mostrar produtos" key={index} />
            ))}
        </Row>
    )
}
