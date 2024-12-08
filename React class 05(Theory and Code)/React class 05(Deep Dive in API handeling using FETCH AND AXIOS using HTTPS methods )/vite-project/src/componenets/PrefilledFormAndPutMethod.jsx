// ----------------------------------WHAT WE ARE LEARINING IN THIS COMPONENET ?----------------------------------------
// JSON SERVER KY THROUGH USERS ki 1 API CREATE KARI HAY JIS MY USER KA DATA HOGA MY USS USER KY DATA ko UI par render 
// karwao ga or uss my 1 edit ka button dn ga jab user uss button par click kary ga to woh data prefilled ho kar form 
// my aagy ga phr ham uss data ko edit karein gy or woh UPDATED data UI par dobara render ho gy ga. 
// _____________________________________________________________________________________________________________________
// -------------------ISS COMPONENET MY (PUT METHOD) KO FETCH OR AXIOS DONO SY KIYA GYA HAY------------------------------- 
// _____________________________________________________________________________________________________________________
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
export default function PrefilledFormAndPutMethod() {
    // USE STATE FOR INPUTS FORMS HANDELING
    const [inputFormData, setinputFormData] = useState({id:"",name: "", age: "", salary: ""});
    const {name,age,salary} = inputFormData;
    // USE STATE FOR GETTING DATA FROM API IT ON UI 
    const [usersApiResponseDataFromJson, setusersApiResponseDataFromJson] = useState([])
    // USE STATE FOR RENDERING MESSAGE ON UI AFTER JSON USER's DATA SUCCESFULLY UPDATED 
    const [uiMessage,setuiMessage] = useState(false)
    // BUTTON WILL REMAIN DISABLED UNTILL ALL INPUTS FIELDS ARE NOT FILLED
    let isValid = name && age && salary;
    // STATE TO CHANGE COLOR OF SELECTED JSON DATA FIELD 
    const [selectedButtonId, setSelectedButtonId] = useState(null);

// --------------------------------Function to get USER DATA FROM A JSON SERVER----------------------------------------//
    const fetchDataFromApi = async () => {
      try{
        // --------------------------------------API REQUEST USING FETCH-----------------------------------------------
        // const response = await fetch(`http://localhost:3000/users/`);
        // const data = await response.json();
        // setusersApiResponseDataFromJson(data);
        // --------------------------------------API REQUEST USING AXIOS-----------------------------------------------
        // const {data} = await axios(`http://localhost:3000/users/`);
        const {data} = await axios(`users/`); // baki base URL sy aa raha hy jo ky axios ka feature hay check app.jsx file
        setusersApiResponseDataFromJson(data);

      }
      catch(error){
        console.log(error)
      }
    }
    console.log("Render + ReRENDER",);
    console.log("JSON USER's DATA: ",usersApiResponseDataFromJson);
//---------------------------------------------------------------------------------------------------------------------
// Api USE STATE ky ReRENDER hony par baar bar call na ho isi liye API REQUEST waly method ko USE EFFECT HOOK ky andar
// daal diya hy taky sirf 1 bar hi execute ho only when this Component is render for the first time
    useEffect(()=>{
        fetchDataFromApi();
    },[])
//-------------------------------FUNCTION WILL EXECUTE ONLY WHEN USERS CLICK ON UPDATE---------------------------------
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        updateFormData()
    }
//----------------------------FUNCTION FOR GETTING DATA WHILE PASSING INPUTS INTO A FORM--------------------------------
const onInputChangeHandler = (e)=>{
    const{id,value} = e.target;
    // console.log(id,value);
    setinputFormData({...inputFormData,[id]:value});
}
//-------------------------------------FUNCTION TO PREFILLED/AUTOFILL FORM DATA----------------------------------------
const preFilledDataIntoFormHandler = (id) =>{
// ****************************************************STEP # 01********************************************************
// Mery pas USERS ka jo response aya tha usy my ny USE STATE ka use karty howy EMPTY ARRAY my store kara diya tha ab 
// my uss my sy sirf usi USER ka data mangwana chah raha hon jis par USER ny UPDATE ky liye UPDATE ky BUTTON par
// click kiya hay.
// console.log(usersApiResponseDataFromJson[id -1])
const selectedUser = usersApiResponseDataFromJson[id -1]
console.log(selectedUser, inputFormData); 
// ****************************************************STEP # 02********************************************************
//Ab jo mery pas SELECTED USER ka data aya hy my usy form my show karao ga taky woh PREFILLED ho gy. Yani jab
// bhe USER JSON DATA WALY USERS ky UPDATE button par click kary to woh khud AUTOFILL ho kar form my aagy. To iss ky 
// liye mujhy INPUT FORM ki field my SPECIFIC USER ka data set karwana hy to mujhy yahaan par INPUT FORM ki STATE ko
// access karna pary ga taky my SPECIFIC USER ko FORM ki INPUT FIELDS my SET karwa sako.
setinputFormData({
    id: selectedUser.id,
    name: selectedUser.name,
    age: selectedUser.age,
    salary: selectedUser.salary})

setSelectedButtonId(id);
}

