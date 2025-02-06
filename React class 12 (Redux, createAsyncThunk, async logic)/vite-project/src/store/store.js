import { configureStore, createReducer } from '@reduxjs/toolkit'
import productReducer from '../store/features/productSlice';
import cartReducer from './features/cartSlice'
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer
  },
})