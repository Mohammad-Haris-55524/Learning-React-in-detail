import React from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'

function Home() {
const {pathname,search,state,hash} = useLocation();
console.log({pathname},{search},{state},{hash}) // Yahaan par hamey pathName my woh route/path milta hay jis par ham 
// mojood hota han, state my woh data milta hay jo ham ny iss route par bheja hota hay check LOGIN.JSX we are getting
// user data from LOGIN.JSX, for more detail also check POST.JSX.
  return (
    <>
   {/*Har screen my header nazar aye taky redirect kara sako apny components ko from 1 page to another isi liye header
   ka component har screen ky component my render karwa raha hon  */}
   {/* Yaad rahy 1 tarika to yah hay ky har screen my jaa kar header component ko call karo taky har screen my mujhy 
header nazar aye or phr uss ka use karty howy my aik page sy dosry page par redirect kar lo apny component ko lekin iss
sy acha method yah ky ky har screen my <Header/> component ko call karny ky bajaye kiu na isy APP.JSX my call kar liye
gy within a HOC (Browswer Router) <BrowswerRouter> <Header/> <BrowswerRouter/>  (Check APP.JSX) */}
    {/* <Header/> */}
    <h1>Welcome to Home screen</h1>
    </>
  )
}

export default Home


