// -------- HOW TO VIEW DETAIL PAGE OF A SINGLE POST BY USING DYNAMIC ROUTING & WHY WE NEED TO USE USEPARAM() -----------
import React from 'react'
import { useParams,Link, useNavigate, NavLink, redirect, replace, useLocation, useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import DynamicUiForPostsAndPostScreen from '../components/DynamicUiForPostsAndPostScreen';
import { Spin } from 'antd';

// ------------------------------------------------ METHOD # 01 ---------------------------------------------------------

// METHOD # 01 (LONG METHOD ISS MY HAM NY ALAG ALAG UI BANAYE HAY POST AND POSTS SCREEN KY LIYE JAB KY CODE SAME THA DONO
// KA TO YAH GOOD PRACTISE NAHE HY KIU KY HAMARA CODE REPEAT HO RAHA HY TO TACKLE THIS CHECK OUT METHOD # 02)

// function Post() {
// //USE PARAM: Hamey react router dom provide karta hy iss my hamey 1 object milta hy isy my ny destructure kar liya hy
// // iss ky ky andar jo mujhy id mil rahe hy. Yaad rahy yahaan id mil kesy rahe hy ap ko yaad hoga ham ny APP.JSX ky andar
// // jo (postId) ka route banaya tha kuch iss trha posts/:postId to jab ham posts my jaty han uss ky andar ham aik btn
// // bnaaya tha view detail ka to usy ky through ham ny id pass ki the by using <Link>/<navLink> tag  with its (to) 
// // attribute to={`/posts/${post.id}`}    
//   const {postId} = useParams()
//   console.log(postId);
//   const {data:post,isLoading,error}  = useFetch(`https://jsonplaceholder.org/posts/${postId}`,null)
//   console.log(post,isLoading,error)
//   return (
//   <>
//   {isLoading ? (<h1>Is Loading .....</h1>) : 
//   error ? (<h1>{error}</h1>) :
//   post ? (<div style={{border: "2px solid black",borderRadius:"0.5rem",margin:"0.5rem 0rem",
//       padding:"1rem 0.5rem"}} key={post.id}>
//         <div><strong>Post Id</strong>: {post.id}</div>
//         <div><img style={{maxWidth:"60%"}} src={post.image} alt="post image"/></div>
//         <div><strong>Post Title</strong>: {post.title}</div>
//         <div><strong>URL</strong>: {post.url}</div>
//         <div><strong>Category</strong>: {post.category}</div>
//         <div><strong>Status</strong>: {post.status}</div>
//         </div>): (<h1>Page not found</h1>) }
// </>
// )
// }
// export default Post
// ______________________________________________________________________________________________________________________

// CONCLUSION:- --------------------------- FOR POSTS SCREEN AND POST SCREEN ------------------------------------------
// AP NY AIK CHEEZ NOTE KI HOGI KY POSTS AND POST KI UI TAKREBAN SAME HI SIWAYE VIEW DETAIL KY BUTTON KY JO POSTS KI UI 
// SHOW KARWANA HY OR POST KI UI MY SHOW NAHE KARWANA. TO YAHAAN PAR CODE KO REPEAT HONY SY KESY BACHANA HY ?
// HAM SAB CODE KY LIYE AIK COMPONENT BANA LEIN GY OR USY DONO SCREENS (POSTS AND POST) MY USE KAR LEIN GY. 
// HAM NY AIK <DynamicUiForPostsAndPostScreen/> KA AIK Component BANA LIYA HAY AB HAM USS SIRF (POST) KA DATA BHEJAIN GY 
// BY USING PROPS ISS KI WJAH SY AB HAMEY POSTS AND POST MY BAR BAR SAME UI KA CODE LIKHNA NAHE PARY GA.
// ______________________________________________________________________________________________________________________

// ------------------------------------------------ METHOD # 02 ---------------------------------------------------------
// METHOD # 02 (SHORT METHOD AND GOOD METHOD ISS MY HAM NY SIRF DATA PASS KIYA HY AIK DYNAMICUIFORPOSTANDPOSTSCREEN.JSX
// KO KIU KY JSX DONO POST AND POSTS SCREEN KI SAME THE TO HAM NY USS KA AIK COMPONENET BANA KAR USE KAR RAHY HAN OR PHR 
// USS COMPONENT MY POST AND POSTS KA DATA AS A PROPS PASS KAR RAHY HAN. READ ABOVE CONCLUSION FOR MORE DETAIL

// function Post(){
// // --------------------------------------------------useParams Hook ----------------------------------------------------
//   const {postId} = useParams()
//   console.log(postId);
// // ----------------------------------- Rendering single post data by using API ----------------------------------------
//   const {data,isLoading,error}  = useFetch(`https://jsonplaceholder.org/posts/${postId}`,null)
// return(
// <>
// <div>
//   {/* Method # 01: How to move back to previous screen using Link  */}
//   <button style={{padding:"0.7rem 0.4rem",borderRadius:"0.3rem",backgroundColor:"lightblue",margin:"0.5rem 0rem"}}>
//   <Link to={'/posts'}>Back to Posts</Link>
//   </button>
// </div>
// {isLoading && <Spin spinning={true}></Spin>}
// {error && <h3 style={{color: "red"}}>{error}</h3>}
// {(data && 
// <div style={{border: "2px solid black",borderRadius:"0.5rem",margin:"0.5rem 0rem",
//   padding:"1rem 0.5rem"}} key={data.id}>
//   <DynamicUiForPostsAndPostScreen post={data} btnIsVisible={false}/>
//   </div>)}
// </>
// )
// }
// export default Post


// ------------------------METHOD # 03 DEEP STUDY OF REACT ROUTER HOOKS AND MORE CHECK OUT BELOW ------------------------
// ______________________________________________________________________________________________________________________
// ______________________RENDER A SINGLE PRODUCT WITHOUT USING API (CHECK USE NAVIGATION HOOK BELOW) ____________________
// ______________________________________________________________________________________________________________________
// ___________________LEARNING MULTIPLES HOOKS LIKE (USEPARAM) (USENAVIGATE) (USELOCATION) IN DETAIL_____________________



function Post(){
//-------------------------------------------------- UseSeacrchParam Hook ---------------------------------------------- 
const [serachParam,setSearchParam] =  useSearchParams()
// Yah bilkul use state ki type ka hook hy kiu ky iss my hamey aik array milta hy kuch iss trha [URLSearchParams, ƒ]
// iss ky index[0] search param ka size milta hy ky hamary URL my seacrch param ki length kia hy or index[1] par hamey
// aik setter function milta hy taky ham PARAM ki value dynamically use kar ky searching sorting filtering karwa saken.
// console.log(serachParam,setSearchParam)
// --------------------------------------------------useParams Hook ----------------------------------------------------
  const {postId} = useParams()
  console.log(postId);
  // -------------------------------------------------useNavigate Hook ----------------------------------------------------
  // This hook (useNavigate) hamey aik function deta hay jis my ham uss route ko pass karty han jis par ham navigate karwana
  // chahhty han yaad rahy this is used for conditional navigation check the conclusion below and JSX CODE TO UNDERSTAND
  // THE CODE DIFFERNCE B/W LINK NAVLINK AND useNavigate.
  const navigate = useNavigate(); // NAVIGATE HAMEY 1 FUNCTION PROVIDE KARTA HY

  const backToPostsPage = () =>{
    navigate('/posts', {replace:false} )
// The replace() method replaces the current entry on the history stack with a new one. This is useful when you want to
// update the URL without adding a new entry. It's often used for scenarios like login redirects.) (check Login screen) 
  }
  // --------------------------------------------------useLocation Hook ---------------------------------------------------
  const {pathname,search, state:{post}, hash} = useLocation();
  // RENDERING SINGLE POST DATA BY USING STATE (WITHOUT USING AN API BY JUST GETTING A SINGLE POST FROM
  // DYNAMICUiforpostandpostscreen.jsx COMPONENT) BY PASSING USER SELECTED POST ID TO ALL POSTS TO GET A DESIRED SINGLE
  // POST (MUST CHECK DYNAMICUiforpostandpostscreen.jsx component LINE # 12 )
  console.log(post)
  console.log({pathname},{search},{post},{hash})
  
  // _____________________________________________________________________________________________________________________
  // Iss Hook ko ham in 4 chezo ko access karny ky liye use karty han iss hook my yah 4 chezain milti han
  // 1) PathName: my hamey path milta hy uss post/page ka jisy par ham aye hoty han.

  // 2) search: My hamey query param milty han (Query parameters are a key-value pair added to the end of a URL to provide 
  // additional information to the server. They are often used to filter or sort data, pass search terms, or provide 
  // pagination information. (To get and set QueryParam value we use use useSearchParams() Hook provided by react Router)
  // Go and check Posts component in the last (Query param ka use kar ky ham POSTS ko filter out karwa rahy han)

  // 3) Hash: Jab bhe URL my # daal kar koi chez pass karein gy woh hash my mil gy gi Example: localhost:5173/posts/4#hello
  // For example: Jab hamey kisi section par redirect karty han to #index or #Homepage laga kar karty thy href ky andar pass 
  // kar ky ap ko yaad hoga jab ham website banaty thy to page par redirect ky liye href ky andar #Homepage pass karty thy to
  // woh homepage par lay jata tha to hamey hash my #homepage mil gy ga.

  // 4) state: The state in React Router DOM v6 allows for passing data during navigation without relying on query strings
  //  or the URL path, helping to manage and preserve state across different routes.
  // Use Cases of state:
  // Form Submissions: After a form submission, instead of passing form data through query params, you can use state to
  // carry the form results to the next route.
  // Login Success: After login, pass user information or tokens securely through state to the protected route.
  // Navigating Between Steps in Multi-Step Forms: You can use state to store progress and responses when navigating
  // between steps in a form.

  // 5) Key: Har bari unique KEY genreate hoti hay jab bhe kisi page par route karty han to haan yaad rahy page refresh 
  // hony par key same rahy gi sirf route change hony par hi update hogi. 
  // Remember: STATE my ham koshish karty han kam sy kam information bhejain aik route sy dosry route my yaad rakhna kabhe 
  // 1000 of objects arrays nahe bhejain gy sirf minimistic information bhejain gy 
  // _____________________________________________________________________________________________________________________
  
  
  return(
  <>
  <div>
    {/* Method # 01: How to move back to previous screen using Link  */}
    {/* <button style={{padding:"0.7rem 0.4rem",borderRadius:"0.3rem",backgroundColor:"lightblue",margin:"0.5rem 0rem"}}>
    <Link to={'/posts'}>Back to Posts</Link>
    </button> */}
  
    {/* Method # 02: How to move back to previous screen using Navlink  */}
    {/* <button style={{padding:"0.7rem 0.4rem",borderRadius:"0.3rem",backgroundColor:"lightblue",margin:"0.5rem 0rem"}}>
    <NavLink to={'/posts'}>Back to Posts</NavLink>
    </button> */}
  
  {/* Method # 03: How to move back to previous screen using useNavigate() (Must check conclusion below to understand when
  and where to use Link, Navlink Vs useNaviagte) */}
  <button onClick={backToPostsPage} style={{padding:"0.7rem 0.4rem",borderRadius:"0.3rem",backgroundColor:"lightblue",
    margin:"0.5rem 0rem"}}> Back to Posts </button>
  </div>

  
  {/************** Use this method when we are using API call for rendering a single POST on line # 43 ******************/}
  {(post && 
  <div style={{border: "2px solid black",borderRadius:"0.5rem",margin:"0.5rem 0rem",
    padding:"1rem 0.5rem"}} key={post.id}>
    <DynamicUiForPostsAndPostScreen post={post} btnIsVisible={false}/>
    </div>)} 
  </>
  )
  }
  export default Post






// Conculusion: 
// 1) (Navlink and Link): When you need simple navigation without any conditional logic or actions 
// 2) Use (NavLink) When you want to apply conditional styles or classes to links based on whether the link is active.
// 3) (UseNaviagte) A programmatic way to navigate, allowing you to redirect users without relying on a clickable link.
// Best for: Handling navigation in response to events, such as form submissions, button clicks, or other conditional 
// logic (e.g: After user authentication, redirecting them to a dashboard).
// state, replace ky attributes hamey in teno my mil jayen gy but the best approach to use REPLACE is only while using
// useNavigate HOOK. 
