import { useCoffeeShopStore } from '@/stores/coffeeShop.store.ts'
import { useEffect, useState } from 'react'
import { Screen } from '@/types/screen.type.ts'

const CashInPaymentProcess = () => {
  const [cashInValue, setCashInValue] = useState(0)
  const selectedProduct = useCoffeeShopStore((state) => state.selectedProduct)
  const navigateToScreen = useCoffeeShopStore((state) => state.navigateToScreen)

  // Проверяем, если нет выбранного продукта или его цена не определена
  const isButtonDisabled =
    !selectedProduct || selectedProduct.price > cashInValue

  useEffect(() => {
    window.emulator.StartCashin((newCashInValue) => {
      setCashInValue((prevCashInValue) => prevCashInValue + newCashInValue)
    })
  }, [])

  const successPayment = () => {
    window.emulator.StopCashin()
    navigateToScreen(Screen.vend)
  }

  return (
    <div className='flex flex-col h-full bg-payment-process-default'>
      <div className='flex flex-col flex-grow justify-center items-center'>
        <h1 className='text-center mb-4 text-3xl font-bold text-black'>
          Внесите наличные
        </h1>
        <h1 className='text-center mb-4 text-xl font-bold text-black'>
          Необходимая сумма: {selectedProduct?.price ?? 0} РУБ.
        </h1>
        <h1 className='text-center mb-4 text-xl font-bold text-black'>
          Внесенная сумма: {cashInValue} РУБ.
        </h1>
      </div>
      <div className='flex flex-col gap-1 p-4'>
        <button
          disabled={isButtonDisabled}
          className='btn btn-block'
          onClick={() => successPayment()}
        >
          Оплатить
        </button>
      </div>
    </div>
  )
}

export default CashInPaymentProcess
