import { useCoffeeShopStore } from '@/stores/coffeeShop.store.ts'
import { useEffect, useState } from 'react'
import { Category } from '@/types/category.type.ts'

const header = () => {
  const [color, setColor] = useState('bg-category-coffee')
  const selectedCategory = useCoffeeShopStore((state) => state.selectedCategory)

  useEffect(() => {
    switch (selectedCategory) {
      case Category.coffee:
        setColor('bg-category-coffee')
        break
      case Category.tea:
        setColor('bg-category-tea')
        break
      case Category.milkShake:
        setColor('bg-category-milkShake')
        break
      case Category.soda:
        setColor('bg-category-soda')
        break
      default:
        setColor('bg-category-coffee')
    }
  }, [selectedCategory])

  return (
    <div
      className={`w-full h-full ${color} bg-no-repeat bg-center bg-cover flex items-center`}
    >
      <h1 className='font-bold text-3xl text-black mx-5'>Выбор напитка</h1>
    </div>
  )
}
export default header
