import CategoryCard from '@/components/categoryCard.tsx'
import { Category } from '@/types/category.type.ts'

const categorySelector = () => {
  return (
    <div className='bg-white w-full h-full grid grid-cols-4 gap-4 justify-items-center content-center px-3'>
      <CategoryCard category={Category.coffee} />
      <CategoryCard category={Category.tea} />
      <CategoryCard category={Category.milkShake} />
      <CategoryCard category={Category.soda} />
    </div>
  )
}

export default categorySelector
