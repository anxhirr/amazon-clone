import { addToBasket, removeFromBasket } from '@/store/slices/basketSlice'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import StarRating from './StarRating'

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const dispatch = useDispatch()

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
    }

    dispatch(addToBasket(product))
  }

  const removeItemFromBasket = () => {
    // Remove the item from REDUX...
    dispatch(removeFromBasket({ id }))
  }

  return (
    <div className='grid grid-cols-5'>
      <Image src={image} width={200} height={200} alt='basket item' />

      {/* Middle */}
      <div className='col-span-3 mx-5'>
        <p>{title}</p>

        <StarRating rating={rating} />

        <p className='text-xs my-2 line-clamp-3'>{description}</p>

        <p>{price} €</p>
      </div>

      {/* Right */}
      <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button className='button' onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className='button' onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  )
}
export default CheckoutProduct
