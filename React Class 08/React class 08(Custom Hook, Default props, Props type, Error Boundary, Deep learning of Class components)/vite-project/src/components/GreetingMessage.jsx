// *************************************** TOPIC # 06 (PART B) IN APP.JSX **********************************************

// ---------------------------------- SELF LEARNING CLASS COMPONENT PART 1-A ----------------------------------------------

// Just showing an updated name whenever user click on CHANGE NAME button. Remember that only state value (name) is passed
// from a parent Component to child Component. The function that is changing name is not passed as a props it is working 
// only in PARENT Component.
import { Component } from "react";
export class GreetingMessage extends Component{

    render(){
        return <div style={{border: "2px solid green"}}>
        <h4>UserName coming as a Props from DefaultPropsInClassComponent {this.props.myName}</h4>
        <button onClick={()=>this.props.message()}>Change Name from Greeting Message</button>
        <h3> Child (Class component) Name coming as a Props from Greeting (Parent) component {this.props.name}</h3> 
        </div>
    }
}