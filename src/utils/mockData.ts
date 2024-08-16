import { Category } from '@/types/category.type.ts'
import Product1 from '@/assets/coffee_shop_product_1.webp'
import Product2 from '@/assets/coffee_shop_product_2.webp'
import Product3 from '@/assets/coffee_shop_product_3.webp'
import Product4 from '@/assets/coffee_shop_product_4.webp'
import Product5 from '@/assets/coffee_shop_product_5.webp'

export const availableProductsMock = [
  {
    id: 1,
    name: 'Эспрессо',
    price: 79,
    category: Category.coffee,
    photo: Product1,
  },
  {
    id: 2,
    name: 'Американо',
    price: 119,
    category: Category.coffee,
    photo: Product2,
  },
  {
    id: 3,
    name: 'Латте',
    price: 129,
    category: Category.coffee,
    photo: Product3,
  },
  {
    id: 4,
    name: 'Капучино',
    price: 129,
    category: Category.coffee,
    photo: Product4,
  },
  {
    id: 5,
    name: 'Макиато',
    price: 129,
    category: Category.coffee,
    photo: Product5,
  },
]
