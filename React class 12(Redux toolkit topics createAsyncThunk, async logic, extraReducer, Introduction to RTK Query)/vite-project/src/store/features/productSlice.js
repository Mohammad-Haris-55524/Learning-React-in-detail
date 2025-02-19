import { createAsyncThunk} from '@reduxjs/toolkit'

export const fetchProducts = {
    
 
}

export const productSlice = createAsyncThunk({
  name: 'products',
//   initialState,
  extraReducers:{
    
  },
  reducers: {},
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default productSlice.reducer