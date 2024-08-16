import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'category-coffee':
          "url('/src/assets/coffee_shop_category_bg_coffee.svg')",
        'category-tea': "url('/src/assets/coffee_shop_category_bg_tea.svg')",
        'category-milkShake':
          "url('/src/assets/coffee_shop_category_bg_milkShake.svg')",
        'category-soda': "url('/src/assets/coffee_shop_category_bg_soda.svg')",
      },
      boxShadow: {
        'cards-container': '0 -10px 75px 0 rgba(0, 0, 0, 0.09)',
      },
      colors: {
        'category-coffee-color': '#EFCCB9',
        'category-tea-color': '#C9EA94',
        'category-milkShake-color': '#F9ECD2',
        'category-soda-color': '#FFE665',
        'payment-process-default': '#F5D009',
        'payment-process-error': '#F03B3B',
      },
    },
  },
  plugins: [daisyui],
}
