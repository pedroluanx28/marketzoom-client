import { User } from "./user"

export type Comments = {
    id: number,
    title: string,
    content: string
    rating: number
    user_id: number
    user: User
}