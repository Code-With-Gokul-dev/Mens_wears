"use client"
import React from 'react'
import Image from 'next/image'
import { ShoppingBag, ShoppingBagIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const Card = ({ image, title, price, offer_price }) => {
    const navigate = useRouter();
    const handleView = () => {
        navigate.push("/products/2")
    }
    return (
        <div className='text-gray-800  shrink-0 md:shrink  relative font-bricolage cursor-pointer  max-w-35 w-full   md:max-w-xs flex flex-col  gap-5  drop-shadow-2xl'>

            <div onClick={handleView} className='md:w-full  xl:w-80 md:h-80 max-w-xl h-46 overflow-hidden relative group hover:scale-105 transition-all ease-in-out duration-300 rounded-xs '>
                <div className='absolute group/choose group-hover:visible invisible bottom-2 z-10 right-2 bg-white/80 text-gray-900 flex  items-center rounded-full  transform-cpu transition-all duration-300  ease-in-out max-w-10 p-1 hover:max-w-30 overflow-hidden '>
                 <div className='shrink-0 relative p-1 '>
                    <ShoppingBagIcon />
                 </div>
                   <div className='opacity-0 whitespace-nowrap group-hover/choose:opacity-100 transition-all -translate-x-4 group-hover/choose:translate-x-0 pr-3 duration-300 ease-in-out'>
                      choose
                   </div>
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
