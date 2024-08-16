const vendInProgress = () => {
  return (
    <div className='relative w-full h-full bg-white flex flex-col items-center justify-center'>
      <span className='loading loading-spinner loading-lg text-neutral'></span>
      <p className='mt-4 text-neutral'>Приготовление напитка</p>
    </div>
  )
}
export default vendInProgress
