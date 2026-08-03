"use client"
import React, { Children } from 'react'
import Header from '@/app/Component/Header'
import Footer from '@/app/Component/Footer'
import SidebarCart from '@/app/Component/Card-component/SidebarCart'
import ReduxProvider from './ReduxProvider'
import { Toaster } from 'react-hot-toast'

const layout = ({ children }) => {
    return (
        <>
            <ReduxProvider>
                <SidebarCart />
                <Header />
                <Toaster
                    toastOptions={{
                        style: {
                            background: '#fff',
                            color: 'black',
                            borderRadius: '20px',
                            padding: '16px',
                            fontSize: '14px',
                            fontWeight: '500',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                        },
                        success: {
                            iconTheme: { primary: '#10b981', secondary: '#18181b' },
                        },
                        error: {
                            iconTheme: { primary: '#ef4444', secondary: '#18181b' },
                        },
                    }}
                />
                {children}
                <Footer />
            </ReduxProvider>
        </>
    )
}

export default layout
