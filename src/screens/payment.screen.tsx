import { useEffect, useState } from 'react'
import { PaymentMethod, PaymentStep } from '@/types/payment.type.ts'
import PaymentMethodSelector from '@/components/paymentMethodSelector.tsx'
import CashInPaymentProcess from '@/components/cashInPaymentProcess.tsx'
import { useCoffeeShopStore } from '@/stores/coffeeShop.store.ts'
import CardPaymentProcess from '@/components/cardPaymentProcess.tsx'

const paymentScreen = () => {
  const selectedPaymentMethod = useCoffeeShopStore(
    (state) => state.selectedPaymentMethod
  )
  const [paymentStep, setPaymentStep] = useState<PaymentStep>(
    PaymentStep.selectPaymentMethod
  )

  useEffect(() => {
    switch (selectedPaymentMethod) {
      case PaymentMethod.cashIn:
        setPaymentStep(PaymentStep.waitForPaymentCashIn)
        break
      case PaymentMethod.backCard:
        setPaymentStep(PaymentStep.waitForPaymentBankCard)
        break
    }
  }, [selectedPaymentMethod])

  return (
    <div className='relative w-full h-full'>
      <div className='h-full'>
        {paymentStep === PaymentStep.selectPaymentMethod && (
          <PaymentMethodSelector />
        )}
        {paymentStep === PaymentStep.waitForPaymentCashIn && (
          <CashInPaymentProcess />
        )}
        {paymentStep === PaymentStep.waitForPaymentBankCard && (
          <CardPaymentProcess />
        )}
      </div>
    </div>
  )
}

export default paymentScreen
