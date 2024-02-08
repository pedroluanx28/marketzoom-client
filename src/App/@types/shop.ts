import { User } from "./user"

export type Shop = {
   id: number,
   name: string,
   slogan: string,
   profile: string | null,
   active: boolean,
   admin_id: number,
   admin?: User,
}