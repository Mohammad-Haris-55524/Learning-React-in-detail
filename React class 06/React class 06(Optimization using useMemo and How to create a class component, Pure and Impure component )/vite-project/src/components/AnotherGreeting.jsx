// ************************************************CHAPTER # 02(C)******************************************************
import {Component, React, memo,useState} from 'react'

function AnotherGreeting({name,address}) {
const [count,setCount] = useState(0);
const countHandler = () =>{
// if(!(count === 2)){
//   setCount(count + 1);
// }
setCount(count + 1);

}
console.log("ReRENDERING from Child (Another component) ...")
  return (
    <div>
        <h3>Hello from Greeting !</h3> 
        <h4>User Name:- {name}</h4>
        {console.log({name},{address})}; 
        <h4>Address:- Not Found kiu ky ham props sy address pass hi nahe karr rahy</h4>
        <button onClick={countHandler}>Counter from child componenet {count}</button>
    </div>
  )
}

export default memo(AnotherGreeting); //memo kia bolta hay ?
// Memo observe karta hay /track karta hay jesa ky ham PARENT COMPONENT (PURE COMPONENT) my child component
// <AnotherGreeting name={name}/> ky andar sirf name as a props pass kar rahy han to MEMO observe kary ga ky jab name 
// ky props my agar koi change aye ga to hi woh child component ko reRender kary ga. Ham sirf name ka props pass kar rahy 
// to yah MEMO sirf name ky props ko track/watch kary ga. Address ko ham as a props pass nahe kar rahy to MEMO usy watch
// nahe kary ga to address ky andar input dalny sy hamara child component(AnotherGreeting) REREnder nahe hoga kiu ky ham
// ny usy as a props pass nahe kiya child component <AnotherGreeting name={name}/> ky andar.Check(console.log on line # 18).
// ----------------------------------------------------------------------------------------------------------------------
// Parent component to state update hony ki wjah sy RErender ho raha hy lekin child Component ko agar ham Parent
// Component ky andar use kar rhay han to child Component bhe RERENDER hoga jo ky sahe baat nahe. Yah to child component
// dependent ho parent Component ki value par yani ky ham parent comp ki value ko as a props pass kar rhy hon child
// Component ko tab to child component ka rerender hona banta hay lekin agar bilafazzol reRENDER ho raha hy child comp
// parent Component ki state change honi ki wjah sy to ham isy rok skty han BY USING MEMO.
// CHILD Component sirf tab hi rerender hona chaihyee jab uss ky props my koi change aye or isy ham acheive karty han
// by using MEMO(It changes an impure function compoenent to a pure function compoenent)




// ---------------------------------------------------------------------------------------------------------------------
// Conclusion: 
// (1)------------------------------------------------------------------------------------------------------------------
// Jab bhe Component ki state update hoti hay yah phr props change hoty han to pora Component dobaara sy RErender hota hay
// Lekin agar ham apnay Parent Component (PURE COMPONENT) par nazar dalain to uss my counter ki STATE update hony par
// hamara pura Parent Component (PURE COMPONENT) dobara sy Rerender hoga to uss ky andar ham ny child componenet
// (Another Greeting) ko bhe call kiya howa hay to bhe rerender hoga. Lekin yah koi sahe cheez nahe hay kiu ky jab mera
//  child componenet (Another Greeting) depend kar hi nahe raha PARENT COMPONENT par to phr bilafazool RErender bhe 
// nahe hona chaihyee. To iss behavior ko roknay ky liye ham ny apnay child componenet (Another Greeting) ko PURE 
// COMPONENT bana diya hay by using MEMO (Check Another Greeting componenet).
// MEMO ko ham function componenet ko PURE Component bananay ky liye use karty han. REACT my har function compoenent 
// by default IMPURE FUNCTION Component hota hay.
// (2)------------------------------------------------------------------------------------------------------------------
// Or nazar dalain ham apnay Parent Component (Pure Component) par to uss my 2 inputs fields bhe han NAME and ADDRESS ki.
// Yad rahy ky NAME and ADDRESS ki values ko bhe ham State ky thorugh get kar rahy han.
// My name ko as a props pass kar raha hon child componenet (Another Greeting) ko. Taky child componenet (Another Greeting) ko pass kar ky UI par 
// name ki value ko har change par RERENDER karwa saken. Ab Parent Component (Pure Component) par nazar dalo to ap dekho
// gy ky my ny as a props sirf name pass kiya tha child componenet (Another Greeting) ko to iss sy hoga yah ky hamara
// Parent Component (Pure Component) ky sath child componenet (Another Greeting) bhe har input change par RERENDER hoga.
// kiu ky 1 to state update ho rahe hy or sath my ham props bhe pass kar rahy child compoenent ko yahaan to banta hay 
// dono Component ka REREDNER hona kiu ky child Component ki value dependent hay PARENT Component par lekin issue aye ga 
// ADDRESS wali state my.
// Dekho address ko ham PROPS ky thorugh pass to nahe kar rahy child component ko lekin phr bhe address ky har input
// change par PARENT COMPONENT or CHILD COMPONENT bar bar RERENDER ho rahy han. Iss scenrio my CHILD COMPONENT bila
// fazool reREDNER ho raha hy kiu ky child component dependent to nahe hay parent component par kiu ky ham address ki 
// value ko naahe as a props pass kar rahy han child Component ko naahe UI par reRENDER karwa rahy han. Iss scenrio my
// sirf PARENT COMPONENT(PURE COMPONENT) ka reRENDER hona banta hy kiu ky address ki value ko state ky through get kar rahy
// han to har input change par state ki value change hogi to sirf PARENT COMPONENT ka RERENDER hona banta hay lekin 
// CHILD COMPONENT(AnotherGreeting) fazool my reRENDER ho raha hy isy roknay ky liye ham CHILD COMPONENT(AnotherGreeting)
// ko PURE COMPONENT my change kar dein gy taky iss ka CHILD Component ka bilafazzool reREDNER hony wala seen khatam hogy.

