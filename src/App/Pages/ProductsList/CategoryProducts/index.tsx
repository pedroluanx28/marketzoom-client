import { ProductType } from "@/@types/Product";
import { Category } from "@/@types/category";
import { CardProduct } from "@/Components/Cards/CardProducts";
import { useAuth } from "@/hooks/useAuth"
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export function CategoryProducts() {
   const { api } = useAuth();
   const { id } = useParams();
   
   const [category, setCategory] = useState<Category>({} as Category);
   const [products, setProducts] = useState<ProductType[]>([]);
   
   async function fetchData() {
      try {
         const { data } = await api.get(`/categories/${id}`);
         setProducts(data.products);
         setCategory(data);
      } catch (error) {
         console.error(error)
      }
   }

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <Row className="px-4 mt-3">
         <h1 className="text-center pb-2">{category.name}</h1>
         <p className="text-center pb-4">{category.slogan}</p>
         {products.map(product => (
            <CardProduct product={product} widthClassNames={3} />
         ))}
      </Row>
   )
}