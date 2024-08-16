import { create } from 'zustand'
import { Screen } from '@/types/screen.type.ts'
import { Category } from '@/types/category.type.ts'
import { Product } from '@/types/product.type.ts'
import { availableProductsMock } from '@/utils/mockData.ts'
import { PaymentMethod } from '@/types/payment.type.ts'

interface State {
  selectedScreen: Screen
  selectedCategory: Category
  availableProducts: Product[]
  selectedProduct: Product | undefined
  selectedPaymentMethod: PaymentMethod | undefined
}

interface Actions {
  navigateToScreen: (screen: Screen) => void
  changeCategory: (category: Category) => void
  changeProduct: (product: Product) => void
  changePaymentMethod: (paymentMethod: PaymentMethod) => void
  reset: () => void
}

// define the initial state
const initialState: State = {
  selectedScreen: Screen.init,
  selectedCategory: Category.coffee,
  availableProducts: availableProductsMock,
  selectedProduct: undefined,
  selectedPaymentMethod: undefined,
}

export const useCoffeeShopStore = create<State & Actions>((set) => ({
  ...initialState,
  navigateToScreen: (screen: Screen) => set(() => ({ selectedScreen: screen })),
  changeCategory: (category: Category) =>
    set(() => ({ selectedCategory: category })),
  changeProduct: (product: Product) =>
    set(() => ({ selectedProduct: product })),
  changePaymentMethod: (paymentMethod: PaymentMethod) =>
    set(() => ({ selectedPaymentMethod: paymentMethod })),
  reset: () => {
    set(initialState)
  },
}))
