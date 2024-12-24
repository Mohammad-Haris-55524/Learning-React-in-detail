// ****************************************** TOPIC # 04 IN APP.JSX ****************************************************

// ----------------------------------- LEARNING WHAT ARE DEFAULTS PROPS ?----------------------------------------------
// DEFAULT PROPS ham as a fallback value ky tor par pass karty han taky agar koi props sy data aa raha ho or ham props
// pass karna hi bhol gy jis ki wjah sy hamaray code my error/issue aa skta hay to aisi situation ko handle karny ky 
// liye ham DEFAULT PROPS ko as a FALLBACK value ky tor par pass karty han.
// ________________________________ DEFAULT PROPS KAB OR KESY WORK KARTY HAN ? _________________________________________
// Agar props pass kiya howa hy ham ny or sath my default PROPS bhe pass kiya howa hy to normal props hi work kary ga 
// means that DEFAULT PROPS work nahe kary ga. DEFAULT PROPS sirf uss condition my work kary ga jab NORMAL PROPS my 
// ham props pass karna bhol jayen to aisi surat my hamara default PROPS work kary ga or hamey code my error/issue any
//  sy hamey protect kary ga 
// ---------------------------------------------------------------------------------------------------------------------
import { Component } from "react";
import PropTypes, { number } from 'prop-types';


export class DefaultPropsInClassComponent extends Component{
    
render(){
    return <div>
{/* ----------------------------------------------------------------------------------------------------------------- */}
{/* This html props is comming from APP.JSX in which we have passed an HTML ELEMNET as a PROPS to know that, HTML 
ELEMENTS can also be passed as props in REACT */}
    {this.props.html} 
{/* ----------------------------------------------------------------------------------------------------------------- */}
    <h2>LEARNING DEFAULT PROPS AND PROPS TYPES IN CLASS COMPONENTS</h2>
    <h3>Username: {this.props.userName}</h3>
    <h3>Age: {this.props.age}</h3>
    <h4>Gender: {this.props.gender} <br />
    (Default Props is working in gender bcz gender value
    is not passed as a props in App.jsx component to child component (DefaultPropsInClassComponent))</h4>
    <h3>Count: {this.props.count}</h3>
    {/* <button onClick={()=>this.setState({count: this.count + 1})}>Counter</button> */}
    <button onClick={()=>this.props.counter()}>Counter</button>
    </div>
}
}
// This is how we pass default props in class based component. Kiu ky class bases components my function ki traha round
// bracket to hote nahe ky jis my ham default paramter ki trha default props pass kar dein to isi liye hamey class 
// components my default props kuch iss trha pass karny party han.
// Yaad rahy default props hamesha usi class component ky andar create karna jiss component my normal props pass kar rahy
// ho. For example: Mera parent component hay App.jsx uss ky andar my ny child component
{/* <DefaultPropsInClassComponent userName = {"Kalo bhai Nashy man !!!"} age = {30} gender = {"Male"}/> */}
// ko pass kar rakha hay or by mistake agar my koi PROPS pass karna bhol jata hon jesy gender ko pass karna bhol gya
// to hamesha yaad rakhna defaultProps bhe my usi component (<DefaultPropsInClassComponent/>) ky andar pass karo ga jis 
// ky andar my ny normal props pass kiye thy. CHECK BELOW EXAMPLE FOR BETTER UNDERSTANDING ....
DefaultPropsInClassComponent.defaultProps={
    userName: "Al basit",
    // age: 25,
    gender: "Female"
}
DefaultPropsInClassComponent.propTypes={
userName: PropTypes.string,
age: PropTypes.number,
gender: PropTypes.string.isRequired,
counter: PropTypes.func.isRequired,
html: PropTypes.element.isRequired
}
// Yaad rahy ham PropTypes use hi isi liye karty han taky ensure kara saken ky hamary pass PROPS ky through jo bhe data
// aye woh hamey sirf usi data type my milay jis my ham mangwana chahen isi liye ham PropTypes define kar dekty han har
// props ki.

// CONCLUSION: 
// 1) My ny props my age ko string my pass kiya hy or propTypes my ny age ki dataType number rakhi hy to ham dekh skty han
// hamey error dekhny ko mily ga sirf console par naaky UI par kiu ky UI STRING wali age ko hi RENDER kara dy gi. 
// ---------------------------------------------------------------------------------------------------------------------
// 2) isRequired sirf tab hi work kary ga jab ham ny PROPS bhe pass na kiye hon or DEFAULT PROPS bhe pass na kiye
// hon aisi condition my isRequired work kary ga.
// PROBLEM WE COULD FACE: 
// Check the App.jsx component wahaan par my ny PROPS my counter={counter} ka function pass howa hay agar my issy remove
// kar dn to hamara counter work nahe kary ga or hamey console par warning dekhny ko mily gi
// (Warning: Failed prop type: The prop `counter` is marked as required in `DefaultPropsInClassComponent`, but its
// value is `undefined`.
// SOLUTION:
// To isy theek karny ky liye my PROPS counter = {counter} ko wapis pass kar dn ga APP.JSX ky andar is sy hamara 
// undefined wala error khatam ho gy ga kiu ky woh value hamey isRequired the 
// ---------------------------------------------------------------------------------------------------------------------
// 3) Props types ko ham default props ky sath bhe use kar skty han my ny isi liye use kar ky phely nahe dekhaya kiu 
// ky my ny ap ko isRequired bhe chla kar dekhana tha to isRequired sirf tab bhe work karta hay jab normal & defaultProps 
// dono pass na hon to isi liye agar defaultProps my isRequired pass karty to already default value pass ki howi hoti ham
// ny to isRequired ki functionality ham use nahe kar paty.


