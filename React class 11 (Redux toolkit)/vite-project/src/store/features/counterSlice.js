//----------------------------------------------------------- What are Reducers ? ---------------------------------------------------------- 
// In Redux, a reducer is a function that updates an application's state in response to actions
// Reducer aik Object hay jisy ham Redux ki duniya my state ko Handle karny ka code jahaan likhty han usy reducers bolty han. Normal screnerio 
// my ham inhy functions bol rhay hoty han (increment, decrement, incrementByAmount, decrementByAmount) lekin redux ki duniya my inhay REDUCERS 
// bolain gy.
import { createSlice } from "@reduxjs/toolkit";

// Yah mery counter ky state ki initial Value hay jisy my increment and decrement karwao ga global state ky thorough
const initialState = {value : 0}

const counterSlice = createSlice({
    initialState: initialState,
    name:"counter",
    reducers: {
        increment: function(state,action){
//----------------------------------------------------------- What are State & Action? -------------------------------------------------------- 
// state: Iss my hamey proxy name ka object milta hay
// action: Iss my hamey aik type ka object milta {type: 'counter/increment', payload: undefined}, 
// 1) Type my name ata hay Uss function ka jo trigger howa ho + Slice ka name ata hy jis ka function trigger howa ho.
// 2) Payload my hamey woh value milti hay jo ham application ky thorugh pass karaty han useDispatch hook ka use karty howy function ky andar
// as an argument. 
            console.log(state, action)
            state.value += 1;
        },

        decrement: (state,action)=>{
            state.value -= 1;
        },

        incrementByAmount: (state,action)=>{
            state.value = action.payload + 1 
        },

        decrementByAmount : (state,action)=>{
            state.value = action.payload - 1
        }
    }
});

// varibaleName.actions karny sy varibaleName ky andar jo ho reducers(mean function) mojood hon gy woh ham access kar payen gy. 

// export ==> counterSlice.actions: Uper bany tamam function my yaahaan to use karo ga nahe kiu ky ap ko yaad hoga ham ny redux ka 1 advantage
// parha tha ky State ko manage karny wala code ham alag jagah karein gy and UI/application sy related code ham alag jagah par karen gy isi liye
// ham yahaan global state ky andar tamam functions ko export kar dein gy phr jahaan application my need pary gi usy import kar lein gy 

// Action creaters are genrated or each reducer functions (Learn more from above)
export const {increment, decrement, incrementByAmount, decrementByAmount} = counterSlice.actions

// 1) Default export: 
export default counterSlice.reducer
// OR
// 2) Naming export:
// export const counterReducer = counterSlice.reducer
