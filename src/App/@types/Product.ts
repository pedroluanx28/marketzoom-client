import { Comments } from "./comments"
import { User } from "./user"

export type ProductType = {
  id: number,
  user_id: number,
  shop_id: number,
  name: string,
  price: number,
  stock_quantity: number,
  details: string,
  image: string,
  user: User,
  shop: null
  average_rating: string,
  total_ratings: number,
  comments: Comments[],
}