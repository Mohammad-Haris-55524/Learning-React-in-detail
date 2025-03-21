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


