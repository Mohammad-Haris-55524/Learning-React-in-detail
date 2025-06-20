// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import { fakeStoreApi } from './features/apiSlice'

export const store = configureStore({
  reducer: {
    [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeStoreApi.middleware),
})