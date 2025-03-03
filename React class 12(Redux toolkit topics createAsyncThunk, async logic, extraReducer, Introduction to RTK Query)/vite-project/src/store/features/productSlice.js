import { createAsyncThunk} from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from 'react';
// =====> By using Async await approach 
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
      .addCase(fetchProducts.pending, (state) => {
        // state.isLoading = "loading";
        state.isLoading = true;

      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // state.isLoading = "succeeded";
        state.isLoading = false
        state.products = action.payload;
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

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default productSlice.reducer


// ------------------------------------ Brief detail about the difference between Reducer vs ExtraReducers ------------------------------------

// Reducer aur extraReducer React Redux Toolkit (RTK) mein state management ke liye use hote hain. Chalo in dono ko simple aur step-by-step samajhte hain.

// 1. Reducer Kya Hota Hai?
// Reducer ek function hota hai jo state ko update karne ke liye actions ka use karta hai. Jab koi action dispatch hota hai, reducer state ko modify kar ke new state return karta hai.

// Example: Counter Reducer
// Agar hum ek simple counter ka example lein, toh usmein reducer ka kaam state update karna hoga.


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


// _____________________________________________________________________________________________________________________________________________
// 1 baat hamesha yaad rahkha ky REDUX TOOLKIT hamri REDUX ka hi advance version hay kiu ky jo ham phely REDUX use kar rahy hoty thy uss my jab
// ham jab apna store create karwa rahy hoty thy jis function ky thorugh woh ab depreceate hogya hy or ab use my nahe raha. REDUX TOOLKIT my hamey
// or bhe bhot assani hogaye hy ky jo hamey phely REDUX ky andar bhot sara BOILER PLATE sy realated code likhna parta tha woh ab REDUX TOOLKIT 
// my nahe likhna parta kiu ky ab REDUX TOOLKIT woh sara kaam behind the scene khud kar rahe hoti hay.

// Secondly jab ham phely REDUX use karty thy to jab hamey API CALLING karwani hoti the to ham uss time 1 alag library ka use karna parta tha 
// REDUX ky andar by using libraries like ===> REDUX THUNK yah REDUX SAGA ky name sy. Lekin ab REDUX TOOLKIT ky andar hamey alag sy koi library 
// install karwani nahe parti API CALLING ky liye  
// _____________________________________________________________________________________________________________________________________________

// const initialState = {
// isLoading: false,
// products: [],
// error: null
// }
// createSlice({
//   initialState,
//   name:"products",
// reducers:{},
// extraReducers:(builder)=>{
// builder.addCase = ()=>{

// }
// }
// })



// ---------------------------------------------------- Middleware Kya Hota Hai Redux Mein ? -------------------------------------------------
// Middleware Redux ka ek special feature hai jo actions ko modify kar sakta hai before wo reducers tak pohonchein. Ye mostly asynchronous 
// tasks handle karne ke liye use hota hai, jaise API calls.

// 🔹 Bina middleware ke: Redux sirf synchronous actions handle kar sakta hai.
// 🔹 Middleware ke sath: Hum API se data fetch kar sakte hain, logs add kar sakte hain, ya side effects handle kar sakte hain.

// Redux mein Thunk ek built-in middleware hai jo asynchronous operations (API calls) handle karne ke liye use hota hai. Aur Redux Toolkit 
// mein createAsyncThunk is middleware ka built-in solution hai.

// Example (Simple & Beginner Friendly)
// Maan lo humein ek button click par users ki list fetch karni hai jo API se aayegi.

// 1️⃣ Pehle Redux Store Bina Middleware Ke

// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "users",
//   initialState: { users: [] },
//   reducers: {
//     setUsers: (state, action) => {
//       state.users = action.payload;
//     },
//   },
// });

// export const { setUsers } = userSlice.actions;
// export default userSlice.reducer;

// 🔹 Yahan masla yeh hai ki agar humein API call karni ho toh hum direct reducers ke andar fetch() nahi likh sakte, kyunki reducers 
// synchronous hone chahiye.




// 2️⃣ Middleware Ka Use Kar Ke API Fetch Karna (createAsyncThunk)
// Ab hum middleware ka use karte hain jo async actions ko handle karega.

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Thunk Middleware ka use kar ke API Call
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
//         state.status = "loading"; // API call start hone par status "loading"
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.status = "succeeded"; // API successfully data le aaye
//         state.users = action.payload;
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.status = "failed"; // Error aane par status "failed"
//         state.error = action.error.message;
//       });
//   },
// });

// export default userSlice.reducer;


// 3️⃣ Isko Component Mein Kaise Use Karen?
// Ab hum Redux se data fetch kar ke React component mein show karenge.
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUsers } from "./userSlice";

// const UsersList = () => {
//   const dispatch = useDispatch();
//   const { users, status, error } = useSelector((state) => state.users);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   if (status === "loading") return <p>Loading...</p>;
//   if (status === "failed") return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Users List</h2>
//       {users.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// };

// export default UsersList;


// Middleware Ko Kab Use Karein?
// Agar tumhe sirf simple state update karna ho (like counter), toh reducers kaafi hain.
// Agar asynchronous operations (API calls, timers, logging, etc.) karne ho, toh middleware (Thunk) zaroori hota hai.

// Middleware Ka Fayda Kya Hai?
// ✅ Redux ko async banata hai.
// ✅ API request ka status (loading, success, error) track karta hai.
// ✅ Code clean aur manageable banata hai.


// Conclusion
// ✔️ createAsyncThunk Redux ka ek middleware hai jo async actions (like API calls) ko handle karta hai.
// ✔️ Middleware Redux ke actions ko modify kar sakta hai before reducers tak pohonchein.
// ✔️ Agar API calls ya side effects handle karne hain, toh Redux Toolkit mein createAsyncThunk use karna best practice
//  hai.










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








 