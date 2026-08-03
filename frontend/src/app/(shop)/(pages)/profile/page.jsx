"use client"
import Notify from '@/app/Component/alert';
import { setCredentials, logOut } from '@/app/features/authStore/authServices';
import { useLogoutMutation, baseApi } from '@/app/features/baseAPi'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch } from 'react-redux';

const Page = () => {
    const [logout, { isLoading, error }] = useLogoutMutation();
    const navigate = useRouter();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        const logoutUser = await logout().unwrap();
        if (logoutUser) {
            dispatch(logOut()) // specifically clears auth state
            dispatch(baseApi.util.resetApiState()) // completely clears RTK Query cache
            navigate.replace("/")
            Notify("logout successfully", "success")
        }
    }
    return (
        <section className='min-h-[calc(100vh-5rem)] flex justify-center items-center '>
            <button className='bg-red-500 text-white p-5 rounded-2xl' onClick={handleLogout}>
                logout
            </button>
        </section>
    )
}

export default Page