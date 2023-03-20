import Product from './Product'

const ProductFeed = ({ products }) => {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 md:-mt-44 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image, rating }) => (
          <Product
            id={id}
            key={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={Math.floor(rating.rate)}
          />
        ))}

      <img src='https://bit.ly/42plYRh' className='md:col-span-full' alt='' />

      <div className='md:col-span-2'>
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image, rating }) => (
            <Product
              id={id}
              key={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={Math.floor(rating.rate)}
            />
          ))}
      </div>

      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image, rating }) => (
          <Product
            id={id}
            key={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={Math.floor(rating.rate)}
          />
        ))}
    </div>
  )
}
export default ProductFeed
