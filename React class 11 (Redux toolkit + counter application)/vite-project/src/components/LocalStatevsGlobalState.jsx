import React from 'react'
import LocalStatevsGlobalStateImage1 from '../assets/localvsglobalstate.png'
import LocalStatevsGlobalStateImage2 from '../assets/LocalvsReduxState(gobalState).png'
function LocalStatevsGlobalState() {
  return (
    <>
    <div>Local State vs Global State</div>
    <img src={LocalStatevsGlobalStateImage1} alt="" />
    <img src={LocalStatevsGlobalStateImage2} alt="" />

    </>
  )
}

export default LocalStatevsGlobalState

// Topic # 01
// Difference Between Local State and Redux Toolkit Global State

// In React, state means storing and managing data that changes over time. Let’s compare local state and global state (Redux Toolkit) in simple
//  terms with examples.

// Local State (React State)
// Local state is like keeping things in your room. Only you can use them.

// 📌 Example:
// Imagine you are making a counter that increases when you press a button.

// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0); // Local State

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// export default Counter;

// ✅ How Local State Works:

// useState is used to create local state.
// Only this component can use the count value.
// If you create another counter component, it will have its own separate count.




// // ------------------------------------------------------------------------------------------------------------------------------------------

// 2️⃣ Global State (Redux Toolkit)
// Global state is like keeping things in the living room. Everyone in the house can use them.

// 📌 Example:
// Imagine you are building a shopping cart. The user adds items from different pages (like Home page and Product page), but the total items should update everywhere.

// 📍 With Redux Toolkit, the cart count is shared globally.

// Step 1: Create a Redux Store
// // store.js
// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: { items: 0 },
//   reducers: {
//     addItem: (state) => {
//       state.items += 1;
//     },
//   },
// });

// export const { addItem } = cartSlice.actions;

// export const store = configureStore({
//   reducer: {
//     cart: cartSlice.reducer,
//   },
// });


// Step 2: Use State in Any Component

// // HomePage.jsx
// import { useDispatch, useSelector } from "react-redux";
// import { addItem } from "./store";

// function HomePage() {
//   const items = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h2>Home Page</h2>
//       <p>Items in cart: {items}</p>
//       <button onClick={() => dispatch(addItem())}>Add to Cart</button>
//     </div>
//   );
// }

// export default HomePage;


// // ProductPage.jsx
// import { useSelector } from "react-redux";

// function ProductPage() {
//   const items = useSelector((state) => state.cart.items);

//   return (
//     <div>
//       <h2>Product Page</h2>
//       <p>Total Items in Cart: {items}</p>
//     </div>
//   );
// }

// export default ProductPage;


// // For differnece between local and global state check image above

// // In Short:
// // Use Local State for simple things like input forms or counters.
// // Use Redux Toolkit when many components need to share the same data, like a shopping cart, user login, or theme settings.


// Topic # 02
// 📝 Can We Mutate State in Local State and Redux Toolkit?

// What is State Mutation?
// State mutation means directly changing the state value without using proper methods.

// For example:
// state = 5;  // ❌ Direct mutation (Wrong)
// state.value = 10;  // ❌ Direct mutation (Wrong)


// 🔹 1. Local State (useState) and Mutation
// In local state (useState), we should NOT mutate the state directly, because React won’t detect the change and won’t re-render the component.

// ❌ Wrong Way (Mutating the State Directly):
// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increaseWrong = () => {
//     count = count + 1; // ❌ Direct Mutation (React won’t re-render)
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increaseWrong}>Increase (Wrong)</button>
//     </div>
//   );
// }
// 🛑 Problem: React won’t update the screen because it doesn’t know the state has changed.

// ✅ Correct Way (Using setState):
// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increaseCorrect = () => {
//     setCount(count + 1); // ✅ Correct (React re-renders)
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increaseCorrect}>Increase (Correct)</button>
//     </div>
//   );
// }
// ✅ React will re-render because we used setState.




// 🔹 2. Redux Toolkit and Mutation

// In Redux, we should never directly mutate the state, but Redux Toolkit is special because it uses a library called Immer that allows us to write code that looks like mutation but works immutably behind the scenes.

// 🛑 Redux Without Toolkit (Cannot Mutate State):
// In classic Redux (without Toolkit), you must return a new object manually:

// // Classic Redux (without Toolkit)
// function cartReducer(state = { items: 0 }, action) {
//     switch (action.type) {
//       case "ADD_ITEM":
//         return { ...state, items: state.items + 1 }; // ✅ Return new object
//       default:
//         return state;
//     }
//   }

  
//   ✅ Redux Toolkit (Looks Like Mutation but is Not):
//   In Redux Toolkit, we write simple code that looks like mutation, but Immer automatically converts it to immutable updates.
//   import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: { items: 0 },
//   reducers: {
//     addItem: (state) => {
//       state.items += 1; // ✅ Looks like mutation, but it's not (thanks to Immer)
//     },
//   },
// });

// export const { addItem } = cartSlice.actions;
// export default cartSlice.reducer;

// 🛡️ Redux Toolkit uses Immer to handle the mutation safely. It creates a new state object under the hood.

// 💡 In Short:
// In Local State, you must never mutate directly, always use setState().
// In Redux Toolkit, you can write code that looks like mutation, but Immer keeps it safe and immutable under the hood.
