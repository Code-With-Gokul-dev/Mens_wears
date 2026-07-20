import React from 'react'
import Header from '@/app/Component/Header'
import { Main } from './Component/Main'
import Footer from '@/app/Component/Footer'
import Nav from '@/app/Component/Nav'
import BottomBar from './Component/bottomBar'
import SidebarCart from '@/app/Component/Card-component/SidebarCart'
import { CartProvider } from '../../context/cartContext'
const Page = () => {
   return (
      <section >
         <CartProvider>
            <Nav />
            <Header />
            <Main />
            <SidebarCart />
            <BottomBar />
            <Footer />
         </CartProvider>
      </section>
   )
}
export default Page
