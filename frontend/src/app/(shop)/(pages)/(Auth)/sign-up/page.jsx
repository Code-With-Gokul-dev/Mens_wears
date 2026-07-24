"use client"
import InputComponent from '@/app/Component/InputComponent'
import { ChevronLeft, ChevronRight, LogIn } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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
                    {/* Sign in page nav link */}
                    <div className="absolute top-[20%] left-10 p-2 bg-white border border-slate-100 rounded-full group flex gap-2 items-center transition-all duration-300 ease-in-out shadow-sm max-w-11 hover:max-w-75 overflow-hidden">
                        <div className="shrink-0 ">
                            <LogIn className="stroke-pink-500" />
                        </div>
                        <div className="opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto transition-all duration-300 ease-out whitespace-nowrap">
                            <Link
                                href="/sign-in"
                                className="font-bricolage font-semibold text-sm pr-3 text-slate-700 hover:underline underline-offset-4"
                            >
                                Do you Already Have Account?
                            </Link>
                        </div>
                    </div>


                    {/* user form */}
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
                            className='text-black bg-pink-600 cursor-pointer p-2 rounded font-semibold disabled:bg-pink-500  disabled:cursor-not-allowed transition-opacity'
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
                            <a href="" className='rounded-full group  text-black bg-white flex items-center justify-center p-2  '>
                                <BsGoogle className='group-hover:fill-pink-600' />
                            </a>
                            <a href="" className='rounded-full text-black bg-white flex items-center justify-center p-2  group'>
                                <BsGithub className='group-hover:fill-pink-600' />
                            </a>
                            <a href="" className='rounded-full text-black bg-white flex items-center justify-center p-2 group '>
                                <FaFacebook className='group-hover:fill-pink-600' />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Image right grid element */}
                <div className='bg-pink-600 md:block hidden relative py-5 px-10'>
                    {/* Back btn */}

                    <Link href="/" className='text-4xl text-white flex justify-end items-center font-bricolage font-semibold group/back '>
                        X Wears<ChevronRight className='size-8 group-hover/back:translate-x-3 transform-cpu ease-in-out duration-300 transition-transform' />
                    </Link>

                    {/* Content */}
                    <div className=' w-100 h-50 rounded-md py-15 '>

                        <h1 className='font-bricolage font-semibold leading-snug text-5xl text-white text-shadow-md text-shadow-black/50 '>
                            Your Style Our <span className='text-amber-300 text-7xl text-shadow-black text-shadow-lg p-2 z-999'>fashion !!</span>
                        </h1>

                        <div className='w-72 text-wrap text-shadow-white text-white font-bricolage font-medium py-2'>
                            <p>Join the modern <span className='text-black font-semibold bg-white px-2'>gentleman’s club.</span> Create your account to unlock <span className='bg-amber-400 text-black font-semibold'>
                                personalized styling, exclusive drops</span>, and early access to the latest trends.</p>
                        </div>
                    </div>
                    {/* Decorative img */}
                    <div className='absolute top-[35%]  left-[40%] bg-black/50 rounded-full p-3 '>
                        <svg className='w-100 h-100 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 48.28 27.11 C 47.29 32.17 46.32 37.08 40.60 39.20 C 34.88 41.33 30.77 45.76 24.63 44.87 C 18.49 43.97 12.35 46.03 7.62 42.11 C 2.88 38.19 5.76 29.63 5.88 25.12 C 5.99 20.62 7.52 19.39 9.80 13.24 C 12.07 7.08 17.49 3.26 23.41 1.12 C 29.33 -1.01 35.02 1.08 39.79 7.23 C 44.56 13.38 49.26 22.05 48.28 27.11 Z" className='stroke-white stroke-1  fill-amber-300 '></path></svg>
                        <div className='w-100 h-120  absolute top-[-33%] drop-shadow-lg  drop-shadow-black/60  scale-110  '>
                            <Image alt="sign-up image" src="/bg_img/register_img.png" fill size="222" className='object-cover' sizes='100' />
                            <div className='w-50 absolute -bottom-1 left-20'>
                                <svg className='w-52 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1412 136"><path d="M2.9 51.31c1.54 1.59 3.55 2.42 5.67 2.93 9.55 2.69 12.36 4.04 30.44 7.8-3 .3-5.73.44-8.57 3.08a9.83 9.83 0 0 0-2.07 10.92c.83 2.7 3.33 4.22 5.31 6.05 10.97 9.24 37.74 12.54 57.74 16.6 28.32 5.7 56.66 11.52 85.37 14.86 23.26 11.61 80.27 14.32 103.75 15.4 34.52 2.19 69.08 3.36 103.65 3.76 121.04 6.36 242.43.51 363.58.82 271.97-15.76 111.74-7.14 354.24-27.85 46.28-2.18 92.54-4.84 138.71-8.85 12.39-1.12 31.77-2.4 34.68-3.76 3.32-1.16 5.52-4.34 6.02-7.77 123.48-7.79 121.13-7.18 123.45-8.4 4.59-1.61 7.1-7.14 5.79-11.8a10.12 10.12 0 0 0-9.64-7.34c-46.89.01-33.59-2.78-103.06 3.46l10.94-1.87c1.99-.76 4.08-1.67 5.19-3.58 4.19-4.72 2.14-13.98-5.64-15.77-3.38-2.63-6.42-2-14.13-2.11-4.56-.7-9.13-1.34-13.72-1.81 34.64-5.34 46.49-8.03 55.99-12.31 2.43-1.11 4.63-2.64 6.94-3.97 14.45-7.01 3.34-24.98-8.18-18.36-2.71 1.43-5.2 3.25-7.94 4.62-11.02 4.17-22.83 5.68-34.36 7.85-36.51 6.23-65.21 9.47-105.27 13.24-39.97 3.44-79.94 7.17-120.01 9.1-112.89 6.65-225.89 10.72-338.92 13.94-139.42 4.28-72.29 2.74-238.74 3.83-152.12.02-105.22.84-209.3-3.14-24.84-.9-33.26-1.91-65.79-4.63-17.2-1.82-43.29-7.05-66.97-9.27-4.21-.16-8.68-1.39-12.64.37a9.33 9.33 0 0 0-5.97 7.81l-.03.26c-68.56-8.07-86.97-8.7-119.44-11.18a7.6 7.6 0 0 0-3.85.86 9.31 9.31 0 0 0-5.97 7.81c-.59 3.07.64 6.15 2.75 8.4Z" className='stroke-white  stroke-10 fill-pink-500'></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Page
