import React, { Children } from 'react'
import Header from '@/app/Component/Header'
import Footer from '@/app/Component/Footer'
import SidebarCart from '@/app/Component/Card-component/SidebarCart'
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