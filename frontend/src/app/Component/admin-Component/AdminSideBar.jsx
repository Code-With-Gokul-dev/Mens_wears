"use client"
import { CreditCard, LayoutDashboard, Package, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import LogoComponent from '../logoComponent'
import { BiLogOutCircle } from 'react-icons/bi'

const AdminSideBar = () => {
    const pathname = usePathname();

    const links = [
        { href: "/admin", name: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
        { href: "/admin/products", name: "Products", icon: <Package className="w-5 h-5" /> },
        { href: "/admin/orders", name: "Orders", icon: <ShoppingCart className="w-5 h-5" /> },
        { href: "/admin/payments", name: "Payments", icon: <CreditCard className="w-5 h-5" /> },
    ]

    return (
        <aside className="fixed top-0 left-0 z-40 h-screen w-60 flex flex-col justify-between   font-bricolage text-white shadow-xl backdrop-blur-md ">

            {/* Navigation links section */}
            <div className="py-4 flex flex-col">
                {/* Header / Logo section */}
                <div className="flex h-20 items-center px-4">
                    <LogoComponent navLink={"/admin"} />
                </div>
                <nav>
                    <ul className="flex flex-col gap-2 p-4">
                        {links.map((link, index) => {

                            const isActive = pathname === link.href || (link.href !== '/admin' && pathname.startsWith(link.href));

                            return (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className={`flex items-center gap-3 rounded-xl p-3 text-sm font-medium transition-all duration-200 group
                                            ${isActive
                                                ? "bg-white text-black shadow-md font-bold"
                                                : "text-white/90 hover:bg-white/10 hover:text-white"
                                            }`}
                                    >
                                        <span className={`transition-transform duration-200 ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
                                            {link.icon}
                                        </span>
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

            </div>
            {/* /Logout btn */}
            <div className='px-4 py-10'>
                <button className='rounded-md flex items-center  gap-3 text-lg p-2 w-full hover:text-red-400 font-medium text-white  group/log'> <span className='group-hover/log:-translate-x-2 transition-all duration-300 ease-in-out '><BiLogOutCircle className='text-2xl' /></span> log out</button>
            </div>
        </aside>
    )
}

export default AdminSideBar
