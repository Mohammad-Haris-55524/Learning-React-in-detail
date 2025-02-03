import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../store/features/productSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
})