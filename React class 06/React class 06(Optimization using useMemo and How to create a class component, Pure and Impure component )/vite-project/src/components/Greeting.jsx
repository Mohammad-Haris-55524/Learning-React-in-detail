// *************************************************CHAPTER # 02(B)******************************************************
// --------------------------------------WHAT WE ARE LEARNING IN THIS COMPONENT ? --------------------------------------
// 1) We are learning how to create a class componenet in REACT.
// 2) Kesy CLASS COMPONENTs my STATE/PROPS ki value get karty han or kesy PROPS/STATE ki value ko use karty han.
// 3) The most important things jo ham smjhnay jaa rahy han iss class componenet my ky kesy ham regular class component/
// impure component ko kesy PURE Component my convert karty han (CHECK IN THE LAST)
// -------------------------------AN IMPURE FUNCTION THAT MAY CAUSES UNNECESSARY RERENDERS------------------------------
// --------------TOPIC 01 ------------
import { Component} from "react"
class Greeting extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
render(){
// Counter ka conclusion my nichey likhna bhol gya tha to yaahan add kar raha hon: Jesa ky hamey maloom hay yah component
// IMPURE Component to jesy ham dekh skty han ky button ky click par my ny count ki value ko 0 sy 1 par increase karwa
// diya hay to dekha gy component ko 1 bar reRENDER hona chaihyee kiu ky my ny apni logic kuch aisy define ki hay ky jab 
// user button par click kary ga count 1 par set hogy bss dobara change na ho. Lekin impure component hony ki wjah sy
// yah componenet har button ky click par dobara sy RERENDER hoga or iss behavior ko roknay ky liye ham ny nichey
// TOPIC # 02 my iss counter ko PURE COMPONENT sy bhe kiya hay. Pure component my component sirf tab hi reRender hota
// hay agar usy state ki updated value milay to hi componenet ko Rerender kary ga warna nahe kary ga. 
    console.log("I am from Greeting from a IMPURE CLASS COMPONENT!")
    return <div>
        <div style={{border: "2px solid green"}}>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={()=> this.setState({count : 1})}>Counter</button>
        </div>
        <h3>Hello from Greeting !</h3> 
        <h4>User Name:- {this.props.name}</h4>
        <h4>Address:- Not Found kiu ky ham props sy address pass hi nahe karr rahy</h4>
        </div>
}
}
export default Greeting
// ---------------------------------- CONCLUSION of the above (IMPURE Component):--------------------------------------
// Yah Component GREETING linked hay Pure Component name ky Component ky sath mtlb yah ky 
// PURE COMPONENT (PARENT) component hay and GREETING COMPONENT (child component hay Pure component ka). Pure component
// ham kuch aisa aisa kar raha hy ky ham ny pure componenet my 2 inputs fields banayen NAME & ADDRESS ki. Dono fields
// ki value ko get karny ky liye ham ny state ka use kiya hay taky NAME ki value ko har update/mount hony par UI par 
// ReRender kara saken. Lekin isi ky sath ADDRESS ki value ko ham UI par ReRender nahe karwa rahy han. Yaad rahy ham 
// PROPS ka use karty howy NAME ki value as a props Greeting Component ko pass karr han PURE Component ky andar sy.
// -------------------------------------------- Now What we will face ? -----------------------------------------------
// 1) Ab yahaan 1 default behavior dekhny ko mily ga hamey REACT ka ky jesy hi PARENT COMPONENT (PURE COMPONENT) ki 
// STATE/PROPS update hon gy to hamara PARENT COMPONENT (PURE COMPONENT) reRENDER hoga or phr usi Parent Component sy jo
//  bhe CHILD Components(GREETING) linked hongy woh dobara sy reRender hongy or aisy hi component ko ham 
// (IMPURE COMPONENTS bolty han jo ky parent component ki STATE/PROPS ky update hony par bar bar RERENDER hoty han). 
// ----------------------------------------------------------------------------------------------------------------------
// Ab iss my aik issue yah dekhny ko hamey mily ga ky GREETING COMPONENT bila fazool reRENDER ho raha hy magar kesy ?
// ----------------------------------------------------------------------------------------------------------------------
// 2) Dekho NAME ko ham UI par render karwa rahy han GREETING COMPONENT my lekin yaad rahy NAME ki value aa kahaan sy rahe
// hy? NAME ki value ham PARENT COMPONENT (PURE COMPONENT) sy as a PROPS pass kar rahy han to a CHILD COMPONENT (GREETING)
// ky andar. To ap notice karein gy ky jab bhe ham input field my data pass karein gy to hamari STATE update hogi or PROPS
// change ho raha hoga to ab iss sy hamara pora PARENT Component(PURE COMPONENT) dobara sy recreate reRender hoga or isi
// PARENT COMPONENT ky andar ham Child Component (GREETING) ko bhe use kar rahy han to woh bhe bar bar reRender hoga.
// NAME ki input field ki had tak to yah baat sahe hay kiu ky CHILD COMPONENET(GREETING) ki UI depend karti hay PARENT
// COMPONENT (PURE COMPONENT) par kiu ky ham GREETING my NAME ki value ko PROPS ky through get kar rahy han lekin 
// ADDRESS ki value ko to nahe as a props pass kar rahy han or nahe child Component my get kar rahy han to phr ADDRESS
// field my input dalnay sy Component ko RERENDER nahe hona chaihyee yahi behavior IMPURE Component ka hota hay ham 
// iss behavior ko rokain gy by making CHILD Component(GREETING) a  Pure Component.
// -------------------------MAGAR ISSI KY SATH AIK ISSUE BHE CREATE HO RAHA HY MAGAR KIA ? -----------------------------
// 3) ADDRESS ki input field ki value ko naahi ham UI render karwa rahy han or nahi as a props PASS kar rahy han. To phr
// bhe GREETING COMPONENT dobara sy bar bar reRENDER ho raha hy. Iss ki reRender hony ki wjah yah hay ky ham ADDRESS ki
// value ko bhe STATE ka use kar ky nikal rahy han to jesy jesy STATE update ho rahe hay PURE COMPONENT reRender ho raha
// hy. Yaad rahy input fields NAME & ADDRESS ham ny (PURE Component) my baanaye jo ky hamara PARENT COMPONENT hay to jesy
// hi STATE update hogi to PARENT COMPONENT ky andar jo child Component ko use kiya howa hay woh bhe RERENDER hon gy.
// -----------------------------------------------------------------------------------------------------------------------
// Yah bila fazool ki RERENDERNG ho rahe hay hamary (GREETING component) ki jab ky ADDRESS ki updated value ko naahe ham
// UI par RENDER karwa rahy han or naa he as a PROPS pass kar rahe han child component ko. Yah to mery CHILD COMPONENT 
// ki UI DEPENDENT ho PARENT COMPONENT (Pure Component) par phr to sahe hay reRENDER ho lekin yahaan to hamara
// Child Component ka koi lena dena nahe hay isi liye ham value ko bhe as a prop bhe pass nahe kar rahy CHILD COMPONENT 
// ko. To agar ham yah behavior rokna chahty han to hamry apnay IMPURE COMPONENT(GREETING) ko (PURE COMPONENT) banana pary
// ga.
// ----------------------------What would happen if we didn't STOP UNECESSARY RERENDER ? -------------------------------

