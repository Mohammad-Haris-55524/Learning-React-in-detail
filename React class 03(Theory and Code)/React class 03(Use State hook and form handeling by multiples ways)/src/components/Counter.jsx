import React, { useState } from 'react'
export const Counter = (props) => {
  
let [count, setCount] = useState(0)
// console.log(count, setCount)
    // let count = 0;   // In JS we use this varibles appraoch to update values
    let add = () => {
        // In JS we use this varibles appraoch to update values
        // count += 1; 
        // ------------------------------------------------------------------------
        // But in REACT we use USE STATE HOOK to update values (APPROACH # 01)
        // setCount(count += 1)
        // But in REACT we use USE STATE HOOK to update values (APPROACH # 02)
        setCount((previousValue)=>{
            // console.log("ADD: ",previousValue)
            return previousValue + 1
        })
        // SHORT CUT METHOD FOR (APPROACH # 02)
        // setCount((previousValue) => previousValue + 1);
        console.log("Add:", count)
    }
    let sub = ()=>{
        // In JS we use this varibles appraoch to update values
        // count -= 1; 
        // ------------------------------------------------------------------------
        // But in REACT we use USE STATE HOOK to update values (APPROACH # 01)
        // setCount(count -= 1)
        // But in REACT we use USE STATE HOOK to update values (APPROACH # 02)
        setCount((previousValue)=>{
            // console.log("SUB: ",previousValue)
            return previousValue - 1
        })
        // SHORT CUT METHOD FOR (APPROACH # 02)
        // setCount((previousValue) => previousValue - 1);

        console.log("Sub:", count)
    }
    console.log("Render")
  return (
    <div>
        {/*----------------- THIS METHOD WE SHOULD AVOID BY USING EVENT LISTNERS IN REACT----------------------- */}
{/*JS my kuch iss trha ham button ky click par event listeners use karty thy lakin React my aisy use nahe karen gy kiu ky
iss trha use karny sy function khud ba khud hi first time TRIGGER/CALL hogy ga or phr dobara nahe run nae hoga.
REACT my agar iss trha use karein gy to yah function sirf page ky reload hony par 1 hi bar chaly ga bss to iss method ham
JS my use karty han REACT my nahe */}
        {/* <button onClick={add()}>Add</button>
        <button onClick={sub()}>Decrese</button> */}
    
{/* -----------------------By this way we use eventLisntners in REACT  METHOD # 01-----------------------------------*/}
{/* Iss method ko sirf tab hi event lisnters par use karein gy jab ham koi function call kar rahy ho or argument my koi 
value pass nahe kar rahy hon. Yani na hi add ky yah sub ky function ky andar koi parameter ham nahe bhej rahy.
nahe kar rahy han. Or agar value pass karni par */}
<button onClick={add}>Add</button>
{count}
<button onClick={sub}>Sub</button>


    </div>
  )
}
