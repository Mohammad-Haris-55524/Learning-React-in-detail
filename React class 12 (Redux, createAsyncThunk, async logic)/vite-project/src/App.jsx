import { useState } from 'react'
import './App.css'

import ProductsScreen from './screen/ProductsScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './screen/AboutUs'
import Cart from './screen/Cart'
import SignIn from './screen/SignIn'
import SignUp from './screen/SignUp'
import NoPageFound from './screen/NoPageFound'
function App() {


  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<ProductsScreen/>}/>
  <Route path='about-us' element={<AboutUs/>}/>
  <Route path='cart' element={<Cart/>}/>
  <Route path='sign-in' element={<SignIn/>}/>
  <Route path='sign-up' element={<SignUp/>}/>
  <Route path='*' element={<NoPageFound/>}/>
</Routes>
</BrowserRouter>
</>
  )
}

export default App
