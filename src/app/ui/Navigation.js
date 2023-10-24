"use client"
import React from "react";
import Image from "next/image";
import { HiBars3 } from 'react-icons/hi2';
import { GrClose } from 'react-icons/gr';
import paolamenaImage from '../../../public/Images/paolamena.PNG';
import Link from 'next/link';

const NavigationMenu = [
    {
        href: '/',
        label: "Inicio",
    },
    {
        href: "#Servicios",
        label: "Servicios",
    },
    
    {
        href: '/reservar-hora',
        label: "Reservar Hora",
    },
    {
        href: '/contacto',
        label: "Contacto",
    },
];

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <header className="py-7">
                <div className="container px-4 mx-auto">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div>
                            <a href="/">
                                <Image src={paolamenaImage} width={60} height={30} alt='Paola Mena' />
                            </a>
                        </div>
                        {/* Navigation Menu */}
                        <div className='hidden lg:block'>
                            <ul className='flex space-x-7'>
                                {NavigationMenu.map((item, idx) => (
                                    <li key={item.label}>
                                        <a href={item.href}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* CTA */}
                        <div>
                            <Link href='/auth/signin' className="px-5 py-2 bg-primary text-black rounded-lg hidden lg:inline-block">
                                    Iniciar Sesión
                            </Link>
                        </div>
                        <button className='block lg:hidden' onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? (
                                <GrClose className="text-3xl" />
                            ) : (
                                <HiBars3 className="text-3xl" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile/tablet menu */}
            <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className='h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50'>
                    <div className='bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed'>
                        <div className="h-14 px-10 border-b flex items-center">
                            <button className="flex items-center space-x-3" onClick={toggleMobileMenu}>
                                <GrClose />
                                <span>Close</span>
                            </button>
                        </div>
                        <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
                            <ul className="block mb-7">
                                {NavigationMenu.map((item, idx) => (
                                    <li key={item.label}>
                                        <a href={item.href} className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary "style={{ color: "black" }}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navigation;