// *************************************** TOPIC # 05 (PART B) IN APP.JSX **********************************************

// ------------------------------ TESTING AN ERROR BOUDARY WITH A CHILD CLASS COMPONENT --------------------------------
// import { Component } from "react";
// export class CounterForErrorBoundary extends Component{
// constructor(){
//     super()
//     this.state = {count: 0}
// }
// counterHandler() {
// this.setState({
//     count: this.state.count + 1
// })
// }
//     render(){
//     if(this.state.count === 5){
//         throw new Error("Component has crashed ... ")
//     }
//     return <div>
//     <h3>Counter: {this.state.count}</h3>
//     <button onClick={() => this.counterHandler()}>Add</button>
//     </div>
// }
// }

// --------------------------- TESTING AN ERROR BOUDARY WITH A CHILD FUNCTIONAL COMPONENT ------------------------------

import React, { useState } from 'react'

export function CounterForErrorBoundary() {
    const [count, setCount] = useState(0)
    if(count === 5){
        throw new Error("Crashed ...")
    }
    const counterHandler = () =>{
        console.log("Clicked");
        setCount(count + 1)
    }
  return (
    <div>
        <h3>Counter: {count}</h3>
        <button onClick={()=>counterHandler()}>Add</button>
    </div>
  )
}
