"use client"
import store from "@/app/features/cartStore/Cartstore"
import { CartProvider } from "../../../../context/cartContext"
import { Provider } from "react-redux"

const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store} >
            <CartProvider >
                {children}
            </CartProvider>
        </Provider>
    )
}

export default ReduxProvider