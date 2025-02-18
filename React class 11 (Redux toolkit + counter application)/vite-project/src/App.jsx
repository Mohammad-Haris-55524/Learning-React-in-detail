import { useState } from 'react'
import './App.css'
import IntroductionToReduxToolKit from './components/IntroductionToReduxToolKit'
import CounterCreatedByUsingGlobalState from './components/CounterCreatedByUsingGlobalState'
import LocalStatevsGlobalState from './components/LocalStatevsGlobalState'

function App() {
return (
  <>
  {/* <IntroductionToReduxToolKit/> */}
  {/* <CounterCreatedByUsingGlobalState/> */}
  <LocalStatevsGlobalState/>  
  </>
  )
}

export default App


