// *************************************** TOPIC # 06 (PART A) IN APP.JSX **********************************************

// ---------------------------------- SELF LEARNING CLASS COMPONENT PART 1 ----------------------------------------------
// ------------ SELF LEARNING NOT RELATED TO ALI'S LECTURE (HOW TO CREATE AND USE CLASS COMPONENT) ----------------------
// --------------------- Learning how to USE STATES and PASS PROPS in CLASS BASED COMPONENTS ----------------------------
// 1) CLASS COMPONENT my props normal way sy hi pass karty han jesy FUNCTIONAL COMPONENT my karty thy. Han magar props
// recieve karny ka tarika different hota hay Functional component sy. Class component my ham kuch iss trha props receive
// karty han child Component ky andar ===> this.props.props_ka_name_ata_hy. [For example: this.props.name]

import { Component} from "react";
import { GreetingMessage } from "./GreetingMessage";
import { Counter } from "./Counter";

export class Greeting extends Component{
constructor(props){
    super(props)
    console.log(props);
    this.state={
        name: "Zain Ahmed Khan",
        count : 0
    }
}
message=()=>{
    console.log("Hello");
    this.setState({name: "Mohammad Haris"})
}
counterIncreaseHandler = () =>{
this.setState({count: this.state.count + 1})
}
counterDecreaseHandler = ()=>{
this.state.count >= 1 && this.setState({count: this.state.count - 1});

}
    render(){
    return <div>
{/*--------- Just simply Passing props from parent component (Greeting) to child Component (GreetingMessage) ----------*/}
    <div style={{border: "5px solid black"}}>
    <h3>Parent (Class component) Assalam o alikum Hey! "Haabibi come to dubai"</h3>
    </div>
    <GreetingMessage myName = {"Adil Nadeem"} name={this.state.name} message={this.message}/>

{/*------------ Changing name and Counter values by clicking button created in PARENT COMPONENT (GREETING) ----------- */}
    <div style={{border: "2px solid blue"}}>
    <h3>{this.state.name}</h3>
    <button onClick={() => this.message()}>Change Name</button>
    <h3>Counter: {this.state.count}</h3>
    <button onClick={()=> this.counterIncreaseHandler()}>Add (+)</button>
    <button onClick={()=> this.counterDecreaseHandler()}>Sub (-)</button>
    </div>

{/* --------- LERANING HOW TO CHANGE VALUE OF A NESTED CHILD COMPONENT BY PASSING PROPS AND HANDELING STATES -------- */}
    {/* Here I am passing state values as a props to a nested child component (Counter) */}
    <Counter count = {this.state.count } counterIncreaseHandler = {this.counterIncreaseHandler} 
    counterDecreaseHandler = {this.counterDecreaseHandler}/>
    </div>
    }
}