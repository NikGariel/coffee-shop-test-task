import { useCoffeeShopStore } from '@/stores/coffeeShop.store.ts'
import { useEffect, useState } from 'react'
import { Category } from '@/types/category.type.ts'
import ProductCard from '@/components/productCard.tsx'
import { Screen } from '@/types/screen.type.ts'

const ProductSelector = () => {
  const availableProducts = useCoffeeShopStore(
    (state) => state.availableProducts
  )
  const navigateToScreen = useCoffeeShopStore((state) => state.navigateToScreen)

  const changeProduct = useCoffeeShopStore((state) => state.changeProduct)
  const selectedCategory = useCoffeeShopStore((state) => state.selectedCategory)
  const [categoryInfo, setCategoryInfo] = useState({
    name: '',
    circleColor: '',
  })

  useEffect(() => {
    let newCategoryInfo

    switch (selectedCategory) {
      case Category.coffee:
        newCategoryInfo = {
          name: 'Кофе',
          circleColor: 'bg-category-coffee-color',
        }
        break
      case Category.tea:
        newCategoryInfo = {
          name: 'Чай',
          circleColor: 'bg-category-tea-color',
        }
        break
      case Category.milkShake:
        newCategoryInfo = {
          name: 'Молочный коктейль',
          circleColor: 'bg-category-milkShake-color',
        }
        break
      case Category.soda:
        newCategoryInfo = {
          name: 'Морсы и газ. напитки',
          circleColor: 'bg-category-soda-color',
        }
        break
      default:
        newCategoryInfo = { name: '', circleColor: '' }
    }

    setCategoryInfo(newCategoryInfo)
  }, [selectedCategory])

  const renderProductCards = () => {
    return availableProducts
      .filter((product) => product.category === selectedCategory)
      .map((product) => (
        <div
          key={product.id}
          className='border-2 rounded-2xl h-full w-full'
          onClick={() => {
            changeProduct(product)
            navigateToScreen(Screen.payment)
          }}
        >
          <ProductCard product={product} />
        </div>
      ))
  }

  return (
    <div className='p-4 flex flex-col h-full relative'>
      <div
        className={`absolute -left-[3%] top-5 ${categoryInfo.circleColor} rounded-full w-16 h-16`}
      ></div>
      <h1 className='text-4xl font-bold text-black relative z-10 py-5'>
        {categoryInfo.name}
      </h1>
      <div className='flex-grow grid grid-cols-3 grid-rows-2 gap-4 justify-center items-center justify-items-center content-center'>
        {renderProductCards()}
      </div>
    </div>
  )
}

export default ProductSelector
