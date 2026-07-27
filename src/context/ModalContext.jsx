import { createContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    function openLogin() {
        setIsLoginOpen(true);
    }

    function closeLogin() {
        setIsLoginOpen(false);
    }

    return (
        <ModalContext.Provider value={{ isLoginOpen, openLogin, closeLogin }}>
            {children}
        </ModalContext.Provider>
    );
}