import React from 'react'
import { Link,NavLink, useLocation, useNavigate } from 'react-router-dom'

function DynamicUiForPostsAndPostScreen({post, btnIsVisible=true}) {
    // console.log({post}, {btnIsVisible})
    const navigate = useNavigate()

    // const goToPostScreen = (id) =>{
      //   navigate(`/posts/${id}`, {state:{info:{name: "Mohamamd haris", regId: 18336}}})
      // }

// ---------------------------------------- MOST IMPORTANT FOR POST SCREEN -------------------------------------------
// BEST USE CASE OF (STATE) RELATED TO REACT ROUTER DOM (BY SENDING SINGLE POST AND REREDNERING ON THE UI)
// Jab ham STATE my data pass kar skty han to kiu na ham aik SINGLE POST ky liye FAZOOL my API CALL nahe kren gy jo phely
// ham POST METHOD # 02 my kar rahy thy ab ham. Jab POSTS screen ky (VIEW POST DETAIL) Button par click karin gy to hamey 
// woh sari posts my sy 1 single post nikal kar laa dy ga by passing ID into it phr ham uss SINGLE POST ko STATE my rakh
// kar POST SCREEN ko pass kar dein gy or phr useLocation() hook ky through usy grab kar lein gy and UI par render karwa
// dein gy  

const goToPostScreen = (id) =>{
  console.log({post})
  // navigate(`/posts/${id}`, {state:{post: post}})
  // __________________________ Setting Query Param without using any function dynamically ______________________________
  // _______________________________ (Go check POSTS SCREEN FOR MORE DETAIL) ____________________________________________
  navigate(`/posts/${id}?title${post.title}&post_Id${post.id}&category${post.category}`, {state:{post: post}})
// Here above i am passing QueryParams after ? (?title${post.title}&post_Id${post.id}) and state these all things that
// i passed can be accessed by using useLocation() hook check Post screen. Remember 1 more things is that query param
// can also be used for filtering and sorting products by creating button and passing value throught function
// go and check POSTS COMPONENT IN THE LAST TO KNOW HOW TO FILTER POSTS THROUGH USING QUERY PARAMS USING ITS HOOK 
// USESEARCHPARAM() HOOK

}
// --------------------------------------------------------------------------------------------------------------------
  return (
    <>
        <div><strong>Post Id</strong>: {post.id}</div>
        <div><img style={{maxWidth:"60%"}} src={post.image} alt="post image"/></div>
        <div><strong>Post Title</strong>: {post.title}</div>
        <div><strong>URL</strong>: {post.url}</div>
        <div><strong>Category</strong>: {post.category}</div>
        <div><strong>Status</strong>: {post.status}</div>

{/******* STATE: Here we are learning state related to REACT ROUTER DOM (Go check POST.JSX for more detail) ************/}
{/*----------------- 1) Method # 01 : Passing state by using link and navlink will remain same ------------------------ */}
{/* {btnIsVisible &&       
<div style={{marginTop:"1rem"}}><Link style={{padding:"0.5rem", backgroundColor:"lightcoral",color:"green",
borderRadius:"0.3rem", textDecoration:"none"}} to={`/posts/${post.id}`} state={{info:{name: "Haris",  regId: 55524}}}
>View Post detail</Link></div>} */}
{/*Method # 02 : Passing state by using button with the help of UseNavigate Hook and this hook always uses a function for 
condionally routing. Here in this button we are passing a function (goToPostScreen) and then in that function we will 
pass a state by using UseNaviagte hook. 
function*/}
{btnIsVisible && <button style={{marginTop:"1rem", padding:"0.7rem", backgroundColor:"lightcoral",color:"black",
borderRadius:"0.3rem", textDecoration:"none"}} onClick={()=>goToPostScreen(post.id)}>View Post detail</button>}
</>)
}

export default DynamicUiForPostsAndPostScreen