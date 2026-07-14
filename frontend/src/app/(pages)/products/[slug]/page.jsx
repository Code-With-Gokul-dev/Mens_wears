'use client'
import ProductCarousel from '../../../../Component/Card-component/ProductCarousel'
import QuantityCounter from '@/Component/QuantityCounter'
import { BoxIcon,  User2Icon } from 'lucide-react'
import React, { useState } from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'


const COLORS = [
    { id: 'blue', bgClass: 'bg-blue-500' },
    { id: 'yellow', bgClass: 'bg-yellow-500' },
    { id: 'green', bgClass: 'bg-green-500' },
    { id: 'red', bgClass: 'bg-red-500' }
]

const SIZES = ['M', 'LG', 'XL', '2xl', '3xl', '4xl']

const Page = () => {

    const [selectedColor, setSelectedColor] = useState('blue')
    const [selectedSize, setSelectedSize] = useState('M')

    return (
        <section className='min-h-screen bg-black text-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:px-10 py-10'>
                {/* Product Image Carousel */}
                <ProductCarousel selectedColor={selectedColor} />

                {/* Product Details */}
                <div className='space-y-8 px-3 max-w-xl mx-auto w-full '>
                    <div className='space-y-3'>
                        <h1 className='text-3xl md:text-5xl font-bricolage text-white'>Flora printed shirt</h1>
                        <p className='text-gray-50 text-xl font-semibold flex items-center gap-4'>
                            Rs. 799
                            <span className='text-gray-500 text-base line-through'>Rs. 1200</span>
                        </p>
                    </div>

                    {/* Color Selection */}
                    <div className='flex gap-2 items-center'>
                        {COLORS.map((color) => {
                            const isSelected = selectedColor === color.id
                            return (
                                <button
                                    key={color.id}
                                    onClick={() => setSelectedColor(color.id)}
                                    className={`rounded-full cursor-pointer w-10 h-10 p-1 transition-all duration-200 border-2 ${isSelected ? 'border-white scale-110' : 'border-transparent hover:border-gray-500'
                                        }`}
                                    aria-label={`Select ${color.id} color`}
                                >
                                    <span className={`${color.bgClass} block w-full h-full rounded-full`}></span>
                                </button>
                            )
                        })}
                    </div>


                    {/* Size Buttons */}
                    <div className='space-y-2'>
                        <h1 className='font-medium font-bricolage text-xl tracking-wide'>Size</h1>
                        <div className='relative flex  flex-wrap md:flex-nowrap gap-5 items-center max-w-xl  rounded-xl p-1 overflow-x-auto  isolation-auto scrollbar-none'>


                            <div
                                className="hidden md:block absolute top-1 bottom-1 left-1 rounded-xl bg-white transition-all duration-300  ease-in-out z-0 "
                                style={{
                                    width: `calc((100% - (${SIZES.length - 1} * 1.25rem) - 0.5rem) / ${SIZES.length})`,
                                    transform: `translateX(calc(${SIZES.indexOf(selectedSize)} * (100% + 1.25rem)))`
                                }}
                            />

                            {SIZES.map((size) => {
                                const isSelected = selectedSize === size
                                return (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`relative z-10 py-2 transition-colors duration-300 ease-in-out cursor-pointer  border-2 rounded-xl max-w-20  w-full  font-semibold font-caveat px-4  text-center overflow-hidden ${isSelected ? 'bg-white md:bg-transparent text-black' : 'text-white'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Quantity & Add to Cart Container */}
                    <div className='flex gap-5 items-center max-w-xl w-full'>
                        <QuantityCounter style={"px-3 py-3 rounded-lg"} />
                        {/* Add Button */}
                        <button className='w-full rounded-xl font-semibold font-bricolage bg-white text-black py-3 px-6 flex items-center justify-center  hover:bg-gray-200 transition-colors cursor-pointer'>
                            Add to bag
                        </button>
                    </div>

                    {/* Checkout Button */}
                    <div className='max-w-xl'>
                        <button className='font-bricolage bg-gray-100 text-black font-bold py-3 px-6 w-full rounded-xl hover:bg-white cursor-pointer transition-colors'>
                            Buy it now
                        </button>
                    </div>
                </div>
            </div>

            {/* Brand develering product  */}

            <div className='flex  md:flex-row flex-col items-center  gap-10 py-5 md:p-15  w-full text-black bg-white'>
                <div className='font-caveat text-center'>
                    {/* Icon */}
                    <CiDeliveryTruck size={50} className='justify-center mx-auto' />
                    {/* content */}
                    <p className='text-3xl font-extrabold'>Fast & Reliable Delivery</p>
                    <p>Get your orders delivered safely and on time, right to your doorstep.</p>
                </div>
                <div className='font-caveat px-4 text-center'>
                    {/* Icon */}
                    <BoxIcon size={50} className='justify-center mx-auto' />
                    {/* content */}
                    <p className='text-3xl font-extrabold'>Easy Returns & Exchanges</p>
                    <p>Not satisfied? No worries. Hassle-free returns and exchanges made simple.</p>
                </div>
                <div className='font-caveat px-4 text-center'>
                    {/* Icon */}
                    <User2Icon size={50} className='justify-center mx-auto' />
                    {/* content */}
                    <p className='text-3xl font-extrabold'>Customer Support</p>
                    <p >We’re here for you quick responses, and a smooth shopping experience every time.</p>
                </div>

            </div>


        </section>
    )
}

export default Page
