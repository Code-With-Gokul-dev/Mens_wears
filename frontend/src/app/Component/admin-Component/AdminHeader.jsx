import React from 'react'
import LogoComponent from '../logoComponent'

const AdminHeader = () => {
    return (
        <header className='fixed top-0 bg-black z-100  p-5   w-full'>

            <LogoComponent navLink={"/admin"} />

        </header>
    )
}

export default AdminHeader