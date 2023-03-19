import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/outline'

const Product = ({ title, price, description, category, image, rating }) => {
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10 max-h-[40rem]'>
      <p className='absolute top-2 right-2 italic text-xs text-gray-400'>
        {category}
      </p>

      <div className='grid place-items-center mb-auto'>
        <Image src={image} width={200} height={200} alt='amazon product' />
      </div>
      <h1 className='my-3'>{title}</h1>

      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className='w-5 text-yellow-500' />
          ))}
      </div>

      <p className='text-xs my-2 line-clamp-2'>{description}</p>

      <div>
        <span>{price}</span>
        <span>€</span>
      </div>

      <button className=' button'>Add to Basket</button>
    </div>
  )
}
export default Product
