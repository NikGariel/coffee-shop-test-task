import { Product } from '@/types/product.type.ts'

interface ProductCardProps {
  product: Product
}

const productCard = ({ product }: ProductCardProps) => {
  return (
    <div className='w-full h-full grid grid-rows-8 items-center'>
      <div className='row-span-6 items-center'>
        <img
          className='object-cover w-24 mx-auto'
          src={product.photo}
          alt={product.name}
        />
      </div>
      <h1 className='text-center row-span-1'>{product.name}</h1>
      <h2 className='text-center text-gray-700 row-span-1'>
        {product.price} РУБ.
      </h2>
    </div>
  )
}

export default productCard
