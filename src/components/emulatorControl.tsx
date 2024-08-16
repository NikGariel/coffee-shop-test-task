import { useEffect, useState } from 'react'

const EmulatorControl = () => {
  const [isCashinActive, setIsCashinActive] = useState(false)
  const [isCardTransactionActive, setIsCardTransactionActive] = useState(false)
  const [isVendingActive, setIsVendingActive] = useState(false)
  const [cardTransactionSuccess, setCardTransactionSuccess] = useState(false)
  const [vendingSuccess, setVendingSuccess] = useState(false)

  const [cashInValue, setCashInValue] = useState(0)

  useEffect(() => {
    const handleCashinChange = (data: { active: boolean }) => {
      setIsCashinActive(data.active)
    }

    const handleCardTransactionChange = (data: {
      active: boolean
      success?: boolean
    }) => {
      setIsCardTransactionActive(data.active)
      if (data.success) {
        setCardTransactionSuccess(data.success)
      }
    }

    const handleVendingChange = (data: {
      active: boolean
      success?: boolean
    }) => {
      setIsVendingActive(data.active)
      if (data.success) {
        setVendingSuccess(data.success)
      }
    }

    // Регистрация наблюдателей
    window.emulator.addObserver('cashin', handleCashinChange)
    window.emulator.addObserver('cardTransaction', handleCardTransactionChange)
    window.emulator.addObserver('vending', handleVendingChange)
  }, [])

  const insertCash = () => {
    window.emulator.insertCash(cashInValue)
  }

  return (
    <div className='card bg-base-300 rounded-box grid grow place-items-center w-full h-full p-4'>
      <div className={`badge ${isCashinActive ? 'badge-accent' : ''}`}>
        CashIn Status
      </div>
      <div className={`badge ${isCardTransactionActive ? 'badge-accent' : ''}`}>
        Card Transaction Status: {cardTransactionSuccess ? 'Success' : 'Failed'}
      </div>
      <div className={`badge ${isVendingActive ? 'badge-accent' : ''}`}>
        Vending Status: {vendingSuccess ? 'Success' : 'Failed'}
      </div>
      <input
        disabled={!isCashinActive}
        type='number'
        step='1'
        min='0'
        max='300'
        placeholder='Сумма наличных'
        className='input input-bordered w-full max-w-xs'
        onChange={(e) => setCashInValue(Number(e.target.value))}
      />
      <button
        disabled={!isCashinActive}
        className='btn btn-block'
        onClick={() => insertCash()}
      >
        Внести наличные
      </button>
    </div>
  )
}

export default EmulatorControl
