//-------------- THIS IS A  PARENT COMPONENT (GlobalStateManagnmentUsingUseContextHookParentComponent_A) -----------------
// -------------------------------------- (Q1) Ham karany kia jaa rahy han ? -------------------------------------------
// Ham iss PARENT COMPONENT SY name ko as a props send karna chahty han to the nested childs Components (Child Component E)
// (Child Component E) and (Child Component I)
// ------------- (Q2) What issue we will face while passing data to nested childs from parent component ? ---------------
// Dekhao bhai jab mujhy {name} ko as a props pass karna hay to the (Child Component E) and (Child Component I) to issue
// yah aye ga ky my direct name ko as a PROPS pass nahe kar skta to the nested child Components from the MAIN PARENT
// COMPONET (GlobalStateManagnmentUsingUseContextHookParentComponent_A). To mujhy agar NAME ko as PROPS pass karna hy 
// to mujhy PROPS DRILLING KARNI PARY GI.
// ------------------------------------------- (Q3) WHAT IS PROPS DRILLING ? ------------------------------------------
// Jo bhe STATES ham apnay components my banaty han woh basically LOCAL STATES kehlati han.  LOCAL STATES ka mltb yah
// hota hay ky un states  ka scope / access with in the Component hota hay jiss my usy create kiya jata hay. Lekin agar
// hamey un LOCAL STATES ki values ko kisi or Component my use karna hoto ham PROPS ky through usy dosry Components my
// pass karein gy jisy ham PROPS DRILLING bhe bolty han.
// PROPS DRILLING BASICALLY 1 AISA PROCESS HAY JISS MY HAM apni LOCAL STATES ko as a PROPS PASS KARTY HAN APNAY
// CHILD COMPONENTS KO FROM TOP TO BOTTOM.
//  FOR EXAMPLE CHECK EXAMPLE AND SAMPLE IMAGE ON THE UI.
// --------------------------------------------------------------------------------------------------------------------
// Dekho bhai (Child Component E) and (Child Component I) ko agar "NAME" as a PROPS pass karna hy to mujhy phely NAME ko
// as a PROPS (Child Component B) & (child Component C) ko pass karna hoga kiu ky NAME ki STATE PARENT COMPONENT A my
// create howi the or LOCAL STATE ka scope within the component hota hay or ham directly to agar ham LOCAL STATE "NAME"
// ko Component ky bahar use karna chahty han to hamey PROPS DRILLING ka use karna pary ga.
// Jab my (Child Component B) ko "NAME" ko as a PROPS pass karo ga to yah agay apnay child Components NAME ka PROPS pass
// kar dy ga yani ky agar (Child Component B) ko "name" as a PROPS milgya to woh apnay child Components (Child Component D)
// (Child Component E) ko NAME as a PROPS SHARE KAR DY GA.
// Isi trha mera main target hay (CHILD COMPONENT I) ko "NAME" as a PROPS pass karna hay. To my phely PARENT COMPONENT 
// (GlobalStateManagnmentUsingUseContextHookParentComponent_A) sy (CHILD COMPONENT C) ko
// NAME ka PROPS pass karo ga phr (CHILD COMPONENT C) apnay nested child (CHILD COMPONENT G) ko NAME ka PROPS pass kary ga 
// phr (CHILD COMPONENT G) NAME ka props pass kary ga apnay further child (CHILD COMPONENT I) ko. THIS WHOLE PROCESS IS 
// KNOWN AS PROPS DRILLING. 
// --------------------------------------------------------------------------------------------------------------------
// ------------------------------------------- WHEN TO AVOID PROPS DRILLING --------------------------------------------
// AND HOW CAN WE AVOID PROPS DRILLING ? 
// BY USING USE CONTEXT HOOK WE CAN AVOID PROPS DRILLING. USE CONTEXT HOOK 1 GLOBAL STATE create kar dy ga uss sy faida
// yah hoga ky hamey jab bhe kisi STATE ko multiples component my access karna hoga to ham usy LOCAL STATE my create nahe 
// karein gy balkay ham usy USE CONTEXT hook ka use uss STATE ko GLOABL STATE ky andar rakh dein gy kar ky un tamam components ko USE CONTEXT HOOK ky andar wrap kar dein
// gy jiss my hamey STATE ki value ka access karna karna hoga 
// --------------------------------------------------------------------------------------------------------------------
// Koi aisi STATE jis ka mujhy lag raha hy ky iss ko mujhy bhot sy Components my use karna par gy ga or mujhy nahe pta 
// ky woh Components kitnay level deep ho (PROPS DRILLING TOP TO BOTTOM) yah kitnay level up ho skty han (PROPS UPLIFTING)
// to bajaye iss ky my uss STATE ko LOCAL rakho my uss STATE ko GLOABL STATE bana dn ga by using USE CONTEXT HOOK. Iss
// sy meri STATE ka scope global hogy ga yani ab mujhy PROPS DRILLING nahe karni pary gi kiu ky ab STATE LOCALLLY nahe
// balky GLOBALLY create howi hogi by using USE CONTEXT HOOK. 
// Iss sy faida yah hoga ky mery kisi bhe Component ko jab  bhe STATE ka access chaihyee hoga woh directly GLOBAL STATE
// sy uss ka access kar ly ga. 
// --------------------------------------------------------------------------------------------------------------------
// --------------------------- TESTING MYSELF BY PASSING DATA THROUGH PROPS DRILLING -----------------------------------
// -----------PASSING USERNAME(LOCAL STATE) FROM (PARENT COMPONENT A) TO (CHILD COMPONENT I) BY PROPS DRILLING ---------- 
// Phely my PROPS DRILLING ky thorugh userName pass kar ky dekhao ga CHILD Component I ko. Iss process my phely mujhy
// userName ko child Component C ko pass karna pary ga then child Component C sy child component G ko USERNAME pass 
// karna pary ga phr child Component G sy child Component I ko userName pass karo ga this long process is known as PROPS
// DRILLING.
import React, {Component, createContext, useState} from 'react'
import myImage from '../assets/props drilling image.png';
import UseContextHookChild_B from './UseContextHookChild_B'
import UseContextHookChild_C from './UseContextHookChild_C'
import UseContextHookChild_I from './UseContextHookChild_I';

// function GlobalStateManagnmentUsingUseContextHookParentComponent_A() {
// // A LOCAL STATE 
//   const [userName, setUserName] = useState("Mohammad Haris");
  
//   const divStyle = {
//     backgroundImage: `url(${myImage})`,
//     maxWidth: '100%',
//     height: '70%',
//     border: "2px solid red",
//     backgroundSize: 'contain',
//     backgroundPosition: 'center'
//   };
//   return (
//     <>
//     <a href="https://mohiuddinmazumder94.medium.com/what-are-props-drilling-in-react-e97e17093326">
//     Click for more details</a>
//     <div>
//     <img style={divStyle} src={myImage} alt="props-drilling-image" />  
//     </div> 
//     <div> 
//     <h3>I am a "PARENT COMPONENT A" {userName}</h3>
//     <UseContextHookChild_B/>
//     {/* Passing userName and setUserName as a props using props drilling to child component C beacuse our main target 
//     is to pass props to child component I so child compnennt C is a parent component to G and child component G is
//     a parent component to child component I by this way we will pass data  to deep nested level childs components*/}  
//     <UseContextHookChild_C userName={userName} setUserName = {setUserName}/>
//     </div>
//     </>
//   )
// }
// export default GlobalStateManagnmentUsingUseContextHookParentComponent_A
// ---------------------------------------------------------------------------------------------------------------------

// ----------------------------- LEARNING TO PASSING DATA THROUGH USE CONTEXT ------------------------------------------
// Step # 01
//Here i am initalizing a CONTEXT. Whenever we initialize a context we need to create context first. Jis varibale my 
// createContext ko save karwayen gy usi ky andar child Components ko wrap bhe karein gy with .Provider and value.
export const userContext = createContext();

function GlobalStateManagnmentUsingUseContextHookParentComponent_A() {
    const [userName, setUserName] = useState("Mohammad Haris");
    const divStyle = {
      backgroundImage: `url(${myImage})`,
      maxWidth: '100%',
      height: '70%',
      border: "2px solid red",
      backgroundSize: 'contain',
      backgroundPosition: 'center'
    };
    console.log("Parent rendered")
    return (
      <>
      <a href="https://mohiuddinmazumder94.medium.com/what-are-props-drilling-in-react-e97e17093326">
      Click for more details</a>
      <div>
      <img style={divStyle} src={myImage} alt="props-drilling-image" />  
      </div> 
      <div> 
      <h3>I am a "PARENT COMPONENT A" {userName}</h3>
      <UseContextHookChild_B/> 

{/* STEP # 02  */}
{/* CREATING A GLOBAL CONTEXT OF USERNAME, AND SETUSERNAME STATE by wrapping (CHILD COMPONENT I) in it beacause i want to
pass STATE VALES to (CHILD COMPONENT I).
USERCONTEXT uss varibale ka name hay jiss my ham ny CREATE CONTEXT ko save karwaya(Check step #01). UserContext.provider
ki value ky andar ham woh chezain pass karty han jisy ham GLOABL STATE banana chahty han taky jis kisi COMPONENT my mujhy
need pary my GLOABL STATE ki values ko access kar sako. provider means ky ham value ko provide karna chahty han yani 
pass karna chahty han. Isi liye ham un components ko WRAP kar dety hn userContext.provider ky andar jinhay ham directly
value pass karna chahty han*/}
      {/* <userContext.Provider value={{userName: userName,setUserName: setUserName}}> */}
      <userContext.Provider value={{userName,setUserName}}>
      {/* <UseContextHookChild_I/>  */}
      <UseContextHookChild_C/> 
      </userContext.Provider>
      </div>
      </>
    )
  }
  export default GlobalStateManagnmentUsingUseContextHookParentComponent_A

// ------------------------------- MOSTLY ASKED QUESTION ABOUT USE CONTEXT HOOK ---------------------------------------
// Q1) How can avoid PROPS DRILLING ? 
// ANS) By using USE CONTEXT HOOK we can avoid PROPS DRILLING
// ----------------------------------------------------------------------------------------------------------------------
// Q2) Kia aik sy ziada context ho skty han ?
// ANS) Jee han aik sy zaida bhe context ho skty han. For example my TODOS ka alag context bana dn Username ka alag context
// bana dn to aisa possible hay
// ----------------------------------------------------------------------------------------------------------------------
// Q3) Agar ham apna pora MAIN COMPONENT hi wrap kar dein userContext ky andar phr jidhar marzi hamey STATE ki values
// ki need pary gi ham unhay CHILD COMPONENTs my access kar lein gy kiu ky userContext.Provider ky value ky andar jo 
// STATE ki values ko ham ny pass kiya hoga woh ab LOCAL nahe balky GLOBAL ban gaye hongi to ab un values ko kisi bhe 
// child COMPONENTS ky andar use kiya jaa skty hay ? 
// ANS) Aisa bhe karna ghalat nahe hay lekin good practise my yah nahe aye ga. Good practise my yah aye ga ky sirf unhi
// Components ko hi userContext.Provider ky andar wrap kiya gy jis ky andar sirf value ko pass karna ho naky pora MAIN
// COMPONENT ko
// For example: Mery pas 5 Components han or 1 parent Component han or mujhy state ki value sirf child Component 3 ko 
// pass karni hay to my sirf userContext.Provider ky andar sirf child Component 3 ko hi wrap karo ga this is called 
// good practise
{/* <userContext.Provider value={Iss my STATE ki jo value pass karein gy woh GLOBALAAY ACCESS ho jayen gi}>
<Child component 3/>
<userContext.Provider/> */}
// ----------------------------------------------------------------------------------------------------------------------



