import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LogoComponent = ({ navLink }) => {
    return (
        <Link href={navLink} className='flex  items-center group gap-1 text-white'>
            <div className='relative w-10 h-10 overflow-hidden group-hover:scale-115 transform-gpu transition-transform duration-300 ease-in-out'>
                <Image src={'/logo/logo-main-1.png'} loading='eager' alt='Brand_logo' fill sizes='50' />
            </div>
            <h1 className=' font-bricolage  tracking-widest text-4xl  transform-gpu transition-transform duration-300 ease-in-out '>Wears</h1>
        </Link>
    )
}

export default LogoComponent