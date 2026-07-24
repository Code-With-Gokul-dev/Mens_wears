import React from 'react'
import Header from '@/app/Component/Header'
import { Main } from './Component/Main'
import Footer from '@/app/Component/Footer'
import Nav from '@/app/Component/Nav'
import BottomBar from './Component/bottomBar'
import SidebarCart from '@/app/Component/Card-component/SidebarCart'
import ReduxProvider from '@/app/(shop)/(pages)/ReduxProvider'

const Page = () => {
   return (
      <section >
         <ReduxProvider>
            <Nav />
            <Header />
            <Main />
            <SidebarCart />
            <BottomBar />
            <Footer />
         </ReduxProvider>
      </section>
   )
}
export default Page