//----------------------------FUNCTION TO UPDATE JSON USERS INFORMATION AFTER SUBMITING FORM-----------------------------
const updateFormData = async () =>{
    // console.log(inputFormData.id);  
    const selectedUser = inputFormData.id;  
    try{
        // --------------------------------------API REQUEST USING FETCH-----------------------------------------------
        // const response = await fetch(`http://localhost:3000/users/${selectedUser}`,
        //     {method:"PUT",
        //     headers:{
        //         "Accept": "application/json",
        //         "Content-type": "application/json",
        //     },
        //     body: JSON.stringify(inputFormData),
        // });
        //   const data = await response.json();
        //-------------------------------------------- API REQUEST USING AXIOS-----------------------------------------

        // const {data} = await axios({url:`http://localhost:3000/users/${selectedUser}`,method: 'PUT',
        const {data} = await axios({url:`users/${selectedUser}`,method: 'PUT',
        headers:{
            "Accept": "application/json",
            "Content-type": "application/json",
        },
        data : JSON.stringify(inputFormData)  
    })
        
//FORM UPDATE HONY KI SURAT MY UI PAR MEESAGE SHOW KARWANY KY LIYE MESSAGE KI USE STATE KO TRUE KARA HAY OR PHR JSX KY
// condionally render karwaya hay.
        setuiMessage(true); 
    //   SIRF 3 SECOND TAK MESSAGE SHOW HOGA USS KY BAAD MSG GHAIB HO GY GA.
        setTimeout(()=>{
            setuiMessage(false);
        },3000);
        console.log("Input Form data:- ",inputFormData,"Data:- ",data);
        fetchDataFromApi()
      }

      catch(error){
        console.log(error)
      }
}
      
// ___________________________________________________JSX CODE___________________________________________________________
  return (
<div style={{display:"flex", justifyContent:"space-around"}}>
    {/* -----------------------------------------INPUT FORM ------------------------------------------------- */}
<div style={{ border: "5px solid green",padding: "2rem", height:"70vh"}}>
    <form onSubmit = {onSubmitHandler}>
<label htmlFor="name">Name:</label>
<div>
<input type='text' id='name' style={{width: "100%"}} value={inputFormData.name} onChange={onInputChangeHandler}></input>
</div>
<label htmlFor="age">Age:</label>
<div>
<input type='number' id='age' style={{width: "100%"}} value={inputFormData.age} onChange={onInputChangeHandler}></input>
</div>
<label htmlFor="salary">Salary:</label>
<div>
<input type='number' id='salary' style={{width: "100%"}} value={inputFormData.salary} onChange={onInputChangeHandler}></input>
</div>
<div style={{display: 'flex', alignItems: "center",justifyContent:"center",marginTop:"1rem"}}>
<button disabled={!isValid}>SUBMIT</button>
</div>
</form>
</div>
{/* --------------------------------------GETTING USER DATA FROM JSON SERVER----------------------------------------- */}
    <div> 
        <div>
    {uiMessage && <div style={{border: "5px solid green", padding:"1rem",marginBottom:"1rem"}}>FORM UPDATED SUCESSFULLY</div>}
         <table style={{border: "2px solid black", textAlign:"center"}}>
             <thead>
             <tr style={{border: "2px solid black"}}>
             <th>Id</th>
             <th>Name</th>
             <th>Age</th>
             <th>Salary</th>
             <th>Update Record</th>
 
             </tr>
             </thead>
 
             <tbody>
             {usersApiResponseDataFromJson.map((user)=>{
                 return <tr key={user.id} style={{border: selectedButtonId === user.id ? "5px solid green" : "2px solid black" }}>
                 <td>{user.id}</td>
                 <td>{user.name}</td>
                 <td>{user.age}</td>
                 <td>{user.salary}</td>
                 {/* APPROACH # 01 BY PASSING ID ON WHICH THE USER CLICKS */}
                 <td><button onClick={() => preFilledDataIntoFormHandler(user.id)}>Update</button></td>
 
                 {/* APPROACH # 02 BY PASSING SPECIFIC USER ON WHICH THE USER CLICKS */}
                 {/* <td><button onClick={() => preFilledDataIntoFormHandler(user)}>Update</button></td> */}
 
                 </tr>
             })}
             </tbody>
         </table>
     </div>
</div>
</div>
)
}
