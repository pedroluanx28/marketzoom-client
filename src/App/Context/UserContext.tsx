import { User } from "@/@types/user";
import { ReactNode, createContext, useEffect, useState } from "react";

type Props = {
    children: ReactNode;
}

type UserProps = {
    authenticated: boolean;
    setAuthenticated: (NewState: boolean) => void;
    currentAuth: User;
    setCurrentAuth: (NewState: User) => void;
}

const initialValue = {
    authenticated: false,
    setAuthenticated: () => {},
    currentAuth: {} as User,
    setCurrentAuth: () => {},
}

const UserContext = createContext<UserProps>(initialValue)

const UserContextProvider = ({ children }: Props) => {
    const [authenticated, setAuthenticated] = useState(initialValue.authenticated);
    const [currentAuth, setCurrentAuth] = useState(initialValue.currentAuth);

    useEffect(() =>{
        if (localStorage.getItem('token')) {
            setAuthenticated(true)
        }
    },[])

    return (
        <UserContext.Provider value={{ authenticated, setAuthenticated, currentAuth, setCurrentAuth }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }