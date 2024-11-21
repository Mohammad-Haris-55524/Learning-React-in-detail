import React, { Component } from 'react'

function BasicsOfLifeCycleMethods() {
  return (
    <div>Basics Of Life Cycle Methods</div>
  )
}

export default BasicsOfLifeCycleMethods

// React my kisi bhe component ky 3 life cycle ky phase hoty han. Bilkul isi trha jesy har human being ky life cycle phases hoty han 1) Born
// 2) Adult howa or uss ki life my kia changes aa rhay han means (SCHOOL LIFE SY COLLEGE LIFE MY AAGYA PHR COLLEGE LIFE SY UNI LIFE MY AAGYA)
//  yani updataion aa rahe hay. 
// 3) Death mar gy finish tata goodbye gaya 
// Bilkul isi trha react ky Component ky bhe 3 life cycle phase hoty han 
// 1) MOUNTING (COMPONENT DID MOUNT): Yani Component create hota hy iss phase my ka iss ka mtlb hay hamara component load howa hy initialize
// howa hay ab iss phase my ham ny kuch chezain initialize karwaty han apny component my jinhay ham baad my use karty han.
// 2) UPDATING: Iss Component my hamari props update horahy hoty han or states bhe set ho rahe hoti han. Jo bhe chezo my updatation aa rahe hy 
// hamary Component my woh ham  UPDATING LIFE CYCLE ka method use kar ky karty han.
// 3) UNMOUTING PHASE: Means component ki death hogaye kesy ? Maan lo ap ny kesi cheez/element ko DOM sy remove kar diya and yah phr ham apnay
// 1 page sy dosry page par redirect kar gy to previous page ki tamam states props ki death hogy gi.
// Ab hamey yah 3 life cycle method smjh to aa gy ab ham in 3 methods ko apnay projects my use kahaan par karty han ?
// Dekho maan lo ham chahty han ky jesy hi hamari website load ho hamey screen par 1 POP UP message dekhny ko mil gy to yah baat REACT ko kesy
// pta chaly ga ky hamari web application pori load ho chuki hay or hamey POP UP message show karwana hy to isi sab ky liye REACT ko batanay ky 
// liye ham REACT ky LIFE CYCLE METHODS ka use karty han ky hamey kab kia kaam karwana hy. Issi trha koi state yah props update hon to my koi
// Notification show karwa dn to iss sab ko implement karny ky liye ham REACT ky life cycle methods ka use karein gy.

// HERE WE GO IN DEPTH ======> MOUNTING PHASE ky andar hamey 1 constrctor ka method milta hy.
// Contructor method ham phely bhe JS my parh kar aa chuky han
// Jab bhe ham apna class component banaty han to uss ky andar ham apna constructor method bhe banaty han yaad rahy contructor method hamara
// hamesha sab sy phely call hota hy or to or yah RENDER method sy bhe phely call hota hy.
// Ab yah RENDER method kia hota hy ? 
// Jab bhe ham apna class component banaty han to ham apna RENDER method zaroor banaty han. Render method ky andar ham apni JSX return karwaty
// han taky UI RENDER karwa saken 

// REMEBER 1 THING ABOUT render()
// In the render() method, we cannot change the state, and we cannot cause side effects( such as making an HTTP request to the webserver).

// INTERVIEW QUESTION (Render kis life cycle ka method hay ?) ===> Render UPDATING PHASE ka method hy yah HAMARY Component ko render karny ky
// kaam ata hy or jab state yah props update hon to yah hamary Component ko update kar ky UPDATED UI ko render kara deta hy   
