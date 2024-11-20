import Greeting from "./component/Greeting"
import Header from "./component/Header"
import Footer from "./component/Footer"
import { Counter } from "./component/Counter"
import Form from "./component/Form"
import FormByAnotherMethod from "./component/FormByAnotherMethod"
// ---------------------------------------- Topics we will convered in this lecture ------------------------------------
// (Components, Props, JSX, fragment, inline styling, conditional styling, modules, dumb components, How React works or
// working mechanism of react Dif bw a function and a react component)
// ---------------------------------------------------------------------------------------------------------------------

// ________________________________________________ REMEMBER TO REVISE _________________________________________________
// Always remember must check the notes made on NOTEPAD file that covers a detail information about what we learned in
//  this react class 02

// This lecture is related to React Class # 02 (For theoritical lecture check notepad file)
// It includes (What are Components, how to pass and receive Props, what is JSX, What is React.Fragment, fragment or <>,
// What is inline styling, How to do condional styling in react, What are Modules and why we use it ? What are dumb 
// components?, How React works (working mechanism of react)? Difference b/w a function and a REACT COMPONENT.
// ____________________________________________________________________________________________________________________


//--------------------------------- Here, i am using naming export pattern---------------------------------------
//RULE: It is mandatory while exporting the component to other file that the component name should remain same + path name
// should be written correctly from where we are exporting the component. And the place where they are exported they
// should be wrapeed inside a curly bracket.
// export function Haris() {
//   return (
//   <div>My 1st component craeted by react + vite</div>
//   )
// }

//----------------------------------- Here, i am using DEFAULT export pattern----------------------------------------
// function Haris() {
//   return (
//   <div>
//     <Greeting/>
//     My 1st component craeted by react + vite ...</div>
//   )
// }
// export default Haris
// -------------------------------------------------------------------------------------------------------------------
function App() {
  return (
  <div>
    {/* Topic # 01 (How to create a component) */}
    <Header/>

  {/* Topic # 02: How to update values in react? And how the passing of function to event listners in REACT is different
  //  form JS */}
    {/* <Counter ableOrDisableBtn/> */}

    {/*Topic # 03:  Introduction to form */}
   <Form/>
   {/* <FormByAnotherMethod/> */}

  {/*Topic # 04:  How to pass Props from parent(App.jsx to child (Greeting.jsx) and how to receive props what if nested
  props keys are empty jesy nichey dekhao agar kabhe location ky props ko ham ny destruture kar rakha ho taky bar bar 
  location.city kar ky access na karna pary lekin agar user loction hi pass nahe karta to code ko break hony sy kesy 
  bachain gy check greeting component Hint use ||),
    What is JSX ?,
    What is React.fragment or fragment or <>,
    And how to do conditonal styling ? */}
    {/* <Greeting name="Adil Nadeem" age = {14} location = {{city: "Karachi", country: "Pakistan", MC: 213}} isAdult = {true}/>
    <Greeting name= "Mohammad Haris" age = {25} location = {{city: "Larkana", country: "Pakistan", MC: 123}} isAdult/>
    <Greeting name="Ali haider" age = {24}  isAdult = {false}/>
    <Greeting name="Zain Ahmed Khan" age = {17} location = {{city: "Lahore", country: "Pakistan", MC: 133}} isAdult={false}/>
    <Greeting name="Hassan Noor" age = {21} isAdult/>
    <Greeting name="Ali Noor" isAdult/>
    My 1st component craeted by react + vite ... */}

    {/* Topic # 01 (How to create a component) */}
    <Footer/>
    </div>
  )
}
export default App
