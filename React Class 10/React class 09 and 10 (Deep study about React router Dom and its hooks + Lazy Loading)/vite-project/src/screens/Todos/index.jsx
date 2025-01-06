//--- 2ND VIDEOS lecture of ALI VIDEOS related to ROUTING # 02 STARTS FROM HERE. Here we are learning nesting routing --- 
import React, { Suspense, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./Todo.css"
import DynamicUiForHeader from '../../components/DynamicUiForHeader'

function Todos() {
  const [isLoading, setIsLoading] = useState(false)
const nestedRoutes = [
  {name: "All Todo List", pathName: '/todos/all-todo'}, // syntax for nested route: /parentRouteName/childRoute
  {name: "Add Todo", pathName: '/todos/add-todo'},  
    {name: "Search Todo", pathName: '/todos/search'},
    {name: "Update Todo", pathName: '/todos/update-todo'},
]

return (
<div id='todos-component' >
{/* __________________________________________________________________________________________________________________ */}
      {/* <ul className='checkClass'>
Short method: Kiu na aik object bana liya gy check outside the Header component phr usy map karwa kar use kar liya gy     
            {nestedRoutes.map((link,index)=>{
              console.log(link.pathName,index)
              return <li key={index}><NavLink style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "black" : "white",
                  fontWeight: isActive && "bold",
                  borderRadius: "0.5rem",
                  padding: "0.4rem 0.7rem",
                  backgroundColor: "#088F8F"
                };}}
              className={({ isActive, isPending }) => {
                console.log({isActive},{isPending})
                return isActive ? "active" : isPending ? "pending" : "";
              }} to={link.pathName}>{link.name}</NavLink></li>
            })}
      </ul> */}
{/* __________________________________________________________________________________________________________________ */}
{/* More short method than SHORT METHOD. Because we have create a DYNAMIC UI FOR HEADER COMPONENT. Kiu ky mery pas 2 
components my code repeat ho raha tha in 2 components my ==========> 1) HeaderForActiveLinks 2) Todo ky andar main file 
index.js my ham (nested routing) kar rahy han or dono components my navigation ho rahe the. Same code reapeat ho raha tha
to uss ky liye my ny aik DYNAMIC COMPONENT bana liya hy HEADER ky liye (DynamicUiForHeader). Uss ky andar bss my apnay
routes bhej raha hon jin par my ny map karwana hy or UI par render karwana hy .This is the advantage of REACT JS  */}
<h1 style={{textAlign:"center"}}>Todo Screen</h1>
<div>
<DynamicUiForHeader routes={nestedRoutes} customClassForHeader={'todo-header-style'} />
</div>
<div style={{textAlign:"center", height: "30vh"}}>
<Outlet/>
</div>
{/* An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to
 show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or 
 nothing if there is no index route. */}
</div>
)
}

export default Todos