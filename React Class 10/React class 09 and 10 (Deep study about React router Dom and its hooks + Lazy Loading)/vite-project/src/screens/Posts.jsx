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

// ______________________________________________________________________________________________________________________
// _________________________ DEEP DIVE INTO USP SEARCH PARAM() HOOK BY USING ABOVE POST SCENERIO ________________________
// ----------------------------- HOOK AND  HOW TO FILTER POSTS BY USING THIS HOOK PARAMS -------------------------------
// ______________________________________________________________________________________________________________________

function Posts(){
const {data,isLoading,error} = useFetch('https://jsonplaceholder.org/posts')
console.log(data,isLoading,error)
// Initializing useSearchparam Hook()
const [serachParam, setSearchParam] = useSearchParams()
const [filterPostsByParams, setfilterPostsByParams] = useState('');


// ______________________________________________________________________________________________________________________
//Additional feature: Issy remove bhe kar dein koi issue nahe aye kiu ky yah useEffect sirf tab kaam kary ga jab user
// directly khud url my changes kar ky category name pass karta hy to yah uss lihaz sy POSTS filter kar ky la dy ga. 
  useEffect(() => {
    const category = serachParam.get('category') || ''; // Get the category from URL query param
    setfilterPostsByParams(category); // Set the category in state for filtering posts
    console.log({category}, {filterPostsByParams})
  }, [serachParam]); // This effect depends on changes to search params
// ______________________________________________________________________________________________________________________

// Function to get value of each button by clicking category buttons filter, and setting their values in query param dynamically.
  const getButtonNameHandler = (e) => {
    const category = e.target.name || ''; // Get the button's category
    console.log(category)
// Jo mujhy category ki value button ky click hony par mily gi usy my set serachParam ky hook my save karwao ga object
// bana kar kiu ky query params hamey key value ky pair my milty han hamesha yaad rakhna iss baat ki 
    setSearchParam({category}); // Set the category as a query param in the URL
    console.log({category},serachParam)
// Ab jo catergories button ky click hony par jo value mili hogi uss ky lihaaz sy ham apni POSTS ko filter karwayen gy
    setfilterPostsByParams(category); // Set the category in the state
  };

return (
  <>
{/* ----------------------------------- CATAGORIES OF POSTS TO BE FILTERED ON CLICK ---------------------------------- */}
  <div style={{marginTop: "0.5rem" }}>
  <h2>Search Posts by Categories</h2>
  <button className='button-class' onClick={getButtonNameHandler}>All</button>
  <button className='button-class' name='lorem' onClick={getButtonNameHandler}>lorem</button>
  <button className='button-class' name='jsonplaceholder' onClick={getButtonNameHandler}>jsonplaceholder</button>
  <button className='button-class' name='ipsum' onClick={getButtonNameHandler}>ipsum</button>
  <button className='button-class' name='rutrum' onClick={getButtonNameHandler}>rutrum</button>
  <button className='button-class' name='elementum' onClick={getButtonNameHandler}>elementum</button>
  </div>
{/* ----------------------------------------------------------------------------------------------------------------- */}

  <h1 style={{textAlign:"center"}}>All Posts Data</h1>
  {/* {isLoading && <Spin size={'large'} spinning={true}></Spin>} */}
  {error && <h3 style={{color: "red"}}>{error}</h3>}

  <div style={{display:"flex",justifyContent:"space-evenly" ,flexWrap:"wrap",maxWidth: "100%"}}>  
  {(data || []).map((post) => {

//If Condition # 01): Woh Posts filter karwa kar la kar do jo match kar jati hy button ki uss value sy jo ham ny UseState
// ky variable ((filterPostsByParams)) my save karwaye the. Or agar aisa nahe hota to check condition # 02 below

// if(post.category === filterPostsByParams){
  if(post.category && post.category.toLowerCase() === filterPostsByParams.toLowerCase().trim()){ 
    // {console.log(post.category,{filterPostsByParams})}
  console.log("If case")
  return <div style={{border: "3px solid black", maxWidth: "23%",borderRadius:"0.5rem",
    margin:"0.5rem 0rem",
    padding:"1rem 0.5rem"}}
    key={post.id}>
    <DynamicUiForPostsAndPostScreen post={post}  btnIsVisible={true} /></div>}

  
// If conditon # 02 Or agar user click nahe karta Category ky btn par to UseState ky variable my ('') empty milay ga yani
// false to ham false ko !false kar ky true karwayen gy or iss trha sari woh POSTS render karwa dei gy jo hamey API sy mil
// rahe hongi 100 ki 100 posts.
  if(!filterPostsByParams){
    return <div style={{border: "3px solid black", maxWidth: "23%",borderRadius:"0.5rem",
      margin:"0.5rem 0rem",
      padding:"1rem 0.5rem"}}
      key={post.id}>
      <DynamicUiForPostsAndPostScreen post={post}  btnIsVisible={true} /></div>}}
)}</div>
<Pagination defaultCurrent={1} total={50}/>
</>
)
}
export default Posts
