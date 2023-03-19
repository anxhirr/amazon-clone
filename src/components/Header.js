import Image from 'next/image'

import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header>
      {/* Top Nav */}

      <div className='flex items-center gap-4 bg-amazon_blue p-1 flex-grow py-2'>
        <div className='flex items-center flex-grow mt-2 sm:flex-grow-0'>
          <Image
            width={150}
            height={40}
            src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
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
          <div className='link'>
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
      <div></div>
    </header>
  )
}
export default Header
