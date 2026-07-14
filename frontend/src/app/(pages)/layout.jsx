import React, { Children } from 'react'
import Header from '@/Component/Header'
import Footer from '@/Component/Footer'
import SidebarCart from '@/Component/Card-component/SidebarCart'
import { CartProvider } from '../../../context/cartContext'

const layout = ({ children }) => {
    return (
        <main>
            <CartProvider >
                <SidebarCart />
                <Header />
                {children}
                <Footer />
            </CartProvider>
        </main>
    )
}

export default layout