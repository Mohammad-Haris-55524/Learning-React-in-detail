// *************************************** TOPIC # 06 (PART C) IN APP.JSX **********************************************

// ---------------------------------- SELF LEARNING CLASS COMPONENT PART 1-B ---------------------------------------------
// Here in this component i am receiving state value COUNT and functions counterIncreaseHandler() counterDecreaseHandler() 
// as a props that has been created in the parent component and changing state value (COUNT) of parent component from
// a nested child component using class component.
import { Component } from "react";
export class Counter extends Component{

    render(){
// -------------------------------------------------------------------------------------------------------------------
    // We are thrwoing an custom ERROR by ourself to LEARN ERROR BOUNDARY ! 
    if(this.props.count > 1){
        throw new Error ("Error aagya !")}
// -------------------------------------------------------------------------------------------------------------------
    return <div  style={{border: "2px solid red"}}>
    <h2>Count {this.props.count}</h2>
    {/* Multiples way to use a function inside an event */}
    {/* Way # 01 (BEST APPROACH) */}
    <button onClick={()=> this.props.counterIncreaseHandler()}>+</button>
    <button onClick={()=> this.props.counterDecreaseHandler()}>-</button>
    {/* Way # 02 */}
    {/* <button onClick={this.props.counterIncreaseHandler}>+</button>
    <button onClick={this.props.counterDecreaseHandler}>-</button> */}
    </div>
    }
}