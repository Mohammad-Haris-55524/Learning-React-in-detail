// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import UpdatedTodosScreen from "./components/UpdatedTodoScreen";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <UpdatedTodosScreen />
    </PersistGate>
  </Provider>
);

export default App;