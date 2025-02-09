import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    cart: [
    ]
}

export const cartSlice = createSlice({
    initialState:initialState,
    name: "cart",
    reducers:{
        addItemToCart: (state,action) => {
            console.log("Cart slice: ", state, action.payload)
            const checkingProductLengthBeforeToBePushedInCart = state.cart.filter((product)=> product.id === action.payload.id);

            if(checkingProductLengthBeforeToBePushedInCart.length < 1){
                state.cart.push(action.payload)
            }
        },

    }
})

export const {addItemToCart} = cartSlice.actions
export default cartSlice.reducer
