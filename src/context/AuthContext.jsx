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

    async function signup(username, email, password) {
        const safeUser = await AuthService.signup(username, email, password);
        setUser(safeUser);
        return safeUser;
    }

    function logout() {
        AuthService.logout();
        setUser(null);
    }

    function getCurrentUser() {
        return user;
    }

    return (
    <AuthContext.Provider value={{ user, login, logout, signup, getCurrentUser }}>
        {children}
    </AuthContext.Provider>
);
    
}