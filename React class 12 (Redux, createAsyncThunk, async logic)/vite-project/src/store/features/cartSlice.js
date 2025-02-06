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
            state.cart.push(action.payload)
        },

    }
})

export const {addItemToCart} = cartSlice.actions
export default cartSlice.reducer
