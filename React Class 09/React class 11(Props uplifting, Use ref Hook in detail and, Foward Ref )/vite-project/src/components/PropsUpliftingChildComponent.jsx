{/*--------------- {Topic # 01 ======> PROPS UPLIFTING (Passing data from CHILD to PARENT component)} ---------------*/}

import React, { memo,useEffect,useState } from 'react'
// --------------------------------------- PROPS UPLIFTING FOR A SINGLE INPUT FIELD -------------------------------------
// function PropsUpliftingChildComponent({receivedData}) {
// const [email, setEmail] = useState('')
 
// const onsubmitHandler = () =>{
//     receivedData(email)
// }

// console.log("Child component Rendering")
// return (
//     <>
//     <h3>CHILD COMPONENT ...</h3>
//     <div>
//         <label htmlFor="email">Email</label>
//         <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)} />
//     </div>
//     <button onClick={onsubmitHandler}>Submit</button>
//     </>
//   )}
// export default (PropsUpliftingChildComponent)

// ------------------------------------ PROPS UPLIFTING FOR A MULTIPLE INPUT FIELD -------------------------------------

function PropsUpliftingChildComponent({receivingDataFromChildComponent}) {
console.log(receivingDataFromChildComponent)
const [isVisible, setIsVisible] = useState(false)
const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
})
 
console.log({isVisible});
useEffect(()=>{
    let isFormFilled = Object.values(formData).every((value) => value !== '')
    console.log({isFormFilled})
    setIsVisible(isFormFilled)
},[formData])


const onsubmitHandler = (e) =>{
    e.preventDefault()
    // console.log(formData)
    // -----------------------------------------
    receivingDataFromChildComponent(formData)
    // receivedData(formData)
    // -----------------------------------------

}   

const onInputChangeHandler = (e) =>{
// console.log(e.target.value)
const {value, name} = e.target
console.log(value, name)
setFormData({...formData, [name]: value})

}
console.log("Child component Rendering")

return (
    <>
    <h3>CHILD COMPONENT ...</h3>
    <div>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' value={formData?.name} onChange={onInputChangeHandler} />
    </div>
    <div>
        <label htmlFor="email">Email</label>
        <input type="text" name='email' value={formData?.email} onChange={onInputChangeHandler} />
    </div>
    <div>
        <label htmlFor="age">Age</label>
        <input type="number" name='age' value={formData?.age} onChange={onInputChangeHandler} />
    </div>
    <button disabled={!isVisible} onClick={onsubmitHandler}>Submit</button>
    </>
  )
}

export default (PropsUpliftingChildComponent)

// CONCLUION FOR PROPS UPLIFTING

// Props Uplifting: Jab child component data ko parent tak bhejta hai, to hum props uplifting kar rahe hote hain. Yeh ek
// bottom-up approach hai, jismein child se parent ko data pass hota hai (e.g., form inputs child me hain, aur data 
// parent me bhejna hai).

// State Lifting: Child component apni state ko parent component ko callback function ke through pass karta hai.
// Parent component state ko manage karta hai.

// State Uplifting: Data flow from child to parent via callback functions.