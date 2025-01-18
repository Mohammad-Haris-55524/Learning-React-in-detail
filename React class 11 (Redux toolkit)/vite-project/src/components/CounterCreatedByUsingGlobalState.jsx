import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment,decrement,incrementByAmount, decrementByAmount } from '../store/features/counterSlice'
function CounterCreatedByUsingGlobalState() {

const [inputValue, setInputValue] = useState(); 
console.log(inputValue)
const onInputChangeHandler = (e) =>{
  console.log(e.target.value)
  const intoNumber = Number(e.target.value)
  setInputValue(intoNumber)
}
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
    <div className='w-2xl outline w-2/4 mx-auto h-screen p-2'>
    <h3 className='text-center text-2xl font-bold bg-blue-100 p-3 text-blue-500 '>Counter created by global state using redux</h3>
    <h1 className='text-center text-xl font-bold mt-10'>Counter {value}</h1>
    <div className='flex justify-around mt-6'>
    <button className='border-2 px-4 py-2 bg-green-500 text-white rounded' onClick={()=>dispatch(increment())}>Increment +</button>
    <button className='border-2 px-4 py-2 bg-red-500 text-white rounded' onClick={()=>dispatch(decrement())}>Decrement -</button>
    </div>

    <div className='flex flex-col items-center justify-center mt-10'>
      <label className='text-lg font-bold mb-2'>Enter the Amount to be incremented or Decremented</label>
      <div>
        <input className='mb-10 p-2 border-2 border-gray-400 rounded' type="number" onChange={onInputChangeHandler} placeholder='Enter the value' /></div>
    <div className='space-x-36 '>
    <button className='px-4 py-2 bg-blue-500 text-white rounded' onClick={()=>{console.log("Increment by Amount clicked")
       dispatch(incrementByAmount(inputValue))}}>Increment by Amount</button>
    <button className="px-4 py-2 bg-yellow-500 text-white rounded" onClick={()=>{console.log("Decrement by Amount clicked")
      dispatch(decrementByAmount())}}>Decrement by value</button>
      </div>
      </div>
      
      </div>
    </>
  )
}

export default CounterCreatedByUsingGlobalState