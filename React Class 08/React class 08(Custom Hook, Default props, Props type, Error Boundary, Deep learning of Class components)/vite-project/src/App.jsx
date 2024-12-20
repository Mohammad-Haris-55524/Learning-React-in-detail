import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchingTodos from './components/FetchingTodos'
import FetchingPosts from './components/FetchingPosts'
import { Greeting } from './components/Greeting'
import DefeaultPropsInFunctionalComponent from './components/DefeaultPropsInFunctionalComponent'
import { DefaultPropsInClassComponent } from './components/DefaultPropsInClassComponent'
import { string } from 'prop-types'
import { ErrorBoundaries } from './components/ErrorBoundaries'
import { Counter } from './components/Counter'
import {CounterForErrorBoundary} from './components/CounterForErrorBoundary'

function App() {
const [count, setCount] = useState(0)
const counter = () =>{
  setCount(count + 1);
}
// ------------------------------- WHY CREATE OWN CREATE HTML ELEMENT IN OUR CODE -------------------------------------
// ANSWER: Jab hamey lgy ky koi HTML hamari bar bar multiples Components my use ho rahe hy to ham aisi HTML ko varible 
// my save kara kar JSX my render kara skty han or sath my jis jis Component my hamey uss HTML code ki need pary ham usy 
// as a PROPS bhe pass kar skty han jesy ham ny nichey aik HTML create ki phr ham ny usy UI par RENDER karwaya or phr 
// ham ny usy as a PROPS bhe pass kiya to child Component (DefaultPropsInClassComponent)
// ---------------------------------------------------------------------------------------------------------------------
// --------------------- QUESTION THAT CAN OCCURS WHEN WE CREATE A VARIABLE OF OUR HTML CODE --------------------------- 
// My ny aik varible bnaya howa hy or uss my HTML store karwaye hy to batao jb my iss varible ko apni JSX my use karo
// ga to HTML render hogi (Render means heading tag ka effect dekhny ko mily ga or sath my h4 likha howa UI par nahe 
// aye ga balky h4 ka effect dekhaye dy ga) yah phr string my print karwa dy gi means pora element uth kar print hogy ga
// tags sameet? 
// ANSWER: Agar ap inverted QOMAS " " ky andar html dalo gi to string ki shakal my print hogi UI par OR agar ham inverted
// QOMA ky begair sirf HTML pass karein gy to hamari HTML RENDER hogi. CHECK BELOW FOR RESULTS
// ----------------------------------------------------------------------------------------------------------------------
// const html = '<h4> Assalam o alikum! My name is Mohammad Haris </h4>' // String effect will be shown in HTML used in JSX
const html = <h2 style={{border:"2px solid purple"}}> Assalam o alikum! My name is Mohammad Haris </h2> // HTML tag effect will be rendered in the JSX
return (
<>
{/* Here we will pass this HTML to our child component go check topic # 04 */}
{/* {html}  */}
{/* // ------------------------------------------------------------------------------------------------------------------- */}

{/*---------------------- Topic # 01 Fetching data and repeating same code in mutiples component --------------------*/} 
{/* <div style={{display:"flex", justifyContent:"space-evenly",border:"5px solid black"}}>
<FetchingTodos/>
<FetchingPosts/>
</div> */}


{/*----------- Topic # 02 How can we avoid repeating same code including hook ===> (By using CUSTOM HOOK) -----------*/}
<div style={{display:"flex", justifyContent:"space-evenly",border:"2px solid black"}}>
<FetchingTodos/>
<FetchingPosts/>
</div>


{/*-------------------------- Topic # 03 What are Default PROPS ? in FUNCTIONAL COMPONENT ------------------------  */}
{/* <div style={{border:"2px solid black"}}>
<DefeaultPropsInFunctionalComponent userName={"Mohammad Haris"} url={'https://jsonplaceholder.typicode.com/users'}/>
</div> */}


{/*------------------ Topic # 04 What are Default PROPS & PROPS types in REACT ? in CLASS COMPONENT ---------------- */}
{/* <DefaultPropsInClassComponent userName = {"Kalo bhai Nashy man !!!"} age = {'30'} count={count} counter={counter}
html={html} /> */}
{/* <button onClick={()=>setCount(count + 1)}>Counter</button> */}


{/* ------------------------------------- TOPIC # 05 ERROR BOUNDARIES ---------------------------------------------- */}
{/* SCENERIO # 01 */}

{/* ERROR BOUNDARY KY ANDAR AGAR SAB COMPONENTS KO AIK SATH WRAP KAR DEIN GY TO JESY GI KOI 1 COMPONENT BHE CRASH KARY GA 
TO UI PAR FALLBACK UI SHOW HOGY GI  */}
{/* <ErrorBoundaries>
<CounterForErrorBoundary/>
<FetchingTodos/>
<FetchingPosts/>
</ErrorBoundaries> */}

{/* SCENERIO # 02 */}

{/* <ErrorBoundaries>
<CounterForErrorBoundary/>
</ErrorBoundaries>

<ErrorBoundaries>
<FetchingTodos/>
</ErrorBoundaries>

<ErrorBoundaries>
<FetchingPosts/>
</ErrorBoundaries> */}


{/* Topic # 06 */}
{/* SELF LEARNING NOT RELATED TO ALI'S LECTURE (HOW TO CREATE CLASS COMPONENT, AND HOW TO USE STATE AND PROPS IN CLASS
COMPONENT) */}
{/* <Greeting/> */}
</>
  )
}

export default App
