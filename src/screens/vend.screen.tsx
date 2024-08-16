import { useCoffeeShopStore } from '@/stores/coffeeShop.store.ts'
import { useEffect, useState } from 'react'
import VendResult from '@/components/vendResult.tsx'
import VendInProgress from '@/components/vendInProgress.tsx'

const vendScreen = () => {
  const selectedProduct = useCoffeeShopStore((state) => state.selectedProduct)
  const [result, setResult] = useState<boolean | null>(null)

  const vendCallback = (result: boolean) => {
    setResult(result)
  }

  useEffect(() => {
    window.emulator.Vend(selectedProduct!.id, vendCallback)
  }, [])
  return (
    <div className='relative w-full h-full'>
      {result === null && <VendInProgress />}
      {result !== null && <VendResult result={result} />}
    </div>
  )
}

export default vendScreen
