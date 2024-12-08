import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import FetchAndDeletePostMethod from './componenets/FetchAndDeletePostMethod'
import FecthAndPostApiMethod from './componenets/FecthAndPostApiMethod'
import PrefilledFormAndPutMethod from './componenets/PrefilledFormAndPutMethod'
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000/' 



function App() {
  return (
  <>
  {/* <FetchAndDeletePostMethod/> */}
  <FecthAndPostApiMethod/>
  {/* <PrefilledFormAndPutMethod/> */}
  </>
  )
}

export default App
