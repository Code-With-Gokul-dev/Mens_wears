"use client"
import {  createContext, useContext, useState } from "react"
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const closeCart = () => setIsOpen(false);
    const openCart = () => setIsOpen(true);
    return (
        <CartContext.Provider value={{ isOpen, closeCart, openCart }} >
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};