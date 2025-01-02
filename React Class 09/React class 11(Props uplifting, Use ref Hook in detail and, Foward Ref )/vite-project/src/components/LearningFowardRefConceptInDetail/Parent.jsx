/*--------------------- {Topic # 04 ======> Learning Foward Ref (higher-order component (HOC) )} ----------------------*/
import React, { useRef } from 'react'
import InputChild from './InputChild'

function Parent() {
const handlingMultiplesInputFieldsBySingleRefObject = useRef({});

const onsubmitHandler = () =>{

const firstName = handlingMultiplesInputFieldsBySingleRefObject.current["firstName"]?.value
const lastName = handlingMultiplesInputFieldsBySingleRefObject.current["lastName"]?.value
const email = handlingMultiplesInputFieldsBySingleRefObject.current["email"]?.value
const age = handlingMultiplesInputFieldsBySingleRefObject.current["age"]?.value
const gender = handlingMultiplesInputFieldsBySingleRefObject.current["gender"]?.value
const password = handlingMultiplesInputFieldsBySingleRefObject.current["password"]?.value

handlingMultiplesInputFieldsBySingleRefObject.current["gender"].style.backgroundColor = "green";
handlingMultiplesInputFieldsBySingleRefObject.current["password"].style.backgroundColor = "yellow"

    console.log("First Name: ",firstName)
    console.log("Last Name: ",lastName)
    console.log("Email: ",email)
    console.log("Age: ",age)
    console.log("Gender: ",gender)
    console.log("Password: ",password)

}

  return (
    <>
    <div>FOWARD REF IN REACT A HIGHER ORDER COMPONENT</div>
    <div>
    <InputChild label="First Name" type="text" 
    ref={(element)=>handlingMultiplesInputFieldsBySingleRefObject.current["firstName"] = element}
    placeholder='Enter your first name'/>

    <InputChild label="Last Name" type="text" 
    ref={(element)=>handlingMultiplesInputFieldsBySingleRefObject.current["lastName"]= element} 
    placeholder='Enter your last name' />

    <InputChild label="Email" type="email"
    ref={(element)=>handlingMultiplesInputFieldsBySingleRefObject.current["email"] = element}
    placeholder='Enter your email'/>

    <InputChild label="Age" type="number"
    ref={(element)=>handlingMultiplesInputFieldsBySingleRefObject.current["age"] = element}
    placeholder='Enter your age'  />

    <InputChild label="Gender" type="text" 
    ref={(element)=>handlingMultiplesInputFieldsBySingleRefObject.current["gender"] = element}
    placeholder='Enter your gender'  />

    <InputChild label="Set Password" type="password" 
    ref={(element)=>handlingMultiplesInputFieldsBySingleRefObject.current["password"] = element}
    placeholder='Enter your password'  />
    </div>
    <button onClick={onsubmitHandler}>Submit</button>
    
    </>
  )
}

export default Parent
