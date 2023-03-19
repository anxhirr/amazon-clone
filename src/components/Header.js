import Image from 'next/image'

import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline'
import { signIn, signOut, useSession } from 'next-auth/react'

const Header = () => {
  return (
    <header>
      {/* Top Nav */}

      <div className='flex items-center gap-4 bg-amazon_blue p-3 flex-grow py-2'>
        <div className='flex items-center flex-grow mt-2 sm:flex-grow-0'>
          <Image
            width={150}
            height={40}
            src='https://bit.ly/3LFgHPX'
            alt='amazon logo'
            className='cursor-pointer'
          />
        </div>
        {/* Search Bar */}
        <div className='hidden sm:flex flex-grow items-center h-10 bg-yellow-400 hover:bg-yellow-500 rounded-md cursor-pointer'>
          <input
            className='p-2 w-6 flex-grow flex-shrink rounded-l-md focus:outline-none font-medium h-full'
            type='text'
          />
          <MagnifyingGlassIcon className='h-12 p-4 self-center' />
        </div>

        {/* Right Nav */}
        <div className='flex items-center gap-6 text-white whitespace-nowrap text-sm md:text-base'>
          <div className='link' onClick={signIn}>
            <p>Hello Anxhi</p>
            <p className='font-bold'>Account & Lists</p>
          </div>
          <div className='link'>
            <p>Return</p>
            <p className='font-bold'>& Orders</p>
          </div>
          <div className='link relative flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 flex items-center justify-center rounded-full text-black font-bold text-sm'>
              0
            </span>

            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline-flex font-bold mt-2'>Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className='flex items-center gap-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
        <p className='link flex items-center '>
          <Bars3Icon className='h-6 mr-1' />
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's deal</p>
        <p className='link hidden md:inline-flex'>Electronics</p>
        <p className='link hidden md:inline-flex'>Food & Grocery</p>
        <p className='link hidden lg:inline-flex'>Prime</p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  )
}
export default Header
