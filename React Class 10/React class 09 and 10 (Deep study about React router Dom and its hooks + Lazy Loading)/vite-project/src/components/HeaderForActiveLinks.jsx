// ------------------ IN THIS COMPONENT WE ARE LEARNING HOW TO CREATE ACTIVE AND NOT ACTIVE CLASS ----------------------
// <NavLink> or <Link> or are provided by in REACT by REACT ROUTER DOM. They are used to redirect routing in REACT. 
// By using REACT ROUTER DOM we can easily create ACTIVE AND NON ACTIVE LINKs just by using <navLink> tag. Just remember
// one thing is that if you want to make ACTIVE LINK only use <NavLink> tag for this beacause <Link> tag cannot be used
// to create ACTIVE OR NON ACTIVE CLASSES.
// ---------------------------------------------------------------------------------------------------------------------
import React from 'react'
import "./Header.css"
import { Link, NavLink } from 'react-router-dom'
import DynamicUiForHeader from './DynamicUiForHeader'
const headerLinks = [
  {name: "Posts", pathName: '/posts'},
  {name: "Services", pathName: '/services'},
  {name: "About-us", pathName: '/about-us'},
  {name: "Contact", pathName: '/contact'},
  {name: "Todos", pathName: '/todos'},
  {name: "Login", pathName: '/login'}

]
function HeaderForActiveLinks() {
  return (
<header>
<h2 id='font-size'><NavLink to={'/'}>My store</NavLink></h2>
    <nav>
{/* ___________________________________________________________________________________________________________________ */}
        {/* <ul className='checkClass'> */}
{/*----- Long method: Har aik page ka address li bana kar alag alag dalna par raha hy iss ka short method bhe hay------*/}
            {/* <li><Link to={'/posts'}>Posts</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link to={'/about-us'}>About</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li> */}
{/* ___________________________________________________________________________________________________________________ */}           
{/*Short method: Kiu na aik object bana liya gy check outside the Header component phr usy map karwa kar use kar liya gy}       */}
            {/* {headerLinks.map((link,index)=>{
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
</ul>
*/}
{/* ___________________________________________________________________________________________________________________ */}
{/* More short method than SHORT METHOD. Because we have create a DYNAMIC UI FOR HEADER COMPONENT. Kiu ky mery pas 2 
components my code repeat ho raha tha in 2 components my ==========> 1) HeaderForActiveLinks 2) Todo ky andar main file 
index.js my ham (nested routing) kar rahy han or dono components my navigation ho rahe the. Same code reapeat ho raha tha
to uss ky liye my ny aik DYNAMIC COMPONENT bana liya hy HEADER ky liye (DynamicUiForHeader). Uss ky andar bss my apnay
routes bhej raha hon jin par my ny map karwana hy or UI par render karwana hy .This is the advantage of REACT JS  */}
<DynamicUiForHeader routes={headerLinks} customClassForHeader={'checkClass'}/>
</nav>
</header>
  )
}

export default HeaderForActiveLinks