// ------------------------------------ RECEIVING DATA BY PROPS DRILLING ----------------------------------------------
// This (CHILD Component I) is a child Component of (Child Component G) and (Child Component G) is a child Component of 
// (Child Component C) and C is a child component of PARENT==>(GlobalStateManagnmentUsingUseContextHookParentComponent_A).

// So better understanding check the below
// (GlobalStateManagnmentUsingUseContextHookParentComponent_A) ==> (Child Component C) ==> (Child Component G) ==>
// (Child Component G)

// import React, { useState } from 'react'
// // Recieving props data
// function UseContextHookChild_I({userName,setUserName}) {
//   const [showDataOnUiAfterSubmitting, setshowDataOnUiAfterSubmitting] = useState('')
//   console.log("I am from child component I", userName)
// const submitHandler = (e) =>{
// e.preventDefault();
// setshowDataOnUiAfterSubmitting(userName)
// }
//   return (
//     <div>
//     I am "child component I" having "parent component G" with "grand parent component C" and "grand grand parent A" 
//     <h3>Getting User name through Props drilling: {userName}</h3>
//     <form onClick={submitHandler}>
//     <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
//     <button>Submit User Name</button>
//     </form>
//     <h4>Data after submiting: {showDataOnUiAfterSubmitting}</h4>
//     </div>
//   )
// }
// export default UseContextHookChild_I

// -------------------------------------- RECEIVING DATA BY USE CONTEXT -----------------------------------------------

// This (CHILD Component I) is a nested child Component of PARENT COMPONENT ==> 
// (GlobalStateManagnmentUsingUseContextHookParentComponent_A). By using USE CONTEXT WE CAN DIRCTLY PASS DATA FROM 
// PARENT TO CHILD COMPONENT.
// So better understanding check the below
// (GlobalStateManagnmentUsingUseContextHookParentComponent_A) => (Child Component G)

import React, { Component, useContext, useState } from 'react'
import { userContext } from './GlobalStateManagnmentUsingUseContextHookParentComponent_A';

function UseContextHookChild_I() {
// ---------------------------------------------------------------------------------------------------------------------
// Step # 03 
// Main Parent component my jo CONTEXT CREATE kiya tha in (Step 01) then (Step 02) my ham ny userContext.provider ky 
// andar jis jis Component ko wrap kia tha un my sy 1 COMPONENT I tha to ab ham usi CHILD COMPONENT I ky andar un
// GLOABL STATE  ki values ko access karny jaa rahy han by using USE CONTEXT HOOK. Yaad rahy USE CONTEXT(ABC) HOOK ky andar
// uss varible ki value pass karo ga jis sy ham ny CONTEXT CREATE karwaya tha in STEP # 01 in my PARENT COMPONENT, so
// that i could access all the values that i have passed by using provider and value attritube in (STEP #02) of Parent
// Component.
  const gettingUserContext  = useContext(userContext);
// ---------------------------------------------------------------------------------------------------------------------
  console.log("I am child component I (use context hook): ", gettingUserContext);
  // Destructuring object gettingUserContext values
  const{userName, setUserName} = gettingUserContext;
  const [showDataOnUiAfterSubmitting, setshowDataOnUiAfterSubmitting] = useState('')

const submitHandler = (e) =>{
e.preventDefault();
setshowDataOnUiAfterSubmitting(userName)
}
console.log("Child rendered")

  return (
    <div>
    I am "child component I" having "parent component G" with "grand parent component C" and "grand grand parent A" 
    <h3>Getting User name through Props drilling: {userName}</h3>
    <form onClick={submitHandler}>
    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
    <button>Submit User Name</button>
    </form>
    <h4>Data after submiting: {showDataOnUiAfterSubmitting}</h4>
    </div>
  )
}
export default UseContextHookChild_I

