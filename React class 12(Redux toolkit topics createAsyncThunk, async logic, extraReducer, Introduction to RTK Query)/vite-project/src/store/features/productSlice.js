//-------------------------------- INTRODUCTION TO EXTRAREDUCERS IN REDUX TOOLKIT AND WHAT IS createAsyncThunk ? -----------------------------
// _____________________________________________________________________________________________________________________________________________
// 1 baat hamesha yaad rahkha ky REDUX TOOLKIT hamri REDUX ka hi advance version hay kiu ky jo ham phely REDUX use kar rahy hoty thy uss my jab
// ham jab apna store create karwa rahy hoty thy jis function ky thorugh woh ab depreceate hogya hy or ab use my nahe raha. REDUX TOOLKIT my hamey
// or bhe bhot assani hogaye hy ky jo hamey phely REDUX ky andar bhot sara BOILER PLATE sy realated code likhna parta tha woh ab REDUX TOOLKIT 
// my nahe likhna parta kiu ky ab REDUX TOOLKIT woh sara kaam behind the scene khud kar rahe hoti hay.

// Secondly jab ham phely REDUX use karty thy to jab hamey API CALLING karwani hoti the to ham uss time 1 alag library ka use karna parta tha 
// REDUX ky andar by using libraries like ===> REDUX THUNK yah REDUX SAGA ky name sy. Lekin ab REDUX TOOLKIT ky andar hamey alag sy koi library 
// install karwani nahe parti API CALLING ky liye  

// *********************************************************** MOST IMPORTANT ****************************************************************
// Before diving into code must study the theory PARTS CHECK COMPONENTS OF ====> ReducersVsExtraReducers & WhatAreMiddleWaresInReduxtookit
// _____________________________________________________________________________________________________________________________________________

import { createAsyncThunk} from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";

//  ---------------------------------- Making an API CALL in redux tookit using createAsyncThunk (middleware) --------------------------------
// ------------------------------------ Way # 01 (using fetch with then catch error handleing approach) --------------------------------------

// export const fetchProducts = createAsyncThunk('products/fetchProducts', () => {
//   return fetch('https://fakestoreapi.in/api/products') // Here we are returning the result to fetchProducts function that we
//   // got in case of promise resolved from (then case) or rejection (from catch case due to error). We are using return so
//   // that we can access and use the values outside the function in extraReducers and can update our global state according
//   // to it. 
//   .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => data) // Returning the fetched data to function(fetchproduct) in case of promise is resolved
//     .catch(error => {
//       console.error('Error fetching products:', error);
//       throw error; // Returning the fetched to function (fetchproduct) error in case of promise is rejected
//     });
// });

// const initialState = {
//   products: [],
//   error: '',
//   isLoading: false
// }

// const productsSlice = createSlice({
//   initialState,
//   name:"products",
//   reducers:{},
//   extraReducers:(builder)=>{
//   builder.addCase(fetchProducts.pending, (state,action)=>{
//     state.isLoading = true
//   })
//   builder.addCase(fetchProducts.fulfilled, (state,action)=>{
//     state.isLoading = false // state my hamari initial states ki values hoti han jisy ham update karwa skty han 
//     // jab bhe global state my koi changes karwani ho to 
//     state.products = action.payload // action my woh data milta hay jo hamey createAsyncThunk(middleware) waly
//     //  function(fetchProducts) sy milta hay promise resolve(fullfilled) hony par yah phr promise reject(rejected) hony par
//     console.log(state,action)
//   })
//   builder.addCase(fetchProducts.rejected, (state,action)=>{
//     console.log(state,action) // action ki initial value my '' mily ga agar promise reject hogya to error message set 
//     // hogy ga (check line 480) jo hamey catch block sy mily ga while making API request in createAsyncThunk function.
//     state.isLoading = false
//     state.error = action.error.message
//   })
// }
// })

// export default productsSlice.reducer

// -------------------------------- Way # 02 (using fetch Async and await catch error handleing approach) -------------------------------------

export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
  const response = await fetch('https://fakestoreapi.in/api/products')
  // const {products, status} = await response.json()
  const data = await response.json()
  try{
    // console.log(products, status)
    // return products
    // console.log(data)
     return data
  }
  catch(err){
    // console.log(err.message)
    return err
  }
})

export const productSlice = createSlice({
  name: 'products',
  reducers: {},
  // initialState,
  initialState: { products: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        // state.isLoading = "loading";
        state.isLoading = true;

      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // state.isLoading = "succeeded";
        state.isLoading = false // state my hamari initial states ki values hoti han jisy ham update karwa skty han 
// jab bhe global state my koi changes karwani ho to 
        state.products = action.payload; // action my woh data milta hay jo hamey createAsyncThunk(middleware) waly
//  function(fetchProducts) sy milta hay promise resolve(fullfilled) hony par yah phr promise reject(rejected) hony par
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        // state.isLoading = "failed";
        state.isLoading = false;
        console.log(state.error) // null mily ga kiu ky error ki initial state ki value null hay
        console.log(action.error.message) // error ky andar null ki jagah yah woh msg show kara dy ga jo hamey catch block sy mily ga jab API call my koi error aye ga 
        state.error = action.error.message
      });
  },
})

