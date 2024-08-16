import Header from '@/components/header.tsx'
import CategorySelector from '@/components/categorySelector.tsx'
import ProductSelector from '@/components/productSelector.tsx'

const selectionScreen = () => {
  return (
    <div className='relative w-full h-full'>
      <div className='grid w-full h-full grid-rows-9'>
        <div className='row-span-3'>
          <div className='h-1/2'>
            <Header />
          </div>
          <div className='h-1/2'>
            <CategorySelector />
          </div>
        </div>
        <div className='row-span-6 bg-white shadow-cards-container h-full flex flex-col'>
          <ProductSelector />
        </div>
      </div>
    </div>
  )
}

export default selectionScreen
