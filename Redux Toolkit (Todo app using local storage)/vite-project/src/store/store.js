import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage
import todoReducer from "./features/todoSliceWithLocalStorage"; // Your slice

// Persist configuration
const persistConfig = {
  key: "root", // Key for localStorage
  storage, // Use localStorage
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, todoReducer);

// Create the Redux store
const store = configureStore({
  reducer: {
    todos: persistedReducer, // Use the persisted reducer
  },
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };