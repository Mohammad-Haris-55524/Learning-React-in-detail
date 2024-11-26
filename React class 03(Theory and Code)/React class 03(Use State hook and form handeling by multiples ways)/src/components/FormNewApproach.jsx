import React, { useState } from 'react'
function FormNewApproach() {
  // Normal useState to update value on every change in output section.
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    
    const [formSubmittedMsg, setformSubmittedMsg] = useState(false)
    // Here we are checking if the all inputs fields are filled then we could submit the form.
    const isValid = name && email && gender && password;
    console.log(isValid);


// Here we are creating more USE STATES so that will fetch the entire form data only when we click on submit button once
// all data is entered.
const [updateNameAfterSubmit, setupdateNameAfterSubmit] = useState();
const [updateEmailAfterSubmit, setupdateEmailAfterSubmit] = useState();
const [updateGenderAfterSubmit, setupdateGenderAfterSubmit] = useState();


// Beginner: Yaahaan my 2 states use kar raha hon Password ko show or hide karwanay ky liye or sath my button ky text ko 
// bhe update kar raha hon to my ny yahaan 2 state use ki han 1st state (input type toggle karny ky liye) or 2nd state
// (button ka text show or hide password ko change karny ky liye) yahi kaam my PRO method sy bhe kar skta hon yani 1 hi 
// state use kar ky check PRO TECHNIQUE:   
// --------------------------------------Beginner APPROACH (2 USE STATE):---------------------------------------------
// Password ki type change krwanay ky liye yahaan state use ki hay taky user show or hide kara sky password ko.
    // const [inputType, setinputType] = useState("password");
// Button par jab user click kary to uss ka bhe text change ho show or hide password sy
    // const [passwordBtnState, setpasswordBtnState] = useState("Show Password");
// -----------------------------------------PRO APPROACH (1 USE STATE): -----------------------------------------------
const [isVisible, setIsVisible] = useState(false) // to show and hide password
console.log(isVisible)
    
// CHeck notepad notes (form handeling) for better understanding (OLD APPROACH) 
// const inputHandler= (e) =>{
//   setName(e.target.value)
// }

// This gather all the form data when submit button is clicked.
const onSubmitHandler=(event) => {
event.preventDefault();
setupdateNameAfterSubmit(name);
setupdateEmailAfterSubmit(email)
setupdateGenderAfterSubmit(gender)
// Jb <form> submit hoga UI par msg show karanay ky liye use state ka use karien gy.
setformSubmittedMsg(true);
console.log({name},{email})
console.log("Render from FORM")

  // Hide the <form> submitted msg after 5 seconds
  setTimeout(()=>{
  // Jb <form> submit hoga UI par msg show karanay ky baad usy remove kar dein gy 5 second ky baad
  setformSubmittedMsg(false);
  },5000)
}
console.log("render + RErender")

// --------------------------------------------Beginner APPROACH (PART): -----------------------------------------------
// let showOrHidePassword = () => {
//   console.log("Hello")
//   if(inputType === "password"){
//   setinputType("text");
//   setpasswordBtnState("Hide Password")
//   console.log(inputType)
// }
// else{
//   console.log(inputType)
//   setinputType("password");
//   setpasswordBtnState("Show Password")
// }
  return (
    <>
    <div style={{border: "2px solid green", width: "fit-content", margin: "auto"}}>
    {formSubmittedMsg ? <h3>Form submitted sucessfully!</h3> : null}
    </div>
    <form onSubmit={onSubmitHandler}>
        <label htmlFor="Name">Name</label>
        <div>
        {/* BEST APPROACH ACCESING INPUTS FIELDS VALUES BY PASSING FUNCTION/HANDLERS IF HANDELING MANY INPUTS FIELDS AT 
        THE SAME TIME FOR THIS CHECK ConvertingMultipleUseStateIntoOne wala component... */}
        {/* <input type="text" onChange={inputHandler}/> */}
        {/* 1 liner APPROACH ACCESING INPUTS FIELDS AND SEETING VALUES TO AN INPUTS FIELD AT THE SAME TIME.
        (CHECK NOTEPAD NOTES FOLDER FORM HANDLEING USING HANDLERS AND WITHOUT HANDLERS  */}
        <input type="text" id='Name' value={name} onChange={(e) => {setName(e.target.value)}}/>
        </div>
        <label htmlFor="Email">Email</label>
        <div>
        <input type="Email" id='Email' value={email} onChange={(e) => {setEmail(e.target.value)
        console.log("Email: ",e.target)}}/>
        </div>
        <label htmlFor="gender">Gender</label>
        <div>
        <input type="text" id="gender" value={gender} onChange={(e) => {setGender(e.target.value)
        console.log(e.target.value)}}/>
        </div>
        <label htmlFor="password">Password</label>
      
        <div>
{/* -------------------------------------------Beginner APPROACH (PART): ------------------------------------------- */}
        {/* <input type = {inputType} id="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        <button onClick={showOrHidePassword}>{passwordBtnState}</button> */}

{/* -----------------------------------------PRO APPROACH (PART): --------------------------------------------- */}
<input type = {isVisible ? "text" : "password"} id="password"  value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        <button type='' onClick={(e)=>{setIsVisible(!isVisible) //!false = true and so on it changes on every click
        e.preventDefault();
          console.log("Btn triggered: ",isVisible);
        }}>{isVisible ? "Hide Password" : "Show Password"}</button>
        </div>
{/* e: e my event milta hay uss element ka jis ko target kiya jaa raha hota hay uss event ky andar bhot si key or 
values(props/properties) hoti han uss event ky andar aik target name ki key/props hoti hy agar ham sirf e/event.target
karein gy to hamey woh input field mil gy gi jis ham target kar rahy hoty han. And usi target ky andar aik value name
ka props hota hay jis my hamari main value pari hoti hay jo ham input ky time dal rahy hoty han.
*/}
<hr />
        <div>
       <button disabled={!isValid}> Submit</button>
        </div>
        <div style={{display: "flex", justifyContent: "space-around"}}>
        <div>
        <h3>Output This will works on every input change or keypress</h3>
        <h4>My name is: {name} </h4>
        <h4>My Eamil Address is: {email} </h4>
        <h4>I am {gender} </h4>
        </div>
  <hr />
        <div>
        <h3>Output This will works only when we click on form</h3>
        <h4>My name is: {updateNameAfterSubmit}</h4>
        <h4>My Eamil Address is: {updateEmailAfterSubmit}</h4>
        <h4>I am {updateGenderAfterSubmit}</h4>
        </div>
        </div>
        </form>
</>
)
}

export default FormNewApproach