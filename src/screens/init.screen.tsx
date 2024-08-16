import PromoImages from '@/components/promoImages.tsx'
import { useCoffeeShopStore } from '@/stores/coffeeShop.store.ts'
import { Screen } from '@/types/screen.type.ts'

const initScreen = () => {
  const navigateToScreen = useCoffeeShopStore((state) => state.navigateToScreen)

  return (
    <div
      className='relative w-full h-full overflow-hidden'
      onClick={() => navigateToScreen(Screen.selection)}
    >
      <PromoImages />
    </div>
  )
}

export default initScreen
