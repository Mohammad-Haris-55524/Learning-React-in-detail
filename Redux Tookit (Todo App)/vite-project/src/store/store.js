import { configureStore } from '@reduxjs/toolkit'

// For normal todo slice
// import todoSlice from './features/todoSlice' 

// For Local storage todo slice
import todoSliceUsingLocalStorage from './features/todoSliceWithLocalStorage'

export const store = configureStore({
  reducer: {
    // For normal todo slice
    // todos: todoSlice

    // For Local storage todo slice
    todos: todoSliceUsingLocalStorage

  },
})