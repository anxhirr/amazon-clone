import { selectItems, selectTotal } from '@/app/slices/basketSlice'
import CheckoutProduct from '@/components/CheckoutProduct'
import Header from '@/components/Header'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  const { data: session } = useSession()

  return (
    <div className='bg-gray-100'>
      <Header />

      <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/* Left */}
        <div className='flex-grow m-5 shadow-sm'>
          <Image
            src='https://bit.ly/3Ju2OkS'
            width={1020}
            height={250}
            alt='checkout banner'
          />
          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>
              {items.length === 0
                ? 'Your Shopping Basket is empty.'
                : 'Your Shopping Basket'}
            </h1>
            {items.map(
              ({ id, title, price, description, category, image, rating }) => (
                <CheckoutProduct
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  rating={rating}
                />
              )
            )}
          </div>
        </div>

        {/* Right */}
        <div>
          {items.length > 0 && (
            <div className='flex flex-col bg-white p-10 shadow-md'>
              <h2 className='whitespace-nowrap'>
                Subtotal ({items.length} items):{' '}
                <span className='font-bold'>
                  {total} <span className='font-normal'>€</span>
                </span>
              </h2>

              {!session ? (
                <button
                  className='button mt-2 from-gray-300 to-gray-500 border-gray-200 text-gray-300'
                  onClick={signIn}
                >
                  Sign in to Checkout
                </button>
              ) : (
                <button className='button mt-2'>Proceed to Checkout</button>
              )}

              <p className='text-xs text-gray-500 mt-2'></p>

              <p className='text-xs text-gray-500 mt-2'>
                By clicking "Proceed to Checkout" you agree to the{' '}
                <a href='#' className='text-blue-500'>
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href='#' className='text-blue-500'>
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
export default Checkout
