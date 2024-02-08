import { User } from "./user"

export type Shop = {
   id: number,
   name: string,
   slogan: string,
   profile: string,
   active: boolean,
   admin_id: number,
   admin: User,
}