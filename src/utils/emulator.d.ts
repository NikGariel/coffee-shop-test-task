// emulator.d.ts
declare global {
  interface Window {
    emulator: Emulator
  }
}

type Callback<T> = (result: T) => void
type DisplayCallback = (message: string) => void

interface Emulator {
  // Состояния флагов и коллбэков
  isCashinActive: boolean
  isCardTransactionActive: boolean
  isVendingActive: boolean
  cashInCallback: Callback<number> | null
  cardPurchaseCallback: Callback<boolean> | null
  cardDisplayCallback: DisplayCallback | null
  vendingCallback: Callback<boolean> | null

  // Наблюдатели состояния
  observers: {
    cashin: Array<Callback<{ active: boolean }>>
    cardTransaction: Array<Callback<{ active: boolean; success?: boolean }>>
    vending: Array<Callback<{ active: boolean; success?: boolean }>>
  }

  // Метод для регистрации наблюдателей
  addObserver(
    type: 'cashin' | 'cardTransaction' | 'vending',
    observer: Callback<never>
  ): void

  // Метод для уведомления наблюдателей
  notifyObservers(
    type: 'cashin' | 'cardTransaction' | 'vending',
    data: never
  ): void

  // Включение купюроприёмника на прием купюр/монет
  StartCashin(cb: Callback<number>): void

  // Отключение приема купюр/монет купюроприемником
  StopCashin(): void

  // Активирует списание с банковской карты на сумму amount
  BankCardPurchase(
    amount: number,
    cb: Callback<boolean>,
    display_cb: DisplayCallback
  ): void

  // Отмена действующей операции по банковской карте
  BankCardCancel(): void

  // Выдача продукта с индексом product_idx
  Vend(product_idx: number, cb: Callback<boolean>): void

  // Примерные кнопки для взаимодействия с эмулятором
  insertCash(amount: number): void
  initiateCardPayment(amount: number): void
  cancelCardPayment(): void
  dispenseProduct(product_idx: number): void
}

export {}
