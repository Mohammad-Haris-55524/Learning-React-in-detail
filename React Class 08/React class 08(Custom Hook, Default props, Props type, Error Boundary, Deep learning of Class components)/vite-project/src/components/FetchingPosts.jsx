// ****************************************** TOPIC # 01 FOR APP.JSX **************************************************

// --------------------------------- PAGE # 02 Component # 02 CODE STARTS FROM HERE ------------------------------------
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function FetchingPosts() {
//     const [posts, setPosts] = useState([]);
//     const [isLoading, setIsLoading] = useState(false)
//     const [errorMessage, setErrorMessage] = useState(false)
//     const [count, setCount] = useState(0)
    
//     useEffect(()=>{
//         gettingPostsData();
//     },[])

// const gettingPostsData = async () =>{
//         try{
//         setIsLoading(true)
//         const {data} = await axios('https://jsonplaceholder.typicode.com/posts')  
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
//     <h1>I am from Fetching POSTS...</h1>
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
// export default FetchingPosts
// ---------------------------------------------------------------------------------------------------------------------
// ****************************************** TOPIC # 02 FOR APP.JSX **************************************************

// Jo sara kaam ham uper kar rahy thy FetchingTodos AND FetchingPosts my wohi sara kaam ab ham aik custom Hook
// (useGenericFunctionForFetchingData) bana kar karein gy.
// The below code is linked with a CUSTOM HOOK (useGenericFunctionForFetchingData)

import React, { Component } from 'react'
import { useGenericFunctionForFetchingData } from './hooks/useFetchDataForTodosAndPosts'

function FetchingTodos() {
// BAD APPROACH WITHOUT DESTRUCTURING URL POST DATA 
const urlPosts = useGenericFunctionForFetchingData('https://jsonplaceholder.typicode.com/posts');
//  GOOD APPROACH BY DESTRUCTURING URL POST DATA 
// const {data:posts, isLoading, errorMessage} = useGenericFunctionForFetchingData('https://jsonplaceholder.typicode.com/posts');
// console.log("I am from FETCHING TODOS component: ",{posts},{isLoading},{errorMessage})
  return (
    <div style={{border:"2px solid green",maxWidth:"45%"}}>
    <h1>Fetching POSTS Data...</h1>
    <h4>{urlPosts.isLoading && "Fetching Data from Server .... "}</h4>
    {urlPosts.errorMessage ? <h4>{urlPosts.errorMessage}</h4> : urlPosts.data.map((post)=>{
      return <div key={post.id}>
        <h6>Id: {post.id}</h6>
        <h5>Title: {post.title}</h5>
      </div>
    })} </div>
  )
}
export default FetchingTodos