"use client"
import InputComponent from '@/app/Component/InputComponent'
import { PaymentInputBox } from '@/app/Component/paymentComponent/PaymentInputBox'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({
        mode: "onChange"
    })

    const onSubmit = (data) => {
        console.log("Form Submitted Data:", data)
    }

    return (
        <section className='bg-black min-h-screen text-white'>
            {/* Split layout into 2 columns */}
            <div className='grid grid-cols-2 mx-auto max-w-6xl p-8 gap-8'>

                {/* Column 1: Client Details Form */}
                <div className='justify-items-center'>
                    {/* 3. Attach handleSubmit to the form onSubmit event */}
                    <form onSubmit={handleSubmit(onSubmit)} className='gap-4 flex flex-col w-full max-w-md'>

                        {/* User Info Header */}
                        <div>
                            <h1 className='flex items-center gap-3 text-white'>
                                <span className='w-8 h-8 font-semibold font-caveat bg-white text-black rounded-full flex justify-center items-center'>G</span>
                                Gokulakrishnan@gmail.com
                            </h1>
                        </div>

                        {/* First Name & Last Name Wrapper */}
                        <div className='flex items-center gap-5'>
                            {/* First Name Input */}

                            <InputComponent style={'p-2 w-full outline-none border-b-2 border-gray-600 '} register={register} errors={errors} inputName={'first name'} />

                            {/* Last Name Input */}
                            <InputComponent style={'p-2 w-full outline-none border-b-2 border-gray-600 '} register={register} errors={errors} inputName={"last name"} />
                        </div>

                        {/* Address Input */}
                        <div className=''>
                            <InputComponent style={'p-2 w-full outline-none border-b-2 border-gray-600 '} register={register} errors={errors} inputName={"address"} />
                        </div>
                        {/* City , state & postal code  */}
                        <div className='flex gap-5'>
                            <InputComponent style={'p-2 w-full outline-none border-b-2 border-gray-600 '} register={register} errors={errors} inputName={"city"} />
                            <InputComponent style={'p-2 w-full outline-none border-b-2 border-gray-600 '} register={register} errors={errors} inputName={"state"} />
                            <InputComponent style={'p-2 w-full outline-none border-b-2 border-gray-600 '} register={register} errors={errors} inputName={"postal code"} />

                        </div>
                        <InputComponent style={'p-2 w-full outline-none border-b-2 border-gray-600 '} register={register} errors={errors} inputName={"phone-number"} />

                        {/* Payment method */}
                        <PaymentInputBox register={register} errors={errors} />
                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={!isValid}
                            className='mt-4 bg-white hover:bg-gray-200 text-black font-semibold font-bricolage py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed transition-all hover:cursor-pointer'
                        >
                            Pay Now
                        </button>
                    </form>
                </div>

                {/* Column 2: Empty Space / Preview */}
                <div className='border-l border-gray-800 p-6'>
                    <div className='text-gray-950 flex overflow-y-scroll overflow-x-hidden scrollbar-thumb-black h-100 bg-white  w-full min-w-xl rounded-t-2xl' >
                        {/* items  */}
                        <ul>
                            {[2, 5, 6, 4].map((h) => (
                                <li key={h} className='flex items-center cursor-pointer hover:bg-gray-100 justify-between gap-2 border-b border-gray-200  w-full min-w-xl p-4' >
                                    <div className='leading-5 flex items-center gap-5'>
                                        <div className='w-20 h-20 rounded-md relative overflow-hidden'>
                                            <Image src={"/assets/asset 110.png"} alt='img' fill /></div>
                                        <div>
                                            <p className='text-lg font-bricolage font-semibold '> Regular pant </p>
                                            <span className='text-sm font-caveat'>White/M</span>
                                        </div>

                                    </div>
                                    <p className='text-lg font-semibold font-bricolage '>₹ 999</p>
                                </li>
                            ))}

                        </ul>
                    </div>
                    <div className='p-10 sticky top-10 flex bg-gray-900  min-w-xl rounded-b-xl w-full'>
                        <ul className='w-full text-lg font-semibold font-bricolage'>
                            <li className='flex gap-5 justify-between'> <p>subtotal - <span>{2} items </span>  </p> <p>₹ {999}</p></li>
                            <li className='flex gap-5 justify-between' > <p>Shipping fee  </p> <p>Free</p> </li>
                            <li className='flex gap-5 justify-between'> <p>Total - <span>{2} items </span>  </p> <span>₹ {1999}</span></li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page
