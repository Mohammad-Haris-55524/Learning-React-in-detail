import { createSlice } from "@reduxjs/toolkit";
import PopUpMessage from "../../components/ModalComponent";
const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  initialState: initialState,
  name: "cart",
  reducers: {

    // Logic 01 (How to add products into cart and remember if product is already added before it should not be added again)
    // addItemToCart: (state, action) => {
    //   console.log("Add Items to cart: ", state, action.payload);
    //   const checkingProductLengthBeforeToBePushedInCart = state.cart.filter(
    //     (product) => product.id === action.payload.id
    //   );

    //   if (checkingProductLengthBeforeToBePushedInCart.length < 1) {
    //     state.cart.push(action.payload);
    //   }
    // },

  // Logic 02 (How to add products into cart and remember if product is already added before it should not be added again)
    // addItemToCart: (state, action) => {
    //   console.log("Add Items to cart: ", state, action.payload);
    //   const checkingProductExistOrNot = state.cart.find((product) => product.id === action.payload.id)

    //   console.log(checkingProductExistOrNot)
    //   if (checkingProductExistOrNot) {
    //     // checkingProductExistOrNot.quantity = checkingProductExistOrNot.quantity + 1
    //     // ({...action.payload, quantity: action.payload.quantity + 1});
    //     checkingProductExistOrNot.quantity ++
    //   }
    //   else{
    //     // state.cart.push(action.payload)
    //     state.cart.push({...action.payload, quantity: 1});
        
    //     // checkingProductExistOrNot.quantity = action.payload.quantity + 1
   
    //   }
    // },

    addItemToCart: (state,action) =>{
    console.log("Add Items to cart: ", state, action.payload);
      const checkingProductExistOrNot = state.cart.find((product)=>product.id === action.payload.id)
      console.log(checkingProductExistOrNot)
      if(checkingProductExistOrNot){
      // checkingProductExistOrNot.quantity = checkingProductExistOrNot.quantity + 1      
      // ---------------------------- OR --------------------------------
      checkingProductExistOrNot.quantity ++
      }
      else{
       state.cart.push({...action.payload, quantity: 1});
      }
      console.log(checkingProductExistOrNot)

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
