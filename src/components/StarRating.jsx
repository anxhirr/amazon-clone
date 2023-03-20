import { StarIcon } from '@heroicons/react/24/outline'

const StarRating = ({ rating }) => {
  return (
    <div className='flex'>
      {Array(rating)
        .fill()
        .map((_, i) => (
          <StarIcon key={i} className='w-5 text-yellow-500' />
        ))}
    </div>
  )
}
export default StarRating
