'use client'
import { Search, ShoppingCart, User2 } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { useCart } from '../../../context/cartContext'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const BottomBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const cartItemCount = useSelector((state) => state.auth?.user?.cart?.items)
  const { openCart } = useCart();
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleUser = () => {
    if (user) {
      return router.push("/profile");
    }
    router.push("/sign-in");

  }
  return (
    <nav
      className={`md:hidden fixed bottom-0 left-0 z-50 w-full bg-black flex justify-evenly py-4 items-center border-t border-gray-800 transition-transform transform-gpu duration-300 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
    >
      {/* Search Icon */}
      <button aria-label="Search" className='w-7 h-7 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 ease-in-out'>
        <Search size={24} />
      </button>

      {/* Profile Icon */}
      <button onClick={handleUser} aria-label="Profile" className='w-7 h-7 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 ease-in-out'>
        {user !== null ? (<span className='w-8 h-8 flex justify-center text-black bg-white rounded-full items-center uppercase font-semibold font-bricolage '>{user?.username[0]}</span>) : (<User2 size={24} />)}
      </button>

      {/* Cart Icon */}
      <button onClick={openCart} aria-label="Shopping Cart" className='relative w-7 h-7 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 ease-in-out'>
        <span className='absolute -right-2 -top-2 bg-red-600 font-sans font-bold rounded-full w-5 h-5 flex items-center justify-center text-[10px] text-white animate-pulse'>
          {
            cartItemCount !== null && cartItemCount?.length > 0 && (<span>{cartItemCount.length}</span>)
          }
        </span>
        <ShoppingCart className='text-white' />
      </button>
    </nav>
  )
}

export default BottomBar
