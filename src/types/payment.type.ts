export enum PaymentStep {
  selectPaymentMethod,
  waitForPaymentCashIn,
  waitForPaymentBankCard,
}

export enum PaymentMethod {
  cashIn,
  backCard,
}

export enum PaymentResultColor {
  default = 'payment-process-default',
  error = 'payment-process-error',
}