// 1) In future jab hamari UI bhot complex howi or ham ny yahi behavior jari rehny diya apny components ka to APP ki 
// performance kharab hogy gi.
// 2) Secondly agar ham apnay kisi child Component my expensive calculation perform karwa rahy hon gy or phr jab ham usy
// apnay kisi COMPONENT my use karein gy to hamari APPLICATION naa chahtay howy bhe reRender hogi or iss sy bhe 
// hamari APPLICATION LAG kary gi or APP ki performance bhe kharab hogy gi.

// ********************************************************************************************************************
// -----------HERE, AN IMPURE COMPONENT IS CONVERTED INTO (PURE COMPONENT) TO AVOID UNNECESSARY RERENDERS -------------
// --------------TOPIC 02 ------------
// import { Component, PureComponent } from "react"
// class Greeting extends PureComponent{ 
//  constructor(){
//     super();
//     this.state = {
//     count : 0
//     }
//  }
// render(){
//     console.log("I am Greeting from PURE COMPONENT !")
//     return <div>
//         <div style={{border: "2px solid green"}}>
//         <h2>Counter: {this.state.count}</h2>
//         <button onClick={()=> this.setState({count : 1})}>Counter</button>
//         </div>
//         <h3>Hello from Greeting !</h3> 
//         <h4>User Name:- {this.props.name}</h4>
//         <h4>Address:- Not Found kiu ky ham props sy address pass hi nahe karr rahy</h4>
//         </div>
// }
// }
// export default Greeting
// ********************************************************************************************************************
// 1) How to convert a IMPURE COMPONENT INTO A PURE COMPONENT (USING CLASS COMPONENT) ? 
// -----------------FOR IMPURE COMPONENT----------------------
// import { Component } from "react"
// class Greeting extends Component{
    //  body...
    // }
    // -----------------FOR PURE COMPONENT----------------------
    // import { PureComponent } from "react" // FOR PURE COMPONENT
    // class Greeting extends PureComponent{
        //     body...
        // }

