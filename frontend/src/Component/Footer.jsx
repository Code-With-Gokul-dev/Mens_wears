import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <section className='bg-black relative w-full  justify-center flex flex-col items-center gap-10 text-gray-400 p-5 md:p-10'>
      {/* Brand Grid Container */}
      <div className='grid gap-12 grid-cols-1 md:grid-cols-4 md:justify-items-center w-full'>

        {/* Brand Column */}

        <div className='flex gap-2 '>
          <div className='relative w-10 h-10 md:w-20 md:h-20 shrink-0'>
            <Image
              src="/logo/logo-main-1.png"
              fill
              sizes="(max-width: 768px) 80px, 80px"
              priority
              alt='brand-logo'
            />
          </div>
          <div className='font-serif text-4xl space-y-2 text-white'>
            <h1>Wears</h1>
            <p className='text-sm text-gray-400 font-sans '>Premium Wears with affordable price</p>
            <div className='flex  text-lg w-full items-center gap-5 '>
              <Link href="" className='nav_link'><FaFacebook /></Link>
              <Link href="" className='nav_link'><BsYoutube /></Link>
              <Link href="" className='nav_link'><RiInstagramFill /></Link>
            </div>
          </div>

        </div>



        {/* About Us Column */}
        <nav className='font-bricolage' aria-label="About navigation">
          <ul className='space-y-2 flex flex-col justify-start'>
            <li><Link href="/about" className='block hover:border-white border-transparent border-b  hover:translate-x-3 transition-transform ease-in-out duration-300 hover:text-white w-fit'>About Us</Link></li>
            <li><Link href="/refunds" className='block hover:border-white border-transparent border-b hover:translate-x-3 transition-transform ease-in-out duration-300 hover:text-white w-fit'>Refund and Returns Policy</Link></li>
            <li><Link href="/privacy" className='block hover:border-white border-transparent border-b hover:translate-x-3 transition-transform ease-in-out duration-300 hover:text-white w-fit'>Privacy Policy</Link></li>
            <li><Link href="/terms" className='block hover:border-white border-transparent border-b hover:translate-x-3 transition-transform ease-in-out duration-300 hover:text-white w-fit'>Terms & Conditions</Link></li>
          </ul>
        </nav>

        {/* Contact Us Column */}
        <nav className='font-bricolage' aria-label="Contact navigation">
          <ul className='space-y-2 flex flex-col'>
            <li>
              <Link href="/contact" className='block hover:border-white border-transparent border-b hover:translate-x-3 transition-transform ease-in-out duration-300 hover:text-white w-fit'>Contact Us</Link>
            </li>
            <li>
              <Link href="/store-locator" className='block hover:border-white border-transparent border-b hover:translate-x-3 transition-transform ease-in-out duration-300 hover:text-white w-fit'>Store Locator</Link>
            </li>
            <li>
              <Link href="/partner" className='block hover:border-white border-transparent border-b hover:translate-x-3 transition-transform ease-in-out duration-300 hover:text-white w-fit'>Partner</Link>
            </li>
            <li>
              <Link href="/tips" className='block hover:border-white border-transparent border-b hover:translate-x-3 transition-transform ease-in-out duration-300 hover:text-white w-fit'>Fashion Tips</Link>
            </li>
          </ul>
        </nav>

        {/* Newsletter Column */}
        <div className='font-bricolage flex flex-col gap-4'>
          <div>
            <h1 className='text-xl font-black text-white'>Join our email list</h1>
            <p className='text-sm mt-1'>Sign up for new arrivals, offers, and more!</p>
          </div>
          <form className='bg-white rounded-full flex w-full justify-between items-center group overflow-hidden'>
            <input
              type="email"
              required
              placeholder='Enter your email'
              className='outline-none w-full bg-transparent font-sans text-gray-900 placeholder:text-gray-400 text-sm py-3 px-4 '
            />
            <button type="submit" aria-label="Subscribe" className='text-gray-600 hover:bg-blue-500 hover:text-white transition-transform duration-300 ease-in-out group-hover:text-black group-hover:translate-x-1 pl-2 py-3 px-4 '>
              <MoveRight size={20} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Overlay */}
      <div className='mt-10 border-t border-gray-800 w-full pt-8 flex flex-col items-center gap-4'>
        <div className='w-16 h-16 relative opacity-20 filter grayscale'>
          <Image
            src="/logo/logo-main-1.png"
            fill
            alt="brand overlay"
            sizes="64px"
          />
        </div>
        <div className='text-center text-xs  text-gray-500 font-caveat'>
          <p>© {new Date().getFullYear()} X Wears. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
