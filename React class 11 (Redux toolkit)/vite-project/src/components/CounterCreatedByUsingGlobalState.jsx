import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment,decrement,incrementByAmount, decrementByAmount } from '../store/features/counterSlice'
function CounterCreatedByUsingGlobalState() {
// ------------------------------------------------ USE SELECTOR() HOOK --------------------------------------------------
  // Use selector hook ka use kar ky ham GLOBAL STATE ky andar sy Count state ki value ko apni application my access/use karen gy.
  // const state = useSelector((state)=> state)
  // console.log(state.count.value)
  // OR
  const value = useSelector((state)=> state.count.value)
  console.log(value)

// ------------------------------------------------ USE DISPATCH() HOOK --------------------------------------------------
// Bahi dekho ham direct apni application my Counterslices my create hony waly reducers(functions) ko use to nahe kar skty, Kiu ky woh global
// store/state my create howa hay. Lekin jab hamey use karnay ki need pary gi apni application my to ham global state/store walay functions ko 
// useDispatch() hook ka use kar ky access kar lein gy  
  const dispatch = useDispatch()
  return (
    <>
    <h1>Counter {value}</h1>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <button onClick={()=>{console.log("Increment by Amount clicked")
       dispatch(incrementByAmount())}}>Increment by Amount</button>
    <button onClick={()=>{console.log("Decrement by Amount clicked")
      dispatch(decrementByAmount())}}>Decrement by value</button>
    </>
  )
}

export default CounterCreatedByUsingGlobalState