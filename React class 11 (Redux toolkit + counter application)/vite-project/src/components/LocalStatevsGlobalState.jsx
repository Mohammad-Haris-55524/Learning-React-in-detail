// import React from 'react'

// function LocalStatevsGlobalState() {
//   return (
//     <div>LocalStatevsGlobalState</div>
//     <img src={} alt="" />
//   )
// }

// export default LocalStatevsGlobalState


// Difference Between Local State and Redux Toolkit Global State
// In React, state means storing and managing data that changes over time. Let’s compare local state and global state (Redux Toolkit) in simple terms with examples.

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
