"use client"
import React, { Children } from 'react'
import Header from '@/app/Component/Header'
import Footer from '@/app/Component/Footer'
import SidebarCart from '@/app/Component/Card-component/SidebarCart'
import ReduxProvider from './ReduxProvider'

const layout = ({ children }) => {
    return (
        <>
            <ReduxProvider>
                <SidebarCart />
                <Header />
                {children}
                <Footer />
            </ReduxProvider>
        </>
    )
}

export default layout
