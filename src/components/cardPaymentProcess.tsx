import { useEffect, useState } from 'react'
import { Screen } from '@/types/screen.type.ts'
import { useCoffeeShopStore } from '@/stores/coffeeShop.store.ts'
import { PaymentResultColor } from '@/types/payment.type.ts'

const CardPaymentProcess = () => {
  const { selectedProduct, navigateToScreen } = useCoffeeShopStore((state) => ({
    selectedProduct: state.selectedProduct,
    navigateToScreen: state.navigateToScreen,
  }))

  const [pinPadMessage, setPinPadMessage] = useState('')
  const [resultColor, setResultColor] = useState(PaymentResultColor.default)

  const processBankCardPurchase = () => {
    if (!selectedProduct) {
      console.warn('No selected product found')
      return
    }

    window.emulator.BankCardPurchase(
      selectedProduct.price,
      pinPadCallback,
      (info) => {
        setPinPadMessage(info)
      }
    )
  }

  const retryBankCardPurchase = () => {
    setResultColor(PaymentResultColor.default)
    processBankCardPurchase()
  }

  const pinPadCallback = (isSuccess: boolean) => {
    if (isSuccess) {
      handleSuccessfulPayment()
    } else {
      setResultColor(PaymentResultColor.error)
    }
  }

  const handleSuccessfulPayment = () => {
    window.emulator.BankCardCancel()
    navigateToScreen(Screen.vend)
  }

  useEffect(() => {
    processBankCardPurchase()
  }, [])

  return (
    <div className={`flex flex-col h-full bg-${resultColor}`}>
      <div className='flex flex-col flex-grow justify-center items-center'>
        <h1 className='text-center mb-4 text-3xl font-bold text-black'>
          {pinPadMessage}
        </h1>
      </div>
      <div className='flex flex-col gap-1 p-4'>
        <button
          disabled={resultColor !== PaymentResultColor.error}
          className='btn btn-block'
          onClick={retryBankCardPurchase}
        >
          Повторить попытку
        </button>
      </div>
    </div>
  )
}

export default CardPaymentProcess
