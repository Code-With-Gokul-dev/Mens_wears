import Image from 'next/image';
import React from 'react';
import { newArrivals } from '../../data/Images';
import { Card } from '@/Component/Card-component/Card';
import Carousel from '@/Component/Carousel';
import { assetsData } from '../../data/assetsData';

export const Main = () => {

  return (
    <section className={`md:mt-10  `}>
      {/* carousel */}
      <Carousel />

      {/* New arrivals */}
      <div className='overflow-x-auto  scrollbar-none  flex xl:justify-center flex-wrap gap-5 md:gap-10  bg-white py-10 mx-auto md:px-10 px-2'>
        {
          newArrivals.map(({ image, title, price, offer_price }, i) => (
            <Card key={i} image={image} title={title} price={price} offer_price={offer_price} />
          ))

        }
      </div>
      {/* Pants */}
      <div className='py-10'>
        <div className='text-4xl font-bold font-bricolage text-gray-100 px-10'>
          <h1>Pants</h1>
        </div>
        <div className='flex gap-5  md:gap-10 flex-wrap overflow-x-auto scrollbar-none px-2 md:px-15 mx-auto py-10'>
          {
            assetsData.pants.slice(0, 8).map(({ img, title, price, offer_price }, i) => (
              <Card key={i} image={img} title={title} price={price} offer_price={offer_price} />
            ))
          }
        </div>
      </div>
      {/* shirts */}
      <div className='bg-white py-10'>
        <div className='text-4xl font-bold font-bricolage text-gray-800 px-10'>
          <h1>Shirts</h1>
        </div>
        <div className='flex md:gap-10 gap-5 flex-wrap px-2 md:px-15 mx-auto py-10 overflow-x-auto scrollbar-none'>
          {
            assetsData.shirts.slice(0, 8).map(({ img, title, price, offer_price }, i) => (
              <Card key={i} image={img} title={title} price={price} offer_price={offer_price} />
            ))
          }
        </div>
      </div>
    </section>
  )
}
