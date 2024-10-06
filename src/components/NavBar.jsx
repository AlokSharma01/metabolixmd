import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='p-5 flex items-center justify-between gap-10'>
        <Image src="/images/logo.png" width={250} height={60}/>
        <div className='flex items-center gap-5'>
            <ul className='flex gap-5 capitalize text-xl'>
                <li className='cursor-pointer hover:text-primary hover:font-bold' >Home</li>
                <li className='cursor-pointer hover:text-primary hover:font-bold'>Service</li>
                <li className='cursor-pointer hover:text-primary hover:font-bold'>About</li>
                <li className='cursor-pointer hover:text-primary hover:font-bold'>Contact</li>
            </ul>

            <Link href="/login" className='text-lg px-8 p-2 rounded-full font-semibold border w-fit cursor-pointer hover:border-orange-400 hover:text-orange-400' >
                Login
            </Link>
        </div>
    </div>
  )
}

export default NavBar