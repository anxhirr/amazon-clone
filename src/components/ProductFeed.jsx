import { useState } from 'react'
import Product from './Product'

const ProductFeed = ({ products }) => {
  console.log(products)
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 md:-mt-44 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
      {products.map(
        ({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={Math.floor(rating.rate)}
          />
        )
      )}
    </div>
  )
}
export default ProductFeed
