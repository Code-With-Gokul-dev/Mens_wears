"use client"
import React from 'react'
import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const Card = ({ image, title, price, offer_price }) => {
    const navigate = useRouter();
    const handleView = () => {
        navigate.push("/products/2")
    }
    return (
        <div className='text-gray-800  shrink-0 md:shrink  relative font-bricolage cursor-pointer  max-w-35 w-full   md:max-w-xs flex flex-col  gap-5  drop-shadow-2xl'>

            <div onClick={handleView} className='md:w-full  xl:w-80 md:h-80 max-w-xl h-46 overflow-hidden relative group hover:scale-105 transition-all ease-in-out duration-300 rounded-xs '>
                <div className='absolute  group-hover:visible invisible bottom-2 z-10 right-2 bg-black/50 text-white flex items-center rounded-full p-2 transform-cpu transition-transform duration-300 gap-2 overflow-hidden '>
                    <ShoppingBag />
                </div>
                <Image src={image} fill alt={title} sizes="100" className='w-full h-full' />
            </div>
            <div>
                <h1 className='font-bold text-lg'>{title}</h1>
                <p className='flex gap-4'>{offer_price} <span className='line-through text-gray-400 '>{price}</span></p>
            </div>
        </div>
    )
}
