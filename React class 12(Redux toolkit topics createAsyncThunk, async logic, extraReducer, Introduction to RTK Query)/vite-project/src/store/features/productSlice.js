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



// Reducer aur extraReducer React Redux Toolkit (RTK) mein state management ke liye use hote hain. Chalo in dono ko simple aur step-by-step samajhte hain.

// 1. Reducer Kya Hota Hai?
// Reducer ek function hota hai jo state ko update karne ke liye actions ka use karta hai. Jab koi action dispatch hota hai, reducer state ko modify kar ke new state return karta hai.

// Example: Counter Reducer
// Agar hum ek simple counter ka example lein, toh usmein reducer ka kaam state update karna hoga.

import { createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { value: 0 },
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     reset: (state) => {
//       state.value = 0;
//     },
//   },
// });

// export const { increment, decrement, reset } = counterSlice.actions;
// export default counterSlice.reducer;


// Reducer Kab Use Karein?
// Agar hum simple synchronous state updates kar rahe hain, jaise ke:

// Counter increase/decrease karna
// Local state update karna (without API call)
// UI toggle ya simple changes
// Toh reducers use karte hain.



// _______________________________________________________________________________________________________________________________________

// 2. ExtraReducers Kya Hota Hai?
// extraReducers Redux Toolkit mein asynchronous actions handle karne ke liye use hota hai, jaise ke API calls (createAsyncThunk ka use karte hain).

// Agar humein API se data lana ho, toh hum extraReducers ka use karte hain kyunki ye multiple states ko handle kar sakta hai (pending, fulfilled, rejected).

// Example: Fetching User Data from API
// Agar hum ek example lein jismein API call karni ho, toh extraReducers ka use hoga.

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // API se data fetch karne ke liye thunk
// export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   return response.json();
// });

// const userSlice = createSlice({
//   name: "users",
//   initialState: { users: [], status: "idle", error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.users = action.payload;
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export default userSlice.reducer;

// ExtraReducers Kab Use Karein?
// Agar hum asynchronous kaam kar rahe hain, jaise:

// API se data fetch karna
// Backend se CRUD operations
// Firebase ya kisi aur external service ka data lana
// Toh extraReducers use karte hain.



// Conclusion
// Agar sirf local state update karni ho (counter, toggle, form state, etc.), toh reducers use karo.
// Agar API calls ya async operations handle karne hain, toh extraReducers use karo.
// Agar koi aur confusion hai toh batao, aur bhi explain kar sakta hoon! 😊


// _______________________________________________________________________________________________________________________________________

// Haan, bilkul sahi samajh rahe ho! ✅

// Reducer functions Redux mein global state ko manage karne ke liye use hote hain. Yeh functions state ko modify karte hain based on actions jo dispatch hote hain.

// Simpler Definition:
// 🔹 Reducers global state ko control karte hain, aur jab koi action (like increment, decrement, API call) dispatch hota hai, toh reducer state ko update kar ke naya state return karta hai.

// Bas ek chhoti cheez yaad rakhna: Reducers directly state ko mutate nahi karte, balki naya state return karte hain ya Redux Toolkit mein Immer.js ka use hota hai jo state ko safely modify karne ki permission deta hai.

// Agar ab bhi koi confusion hai toh batao, main aur clear kar sakta hoon! 😊