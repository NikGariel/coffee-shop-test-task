import InitScreen from '@/screens/init.screen.tsx'
import { useCoffeeShopStore } from '@/stores/coffeeShop.store.ts'
import { Screen } from '@/types/screen.type.ts'
import SelectionScreen from '@/screens/selection.screen.tsx'
import PaymentScreen from '@/screens/payment.screen.tsx'
import VendScreen from '@/screens/vend.screen.tsx'

const emulator = () => {
  const selectedScreen = useCoffeeShopStore((state) => state.selectedScreen)
  return (
    <div
      style={{ width: 480, height: 854 }}
      className='artboard phone-5 artboard-demo overflow-hidden'
    >
      {selectedScreen === Screen.init && <InitScreen />}
      {selectedScreen === Screen.selection && <SelectionScreen />}
      {selectedScreen === Screen.payment && <PaymentScreen />}
      {selectedScreen === Screen.vend && <VendScreen />}
    </div>
  )
}

export default emulator
