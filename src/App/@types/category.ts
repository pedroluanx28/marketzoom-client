import { IconCategory } from "@/Enums/IconCategoryEnum"
import { ProductType } from "./Product"

export type Category = {
   id: number,
   name: string,
   slogan: string,
   icon: IconCategory,
   products: ProductType[],
}