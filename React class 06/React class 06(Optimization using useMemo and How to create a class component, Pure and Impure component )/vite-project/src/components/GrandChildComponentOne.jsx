// ************************************************CHAPTER # 01(B)******************************************************
import React from 'react'
import GrandChildComponentTwo from './GrandChildComponentTwo'

export default function GrandChildComponentOne() {
  return (
    <>
    <div style={{border: "2px solid red", marginBottom: "1rem"}}>
      <h3>I am Grand Child Component One</h3>
    </div>
    {console.log("I am Grand Child Component One")}
      <GrandChildComponentTwo/>
    </>
  )
}
