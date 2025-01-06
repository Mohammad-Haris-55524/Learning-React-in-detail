import React, { Component, useState,useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { Link, useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import DynamicUiForPostsAndPostScreen from '../components/DynamicUiForPostsAndPostScreen'
import { Pagination } from 'antd';
// import { Spin } from 'antd';

// ------------------------------------------------ METHOD # 01 ---------------------------------------------------------

// METHOD # 01 (LONG METHOD ISS MY HAM NY ALAG ALAG UI BANAYE HAY POST AND POSTS SCREEN KY LIYE JAB KY CODE SAME THA DONO
// KA TO YAH GOOD PRACTISE NAHE HY KIU KY HAMARA CODE REPEAT HO RAHA HY TO TACKLE THIS CHECK OUT METHOD # 02)

// function Posts() {
//     const {data,isLoading,error} = useFetch('https://jsonplaceholder.org/posts')
//     console.log(data,isLoading,error)
//   return (
//     <>
//   {/*Har screen my header nazar aye taky redirect kara sako apny components ko from 1 page to another isi liye header
//    ka component har screen ky component my render karwa raha hon  */}
//     {/* <Header/> */}
//     <h1 style={{textAlign:"center"}}>All Posts Data</h1>
//     {isLoading && <h3>Is Loading ....</h3> }
//     {error && error}
//     <div style={{display:"flex",justifyContent:"space-evenly" ,flexWrap:"wrap",
//     maxWidth: "100%"}}>
//     {(data||[]).map((post)=>{
//       return <div style={{border: "3px solid black", maxWidth: "23%",borderRadius:"0.5rem",margin:"0.5rem 0rem",
//       padding:"1rem 0.5rem"}} key={post.id}>
//         <div><strong>Post Id</strong>: {post.id}</div>
//         <div><img style={{maxWidth:"60%"}} src={post.image} alt="post image"/></div>
//         <div><strong>Post Title</strong>: {post.title}</div>
//         <div><strong>URL</strong>: {post.url}</div>
//         <div><strong>Category</strong>: {post.category}</div>
//         <div><strong>Status</strong>: {post.status}</div>
// {/*Iss trha routing ham react my nahe karty by using 'a' tag. Kiu ky iss trha routing karny sy hamara page load hoga
// har route change hony par or application ki performance bhe kharab hogi or ham to parha tha REACT 1 single page 
// application hy and iss my loader nahe ana chaihyee jab bhe ham 1 page sy dosry page par navigate karein to issy sab sy
// bachny ky liye we will use LINK tag for routing in REACT CHECK BEST APPROACH # 02 */}

// {/* APPROACH # 01  (ROUTING SHOULD NOT DONE BY USING <a> tag in REACT APPLICATION) */}
//         {/* <div style={{marginTop:"1rem"}}><a style={{padding:"0.5rem", backgroundColor:"lightblue",color:"green",borderRadius:"0.3rem"}}
//         href={`/posts/${post.id}`}>View Post detail</a></div> */}

// {/* APPROACH # 02 (ROUTING SHOULD ALWAYS BE DONE USING <Link> tag in REACT APPLICATION) */}
// <div style={{marginTop:"1rem"}}><Link style={{padding:"0.5rem", backgroundColor:"lightblue",color:"green",
// borderRadius:"0.3rem", textDecoration:"none"}} to={`/posts/${post.id}`}>View Post detail</Link></div>
// </div>
// })}
//   </div>
    
    
//     </>
//   )
// }

// export default Posts

// CONCLUSION:- --------------------------- FOR POSTS SCREEN AND POST SCREEN ------------------------------------------
// AP NY AIK CHEEZ NOTE KI HOGI KY POSTS AND POST KI UI TAKREBAN SAME HI SIWAYE VIEW DETAIL KY BUTTON KY JO POSTS KI UI 
// SHOW KARWANA HY OR POST KI UI MY SHOW NAHE KARWANA. TO YAHAAN PAR CODE KO REPEAT HONY SY KESY BACHANA HY ?
// HAM SAB CODE KY LIYE AIK COMPONENT BANA LEIN GY OR USY DONO SCREENS (POSTS AND POST) MY USE KAR LEIN GY.
// HAM NY AIK <DynamicUiForPostsAndPostScreen/> KA AIK Component BANA LIYA HAY AB HAM USS SIRF POSTS KA DATA BHEJAIN GY 
// BY USING PROPS ISS KI WJAH SY AB HAMEY POSTS AND POST MY BAR BAR SAME UI KA CODE LIKHNA NAHE PARY GA.


// ______________________________________________________________________________________________________________________

// ------------------------------------------------ METHOD # 02 ---------------------------------------------------------
// METHOD # 02 (SHORT METHOD AND GOOD METHOD ISS MY HAM NY SIRF DATA PASS KIYA HY AIK DYNAMICUIFORPOSTANDPOSTSCREEN.JSX
// KO KIU KY JSX DONO POST AND POSTS SCREEN KI SAME THE TO HAM NY USS KA AIK COMPONENET BANA KAR USE KAR RAHY HAN OR PHR 
// USS COMPONENT MY POST AND POSTS KA DATA AS A PROPS PASS KAR RAHY HAN. READ ABOVE CONCLUSION FOR MORE DETAIL

// ----------------------------------- SHORT HAND TECHNIQUE FOR POSTS SCREEN ------------------------------------------

// function Posts(){
//   const {data,isLoading,error} = useFetch('https://jsonplaceholder.org/posts')
//   console.log(data,isLoading,error)
//   return (
//     <>
//     <h1 style={{textAlign:"center"}}>All Posts Data</h1>
//     {isLoading && <h3>Is Loading ....</h3> }
//     {error && <h3 style={{color: "red"}}>{error}</h3>}
  
//     <div style={{display:"flex",justifyContent:"space-evenly" ,flexWrap:"wrap",maxWidth: "100%"}}>  
//     {(data || []).map((post) => {
//       return <div style={{border: "3px solid black", maxWidth: "23%",borderRadius:"0.5rem",
//         margin:"0.5rem 0rem",
//         padding:"1rem 0.5rem"}}
//         key={post.id}>
//         <DynamicUiForPostsAndPostScreen post={post}  btnIsVisible={true} /></div>})}
//   </div>
//   </>
//   )
//   }
//   export default Posts


