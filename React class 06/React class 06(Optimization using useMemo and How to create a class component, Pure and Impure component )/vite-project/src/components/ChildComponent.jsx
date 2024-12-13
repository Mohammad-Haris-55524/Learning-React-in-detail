// ************************************************CHAPTER # 01(A)******************************************************
import React, { useState } from 'react'
import GrandChildComponentOne from './GrandChildComponentOne';

export default function ChildComponent() {
    const [count, setCount] = useState(1); 
    let onChangeHandler = () => {
  // ----------------------------------------------------------
        setCount(count + 3);
        // setCount(count + 3);
        // setCount(count + 3);
  // ----------------------------------------------------------
        // setCount(preVal => preVal + 3);
        // setCount(preVal => preVal + 3);
        // setCount(preVal => preVal + 3);
}
  return (
    <>
    <div style={{border: "4px solid black", marginBottom: "1rem"}}>
    <h1>Counter: {count}</h1>
    {/* <button onClick={onChangeHandler}>Counter</button> */}
    <button onClick={() => setCount(count + 1)}>Counter</button>
    {console.log("I am child component: ",count)}
    </div>
    <GrandChildComponentOne/>
    </>
  )
}
// ***************************CONCLUSION ==> What Issue we are facing in this component? ******************************
// 1) Dekho mery pas 3 components han jis my sy 1st componennt ka name child component hay, 2nd componennt ka name Grand 
// child component One hay and 3rd componennt ka name Grand child component Two hay. Seen kuch aisa hay ky Grand 
// child component One ko my ny child componenet ky andar call kar rakha hay or isi trha Grand child component Two ko 
// Grand child component One ky andar call kar rakha hay.
// 2) Ab seen kuch aisa hay ky my ny child component ky andar STATE ka use kiya hay or hamey already maloom hay REACT ka 
// behavior ky jab bhe hamary parent components my STATE/PROPS update hoty han to hamara COMPONENT dobara sy reRENDER hota
// hy. Hamari logic ky lihaaz sy child component hamara (PARENT component) hay GRAND CHILD COMPONENTS ONE & TWO ka. 
// To iss sy ho yah raha hy ky jab bhe my child component ki value ko update kar rahe hon to child component sy jo 
// components linked han to sath my woh bhe reRender ho rahy han. Yah koi achi cheez nahe hay hamari REACT APPLICATION 
// ky liye performance ky lihaaz sy. Kiu ky abi to hamari UI simple hay lekin in future agar hamari UI complex howi to
// hamari application bhot slow ho gy gi or mera components kuch delay lay kar reRender hoga jo achi cheez nahe hay.
// Yah to mery GRAND CHILD COMPONENT ONE yah phr GRAND CHILD COMPONENT TWO ki UI depend kar rahe ho CHILD COMPONENT ki
// STATE/PROPS ki value par phr to GRAND CHILD waly components ka update hona banta hay. To phr to ap isy RERENDER hony 
// dein. Lekin agar unnecessary update ho rahy han jesy hamry iss case my horahy han to phr bilkul achi cheez nahe.
// ----------------------------------SO HOW CAN WE TACKLE THIS FAZOOL RERENDERING -------------------------------------
// 3) USE PURE COMPONENTS TO TACKLE UNNECESSARY RERENDERING, ONLY RENDERS WHEN THE STATE/PROPS CHANGES EITHER NOT.
// What does unnecessary reRendering means ? 
// ANSWER:- Mery 3 components (child component) (Grand child component One) (Grand child component Two) yah sary IMPURE
// COMONENTS han yah phr inhay REGULAR REACT COMONENTS bhe bolty han.
// --------------------------------------------------------------------------------------------------------------------
// What is the DIFFERENCE BETWEEN A PURE COMPONENT && IMPURE COMPONENT ?