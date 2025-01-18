import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // Import Tailwind CSS
import App from './App.jsx'
//---------------------------- How to link our GLOBAL STORE (index.js / store.js) with our application ? -------------------------------------
import { store } from './store/store.js' //store ky folder ky andar mojood index.js/store.js ki file ko ham yahaan import karwa rahy han.

import { Provider } from 'react-redux' // Provider aik higher order component hay. Yah hamey react-redux sy mil raha hy jo ham phely install kar
// chuky han. Iss ka use kary ky ham apna GLOABAL STORE or apni APPLICATION ko aapas my link karwayen gy. 
// Iss ka use ham kuch iss trha karein gy ky ham apni APPLICATION ko iss Provider (high level Component) ky andar wrap kar dein gy.
// Lekin ham Provider ky andar apni application ko wrap kar kiu rahy han ?
// Ans: Kiu ky ham phely apna Global store (index.js / store.js) bana chuky han to ab hamey uss Global store ki states ki values ko apni 
// application ky components my use to karna pary ga na. To isi liye ham apni application ko kuch iss trha wrap kar dein gy. 
//   <Provider store={store}>
// <App />
// </Provider> 
// Yah karny sy hamey Global Store my bani tamam state ka access mil gy ga phr hamari marzi hogi ky ham un states ki values ko apni application 
// my kisi bhe component my access/use karein.

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>,
)
