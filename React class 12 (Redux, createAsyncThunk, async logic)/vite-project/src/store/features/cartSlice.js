import { createSlice } from "@reduxjs/toolkit";
import PopUpMessage from "../../components/PopUpMessage";
const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  initialState: initialState,
  name: "cart",
  reducers: {
    addItemToCart: (state, action) => {
      console.log("Add Items to cart: ", state, action.payload);
      const checkingProductLengthBeforeToBePushedInCart = state.cart.filter(
        (product) => product.id === action.payload.id
      );

      if (checkingProductLengthBeforeToBePushedInCart.length < 1) {
        state.cart.push(action.payload);
      }
    },

    increaseProductQuantity: (state, action) => {
        console.log("Increase Items quantity in cart: ", action.payload);
        
        const product = state.cart.find((product) => product.id === action.payload);
        
        if (product) {
          product.quantity += 1;  // Mutate state directly
        }
      },

      
    decreaseProductQuantity: (state, action) => {
        console.log("Increase Items quantity in cart: ", action.payload);
        
        const product = state.cart.find((product) => product.id === action.payload);
        
        if (product) {

          product.quantity -= 1;  // Mutate state directly
        }
      },

      clearAllCartItems: (state,action) => {
          state.cart = []
      }
      




  },
});

export const { addItemToCart, increaseProductQuantity, decreaseProductQuantity,clearAllCartItems } = cartSlice.actions;
export default cartSlice.reducer;
