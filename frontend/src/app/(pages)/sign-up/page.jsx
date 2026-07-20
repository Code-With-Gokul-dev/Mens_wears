"use client"
import InputComponent from '@/app/Component/InputComponent'
import React from 'react'
import { useForm } from 'react-hook-form'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const Page = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isValid }
    } = useForm({ mode: "onChange" })

    const onsubmit = (data) => {
        console.log(data);
    }



    return (
        <main>
            <section className='grid md:grid-cols-2 min-h-[calc(100vh-5rem)] border-b border-gray-500'>
                {/* Register form */}
                <div className=' my-10 space-y-10  md:p-0 p-10'>
                    {/* Title */}
                    <div className='justify-items-center '>
                        <h1 className='text-white text-2xl font-bricolage font-semibold'>Sign Up</h1>
                    </div>

                    <form onSubmit={handleSubmit(onsubmit)} className='text-white flex flex-col gap-5 max-w-lg w-full mx-auto font-bricolage '>

                        {/* Name fields */}
                        <div className='md:flex gap-5 space-y-5 md:space-y-0 w-full'>
                            <div className='w-full'>
                                <label className='block mb-1'>First Name</label>
                                <InputComponent
                                    type="text"
                                    register={register}
                                    inputName="first_name"
                                    rules={{ required: "First name is required" }}
                                    errors={errors}
                                    style="w-full rounded-md border-0 bg-white/5 p-2 shadow-sm ring-1 ring-inset ring-white/10 outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all text-black"
                                />
                            </div>
                            <div className='w-full'>
                                <label className='block mb-1'>Last Name</label>
                                <InputComponent
                                    type="text"
                                    register={register}
                                    inputName="last_name"
                                    rules={{ required: "Last name is required" }}
                                    errors={errors}
                                    style="w-full rounded-md border-0 bg-white/5 p-2 shadow-sm ring-1 ring-inset ring-white/10 outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all text-black"
                                />
                            </div>
                        </div>

                        {/* Email address */}
                        <div>
                            <label className='block mb-1'>Email</label>
                            <InputComponent
                                type="email"
                                register={register}
                                inputName="email"
                                rules={{
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Invalid email format"
                                    }
                                }}
                                errors={errors}
                                style="w-full rounded-md border-0 bg-white/5 p-2 shadow-sm ring-1 ring-inset ring-white/10 outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all text-black"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className='block mb-1'>Password</label>
                            <InputComponent
                                type="password"
                                register={register}
                                inputName="password"
                                rules={{
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Must be at least 6 characters" }
                                }}
                                errors={errors}
                                style="w-full rounded-md border-0 bg-white/5 p-2 shadow-sm ring-1 ring-inset ring-white/10 outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all text-black"
                            />
                        </div>

                        {/* Confirm password */}
                        <div>
                            <label className='block mb-1'>Confirm Password</label>
                            <InputComponent
                                type="password"
                                register={register}
                                inputName="confirmPassword"
                                rules={{
                                    required: "Please confirm your password",
                                    validate: (value) => value === passwordValue || "Passwords do not match"
                                }}
                                errors={errors}
                                style="w-full rounded-md border-0 bg-white/5 p-2 shadow-sm ring-1 ring-inset ring-white/10 outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all text-black"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={!isValid}
                            className='text-black bg-yellow-300 p-2 rounded font-semibold disabled:opacity-90  disabled:cursor-not-allowed transition-opacity'
                        >
                            Sign up
                        </button>
                    </form>
                    <div className='flex flex-col gap-5'>
                        <div className='flex relative items-center gap-2 max-w-lg mx-auto w-full '>

                            <div className='grow w-full bg-gray-400  h-px'>

                            </div>
                            <span className='shrink-0 text-sm text-gray-400'>Or sign up with</span>
                            <div className='grow w-full bg-gray-400 h-px'>

                            </div>

                        </div>

                        <div className='flex justify-center  gap-5'>
                            <a href="" className='rounded-full text-black bg-white flex items-center justify-center p-2  '>
                                <BsGoogle />
                            </a>
                            <a href="" className='rounded-full text-black bg-white flex items-center justify-center p-2  '>
                                <BsGithub />
                            </a>
                            <a href="" className='rounded-full text-black bg-white flex items-center justify-center p-2  '>
                                <FaFacebook />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Image right grid element */}
                <div className='bg-yellow-400 md:block hidden'></div>
            </section>
        </main>
    )
}

export default Page
