// Создание объекта эмулятора
window.emulator = {
  // Состояния флагов и коллбэков
  isCashinActive: false,
  isCardTransactionActive: false,
  isVendingActive: false,
  cashInCallback: null,
  cardPurchaseCallback: null,
  cardDisplayCallback: null,
  vendingCallback: null,

  // Наблюдатели состояния
  observers: {
    cashin: [],
    cardTransaction: [],
    vending: [],
  },

  // Метод для регистрации наблюдателей
  addObserver: function (type, observer) {
    if (this.observers[type]) {
      this.observers[type].push(observer)
    } else {
      console.error('Invalid observer type:', type)
    }
  },

  // Метод для уведомления наблюдателей
  notifyObservers: function (type, data) {
    if (this.observers[type]) {
      this.observers[type].forEach((observer) => observer(data))
    } else {
      console.error('Invalid observer type:', type)
    }
  },

  // Включение купюроприёмника на прием купюр/монет
  StartCashin: function (cb) {
    this.isCashinActive = true
    this.cashInCallback = cb
    this.notifyObservers('cashin', { active: true })
    console.log('Cash-in started.')
  },

  // Отключение приема купюр/монет купюроприемником
  StopCashin: function () {
    this.isCashinActive = false
    this.cashInCallback = null
    this.notifyObservers('cashin', { active: false })
    console.log('Cash-in stopped.')
  },

  // Активирует списание с банковской карты на сумму amount
  BankCardPurchase: function (amount, cb, display_cb) {
    if (this.isCardTransactionActive) {
      console.log('A card transaction is already in progress.')
      return
    }

    this.isCardTransactionActive = true
    this.cardPurchaseCallback = cb
    this.cardDisplayCallback = display_cb
    this.notifyObservers('cardTransaction', { active: true })

    // Эмуляция процесса оплаты
    this.cardDisplayCallback('Приложите карту')
    setTimeout(() => this.cardDisplayCallback('Обработка карты'), 1000)
    setTimeout(() => this.cardDisplayCallback('Связь с банком'), 2000)
    setTimeout(() => {
      const success = Math.random() > 0.5 // случайный успех/неуспех
      this.cardPurchaseCallback(success)
      this.cardDisplayCallback(
        success ? 'Оплата прошла успешно' : 'Оплата не удалась'
      )
      this.isCardTransactionActive = false
      this.notifyObservers('cardTransaction', { active: false, success })
    }, 4000)
  },

  // Отмена действующей операции по банковской карте
  BankCardCancel: function () {
    if (this.isCardTransactionActive) {
      console.log('Card transaction cancellation requested.')
      this.cardPurchaseCallback(false)
      this.cardDisplayCallback('Транзакция отменена')
      this.isCardTransactionActive = false
      this.notifyObservers('cardTransaction', { active: false, success: false })
    } else {
      console.log('No active card transaction to cancel.')
    }
  },

  // Выдача продукта с индексом product_idx
  Vend: function (product_idx, cb) {
    if (this.isVendingActive) {
      console.log('Vending is already in progress.')
      return
    }

    this.isVendingActive = true
    this.vendingCallback = cb
    this.notifyObservers('vending', { active: true })

    // Эмуляция процесса выдачи
    setTimeout(() => {
      const success = Math.random() > 0.2 // 80% шанс на успешную выдачу
      this.vendingCallback(success)
      console.log(
        success
          ? `Product ${product_idx} dispensed successfully.`
          : `Failed to dispense product ${product_idx}.`
      )
      this.isVendingActive = false
      this.notifyObservers('vending', { active: false, success })
    }, 3000)
  },

  // Примерные кнопки для взаимодействия с эмулятором
  insertCash: function (amount) {
    if (this.isCashinActive && this.cashInCallback) {
      this.cashInCallback(amount)
    } else {
      console.log('Cash-in is not active.')
    }
  },

  initiateCardPayment: function (amount) {
    this.BankCardPurchase(
      amount,
      (result) => {
        console.log(`Card transaction ${result ? 'succeeded' : 'failed'}.`)
      },
      (message) => {
        console.log(`Card terminal message: ${message}`)
      }
    )
  },

  cancelCardPayment: function () {
    this.BankCardCancel()
  },

  dispenseProduct: function (product_idx) {
    this.Vend(product_idx, (result) => {
      console.log(
        `Product ${product_idx} ${result ? 'dispensed successfully' : 'failed to dispense'}.`
      )
    })
  },
}

// Примеры вызова методов для тестирования
// window.emulator.insertCash(100);
// window.emulator.initiateCardPayment(50);
// window.emulator.cancelCardPayment();
// window.emulator.dispenseProduct(1);
