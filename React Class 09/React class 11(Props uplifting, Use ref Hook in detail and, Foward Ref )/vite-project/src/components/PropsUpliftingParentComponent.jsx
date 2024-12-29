{/*--------------- {Topic # 01 ======> PROPS UPLIFTING (Passing data from CHILD to PARENT component)} ---------------*/}
import React, { useState } from 'react'
import PropsUpliftingChildComponent from './PropsUpliftingChildComponent'

function PropsUpliftingParentComponent() {
// Jo child component sy mujhy input field ka data mil raha hy my usy UI par show karwany ky liye useState bana raha hon
const [showChildDataOnUi, setShowChildDataOnUi] = useState(null)

const receivedData = (data) =>{
  setShowChildDataOnUi(data)
  // console.log(data,showChildDataOnUi)
}
console.log("Parent component Rendering")
  return (
    <>
    <div style={{border: "2px solid black"}}>
    <h2>Parent component</h2>
    <h3>Data Received from Child component and showing it on UI</h3>
    <h4>Name: {showChildDataOnUi?.name}</h4>
    <h4>Email: {showChildDataOnUi?.email}</h4>
    <h4>Age: {showChildDataOnUi?.age}</h4>
    </div>

    <PropsUpliftingChildComponent receivingDataFromChildComponent={receivedData} />
    </>
  )
}


export default PropsUpliftingParentComponent
