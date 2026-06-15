"use client"
import InputComponent from '@/Component/InputComponent'
import { PaymentInputBox } from '@/Component/paymentComponent/PaymentInputBox'
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

                            <InputComponent register={register} errors={errors} inputName={'first name'} />

                            {/* Last Name Input */}
                            <InputComponent register={register} errors={errors} inputName={"last name"} />
                        </div>

                        {/* Address Input */}
                        <div className=''>
                            <InputComponent register={register} errors={errors} inputName={"address"} />
                        </div>
                        {/* City , state & postal code  */}
                        <div className='flex gap-5'>
                            <InputComponent register={register} errors={errors} inputName={"city"} />
                            <InputComponent register={register} errors={errors} inputName={"state"} />
                            <InputComponent register={register} errors={errors} inputName={"postal code"} />

                        </div>
                        <InputComponent register={register} errors={errors} inputName={"phone-number"} />

                        {/* Payment method */}
                        <PaymentInputBox register={register} errors={errors} />
                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={!isValid}
                            className='mt-4 bg-white text-black font-semibold font-bricolage py-2 px-4 rounded-md disabled:bg-gray-600 disabled:cursor-not-allowed transition-all hover:cursor-pointer'
                        >
                            Pay Now
                        </button>
                    </form>
                </div>

                {/* Column 2: Empty Space / Preview */}
                <div className='border-l border-gray-800 p-4'>

                </div>
            </div>
        </section>
    )
}

export default Page
