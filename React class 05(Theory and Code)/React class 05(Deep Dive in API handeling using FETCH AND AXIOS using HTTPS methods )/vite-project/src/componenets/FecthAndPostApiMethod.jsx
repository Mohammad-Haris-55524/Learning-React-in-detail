// --------------------------------What are we learning in this component ? -------------------------------------------
// In tamam componenets my ham FETCH and AXIOS dono ko use kar rhay han. Iss my basically ham yah sekh rahy han ky kesy
//  API's ka use kar ky kesy HTTP METHODS USE KARTY HAN. ISS COMPONENET MY HAM POST METHOD KA USE KAR RAHY HAN.
// POST: JAB HAM userDataBASE MY KOI NEW CHEEZ ADD KARANA CHAHTY HAN TO POST KA METHOD USE KARTY HAN FOR EXAMPLE: HAM NEW 
// PRODUCT ADD KARANA CHAH RAHY HO YAH NEW USER ADD KARANA CHAH RAHY HO TAB YAH METHOD USE HOGA YAH METHOD UPDATE KARANY 
// KY LIYE BHE USE HOSKTA HY LEKIN GOOD PRACTISE NAE HY
// UPDATE KY LIYE HAM (PUT) YAH (PATCH) METHOD USE KARTY HAN 
// POST:
// Purpose: Submit userData to be processed to a specified resource.
// Example: POST /users, submitting user userData for registration.
// _____________________________________________________________________________________________________________________
// -------------------ISS COMPONENET MY (POST API METHOD) KO FETCH OR AXIOS DONO SY KIYA GYA HAY------------------------------- 
// _____________________________________________________________________________________________________________________
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
function FecthAndPostApiMethod() {
const [userData, setUserData] = useState({name: "", age: "", salary: ""});
const {name,age,salary} = userData;
let isValid = name && age && salary;
// console.log(isValid) 

const postApiMethod = async()=>{
    try{
    // --------------------------------------API REQUEST USING FETCH-----------------------------------------------
//     const response = await fetch('https://dummy.restapiexample.com/api/v1/create',{
//     method:"POST",
//     headers:{
//         "Accept": "application/json",
//         "Content-type": "application/json",
//     },
//     body: JSON.stringify(userData)
// });
//     const result = await response.json();
//     console.log(result);
    // --------------------------------------API REQUEST USING AXIOS-----------------------------------------------
    const {data} = await axios({url:'https://dummy.restapiexample.com/api/v1/create',method:"POST",
    headers:{
        "Accept": "application/json",
        "Content-type": "application/json",
    },
    data: JSON.stringify(userData)});
    console.log(data)
    }
    catch(err){
        console.log("Error: ",err);
    }
}

const onSubmitHandler = (event)=>{
    event.preventDefault();
    console.log({name,age,salary})
    postApiMethod();
}
const onInputChangeHandler = (e) =>{
    // console.log(e.target)
    const{id, value} = e.target;
    // console.log({id,value})
    setUserData({...userData, [id] : value})
}
console.log("render + ReRender")
return (
    <div style={{border: "5px solid green", maxWidth:"30%", margin: "4rem auto",padding: "2rem", height:"70vh"}}>
    <h3 style={{textAlign:"center", textDecoration:"underline"}}>USER userData</h3>
<form onSubmit = {onSubmitHandler}>
    <label htmlFor="name">Name:</label>
    <div>
    <input type='text' id='name' style={{width: "100%"}} value={userData.name} onChange={onInputChangeHandler}></input>
    </div>
    <label htmlFor="age">Age:</label>
    <div>
    <input type='number' id='age' style={{width: "100%"}} value={userData.age} onChange={onInputChangeHandler}></input>
    </div>
    <label htmlFor="salary">Salary:</label>
    <div>
    <input type='number' id='salary' style={{width: "100%"}} value={userData.salary} onChange={onInputChangeHandler}></input>
    </div>
    <div style={{display: 'flex', alignItems: "center",justifyContent:"center",marginTop:"1rem"}}>
    <button disabled={!isValid}>Submit</button>
    </div>
</form>

</div>
  )
}

export default FecthAndPostApiMethod