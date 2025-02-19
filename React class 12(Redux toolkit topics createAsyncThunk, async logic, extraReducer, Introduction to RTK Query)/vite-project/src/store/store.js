import { configureStore } from '@reduxjs/toolkit'
import fetchProducts from '../store/features/productSlice'
export const store = configureStore({
  reducer: {
    products: fetchProducts
  },
})