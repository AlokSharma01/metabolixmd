import { getUser } from '@/services/Auth/cookies'
import useFirebaseAuth from '@/services/Auth/useFirebaseAuth'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const NavBar = () => {

  let user = getUser()

  const { logOut } = useFirebaseAuth()

  const router = useRouter()

  const handleLogout = () => {
    logOut()
    router.push("/login")
  }

  return (
    <div className='p-5 flex items-center justify-between gap-10'>
      <Image src="/images/logo.png" width={250} height={60} />
      <div className='flex items-center gap-5'>
        <ul className='flex gap-5 capitalize text-xl'>
          <li className='cursor-pointer hover:text-primary hover:font-bold'>Service</li>
          <li className='cursor-pointer hover:text-primary hover:font-bold'>About</li>
          <li className='cursor-pointer hover:text-primary hover:font-bold'>Contact</li>
        </ul>

        {
          user ? (
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2">
                <div className="text-white capitalize size-10 rounded-full bg-orange-500 flex items-center justify-center text-2xl">
                  {user[0]} {/* Display the first character of the user's email */}
                </div>
                {user.split('@')[0]} {/* Display the email before the '@' symbol */}
              </p>
              <button
                onClick={handleLogout} // Implement this function to handle logout
                className="text-lg  text-red-500 font-semibold  cursor-pointer"
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
          )
        }

      </div>
    </div>
  )
}

export default NavBar