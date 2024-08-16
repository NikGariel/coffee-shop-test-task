import { Category } from '@/types/category.type.ts'
import coffee from '@/assets/coffee_shop_category_img_coffee.webp'
import tea from '@/assets/coffee_shop_category_img_tea.webp'
import milkShake from '@/assets/coffee_shop_category_img_milkShake.webp'
import soda from '@/assets/coffee_shop_category_img_soda.webp'
import { useCoffeeShopStore } from '@/stores/coffeeShop.store.ts'

interface CategoryCardProps {
  category: Category
}

const categoryCard = ({ category }: CategoryCardProps) => {
  const changeCategory = useCoffeeShopStore((state) => state.changeCategory)
  const selectedCategory = useCoffeeShopStore((state) => state.selectedCategory)

  // Function to dynamically generate the card
  const renderCategoryCard = (
    category: Category,
    imageSrc: string,
    label: string,
    color: string
  ) => {
    return (
      <div
        className={`flex w-full h-full flex-col items-center ${
          selectedCategory === category ? '' : 'grayscale'
        }`}
        onClick={() => changeCategory(category)}
      >
        <div
          className={`relative w-20 h-20 rounded-full ${color} overflow-hidden flex items-center justify-center`}
        >
          <img
            className='object-cover w-full h-full'
            src={imageSrc}
            alt={label}
          />
        </div>
        <div className='flex items-center justify-center mt-2 h-10'>
          <span className='text-center'>{label}</span>
        </div>
      </div>
    )
  }

  return (
    <div className='overflow-hidden'>
      {category === Category.coffee &&
        renderCategoryCard(
          Category.coffee,
          coffee,
          'Кофе',
          'bg-category-coffee-color'
        )}
      {category === Category.tea &&
        renderCategoryCard(Category.tea, tea, 'Чай', 'bg-category-tea-color')}
      {category === Category.milkShake &&
        renderCategoryCard(
          Category.milkShake,
          milkShake,
          'Молочный коктейль',
          'bg-category-milkShake-color'
        )}
      {category === Category.soda &&
        renderCategoryCard(
          Category.soda,
          soda,
          'Морсы и газ. напитки',
          'bg-category-soda-color'
        )}
    </div>
  )
}

export default categoryCard
