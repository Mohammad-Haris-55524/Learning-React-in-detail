// ------------------------------------------- WHAT WE WILL LEARN ?-----------------------------------------------------
//1) Yahaan ham ny multiple use states ko kesy 1 use state my change karna sekha hay by using OBJECT DESTRUCTUREING.
//2) Or ham yahaan par aik or cheez sekhy han ky kesy aik hi eventHandler bana kar usy sy kesy multiple inputs ky data
// ko get kar skty han yah phr uss my kesy value set kara skty han by only using 1 input Handler of same name in all
// the inputs fields.   
import React, { useState } from 'react'
function ConvertingMultipleUsestateIntoOne() {
  // Normal useState to update value on every change in output section.
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [gender, setGender] = useState("");
    // const [password, setPassword] = useState("");

// Topic # 01) By converting mulitple use states into 1 use state by using Object Destructuring  
    const [data, setData] = useState({name : "", email: "",gender: "" ,password: "" });
// bar bar data.name data.email kar ky value set karwani parein gy kiu na data ko DESTRUCTURE kar liya gy.
const {name,email,gender,password} = data;

    const [isVisible, setIsVisible] = useState(false)
    const [formSubmittedMsg, setformSubmittedMsg] = useState(false)
    // Here we are checking if the all inputs fields are filled then we could submit the form.
    const isValid = data.name !== "" && data.email !== "" && data.gender !== "" && data.password !== "";
//  const isValid = data.name && data.email && data.gender && data.password;
    console.log(isValid);


// Here we are creating more USE STATES so that will fetch the entire form data only when we click on submit button once
// all data is entered.
const [updateNameAfterSubmit, setupdateNameAfterSubmit] = useState();
const [updateEmailAfterSubmit, setupdateEmailAfterSubmit] = useState();
const [updateGenderAfterSubmit, setupdateGenderAfterSubmit] = useState();



// This gather all the form data when submit button is clicked.
const onSubmitHandler=(event) => {
event.preventDefault();
setupdateNameAfterSubmit(data.name); //data.name ki jagah name bhe likh skty han kiu ky ham ny data ko DESTRUCTURE kar diya hy
setupdateEmailAfterSubmit(data.email)
setupdateGenderAfterSubmit(data.gender)
// Jb <form> submit hoga UI par msg show karanay ky liye use state ka use karien gy.
setformSubmittedMsg(true);
console.log("Inputs Values: ",data)
console.log("Render from FORM")
// Hide the <form> submitted msg after 5 seconds
setTimeout(()=>{
    // Jb <form> submit hoga UI par msg show karanay ky baad usy remove kar dein gy 5 second ky baad
    setformSubmittedMsg(false);
},5000)
}
// CONTROLLING ALL INPUTS FIELDS BY USING A SINGLE INPUT HANDLER (BEST AND THE MOST ADVANCE APPROACH)
const onInputChangeHandler = (e)=>{
console.log("event Value: ",e.target.value);
// By using ID as props:
// const {value,id} = e.target;
// console.log("event", e.target, {value,id})
// Now setting values by using setter function of USE STATE (By using id).
// setData({...data, [id]: value})
// ______________________________________________
// By using name as props:
// Now setting values by using setter function of USE STATE (By using id).
// setData({...data, [id]: value});
const {value,name} = e.target;
console.log("event", e.target, {value,name})
// Now setting values by using setter function of USE STATE (By using id).
setData({...data, [name]: value})
}


// console.log("Inputs Values: ",data)
console.log("render + RErender")

  return (
    <>
    <div style={{border: "2px solid green", width: "fit-content", margin: "auto"}}>
    {formSubmittedMsg ? <h3>Form submitted sucessfully!</h3> : null}
    </div>
    <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Name</label>
        <div>
{/*Topic # 01) By converting mulitple use states into 1 use state by using Object Destructuring  */}
        {/* <input type="text" id='Name' value={data.name} onChange={(e) => {setData({...data, name: e.target.value})}}/> */}
{/*Topic # 02) Accessing multiple inputs fields by a single event Handler/Function with same name in all input fields  */}
      {/* Method 1: Agar koi value as an argument pass karni ho handler ko to yah method use karo warna 1 liner bhe
        use kar skty han check method 2(best approach) kiu ki iss sy kam sy kam code hota hay or gitch pitch nahe hoti*/}
        {/* <input type="text" id='Name' value={data.name} onChange={(e)=>{console.log(e.target.value);
        {onInputChangeHandler(e)}
        }}/> */}
        {/* Method # 02: Best approach to handle multiple inputs fields by using a single handler/function. Iss sy fiada
        yah hoga hamary JSX my gitch pitch nahe hoga code. Or jo bhe functionality hamy likhni hogi woh ham REACT CODE my 
        likhain gy */} 
        {/* Point to remember id/name ky props my wohi name set karwana jo use state my set karwaya hay warna value
        nahe mily gy inputchangehandler my useState ka name/email/gender ka name same ho id/name ky props sy. */}
        <input type="text" id='name' name='name' value={data.name} onChange={onInputChangeHandler}/> 
      

        </div>
        <label htmlFor="email">Email</label>
        <div>
{/*Topic # 01) By converting mulitple use states into 1 use state by using Object Destructuring  */}
        {/* <input type="Email" id='Email' value={email} onChange={(e) => {setData({...data, email: e.target.value})}}/> */}

{/*Topic # 02) Accessing multiple inputs fields by a single event Handler/Function with same name in all input fields  */}
        <input type="Email" id='email' name='email' value={email} onChange={onInputChangeHandler}/>

        </div>
        <label htmlFor="gender">Gender</label>
        <div>
{/*Topic # 01) By converting mulitple use states into 1 use state by using Object Destructuring  */}
        {/* <input type="text" id="gender" value={gender} onChange={(e) => {setData({...data, gender: e.target.value})}}/> */}

{/*Topic # 02) Accessing multiple inputs fields by a single event Handler/Function with same name in all input fields  */}
        <input type="text" id="gender" name="gender" value={gender} onChange={onInputChangeHandler}/>
        </div>
        <label htmlFor="password">Password</label>
        <div>
{/*Topic # 01) By converting mulitple use states into 1 use state by using Object Destructuring  */}
        {/* <input type = {isVisible ? "text" : "password"} id="password"  value={password} onChange={(e) =>
        {setData({...data, password: e.target.value})}}/> */}

{/*Topic # 02) Accessing multiple inputs fields by a single event Handler/Function with same name in all input fields  */}
        <input type = {isVisible ? "text" : "password"} id="password" name="password" value={password} 
        onChange={onInputChangeHandler}/>
        <button type='' onClick={(e)=>{setIsVisible(!isVisible) //!false = true and so on it changes on every click
        e.preventDefault();
          console.log("Btn triggered: ",isVisible);
        }}>{isVisible ? "Hide Password" : "Show Password"}</button>
        </div>

<hr />
        <div>
       <button disabled={!isValid}> Submit</button>
        </div>
        <div style={{display: "flex", justifyContent: "space-around"}}>
        <div>
        <h3>Output This will works on every input change or keypress</h3>
        <h4>My name is: {data.name} </h4>
        <h4>My Eamil Address is: {data.email} </h4>
        <h4>I am {data.gender} </h4>
        <h4>Password: {data.password}</h4>
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

export default  ConvertingMultipleUsestateIntoOne
// *********************************************************************************************************************
// Most important things we learned in this components are:
// 1)Ky jab ap ko bhot si inputs fields sy data fetch/extract karna ho to simple 1 onInputChangeHandler bana lo or sab 
// data uss ky through get kar lo.
// ______________________________________________________________________________________________________________________
// 2) Hamesha kosish yahi karni chaihyee ky hamara JSX CODE clean rahy jo bhe functionality perform karni ho yah ziada
// functionalities apply karni ho jiss sy code my gitch pitch ho to acha hy ky aik handler bana kar sara code JSX ky bajaye
// REACT ky andar likhna chaihyee.
// _____________________________________________________________________________________________________________________
// 3) Agar ap ky pass 1 hi cheez sy related bhot si useState hon or example: Name,email father name, phone no gender ...
// iss trha ky bhot sy inputs leny ho to bar bar use states banay sy acha hy 1 hi use STATE ky through sab ko 
// destructure kar lo.
// _____________________________________________________________________________________________________________________
// 4) Jab bhe 1 handler ky thorugh mutilple inputs fields ka data get kar rahy hon gy id/name props ku through input
// fields sy REACT CODE ky andar to hamesha yaaad rakhna ky id/name ky props my wohi name set karwana jo USE STATE ky
// andar uss field ka name set karwaya hoga. For example:

// Mery pas combine USE STATE hay "name" "email" "gender" or "password" ki jis ko my ny destructure kar liye hay.
// const [data, setData] = useState({name : "", email: "",gender: "" ,password: "" });
// Jin namo sy useState ki initialize karwaya hay wohi same name id.name ky props my bhe pass karna capital small ka bhe 
// farq nahe hona chaihyee warna onInputChangeHandler ky function my setData my value set karwain gy to hamari value set 
// nahe hogi agar name/id ka props state ki initialized name sy match nahe howa to.
// {/* <input type="text" id='name' value={data.name} onChange={onInputChangeHandler}/>  */} Correct
// {/* <input type="text" name='name' value={data.name} onChange={onInputChangeHandler}/>  */} Correct
// {/* <input type="text" id='Name' value={data.name} onChange={onInputChangeHandler}/>  */} WRONG
// {/* <input type="text" id='Name' value={data.name} onChange={onInputChangeHandler}/>  */} WRONG
// Wrong: Isi liye hay kiu ky use state my small sy name likha howa hay. Yah ghalti karny sy hamara data set nahe ho saky
// ga or form sahe sy work nahe kary ga


