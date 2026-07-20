"use client"
import InputComponent from '@/Component/InputComponent';
import { UserPlus, UserPlus2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Page = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main>
      <section className='grid md:grid-cols-2  min-h-[calc(100vh-5rem)] border-b border-gray-400'>
        {/* Login page left side bg  */}
        <div className='bg-red-400 hidden relative md:block py-10'>
          <div className='flex items-center justify-center'>
            <h1 className='font-bricolage font-semibold text-4xl text-gray-100'>X wears</h1>
          </div>

          <div className='absolute top-[calc(50vh-5rem)] w-80 px-3 py-5 rounded-e-2xl mx-4'>
            <h2 className='text-white font-bold font-bricolage text-4xl leading-relaxed text-wrap '>Make Your Oufit Look&apos;s <span className='text-purple-700 rounded-full bg-white px-2 py-0.5' >Premium</span></h2>
          </div>

          {/* svg and bg image overlay */}
            <div className='absolute bg-black/50 rounded-full  xl:bottom-[40%] translate-y-50 xl:left-[45%] w-100  h-100  mx-auto '>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 47.05 25.78 C 49.40 30.53 47.72 36.25 42.86 39.91 C 37.99 43.57 31.13 42.87 26.17 42.62 C 21.21 42.36 15.58 43.00 12.77 39.38 C 9.95 35.75 8.78 32.27 7.36 27.50 C 5.94 23.39 8.80 20.56 9.22 15.01 C 9.64 9.46 9.10 4.22 16.64 1.44 C 24.17 -1.34 32.55 3.31 37.94 8.05 C 43.33 12.79 44.70 21.02 47.05 25.78 Z" className='fill-blue-400'></path>
              </svg>
              {/* bg image */}
                  <div className='absolute bottom-[16%] z-22 left[50%]'>
                     <div className='relative w-100 h-120'>
                      <Image src={"/bg_img/login_img.png"} alt="login_bg" fill className='object-fill' />
                     </div>
                  </div>
            
          </div>
        </div>

        {/* sign in form */}
        <div className="flex min-h-[calc(100vh-5rem)] flex-col px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md ">
            <h1 className="text-center font-bricolage text-3xl font-bold tracking-tight text-white">
              Sign In
            </h1>
          </div>


          {/* Create new account navigate link */}
          <div className="absolute top-[20%] right-5 p-2 bg-white border border-slate-100 rounded-full group flex gap-2 items-center transition-all duration-300 ease-in-out shadow-sm max-w-11 hover:max-w-75 overflow-hidden">

            {/* Icon wrapper to prevent shrinking during animation */}
            <div className="shrink-0 p-1">
              <UserPlus2 className="w-5 h-5 fill-red-400 stroke-black" />
            </div>

            {/* Text sliding container */}
            <div className="opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto transition-all duration-300 ease-out whitespace-nowrap ">
              <a
                href="/sign-up"
                className="font-bricolage font-semibold text-sm pr-3 text-slate-700 hover:underline underline-offset-4"
              >
                Don&apos;t have an account?
              </a>
            </div>

          </div>



          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

              {/* Username Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="username" className="font-bricolage text-sm font-medium leading-6 text-white">
                  Email
                </label>
                <InputComponent
                  register={register}
                  inputName={"email"}
                  type={"email"}
                  errors={errors}
                  style="w-full rounded-md border-0 bg-white/5 p-2.5  shadow-sm ring-1 ring-inset ring-white/10 outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all text-black"
                />
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="font-bricolage text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <InputComponent
                  register={register}
                  inputName="password"
                  errors={errors}
                  style="w-full rounded-md border-0 bg-white/5 p-2.5  shadow-sm ring-1 ring-inset ring-white/10 outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all text-black"
                  type="password"
                />
                <div className='flex justify-end h-5'>
                  <a href="" className='text-gray-400 text-sm font-caveat text-end hover:border-b '>forgot password ?</a>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isValid}
                className="w-full rounded cursor-pointer bg-white px-3 py-2.5 text-sm font-bricolage font-semibold text-black shadow-sm transition-all hover:bg-gray-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white disabled:bg-neutral-300 disabled:text-neutral-900 disabled:cursor-not-allowed"
              >
                Sign In
              </button>
              <div className="relative flex items-center py-5">
                {/* Left Line */}
                <div className="grow border-t border-slate-700"></div>

                {/* Centered Text */}
                <span className="mx-4 shrink font-bricolage text-sm text-slate-400">
                  Or sign in with
                </span>

                {/* Right Line */}
                <div className="grow border-t border-slate-700"></div>
              </div>

              <div className='flex justify-center gap-5'>
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

            </form>
          </div>
        </div>

      </section>
    </main>
  );
};

export default Page;
