import { ReactNode, createContext, useEffect, useState } from "react";

type Props = {
    children: ReactNode;
}

type UserProps = {
    authenticated: boolean;
    setauthenticated: (NewState: boolean) => void
}

const initialValue = {
    authenticated: false,
    setauthenticated: () => { }
}

const UserContext = createContext<UserProps>(initialValue)

const UserContextProvider = ({ children }: Props) => {
    const [authenticated, setauthenticated] = useState(initialValue.authenticated)

    useEffect(() =>{
        if (localStorage.getItem('token')) {
            setauthenticated(true)
        }
    },[])

    return (
        <UserContext.Provider value={{ authenticated, setauthenticated }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }