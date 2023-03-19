import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Banner = () => {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            src='https://bit.ly/3YVY2Cd'
            width={1500}
            height={500}
            alt='amazon banner'
          />
        </div>
        <div>
          <Image
            src='https://bit.ly/3FzzZCi'
            width={1500}
            height={500}
            alt='amazon banner'
          />
        </div>
        <div>
          <Image
            src='https://bit.ly/3LwimHr'
            width={1500}
            height={500}
            alt='amazon banner'
          />
        </div>
      </Carousel>
    </div>
  )
}
export default Banner
