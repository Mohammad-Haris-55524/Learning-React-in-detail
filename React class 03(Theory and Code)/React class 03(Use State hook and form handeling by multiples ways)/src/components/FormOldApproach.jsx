import React, { useState } from 'react'
//-------------------------------------- What we will learn in this component ? ---------------------------------------
// Here we will study that we can also access input fields data without using <form>. Without using <form> we can also
// access the values of input field but it is a hectic and long method. Kiu ky hamey bari bari har field ky andar
// onclick/onchange (apni requirment ky mutabiq) event bana kar har uss event ko uper jahaan JS likhty hn wahaan par
// har event ky function ko use kar ky bari bari har kisi ki value access karni pary gi jesa ham yaahaan kar rahy han.
// Agar ham <form> ka use kar karty to ham sirf <form> tag ky andar onSubmit use kar ky sari inputs fields ka aik sath data
// extract kar skty han for better understanding check <form> Component.
// ********************************************************************************************************************
// For better understanding isy 2 phase my divide kiya gya hay phely phase 02(Scenrio 01 ko baki code ky sath smjha gy
// jab woh smjh aa gy phr phase 2 ky scerio # 02 ky code ko smjha gy difference sirf use states and submit button ka hay.
// Phase : 02(Scnerio # 01): Is handeling input field without submit buttons and rerendering data on UI in output section
// on UI on every key press. Bss code ko comment or uncooment kar lena

// Phase : 02(Scnerio # 02): Is handeling input field in such a way ky output section my UI par data sirf tab rerender 
// karwana jab user sara data daal chuka hon or submit par click kary
// --------------------------------------------------------------------------------------------------------------------

export default function FormOldApproach() {
// Phase : 02(Scnerio # 01): Using USE State hook: My chahta hon jab my values enter karo to mery UI my OUTPUT section
//  ky area my woh tamama values rerender hon har key press par.

// Phase : 02(Scnerio # 02): Isi ky andar aik or scenerio bhe bana skty han ky mujhy values har key press par nahe 
//  render hoty dekhy sirf aik hi bar dekhay jab sari input fields my bhar chuka hon or phr jab my submit ky button par
//  click karo sari values OUTPUT waly section my UI par rerender ho gy.

// Phase : 02 (Scnerio # 01) part use states hooks:
    const [name,setName] = useState("");
    const [fatherName,setFatherName] = useState("");
    const [email,setEmail] = useState("");
// --------------------------------------------------------------------------------------------------------------------    
// Phase : 02 (Scnerio # 02) part use states hooks:
    // const [updateNameOnSubmitOnly,setupdateNameOnSubmitOnly] = useState("");
    // const [updateFatherNameOnSubmitOnly,setFatherupdateNameOnSubmitOnly] = useState("");
    // const [updateEmailNameOnSubmitOnly,setEmailupdateNameOnSubmitOnly] = useState("");
// -------------------------------------------------------------------------------------------------------------------- 

    // Yahaan ham har aik handler(yani har input ky function) ko bari bari use kar ky uss ky andar sy input feilds ki
    // values extract karen gy.
    const inputNameHandler = (event)=>{
        // console.log(event.target) // event.target my hamey woh field mily gi jisy ham target kar rhay hoty han
        // console.log(event.target.value) //Iss my input my jo enter karen gy uss ki value milgy gi har change par kiu 
        // ky ham onChange handler use kar rahy han.
        setName(event.target.value)
    console.log("rerender from Input name");
    // console.log({name}, {fatherName}, {email});  

    } 
    const inputFatherNameHandler = (event)=>{
        // console.log(event.target.value)
        setFatherName(event.target.value)
    console.log("rerender from Father name");
// console.log({name}, {fatherName}, {email});    


    } 
    const inputEmailHandler=(event)=>{
        // console.log(event.target.value)
        setEmail(event.target.value)
    console.log("rerender from Email");
// console.log({name}, {fatherName}, {email});    

    } 
// -------------------------------------------------------------------------------------------------------------------- 
    // Phase : 02 (Scnerio # 02) This function works only when we click on submit buttons. And then all the data in the 
    // inputs fields will we rerendered on UI after only the submit button will be clicked
    // const onSubmitHandler = ()=>{
    //     setupdateNameOnSubmitOnly(name)
    //     setFatherupdateNameOnSubmitOnly(fatherName)
    //     setEmailupdateNameOnSubmitOnly(email)
    // }
// -------------------------------------------------------------------------------------------------------------------- 
console.log({name}, {fatherName}, {email});    
console.log("Render");
  return (

    <div style={{border: "2px solid black", padding: "1rem", margin: "auto"}}>
        <label htmlFor="Name">Name</label>
    <div>
        <input type="text" id="Name" onChange={inputNameHandler} />
    </div>
        <label htmlFor="Father Name">Father Name</label>
    <div>
        <input type="text" id="Father Name" onChange={inputFatherNameHandler} />
    </div>
        <label htmlFor="Email">Email</label>
    <div>
        <input type="text" id="Email" onChange={inputEmailHandler} />
    </div>
    {/* <div>
        <button onClick={onSubmitHandler}>Submit</button>
    </div> */}
    <h3>Output</h3>
{/* Phase : 02 (Scnerio # 01) Display output on every key press while entering data into inputs fields*/}
    <h4>My name is: {name} </h4>
    <h4>My Father name is: {fatherName} </h4>
    <h4>My Eamil Address is: {email} </h4>
{/* ---------------------------------------------------------------------------------------------------------------  */}
{/* Phase : 02 (Scnerio # 02) Only Display output when submit buttons is clicked after all inputs fields are filled */}
    {/* <h4>My name is: {updateNameOnSubmitOnly} </h4>
    <h4>My Father name is: {updateFatherNameOnSubmitOnly} </h4>
    <h4>My Eamil Address is: {updateEmailNameOnSubmitOnly} </h4> */}
{/* ----------------------------------------------------------------------------------------------------------------  */}
    </div>
  )
}
