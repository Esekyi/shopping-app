import React, { useState, useContext } from "react";
import { users as dbUsers } from "../Consts/cardItemList";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({children})
{
    const [user, setUser] = useState(null);

    const login = ({email, password}) =>
    {
        const found = dbUsers.filter(u => u.email === email && u.password === password);
        if (found.length > 0)
        {
            setUser(found[0]);
            return true;
        }
        return false;
    }

    const signup = (data) =>
    {
        dbUsers.push({ id: dbUsers.length + 1, ...data });
    }

    const logout = () =>
    {
        setUser(null);
    }

    return <AuthContext.Provider value={{user, login, signup, logout}}>
        {children}
    </AuthContext.Provider>
}