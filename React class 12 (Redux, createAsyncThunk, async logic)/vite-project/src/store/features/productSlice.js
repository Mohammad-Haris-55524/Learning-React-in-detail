// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   isloading: false,
//   error: "",
//   products: []
// }

// export const userSlice = createSlice({
//   name: 'user',
//   initialState: initialState,
//   extraReducers: {
   
//   },
// })

// // Action creators are generated for each case reducer function
// export const {  } = counterSlice.actions

// export default counterSlice.reducer

// productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  isLoading: false,
  error: "",
  products: []
};

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  }
);

// Create slice
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;