  // *************************************************CHAPTER # 02(A)*****************************************************
// This is the main PARENT COMPONENT JIS KA NAME SIRF PURE COMPONENT HAY LEKIN REALITY MY YAH BHE 1 IMPURE COMPONENT HAY
// ISS CHAPTER MY HAM PARENT COMPONENT KY ANDAR STATE OR PROPS KA USE KAR RAHY HAN OR CHILD COMPONENTS 01 (GREETING) &
// CHILD COMPONENT # 02 (AnotherGreeting) MY AS A PROPS PASS KAR RAHY HAN. TAKY CHECK KAR SAKEN KY PARENT KI STATE AND
// PROPS UPDATE HONY PAR CHILD COMPONENTS KESY BEHAVE KARTY HAN. OR IN KA BAHAVIOR JO KY BY DEFAULT IMPURE FUNCTION KA HOTA HAY USY
// KESY PURE FUNCTION MY CHANGE KARTY HAN BY USING CLASS COMPONENT(GREETING) AND FUNCTION COMPONENT(ANOTHER GREETING).
// PURE Component KAB USE KARNA CHAIHYEE & KIU USE KARNA CHAIHYEE SAB CHEZO KO EXPLAIN KIYA GYA HAY. (CHECK CHILD COMP)
import React, { Component, useState } from 'react'
// import { Greeting } from './Greeting'; // for naming export
import Greeting  from './Greeting'; // for default export
import AnotherGreeting from './AnotherGreeting';


export default function PureComponent() {
    const[name, setName] = useState('');
    const[address, setaddress] = useState('');
    const [count,setCount] = useState(0);
    const countHandler = () =>{
    setCount(count + 1);
    }
    console.log("ReRendering from PARENT COMPONENT...")

  return (
    <>
    {/* Point to remember:
    1) Agar greeting ky andar address ko as a props pass karein gy to hi PURE COMPONENT reRENDER hoga.
    2) Agar greeting ky andar address/name ko as a props pass karein yah nahe kary IMPURE COMPONENT tab bhe GREETING 
    component ko bar bar reRENDER karwaye ga. Isy avoid karny ky liye we convert IMPURE COMPONENTS into PURE COMPONENTS*/}
    {/* <Greeting name = {name}/>  */}
    <AnotherGreeting name={name}/>
    <div style={{border:"2px solid red"}}>
    <label htmlFor="name">Name:</label>
    <div>
    <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value) }/>
    </div>
    <label htmlFor="address">Address:</label>
    <div>
    <input type="text" id='address' value={address} onChange={(e) => setaddress(e.target.value)}/>
    </div>
    <button onClick={countHandler}>Counter From Parent Compoenent {count}</button>
    </div>
    </>
  )
}
