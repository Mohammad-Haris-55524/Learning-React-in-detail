import React from 'react'
import { NavLink } from 'react-router-dom'
function DynamicUiForHeader({routes, customClassForHeader}) {
  // console.log(customClassForHeader)
  return (
    
        <ul className={`${customClassForHeader}`}>
        {/* <ul>  */}
           {(routes || []).map((link,index)=>{
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
                // console.log({isActive},{isPending})
                return isActive ? "active" : isPending ? "pending" : "";
              }} to={link.pathName}>{link.name}</NavLink></li>
            })}
        </ul>
    
  )
}

export default DynamicUiForHeader