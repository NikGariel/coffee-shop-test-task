import { useCoffeeShopStore } from '@/stores/coffeeShop.store.ts'

interface VendResultProps {
  result?: boolean
}

const vendResult = ({ result }: VendResultProps) => {
  const reset = useCoffeeShopStore((state) => state.reset)
  return (
    <div className={'relative w-full h-full'}>
      {result ? (
        <div className='flex flex-col h-full bg-[#F5D009]'>
          <div className='flex flex-col flex-grow justify-center items-center'>
            <h1 className='text-center mb-4 text-3xl font-bold text-black'>
              Напиток готов!
            </h1>
            <h2 className='text-center mb-4 text-1xl font-bold text-black'>
              вы можете забрать его
            </h2>
          </div>
          <div className='flex flex-col gap-1 p-4'>
            <button
              className='btn btn-block'
              onClick={() => reset()}
            >
              Вернуться на главную
            </button>
          </div>
        </div>
      ) : (
        <div className='flex flex-col h-full bg-[#F03B3B]'>
          <div className='flex flex-col flex-grow justify-center items-center'>
            <h1 className='text-center mb-4 text-3xl font-bold text-black'>
              Ошибка выдачи!
            </h1>
          </div>
          <div className='flex flex-col gap-1 p-4'>
            <button
              className='btn btn-block'
              onClick={() => reset()}
            >
              Вернуться на главную
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default vendResult
