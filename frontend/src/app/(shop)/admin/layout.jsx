"use client"
import AdminHeader from '@/app/Component/admin-Component/AdminHeader'
import AdminSideBar from '@/app/Component/admin-Component/AdminSideBar'
import React, { Children } from 'react'

const option = {
    style: {
        background: 'white',
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
}
const layout = ({ children }) => {
    return (
        <>
            <AdminSideBar />
            {children}

        </>
    )
}

export default layout
