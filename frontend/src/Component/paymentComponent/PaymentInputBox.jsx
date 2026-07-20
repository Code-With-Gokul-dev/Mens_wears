import Image from 'next/image'
import React from 'react'

export const PaymentInputBox = ({register , errors}) => {
    return (
        <section>
            <div className='flex items-center justify-between'>
                <input {...register("payment_type", { required: "payment type is required" })} value={"Razorpay"} type="radio" className='accent-amber-600' /> <span>Razorpay secure (UPI,Cards,Int&apos;l,Wallets)</span> <div className='flex gap-3 items-center '>{
                    ["/paymentIcons/upi.svg", "/paymentIcons/visa.svg", "/paymentIcons/master.svg"].map((img, i) => (<div key={i} className='relative w-8 h-8 overflow-hidden'><Image src={img} alt="payment" fill /></div>))}</div>
            </div>
        </section>
    )
}
