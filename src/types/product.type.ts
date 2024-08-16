import { Category } from '@/types/category.type.ts'

export type Product = {
  id: number
  name: string
  price: number
  category: Category
  photo: string
}
