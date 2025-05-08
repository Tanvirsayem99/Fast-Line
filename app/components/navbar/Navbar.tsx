"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../Logo/Logo';
const Navbar = () => {
      const pathname = usePathname();
      console.log(pathname)
    return (
        <div className='flex justify-around items-center bg-[#708F6B]
        py-5'>
            <div><Logo/></div>
            <div>
                <ul className='flex gap-5 '>
                    <Link href={"/"} className={`${pathname =='/' ? 'text-red-500' : 'text-white'}`}>HOME</Link>
                    <Link href={"Login"} className={`${pathname =='/Login' ? 'text-red-500' : 'text-white'}`}>LOGIN</Link>
                    <Link href={"Register"} className={`${pathname =='/Register' ? 'text-red-500' : 'text-white'}`}>REGISTER</Link>
                    <Link href={"About"} className={`${pathname =='About' ? 'text-red-500' : 'text-white'}`}>ABOUT</Link>
                    <Link href={"Contact"} className={`${pathname =='Contact' ? 'text-red-500' : 'text-white'}`}>CONTACT</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;