export default productSlice.reducer

// --------------------------------------------------------------------------------------------------------------------------------------------

// const fetchProducts = createAsyncThunk('products/fetchProducts', ()=>{
//   return ('https://fakestoreapi.com/products').then((response)=> response.json())
//   .then((data)=> console.log(data))
// })
// console.log(fetchProducts)








// __________________________________________________________________________________________________________________________________________
// My Question asked by ChatGpt: My ny suna hay redux toolkit pure functions ko handle karti hay lekin asynchronous operations pure functions
//  nahe hoty balky impure functions hoty han isi liye ham createAsync thunk ko as a middleware use karty han taky woh aik impure function 
// ko pure function bana kar redux ko dy kia aisa hi hay ?

// Answer: 
// Haan! Tum bilkul sahi samajh rahe ho. ✅
// Redux sirf pure functions handle karta hai, aur isi wajah se asynchronous operations (API calls, timeouts, etc.) ko directly reducers ke 
// andar nahi likh sakte.
// Chalo is concept ko step-by-step samajhte hain.

// 🔹 Redux Mein "Pure" aur "Impure" Functions Kya Hote Hain?

// 1️⃣ Pure Functions (Shafaf aur Predictable)

// Hamesha ek hi input par ek hi output dete hain.
// Koi side effect nahi hota (jaise API calls, timeouts, ya console.log).
// State ko directly modify nahi karte, balki new state return karte hain.

// 🎯 Example of a Pure Function (Reducer)
// const counterReducer = (state = { count: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1 };
//     default:
//       return state;
//   }
// };
// 🔹 Yeh reducer pure function hai kyunki yeh sirf input leta hai (state & action) aur ek new state return karta hai bina kisi side effect ke.


// 2️⃣ Impure Functions (Unpredictable)

// Different outputs de sakte hain same input par.
// Side effects hote hain (API calls, timeouts, randomness).
// Redux reducers mein directly use nahi ho sakte.

// 🎯 Example of an Impure Function
// const fetchUserData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   return response.json();
// };
// 🔹 Yeh function impure hai kyunki yeh ek API call karta hai, jo asynchronous hai, aur har baar alag result de sakta hai (agar API down ho
//  ya data change ho jaye).


// 🔹 Redux Toolkit Mein Middleware Kyu Zaroori Hai?
// Redux reducers sirf pure functions handle karte hain. Lekin asynchronous code (jo impure hota hai) bhi Redux ke through handle karna hota hai.

// Isi liye Redux middleware (Thunk) ka use hota hai, jo impure functions ko Redux-compatible banata hai.
// 👉 Middleware Redux ke actions aur reducers ke beech ka ek bridge hota hai.
// 👉 createAsyncThunk middleware async functions ko Redux ke pure functions ke saath compatible banata hai.


// 🔹 Middleware "Impure" Function Ko "Pure" Banata Hai (Example)
// Agar hum bina middleware ke API call karne ki koshish karein toh Redux kaam nahi karega:
// // ❌ Yeh Redux reducer mein kaam nahi karega (kyunki async hai)
// const userReducer = (state, action) => {
//   if (action.type === "FETCH_USERS") {
//     fetch("https://jsonplaceholder.typicode.com/users") // ❌ API call inside reducer (NOT ALLOWED)
//       .then((res) => res.json())
//       .then((data) => {
//         state.users = data; // ❌ Direct state mutation (Redux disallow karta hai)
//       });
//   }
//   return state;
// };

// ✅ Correct Approach: Using createAsyncThunk

// Middleware (createAsyncThunk) use karke Redux ko async function dena possible ho jata hai:
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Middleware to handle async function
// export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   return response.json();
// });

// // Slice
// const userSlice = createSlice({
//   name: "users",
//   initialState: { users: [], status: "idle", error: null },
//   reducers: {}, // Normal reducers ke liye
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
// ✔️ Ab Redux sirf "pure" reducers se deal karega, kyunki middleware (createAsyncThunk) ne impure function ko handle kar liya.

// 🔹 Final Conclusion
// ✅ Redux sirf pure functions handle karta hai.
// ✅ Async operations (jaise API calls) impure hote hain, jo Redux reducers ke andar directly use nahi ho sakte.
// ✅ Middleware (createAsyncThunk) impure functions ko Redux-compatible pure functions mein convert karta hai.

 