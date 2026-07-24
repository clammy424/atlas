import { createContext, useState } from 'react';
import AuthService from "../services/AuthService";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    async function login(username, password) {
        const safeUser = await AuthService.login(username, password);
        setUser(safeUser);
        return safeUser;
    }

    return (
    <AuthContext.Provider value={{ user, login }}>
        {children}
    </AuthContext.Provider>
);
    
}