import React from 'react'
import Header from '@/Component/Header'
import { Main } from '../Component/Main'
import Footer from '@/Component/Footer'
import Nav from '@/Component/Nav'
import BottomBar from '../Component/bottomBar'
import SidebarCart from '@/Component/Card-component/SidebarCart'
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
