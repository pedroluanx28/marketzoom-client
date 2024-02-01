import { ReactNode, createContext, useState } from "react";

type Props = {
    children: ReactNode;
}

type UserProps = {
    authenticated: boolean;
    setauthenticated: (NewState: boolean) => void
}

const initialValue = {
    authenticated: true,
    setauthenticated: () => { }
}

const UserContext = createContext<UserProps>(initialValue)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UserContextProvider = ({ children }: Props) => {
    const [authenticated, setauthenticated] = useState(initialValue.authenticated)

    

    return (
        <UserContext.Provider value={{ authenticated, setauthenticated }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }