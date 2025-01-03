// -------- IN THIS COMPONENT WE ARE LEARNING HOW TO ROUTE USING <Link> TAG(Redirect from one page to another) ----------
//<Link> or are provided by in REACT by REACT ROUTER DOM. They are used to redirect routing in REACT. Just remember 1 
// things that if we want to create active class then we need to use <navLink> in place of <Link>
// ---------------------------------------------------------------------------------------------------------------------
import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const headerLinks = [
  {name: "Posts", link: '/posts'},
  {name: "Services", link: '/services'},
  {name: "About-us", link: '/about-us'},
  {name: "Contact", link: '/contact'}
  
]
function Header() {
  return (
<header id='toggle-color'>
<h2><Link to={'/'}>My store</Link></h2>
    <nav>
        <ul className='checkClass'>
{/* Long method: Har aik page ka address li bana kar alag alag dalna par raha hy iss ka short method bhe hay  */}
            {/* <li><Link to={'/posts'}>Posts</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link to={'/about-us'}>About</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li> */}
{/*Short method: Kiu na aik object bana liya gy check outside the Header component phr usy map karwa kar use kar liya gy}       */}
            {headerLinks.map((link,index)=>{
              console.log(link.link,index)
              return <li key={index}><Link to={link.link}>{link.name}</Link></li>
            })}
        </ul>
    </nav>
</header>
  )
}

export default Header