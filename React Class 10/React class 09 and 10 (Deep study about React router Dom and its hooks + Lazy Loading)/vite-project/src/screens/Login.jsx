// Here we are learning how to conditionally navigate from one route to another. We already used useNavigate Hook in 
// function Component to conditionally navigate, so here we are doing the same thing in class component without using
// HOOK bcz hooks cannot be used in class component, so here for conditionally navigation we will use Navigate.
// Remember: For navigation we could use Link and Navlink in class components too but only change is that when we need to 
// conditonally navigation we will use Navigate
// ------------------------------------- Why does conditionally navigate mean ? ---------------------------------------
// Maan lo mery pas login page hay my chahta hon user sirf tab hi dosry page par user redirect ho jab authentication
// sucessfull hogy to aisy scenerios my ham NAVIGATE ka use karty han class component ky andar, and useNavigate (Hook) ka 
// use karty han FUNCTION COMONENT ky andar. (Never use NAVLINK AND LINK IN SUCH SCNERIOS)

import { Component } from "react";
import { Link, Navigate, NavLink} from "react-router-dom";

export class Login extends Component{
// Method # 01 (By creating 2 different objects of username and password ==========> LONG METHOD && NOOB METHOD --------)
// state = {userName: null, password: null, error: null}
// onSubmitHandler(event){
// event.preventDefault();
// console.log("Hello")
// console.log(event.target[0].value, event.target[1].value)
// this.setState({userName: event.target[0].value, password: event.target[1].value})
// }

// Method # 02 (By converting 2 different objects of username and password into 1 objects into (USER). This is the GOOD
// METHOD to get data of multiple input fields and then set it into  1 object (user)
state = {userName: null, password: null, error: false, visible: true}

onSubmitHandler(event){
event.preventDefault();
const user = {
    userName: event.target[0].value,
    password : event.target[1].value
}
//Checking if username and password any one of the values is (null undefined or empty) means that it will be false so it
// should not be kept empty that is why we have used  (!user.userName) ===> !false means true and so that it will go 
// inside if block and tell the user that inputs fields cannot be left empty.
if (!user.userName || !user.password) {
    console.log("false")
    this.setState({error: "Inputs fields cannot be left empty"})
}
else{
    console.log("true")
    this.setState({user, error: ""})
}}

// Method # 03 (By converting 2 different objects of username and password into 1 objects into (USER). This is the best 
// method to set data of multiple input field into 1 object (user) ====> SHORT METHOD (BY OBJECT DESTRUCTURING---------------------
// state={user: null, error: null, visible: true }
// onSubmitHandler(event){
// event.preventDefault();
// console.log(event.target[0].value, event.target[1].value)
// this.setState({user:{userName:event.target[0].value, password: event.target[1].value}})
// }

render(){
// ------------------------------------JSX CODE FOR METHOD # 01 && METHOD # 02 -----------------------------------------
console.log(this.state)
let {user, error} = this.state
console.log(user, error)
return <div>
<h1>Login screen</h1>
{error && <p style={{color: "red"}}>{error}</p>}
{/******************************* USE CASE OF USING (STATE) OF REACT ROUTER DOM ****************************************/}
{/* Form Submissions: After a form submission, instead of passing form data through query params, you can use STATE to
carry the form results to the next route. 
Login Success: After login, pass user information or tokens securely through state to the protected route.*/}
{/* How to get data of state when it passed to a route ===> By using useLocation Hook we can accessed data of STATE in 
that route where it has been passed here we are passing user data in state to HOME SCREEN on / route go check console */}
{user && <Navigate to={'/'} replace={true} state={{user: user}}/>}
{/* replace = {true} means ab jis screen par redirect howa hay wahaan sy ham backwards dobara iss screen par nahe aa skty
jesy agar user login kar ky Homepage par aagy or phr backward par click karny sy wapis login page par nahe jana chaihyee
kiu ky ab user logged in ho chuka hy issi ka vise versa replace = {false} hy */}




{/* // ---------------------------------------- JSX CODE FOR METHOD # 03 --------------------------------------------- */}
{/* // console.log(this.state)
// const {user} = this.state
// console.log({user})
// return <div>
// <h1>Login screen</h1>
// {user && (<Navigate to={'/'} replace={true}/>)}  */}

{/* These both Link and navlink will not work bcz they cannot condionally redirect from one page to another */}
{/* {user && <div><Link to={'/'}>Homepage</Link></div>} */}
{/* {user && <div><NavLink to={'/'}>Homepage</NavLink></div>} */}

<form onSubmit={(event) => this.onSubmitHandler(event)}
 style={{border: "2px solid black", width: "35%", height:"20vh"}}>
    <div>
    <label htmlFor="username">Username</label>
    <input type="text" name="username"/>
    </div>
    <div>
    <label htmlFor="password">Password</label>
    <input type="text" name="password"/>
    </div>
    <button>Login</button>
</form>
</div>  
}   
}