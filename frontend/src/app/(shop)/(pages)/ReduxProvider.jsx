"use client"
import store from "@/app/features/store"
import { CartProvider } from "../../../../context/cartContext"
import { Provider } from "react-redux"
import AuthLoader from "@/app/Component/AuthLoader"

const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store} >
            <CartProvider >
                <AuthLoader>
                    {children}
                </AuthLoader>
            </CartProvider>
        </Provider>
    )
}

export default ReduxProvider