// ---------------------------------- CONCLUSION of the above (PURE Component):--------------------------------------
// Conclusion: Agar ab ham apnay address ki input fields my data enter karein gy to ab hamara GREETING wala component
// bar bar RERENDER nahe hoga kiu ky ab ham ny GREETING COMPONENT ko PURE COMPONENET bana diya hay. To iss sy faida yah 
// hoga ky GREETING COMPONENT sirf tab hi RERENDER hoga jab address ko as a props pass karein gy GREETING COMPONENT ko.

// Q) Why we should PURE COMPONENT ?
// JAB KISI COMPONENT KI STATE UPDATE HO TAB HI WOH COMPONENT RERENDER HO BILA FAZZOL COMPONENT KI REREDNERING KO AVOID
// KARNY KY LIYE HAMEY PURE COMPONENT USE KARNA CHAIHYEE
// FOR EXAMPLE:- {/* <button onClick={()=> this.setState({count: 1})}>Counter</button> */} */}
// Mery pas counter hay or button ky click par my ny count ki value ko 1 set karwa raha hon ab jab my dobara button par 
// click karo ga to mery component REREDNER hoga yah nahe ? 
// ANSWER: Mera component bar bar RERENDER nahe hoga kiu ky my ny apnay class component ko PURE COMPONENT bana diya tha 
// to PURE COMPONENT check kary ga ky agar updated value hay to hi COMPONENT ko reRENDER kary ga. Iss case my my ny 
// button ky click par COUNT ki value ko 1 set karwaya tha yani jb user button par click kary ga to phely count ki value
// 0 hogi or jab user click kary ga to COUNT ki valye update ho kar 1 hogy gi or sath my component bhe render hoga lekin 
// jab dobara button par click karo ga to ab mera Component dobara reRENDER nahe hoga kiu ky ab usy updated value nahe 
// mily gi. Pure Component sirf tab hi REREDNER hoty han jab unhay koi updated value milti hay.


// **********************************************INTERVIEW QUESTION****************************************************
// ----------------------- PURE Component BACKEND PAR KONSA LIFE CYCLE METHOD USE KARTA HAY ? --------------------------
// ANSWER:- PURE Component BACKEND PAR "SHOULD COMPONENT UPDATE" ka life cycle method use karta hay yani check karta hay
// ky agar koi updation ho rahe hay to hi Component ko reRENDER karwata hay agar koi updation nahe ho rahe ho yah 
// Component ko bhe RERENDER hony nahe deta. 
// ********************************************************************************************************************
