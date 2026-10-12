"use client"
import Notify from '@/app/Component/alert';
import { logOut } from '@/app/features/authStore/authServices';
import { useLogoutMutation, baseApi } from '@/app/features/baseAPi'
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Page = () => {
    const [logout, { isLoading, error }] = useLogoutMutation();
    const navigate = useRouter();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state?.auth?.user);

    console.log(userData);


    const handleLogout = async () => {
        const logoutUser = await logout().unwrap();
        if (logoutUser) {
            dispatch(logOut())
            dispatch(baseApi.util.resetApiState())
            navigate.replace("/")
            Notify("logout successfully", "success")
        }
    }

    // Format address field

    const addressField = [
        userData?.address?.streetAddress,
        userData?.address?.area,
        userData?.address?.state,
        userData?.address?.pincode,

    ];

    const formatedAddress = addressField.filter(Boolean).join(", ")

    return (
        <section className='min-h-[calc(100vh-5rem)] p-10   '>
            {/* Back button */}
            <div className='flex w-fit h-fit'>
                <Link href={"/"} className=' text-white px-3 ' >
                    <MoveLeft className='hover:-translate-x-2 transition-all duration-200 ease-in-out' />
                </Link>
            </div>

            <div className=' text-white max-w-5xl mx-auto h-150 w-full'>
                {/* Name */}

                <div className='text-lg font-caveat font-medium'>
                    <h1>Username: <span>{userData?.profile?.firstName} <span>{userData?.profile?.lastName}</span> </span></h1>
                    <div>Email <span>{userData?.email}</span></div>
                </div>

                <div className='flex gap-2'>
                    <h1>Address:</h1> <address className='font-caveat not-italic bg-white text-black px-2 rounded-full'>{formatedAddress}</address>
                </div>

            </div>

            <button onClick={handleLogout} className='bg-red-400 hover:bg-red-500 text-white font-caveat'>logout</button>

        </section>
    )
}

export default Page