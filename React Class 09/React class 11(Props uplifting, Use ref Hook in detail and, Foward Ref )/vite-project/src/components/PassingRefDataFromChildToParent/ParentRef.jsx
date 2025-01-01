//-------------------- Learning Topic # 3 ======> How to Passing ref() data from child to parent ----------------------
import React,{useRef} from 'react'
import ChildRef from './ChildRef'

function ParentRef() {
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
console.log("Parent component Rendered")

  return (
    <>
    <ChildRef refForHandlingMultiplesInputFields = {refForHandlingMultiplesInputFields}/>
    <button onClick={onsubmitFormDataHandler}>Submit Data</button>
    </>
  )
}

export default ParentRef

// Benefits:
// Centralized Management: Parent component ke paas inputs ka control rahega, jo flexibility aur reusability badhata hai.
// Easy to Share: inputRefs object ko kisi bhi child component ko pass kar sakte hain, chahe woh kitne bhi nested ho