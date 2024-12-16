// ------------------------------------ RECEIVING DATA BY PROPS DRILLING ----------------------------------------------
//---- THIS IS A 2ND CHILD COMPONENT OF PARENT COMPONENT (GlobalStateManagnmentUsingUseContextHookParentComponent_A) ----
// Basically "Child component B" and "Child component C" are the sibling because they both have same PARENT 
// (GlobalStateManagnmentUsingUseContextHookParentComponent_A)
// REMBEMBER:
// This "CHILD COMPONENT C" HAS 2 MORE NESTED CHILD COMPONENT (UseContextHookChild_F AND (UseContextHookChild_G) 

import React from 'react'
import UseContextHookChild_F from './UseContextHookChild_F'
import UseContextHookChild_G from './UseContextHookChild_G'

// // Recieving userName and setUserName as a props value parent component A
// function UseContextHookChild_C({userName,setUserName}) {
//   console.log("I am from child component C", userName)
//   return (
//     <div>
//     I am a "Child Component C" having "Parent Component A" {userName}
//     <UseContextHookChild_F/>
// {/*Again passing props from child component C to another child component G because G is a parent of child component I
// and we have to pass data to child component I  */}
//     <UseContextHookChild_G userName={userName} setUserName = {setUserName}/>
//     </div>
//   )
// }
// export default UseContextHookChild_C

// ------------------------------------ RECEIVING DATA BY USE CONTEXT HOOK ----------------------------------------------
import { useContext } from 'react'
import { userContext } from './GlobalStateManagnmentUsingUseContextHookParentComponent_A';
// Recieving userName and setUserName as a props value parent component A
function UseContextHookChild_C() {
  const gettingUserContext  = useContext(userContext)
  console.log("I am child component C (use context hook): ", gettingUserContext);
  // Destructuring object gettingUserContext values
  const{userName, setUserName} = gettingUserContext;
  return (
    <div>
    I am a "Child Component C" having "Parent Component A" {userName}
    <UseContextHookChild_F/>
    <UseContextHookChild_G userName={userName} setUserName = {setUserName}/>
    </div>
  )
}
export default UseContextHookChild_C