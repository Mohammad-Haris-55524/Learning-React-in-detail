// This (CHILD Component G) is a child Component of (Child Component C) and a nested child Component of 
// (GlobalStateManagnmentUsingUseContextHookParentComponent_A)
import React from 'react'
import UseContextHookChild_I from './UseContextHookChild_I'

// Receiving PROPS data 
function UseContextHookChild_G({userName,setUserName}) {
  console.log("I am from child component G", userName)
  
  return (
    <div>
    I am "child component G" having "parent component C" and "grand grand component A"
    {/* Passing userName and setUserName as a props using props drilling to child component I */}
    <UseContextHookChild_I userName={userName} setUserName = {setUserName}/>
    </div>
  )
}

export default UseContextHookChild_G