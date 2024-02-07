import { ReactNode, createContext, useEffect, useState } from "react";

type Props = {
    children: ReactNode;
}

type UserProps = {
    authenticated: boolean;
    setAuthenticated: (NewState: boolean) => void
}

const initialValue = {
    authenticated: false,
    setAuthenticated: () => { }
}

const UserContext = createContext<UserProps>(initialValue)

const UserContextProvider = ({ children }: Props) => {
    const [authenticated, setAuthenticated] = useState(initialValue.authenticated)

    useEffect(() =>{
        if (localStorage.getItem('token')) {
            setAuthenticated(true)
        }
    },[])

    return (
        <UserContext.Provider value={{ authenticated, setAuthenticated }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }