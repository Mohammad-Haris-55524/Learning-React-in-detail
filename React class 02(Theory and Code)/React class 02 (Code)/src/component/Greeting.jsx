import React from 'react' // For using <React.fragment>
import { Fragment } from 'react' // For using <fragement>
function Greeting(props){
//Destructuring just TOP level keys (name, age and location)
let {name, age, location} = props
let {city, country, MC} = location || [] // Yahan mery pas location ky andar mazeed keys han to un ko bhe destrcuture 
// karny ky liye my ny location ko bhe desctructure kar diya lekin 1 issue aa raha tha jis sy hamari UI par kuch render 
// nahe ho raha tha woh issue yah tha ky kuch props my location ko ham ny pass nahe kiya or ham yahaan par location ko 
// jab desctructure karwa rahy han to hamry pas undefined aa raha tha to usy handle karny ky liye ham ny nullshing
// coolaching ka concept use kiya hay ky agar value null or undefined aa rahe ho or ham chahty han iss ki wjah sy hamara 
// code break na ho to ham || Symbol ka use kar ky [] (empty array set karwa dein gy agar array ko destructure karwa 
// rhy han to) yah phr {} (empty object set karwa dein gy agar object ko destructure karwa rhy han to) lekin sirf 
// uss surat my yah karein gy ky agar mujhy location ka props bar bari nahe milta to. 

    console.log("PROPS greeting: ",props)
    return(
// -------------------TOPIC # 01-------------- REACT FRAGMENT/FRAGMENT/<> ----------------------------------------------
// YAAD HO GA AP KO KY JAB HAM NY JS PARHI THE USS MY JAB HAM FUNCTION KO USE KARTY THY OR UN MY JAB RETURN STATEMENT KA
// USE KARTY THY TO AIK BAAT HAM NY NOTE KI THE KY AP FUNCTION MY RETURN STATEMENT SY AT A TIME 1 HI STATEMENT KO RETURN
// KARWA SKTY HAN TO YAHAAN REACT MY HAM JSX RETURN KARWA RAHY HAN TO YAAD RAHY KY HAM BHE AT A TIME 1 HI ELEMENT RETURN
// KARWA SKTY HAN. FOR EXAMPLE:  <h4>Assalam o alikum I am {props.name} and my age is {props.age} </h4>   
                // *************************** PROBLEMS WE COULD FACE *************************** 
// Q) LEKIN AGAR HAMEY ZIADA ELEMENTS RETURNS KARWANY PAR JAYEN TO HAM KIA KAREN GY ? FOR EXAMPLE KUCH ISS TRHA TO ERRR
//    AYE GA ISY KESY MANAGE KAREIN GY 
        // <h4>Assalam o alikum I am {props.name} and my age is {props.age} </h4>
        // <P>Hello buddy</P>
        // <p>I am from karachi </p>
         // <h1>OK BYE ...</h1>
//  SOLUTION # 01
//  ANS) LEKIN AGAR HAMEY ZIADA ELEMENTS RETURNS KARWANY PAR JAYEN TO HAM UN TAMAM ELEMENTS KO <DIV> <DIV/> KY 
//  ANDAR WRAP KAR DEIN GY (MAGAR ISS KA AIK UI PAR EFFECT HOGA KY EXTRA NODE CREATE HOGY GI DIV KI WJAH SY TO USY KESY
//  HANDLE KAREN GY (CHECK SOLUTION # 02) 
// --------------------By wrapping inside a <DIV> </DIV>-----------------------------
        // <div>
        // <h4>Assalam o alikum I am {props.name} and my age is {props.age} </h4>
        // <p>Hello buddy</p>
        // <p>I am from karachi </p>
        // <h1>OK BYE ...</h1>
        // </div>
// SOLUTION # 02 (May be due to using DIV this might create extra nodes and takes extra white spaces on the UI. HOW 
// SHOULD I AVOID EXTRA NODES OR WHITE SPACE ON UI ?
// ------------------------By wrapping inside a <> </>--------------------------------
      <>
        <h3><u>My Introduction:</u></h3>
         <h4>Assalam o alikum I am {props.name}. I am {props.age} years old. </h4>

{/* {--------------TOPIC # 02----------------- CONDITIONAL RENDERING-------------------------------------------------- */}
{/* Boolean values ko directly render nahe karwa skty props sy to phr kia karen ? Ham check karwain gy ky agar props sy 
hamey 'isAdult' key my TRUE milta hay to 'ADULT' render karwa do or agar 'FALSE' milta hay to 'CHILD' render karwa do */}
         <h4>And I am {props.isAdult ? "Adult" : "Child"}</h4>
{/* Aik or way sy bhe my Render karwa skta hon ky woh banda ADULT hay yah CHILD by using PROPS.AGE */}
        {/* <h4>And I am {props.age >= "18" ? "ADULT" : "CHILD"}</h4> */}
{/* *******************************************************************************************************************         */}
{/* Ham yahaan kuch iss trha condiotional rendering karwa rahy han ky agar location ka props mojood hay to hi location
dekhao warna kuch mat dekhao yani null or dosri condition my agar location ka props nahe hay to NO KEY FOUND dekhao */}
        {/* {props.location ? <p> I am from {JSON.stringify(props.location)} </p> : null} */}
        {/* {props.location ? <p> I am from {JSON.stringify(props.location)} </p> : <h4>No key found</h4>} */}

{/* TERNARY OPEATORS to at a time 1 condition hi check kar skty han lekin agar multiple conditions ky TRUE hony par 
hi koi kaam karwana ho to ki karen gy ====> USE && operator  CHECK EXAMPLE BELOW*/}
{/* My iss condition my yah chahta hon ky name or age ka props ho to hi location show karwao warna nahe  */}
{/* {props.name && props.age && props.location && <p> I am from {JSON.stringify(props.location)}</p>} */}


{/*METHOD 01: (By using ampersand DOUBLE AND OPERATOR) Ab my yahaan proper 'LI' bana kar location show karwa raha hon 
agar location ka props ho to hi location dekhao warna kuch show nahe karwao */}
       {/* {props.location && 
                <ul> 
                <li> City: {props.location.city}</li>
                <li>Country: {props.location.country}</li>
                <li>MC: {props.location.MC}</li>
                </ul>
        } */}

{/*METHOD 02: (By using ampersand DOUBLE AND OPERATOR) Ab my yahaan proper 'LI' bana kar location show karwa raha hon 
agar location ka props ho to hi location dekhao warna kuch show nahe karwao */}
{/* WITHOUT DESTRUCTURING */}
       {/* {props.location ? 
                <ul> 
                <li> City: {props.location.city}</li>
                <li>Country: {props.location.country}</li>
                <li>MC: {props.location.MC}</li>
                </ul>
                : <h4>No LOCATION key found</h4>
        }
         <h3>OK BYE ...</h3>
         <hr /> */}

{/*This is same as METHOD 02(BAS DESTRUCTURE KIYA HOWA HAY) We also noticed ky hamey bar bar props.location likhna par
 raha hy to kiu na isy desctructure kar liya gy ...  */}
{props.location ? 
                <ul> 
                <li> City: {city}</li>
                <li>Country: {country}</li>
                <li>MC: {MC}</li>
                </ul>
                : <h4>No LOCATION key found</h4>
        }
         <h3>OK BYE ...</h3>
         <hr />
         </>
// ----------TOPIC # 01(CONTINUED)----------- REACT FRAGMENT/FRAGMENT/<> ----------------------------------------------
// SOLUTION # 02 (To use this method always remember to import ==> import React from 'react' )
// -----------------By wrapping inside a <React.Fragment> </React.Fragment>-------------------
/* <React.Fragment>
<h4>Assalam o alikum I am {props.name} and my age is {props.age} </h4>
<p>Hello buddy</p>
<p>I am from karachi </p>
<h1>OK BYE ...</h1>
</React.Fragment> */

// SOLUTION # 03 (To use this method always remember to import ==> import { Fragment } from 'react' )
// -----------------By wrapping inside a <Fragment> </Fragment>-------------------
/* <Fragment>
<h4>Assalam o alikum I am {props.name} and my age is {props.age} </h4>
<p>Hello buddy</p>
<p>I am from karachi </p>
<h1>OK BYE ...</h1>
</Fragment> */

// NOTE: ALWAYS USE (METHOD # 02) <> </> this method. Because it is a short cut method it does not require any import 
// like method 3 ( <React.Fragment></React.FragmentFragment>) and method 4 ( <Fragment></Fragment>). 
)
}
export default Greeting