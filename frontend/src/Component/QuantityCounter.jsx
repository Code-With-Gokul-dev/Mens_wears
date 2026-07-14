"use client"
import { MinusIcon, PlusIcon } from 'lucide-react'
import React, { useState } from 'react'

const QuantityCounter = ({ style }) => {
    const [quantity, setQuantity] = useState(1)
    const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
    const increaseQty = () => setQuantity((prev) => prev + 1)

    return (

        <div className={`flex items-center gap-5 ${style} border border-gray-400  font-semibold select-none cursor-pointer`}>
            <button onClick={decreaseQty} disabled={quantity === 1} className={`${quantity === 1 ? "cursor-not-allowed text-gray-600" : "cursor-pointer"} focus:outline-none ' aria-label='Decrease quantity`}>
                <MinusIcon size={15} />
            </button>
            <span className='w-4 text-center'>{quantity}</span>
            <button onClick={increaseQty} disabled={quantity === 10} className={`${quantity === 10 ? "cursor-not-allowed text-gray-600" : "cursor-pointer"} focus:outline-none `} aria-label='Increase quantity'>
                <PlusIcon size={15} />
            </button>
        </div>


    )
}

export default QuantityCounter