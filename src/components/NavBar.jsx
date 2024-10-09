import { getUser } from '@/services/Auth/cookies'
import useFirebaseAuth from '@/services/Auth/useFirebaseAuth'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'

const NavBar = () => {
  let user = getUser()
  const [isClient, setIsClient] = useState(false);
  const { logOut } = useFirebaseAuth()
  const router = useRouter()

  const handleLogout = () => {
    logOut()
    router.push("/login")
  }

  useEffect(() => {
    setIsClient(true); // Ensures rendering only on client-side
  }, []);

  if (!isClient) {
    return null; // Prevents hydration error by not rendering on the server
  }

  return (
    <div className='p-5 flex items-center justify-between gap-10'>
      {/* Logo */}
      <Link href="/">
        <Image src="/images/logo.png" width={200} height={50} alt="Logo" className=" " />
      </Link>

      {/* Hamburger Menu for Mobile */}
      <div className='flex md:hidden'>
        <button id="mobile-menu-toggle" className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links - Hidden on Mobile */}
      <div className='hidden md:flex items-center gap-5'>
        <div className='flex gap-5 capitalize text-lg'>
          <Link href="about-us" className='cursor-pointer hover:text-primary hover:font-bold'>About</Link>
          <Link href="contact-us" className='cursor-pointer hover:text-primary hover:font-bold'>Contact</Link>
        </div>

        {/* User Section */}
        {user ? (
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-2">
              <span className="text-white capitalize size-10 rounded-full bg-orange-500 flex items-center justify-center text-2xl">
                {user[0]}
              </span>
              {user.split('@')[0]}
            </p>
            <button
              onClick={handleLogout}
              className="text-lg text-red-500 font-semibold cursor-pointer"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className='text-lg px-8 p-2 rounded-full font-semibold border w-fit cursor-pointer hover:border-orange-400 hover:text-orange-400'
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu (Hidden by Default) */}
      <div id="mobile-menu" className="fixed  top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 hidden flex-col md:hidden z-50">
        <div className="flex flex-col items-center justify-center gap-5 text-white py-10">
          <Link href="about-us" className='text-lg' onClick={() => document.getElementById("mobile-menu").classList.toggle("hidden")}>About</Link>
          <Link href="contact-us" className='text-lg' onClick={() => document.getElementById("mobile-menu").classList.toggle("hidden")}>Contact</Link>

          {user ? (
            <button
              onClick={() => {
                handleLogout()
                document.getElementById("mobile-menu").classList.toggle("hidden")
              }}
              className="text-lg text-red-500"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className='text-lg px-8 py-2 rounded-full font-semibold border'
              onClick={() => document.getElementById("mobile-menu").classList.toggle("hidden")}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar
