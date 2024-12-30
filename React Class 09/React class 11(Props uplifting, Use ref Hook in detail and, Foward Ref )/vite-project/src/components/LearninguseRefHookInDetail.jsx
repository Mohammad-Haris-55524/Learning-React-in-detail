// ------------------------- TOPIC # 02-A (LEARNING USE REF HOOK) CREATING MULTIPLES USEREF FOR MUTIPLE INPUTS FIELD --------------------------- 
import React, { Component, forwardRef, useEffect, useRef, useState } from 'react'
// function LearninguseRefHookInDetail() {
//     const nameRef = useRef(null);
//     const  emailRef = useRef(null);
//     const ageRef = useRef(null);
//     const changeBgColor = useRef()
//     // const body = document.body;
//     const [toggleBtn, setToggleBtn] = useState(false)
// // console.log(nameRef,emailRef, ageRef)

// const onsubmitHandler = (e) =>{
//     e.preventDefault()
//     console.log({nameRef: nameRef.current.value},{emailRef: emailRef.current.value}, {ageRef: ageRef.current.value})
// //   ----------------------------------------------------------------- OR -------------------------------------------------------------
//     // console.log(nameRef.current.value,emailRef.current.value, ageRef.current.value)
// }

// // --------------------------- (Learning how to ===>): Toggle BG color using STATE + USE REF HOOK() AND USE EFFECT HOOK -----------------------
// useEffect(()=>{
//     changeBgColor.current = document.body
//     console.log(changeBgColor.current)
//     toggleBtn ? changeBgColor.current.style.backgroundColor = "green" : changeBgColor.current.style.backgroundColor = "yellow"
// },[toggleBtn])

// const changeBodyColorHandler = () =>{
//     setToggleBtn(!toggleBtn)
//     // console.log(toggleBtn)
// }

// // --------------------------------------------- TOPIC: ONFOCUS AND ONBLUR USING USE REF HOOK () --------------------------------------------
// const focusHandler = (e) =>{
//     console.log(e.target)
//     e.target.style.backgroundColor= "green"
// }

// const blurHandler = (e) =>{
//     console.log(e.target)
//     e.target.style.backgroundColor = "yellow"
// }

// return (
//     <>
//     <button onClick={changeBodyColorHandler} >Change Background Color</button>
//     <h3>Learning UseRef Hook</h3>
//     <div>
//         <label htmlFor="name">Name</label>
//         <input type="text" ref={nameRef} onFocus={focusHandler} onBlur={blurHandler} />

//     </div>
//     <div>
//         <label htmlFor="email">Email</label>
//         <input type="text" ref={emailRef} onFocus={focusHandler} onBlur={blurHandler}  />

//     </div>
//     <div>
//         <label htmlFor="age">Age</label>
//         <input type="number" ref={ageRef} onFocus={focusHandler} onBlur={blurHandler} />
//     </div>

//     <button onClick={onsubmitHandler}>Submit</button>

//     </>
//   )
// }

// export default LearninguseRefHookInDetail

// Conclusion: 
// 1) UseRef hook ko ham DOM Element ko access karny ky liye REACT my use karty han. Jesa ky ham JS my document.getElementById()
// yah phr document.getElementsByClassName() wagera use karty thy thy jab bhe ham ny kisi element ko access karna hota
// tha. React mein, useRef() DOM elements ko directly manipulate(change,update,delete) karne ke liye help karta hai 
// without causing re-renders.

// Always Remember:
// useRef() returns an object with a .current property, which holds a reference to the DOM element.
// Unlike state changes, updating the .current value of a ref does not trigger re-renders in React, which is an 
// important difference from useState().


// ______________________________________ CONTROLLED COMPONENT (UseState() Hook) _______________________________________
// Apko yaad hoga jab bhi hum state ke through values ko manage karte the, toh state se banaye gaye variables ki values
// jab bhi update hoti thi, hamara component re-render hota tha. Sath my hi hamey har update par updated UI mila
// karti the. It means that ky ham STATE ka use ka use kar ky value ko har change par track kar skty thy. Isi liye jab 
// ham apnay Components my STATE ka use kar ky values ko get karty thy to hamara Component CONTROLLED COMPONENT kehlata
// hay. Means that we can keep a track record of every update. Lekin useRef() hook mein ye functionality nahi hoti...

// _______________________________________ UNCONTROLLED COMPONENT (UseRef() Hook) _____________________________________
// 2) Jab bhe ham apnay component my useRef() ky thorugh values ko manage karein gy to jab bhe value UPDATE hogi to 
// hamrar Component RERENDER nahe hoga aur hum har update ka track nahi rakh saken gy. Isi wjah sy ham aisi Component ko 
// UNCONTROLLED COMPONENT bolty han.
// Ref sirf ek object return karta hai, jisme .current property hoti hai. Ye .current property us DOM element ka 
// reference hold karti hai, jo hum manipulate karte hain. Lekin, jab hum .current property ki value change karte hain,
// toh component re-render nahi hota.

// 3) Performance UseState vs UseRef() ?
// Dekho useRef performance wise useState sy kabhe bhe acha nahe hota kiu ky useRef direct DOM my jaa kar manupulation 
// karta hy jab ky react iss ky khilaaf hay kiu ky react my jo bhe changes hoti han woh virtual DOM my hoti han.
// Jab ham directly DOM elements ko manipulate karte han UseRef() Hook ka use kar ky to (jaise inputRef.current.value = 'new value'),
// to ham React ke virtual DOM se bypass karke directly actual DOM ko change karte han. Iska matlab hai ke React ka 
// reconciliation process disrupt ho sakta hai, kyunki React ko pata nahi hota ke DOM me changes hui hain, aur future
// renders me issues aa sakte hain.


// When to use UseRef() ?
// Jab ap ko lagy ky mujhy sirf values ko get karna hy for example: (Input Form data) or kisi bhe value ko har update
// par na UI par render karwana hy na hi har change par value ko track karna hy sirf aisi situation my UseRef() use karein
// gy


// When to use useSTATE() ?
// Jab mujhy pata ho ky har key stroke par my ny update value UI par RENDER karwani hy to my UseState() hook ka use karo
// ga kiu ky yah 1 controlled component hay. It keeps a track record of every updated value. Or iss sy bhe zaida zarori 
// baat yah hay ky useState() hook har update par Component ko RERENDER karta hy to iss ky RERENDERing waly benefit ki 
// wjah sy hi mujhy har bari updated value UI par render ho kar mily gi.
// For example: Use it for showing and hide of button, we can also use the hook to show and hide ERROR messages.


// Key Differences:
// useState() causes the component to re-render every time the state changes. This is useful when you need to reflect
//  the updated value in the UI.
// useRef() does not cause a re-render when the value changes. This is useful when you want to persist a value without
// triggering unnecessary re-renders.


// -------------------- TOPIC # 02-B (LEARNING USE REF HOOK) HANDELING MULTIPLES INPUT FIELDS WITH A SINGLE USEREF() HOOK ---------------------

function LearninguseRefHookInDetail() {
const refForHandlingMultiplesInputFields = useRef({})

const onsubmitFormDataHandler = () =>{
    const name = refForHandlingMultiplesInputFields.current["name"].value
    const email = refForHandlingMultiplesInputFields.current["email"].value
    const age = refForHandlingMultiplesInputFields.current["age"].value
    const range = refForHandlingMultiplesInputFields.current["range"].value


    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
    console.log("Range:", range);
    

}
console.log(refForHandlingMultiplesInputFields)  
console.log("Rerender !")
return(
<>
<label htmlFor="name">USER NAME</label>
<div>
<input type="text" ref={(element) => {
    refForHandlingMultiplesInputFields.current["name"] = element
    console.log(element)
    }}/>
</div>

<label htmlFor="email">EMAIL</label>
<div>
<input type="text" ref={(element)=> {
    // Yah ham email ky element ko target kar rahy han or element my save 
    refForHandlingMultiplesInputFields.current["email"] = element
    console.log(element)
    }} />
</div>

<label htmlFor="age">AGE</label>
<div>
<input type="number" ref={(element)=> {
    refForHandlingMultiplesInputFields.current["age"] = element
    console.log(element)
}}/>
</div>


<label htmlFor="range">Range</label>
<div>
<input type="range" ref={(element)=>refForHandlingMultiplesInputFields.current["range"] = element } />
</div>

<button onClick={onsubmitFormDataHandler}>Submit Data</button>
</>
)
}

export default LearninguseRefHookInDetail

// WORKING DYNAMICS 
// Detailed Breakdown of refForHandlingMultiplesInputFields.current["age"] = element

// 1) ref Prop:
// ref ek special prop hai jo React mein kisi DOM element ko directly access karne ke liye use hota hai.
// Jab aap ref mein ek function pass karte hain, to React har render pe is function ko call karta hai.

// 2) element Parameter:
// element wo actual DOM element hai jo React ny render kiya hai. Yani jab input render hota hai, element us input ka
// reference hai.

// 3) Storing the Reference:
// inputRefs.current["name"] = element ka mtlb hai ke aap el (input element) ko inputRefs.current object ke name key mein store kar rahe hain.
// Example: Agar inputRefs.current initially ek khaali object hai {}, to jab yeh line execute hoti hai, to yeh ban jayega:


// Why Use This Approach?
// Yeh dynamic function approach aapko ek hi object inputRefs ke andar multiple inputs ko manage karne ki flexibility deta hai.
// Aap alag-alag inputs ko unki keys se access kar sakte hain (e.g., "name", "email", "age"), jisse code organized aur scalable ban jata hai, 
// especially jab inputs ki quantity zyada ho.
// In short, yeh approach aapko ek single ref object mein multiple DOM elements ko manage karne ki permission deta hai, jo dynamically keys ke
// zariye access kiye ja sakte hain.

// ____________________________________________________________________________________________________________________________________________
// Acha maan lo ab mujhy tamam inputs ki values ko CHILD COMPONENT sy PARENT COMPONENT my pass karna hy to my kia karo ga?
// Check the mentioned folder (CHECK FOLDER PASSING REF DATA FROM CHILD TO PARENT COMPONENT)
// Aisy scenerio my sab sy best case yah hoga ky my apna ref PARENT COMONENT my rakho or usy pass kar dn child component ko as a props taaky 
// jo bhe input fields ka data ho woh mujhy PARENT COMPONENT my mil gy.
// const refForHandlingMultiplesInputFields = useRef({}) yah ref initilly {empty object} hoga jis my sary multiples input fields ki 
// values tab ayen gi jab user form submit kar dy ga. Lekin phr FOWARD REF() kis liye use karen gy ?

// Foward Ref isi liye banaye gya tha taaky ref() ko pass karny ky liye PARENT TO CHILD my props ky baajaye forwardRef ka use kiya gy. To jo
// code ref pass karny ka (PASSING REF DATA FROM CHILD TO PARENT COMPONENT) ky folder my kiya
// gya hy  =====> (passing ref through PROPS POOR APPROACH). Iss sy ache approach 
// (LEARNING FOWARD REF CONCEPT IN DETAIL) kiu ky iss folder my ref ko ====> (FOWARD REF) ky through pass kiya gya hy=====> (GOOD APPROACH))


// ____________________________________________________________________________________________________________________________________________

 