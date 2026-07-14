"use client"
import { Trash2Icon, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import QuantityCounter from '@/Component/QuantityCounter'
import { useCart } from '../../../context/cartContext'

const SidebarCart = () => {
    const { isOpen, closeCart } = useCart()

    return (
        <aside className={` ${isOpen ? " opacity-100 translate-x-0" : " translate-x-full   "} transform-gpu transition-transform duration-300 ease-in-out fixed top-0 right-0 h-full w-96 bg-white z-200 `}>
            {/* Cart - header */}
            <div className='text-gray-800 px-5 py-3 flex items-center justify-between  '>
                <h1 className='text-2xl font-bricolage font-medium'>Cart</h1>
                <button onClick={closeCart} >
                    <X />
                </button>
            </div>
            {/* Cart product */}
            <ul className='overflow-y-auto h-150 py-5 px-1 bg-gray-50 scrollbar-thin scrollbar-thumb-black '>
                {
                    [1, 3, 4, 5, 6].map((i) => (
                        <li key={i} className='p-2 flex gap-5'>
                            <div className='w-22 h-22  relative overflow-hidden rounded-lg'>
                                <Image src={"/assets/asset 110.png"} alt='' fill className='w-full h-full object-center ' />
                            </div>
                            {/* Product detail */}
                            <div className='text-lg font-medium font-bricolage  gap-10 '>
                                <h1 >White Mom fit Pant</h1>
                                <p className='text-sm'>White , M</p>
                                <p>₹ <span>999</span> <span className='line-through text-gray-600 text-base font-light'>₹ 1599</span></p>

                                <div className='flex gap-2 items-center  py-3 '>
                                    <QuantityCounter style="py-1 px-2 text-base rounded-md" />
                                    <button>
                                        <Trash2Icon className='size-4 hover:stroke-red-500 cursor-pointer' />

                                    </button>
                                </div>
                            </div>
                            {/* Product total price quantity * price */}
                            <div className='font-semibold '>
                                <p>₹ 2999</p>
                            </div>
                        </li>
                    ))
                }
            </ul>


            <button className='bg-black absolute bottom-2 left-0 right-0 text-white max-w-xs  mx-auto flex items-center justify-center w-full py-3 px-6  rounded-xl font-bricolage font-medium hover:scale-97 transform-gpu transition-transform ease-in-out duration-300 '>
                Checkout
            </button>

        </aside>
    )
}

export default SidebarCart