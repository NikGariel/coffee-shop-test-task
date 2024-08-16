import { PaymentMethod } from '@/types/payment.type.ts'
import { useCoffeeShopStore } from '@/stores/coffeeShop.store.ts'

const PaymentMethodSelector = () => {
  const changePaymentMethod = useCoffeeShopStore(
    (state) => state.changePaymentMethod
  )
  return (
    <div className='flex flex-col h-full bg-payment-process-default'>
      <div className='flex flex-col flex-grow justify-center items-center'>
        <h1 className='text-center mb-4 text-2xl font-bold text-black'>
          Выбери способ оплаты
        </h1>
      </div>
      <div className='flex flex-col gap-1 p-4'>
        <button
          className='btn btn-block'
          onClick={() => changePaymentMethod(PaymentMethod.backCard)}
        >
          Банковской картой
        </button>
        <button
          className='btn btn-block'
          onClick={() => changePaymentMethod(PaymentMethod.cashIn)}
        >
          Наличными
        </button>
      </div>
    </div>
  )
}

export default PaymentMethodSelector
