// ****************************************** TOPIC # 01 FOR APP.JSX **************************************************

// --------------------------------- PAGE # 01 Component # 01 CODE STARTS FROM HERE ------------------------------------
// ----------------------------------STORY BEHIND WHY WE NEED  CUSTOMS HOOKS ? ----------------------------------------- 
// Dekho jab hamey lagy hamari STATES repeat ho rahe han multiples components my yah phr same HOOKS multiples components
// my use ho rahy han or sath my hi same code bar bar multiple components my repeat ho raha hy to aisi situation my ham 
// custom hook create karty han.
// For example:
// Maan lo mery pas 1 component hay FetchingTodos() ka or my iss component my Todo ka data fetch karwa raha hon to yaad 
// rahy mujhy 3 states and 1 useEffect hook ka istemaal karna pary ga check the code below.
// setTodos my woh todos save karwaon ga jo mery pas API sy response my aye ga. IsLoading loader show karwany ky liye or
// errorMessage wali state custom error show karwany ky liye agar API ky response my koi error ata hy to usy 
// setErrorMessage my set karwaon ga.
// UseEffect ka use componet ky reredering ky side effect roknay ky liye karo ga taky API par call sirf 1 bar gy only 
// first time jb mery FetchingTodos() COMPONENT ki birth ho. Naaky jab bhe koi state update ho or API par bilafazool call
// chali gy to isy roknay ky liye FUNCTION (gettingTodosData) ki calling ko USE EFFECT hook ky andar rakh diya hy. Check
// more detail go below the code...

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function FetchingTodos() {
//     const [todos, setTodos] = useState([]);
//     const [isLoading, setIsLoading] = useState(false)
//     const [errorMessage, setErrorMessage] = useState(false)
//     const [count, setCount] = useState(0)
    
//     useEffect(()=>{
//         gettingTodosData();
//     },[])

// const gettingTodosData = async () =>{
//         try{
//         setIsLoading(true)
//         const {data} = await axios('https://jsonplaceholder.typicode.com/todos')  
//         console.log(data);
//         // setTodos(data)
//         }
//         catch(e){
//         setIsLoading(true)
//         console.log(e.message)
//         setErrorMessage(e.message)
//         }
//         finally{
//             setIsLoading(false)
//         }
//     }
//     console.log("Component Rendered !")
//     console.log(count)

//   return (
//     <div>
//     <h1>I am from Fetching TODOS...</h1>
//     <h4>{isLoading && "Fetching Data from Server .... "}</h4>
//     {console.log(errorMessage)}
//     {errorMessage ? <h4>{errorMessage}</h4> : 
//     <div>
//     Count {count}
//     <button onClick={()=> setCount(count + 1)}>+</button>
//     <button onClick={()=> setCount(count && count - 1)}>-</button>
//     </div>}
//     </div>
//   )
// }

// export default FetchingTodos
// // Yaad rahy hamary 1 component my mutilple use effects hook ho skty han 
// CONCLUSION : 
// Dekho STATE AND USE EFEECT HOOK use karny ky baad my aik function create kar raha hon jis my ham TODOS ki API par call
// karwa kar SetTodos my result save karwa rahy han or agar koi error aye to UI par custom error show karwa rahy han by
// using setErrorMessage HOOK isi trha jab tak API response na aagy to LOADER show karwany ky liye setIsLoading ki STATE 
// use karr han. Ab maan lo yah kaam to TODOS ko fetch karwany ky liye hogya lekin ....
// Agar hamey or bhe API sy date mangwana ho jesy POSTS ka data bhe mangwana par gy to same code dobara sy repeat hoga.
// MTLB 3 states dobara banein gy sirf jahaan jahaan TODOS likha hay wahaan POSTS aagy ga kiu ky ham ab POSTS ka data
// mangwain gy to iss sy hoga yah hamara same code same states same hooks bar bar repeat hon gy. Ham nahe chahty hamara
// same code same STATES same HOOKS bar bar repeat hon to aisi sitation my ham CUSTOM HOOKS bana skty han.
// GO AND CHECK THE FetchingPosts Component. You will notice that all the STATES, HOOK & FUNCTION CODE is repeating.....
// ---------------------------------------------------------------------------------------------------------------------

// ****************************************** TOPIC # 02 FOR APP.JSX ***************************************************

// Jo sara kaam ham uper kar rahy thy FetchingTodos AND FetchingPosts my wohi sara kaam ab ham aik custom Hook
// (useGenericFunctionForFetchingData) bana kar karein gy.
// The below code is linked with a CUSTOM HOOK (useGenericFunctionForFetchingData)

import React, { Component } from 'react'
import { useGenericFunctionForFetchingData } from './hooks/useFetchDataForTodosAndPosts'

function FetchingTodos() {
// BAD APPROACH BY DESTRUCTURING URL TODOS DATA. 
const urlTodos = useGenericFunctionForFetchingData('https://jsonplaceholder.typicode.com/todos');
console.log("I am from FETCHING TODOS component: ",urlTodos)
//  GOOD APPROACH BY DESTRUCTURING URL TODOS DATA 
// const {data:todos, isLoading, errorMessage} = useGenericFunctionForFetchingData('https://jsonplaceholder.typicode.com/todos');
// console.log("I am from FETCHING TODOS component: ",{todos},{isLoading},{errorMessage})
return (
    <div style={{border:"2px solid red",maxWidth: "45%",marginRight: "1rem"}}>
    <h1>Fetching TODOS Data...</h1>
    <h4>{urlTodos.isLoading && "Fetching Data from Server .... "}</h4>
    {urlTodos.errorMessage ? <h4>{urlTodos.errorMessage}</h4> : urlTodos.data.map((todo)=>{
      return <div key={todo.id}>
        <h6>Id: {todo.id}</h6>
        <h5>Title: {todo.title}</h5>
      </div>
    })} </div>
)
}

export default FetchingTodos