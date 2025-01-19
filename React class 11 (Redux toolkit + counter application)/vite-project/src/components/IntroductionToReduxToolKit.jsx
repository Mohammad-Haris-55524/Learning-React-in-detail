import React, { Component } from 'react'
import ReactNormalBahaviorForPassingStateData from "../assets/How to pass states as a props without using Context Api and Redux toolkit.png"
import AdvantageOfGlobalStateByUsingContextApiOrReduxToolKitOverPropsDrillingAndliftingLocallyManangedStates from "../assets/Advantage by passing data by using Context Api and Redux toolkit globally over props drilling and props uplifting locally.png"

function IntroductionToReduxToolKit() {
  return (
    <>
    <h2>Introduction To Redux Tool Kit</h2>

    <div>
    <h2>Topic # 01</h2>
    <h3>Normal Way for passing State values as props in React by using PROPS DRILLING AND PROPS UPLIFTING APPROACH</h3>
    <img src={ReactNormalBahaviorForPassingStateData} alt="" />
    </div>

    <div>
    <h2>Topic # 02</h2>
    <h3>Best and  Effective way for passing State values as props in React by using CONTEXT API OR REDUX TOOLKIT by declaring STATE value 
    GLOBALLY</h3>
    <img src={AdvantageOfGlobalStateByUsingContextApiOrReduxToolKitOverPropsDrillingAndliftingLocallyManangedStates} alt="" />
    </div>
    </>
)
}

export default IntroductionToReduxToolKit

// Theory related to PROPS DRILING & PROPS UPLIFTING (LOCAL MANAGED STATE) VS Context Api & Redux ToolKit (GLOBAL STATE)

// Ham Context API yah Redux ToolKit ko use kiu karty han ?
// (Locally state) ====> PROPS DRILLING (Passing data from Parent to child ) / PROPS UPLIFTING (Passing data from child to parent) sy bachny ky
//  liye ham Context API yah Redux ToolKit ka use karty han.
// Iss my ham uss state ko GLOBAL STATE bana dety han jiss state ko ham mutiple Components my use kar rahy hon For example (above image my ham 
// Todos) ki state ko gobally decalare kar dein gy iss sy faida yah hoga ky ham props drilling or props uplifting nhe karni pary gi. Jab bhe hamey
// TODOS ki state ki value chaihyee hogi jis Component my bhe to usy ham directly global state sy access kar lein gy (Check image topic # 02). 

// Advantage of global state over local state:
// Components ki unnecessary rerender stop hogy gi jab bhe ham GLOBAL STATE bana kar STATE ki values ko access karein gy yah set karein gy.

// Disadvantage of local state over global state:
// Kiu ky jab ham props drilling and props uplifiting karty han to hamari STATE LOCALLY managed hoti hay to hamey bhot sy aisy components my bhe
// state ki values ko as a props pass karna parta hay jis ki need bhe hamey nahe hoti kiu ky LOCALLY STATES VALUES ko ham directly pass nahe 
// kar skty iss sy hota yah hay ky phr jo unnecessary components my bhe ham ny state pass ki hogi to jab state ki value update hogi to phr woh
// sary compnents rerender hongy jis jis my bilafazool bhe state pass ki hogi. Iss sy hamari appication ki performance kharab hogi or yah cheez
// large applications ky liye bilkul bhe theek nahe hay. Yaad rahy sirf 2 rules hoty han locally states ki values ko pass karny ky
// 1) Props Drilling (2) Props Uplifiting.

// ------------------------------------------------------------------------------------------------------------------------------------------
// Image ky topic # 02 my isDarkTheme = false ko ham ny GLOBAL STATE/ CENTRALIZED STATE bana liya hay iss ka faida ki hoga ?
// Maan lo agar yah global state na hoti kia hota ? 
// Jab bhe my theme ky button ko toggle karta means isDarkTheme = false phely tha woh ab isDarkTheme = true hogy ga to agar meri state local 
// managed howi to mujhy bari bari props drilling ky through isDarkTheme ki state ko PARENT COMPONENT sy ---> Child A and Child B ko pass karna 
// parta phr Child A ----> Sub child A1 & Sub child A2 ko pass karta phr issi trha Child B sy Sub child B1 & Sub child B2 ko isDarkTheme pass 
// karta iss trha theme color white sy black hojata. 
// Lekin agar mery pas isDarkTheme = false LOCAL STATE ky bajaye GLOABALLY STATE ky tor par declare hota to button ko jab my toggle karta to meri
// isDarkTheme ki value GLOABAL STATE my true hojate phr mujhy props drilling nahe karni parti phr sary components khud meri GLOBAL/CENTRALIZED 
// state sy updated value isDarkTheme = true ko khud access kar lety check topic # 02 image (Global state) 

// ------------------------------------------------------------------------------------------------------------------------------------------
// Difference between Context Api & Redux ToolKit ? 
// 1) Context API jab ham parh rahy thy ham ny aik baat note ki the ky uss ky STATES ko manage karny ka code or application ko manage karny code yani
// UI sy related code sab aik hi jagah par ham code kar rahy thy uss sy issue yah aa raha tha ky hamari code readiblity kam ho rahe the smaller
// application my to kam chal jata hay lekin large applications my enterprise level applications my code ki complexity barh gy gi or code 
// readiblity bhot kam hogy gi.
// Lekin jab ham REDUX toolkit ko use karein gy to ham uss my GLOBAL STATE sy related jo bhe kaam hota hay usy ham aik alag file bana kar karein 
// gy. Yani ky UI related code alag file my ho or GLOBAL STATE sy related code alag file my hoga means that ham apnay code ko isolate kar rhay 
// hongy Iss sy faida yah hoga ky large level ki applications my hamari code readiblity kam nahe hogi or code bhe messy nahe hoga.

// 2) Context Api for smaller applications kiu ky choti application my aik alag sy bari library (redux) ko install karwana ki koi ache baat nahe 
// hy choti appications ko CONTEXT API ky thorugh ki create karna chaihyee
// Redux ToolKit for Intermediate level or large/enterprise level applications

// 3) Context API ko agar ham large applications my use kar rhay han or hamey STATE MANAGMENT sy related koi issue aajata hay to usy manage 
// karna yah DEBUG karna itna assan nahe hota kiu ky iss my koi user interface provide nahe kiya jata jis my ham dekha sakein ky konsa hamra 
// action dispatch howa hay kahaan par state update howi hay. Lekin agar ham REDUX TOOLKIT ko use kar rahy hoty to iss my hamey aik extension 
// milta hay browser sy jis ka use karny par hamey aik interface provide kiya jata hy jis ka use kar ky ham apni applications ki STATES ko 
// analyze kar skty han GUI ki madad sy or hamey pta chal jata hay kis action ky change hony par kia cheez dispatch howi hay, konsi STATE 
// update howi hay. 
// In simple words REDUX my STATE MANAGMENT sy related errors ko debug karna bhot asssan hota hay CONTEXT API ky muqably my 


// 4) Redux tookkit aisa nahe hay ky ham isy sirf react my hi use kar rahy hoty han. Global state managnemt zarori nahe hay ky yah sirf react 
// ky liye hi hay yah ham NEXT, ANGULAR or VUE my bhe use kar skty han. Aisa nahe hay ky yah library sirf REACT ky liye hi bany hay aisa nahe 
// hy yah aik gernalize STATE MANAGNMENT library hay ham isy tamam frameworks/libraries ky sath use kar skty han. 

// 5) Context API REACT ka built in feature hay lekin REDUX TOOKKIT aik external library STATE MANAGNMENT ky liye jisy hamey install karna
// parta hay use karny sy phely. 
// ------------------------------------------------------------------------------------------------------------------------------------------

// Steps to create your own redux store 
// 1) npm install @reduxjs/toolkit
// Jab ham Redux toolkit ki documentation par jayen gy to hamey wahana par jo yah command mily gi iss sy ham apna aik alag sy store bana lein gy
// yah phr apni  gloabal state create karwa lein gy.

// 2) npm install react-redux
// Jb 1st step follow kar lein gy hamara aik STORE create hogy ga yah phr hamari gloabl state create hogy gi phr ham yah command ka use karein
// gy iss sy hoga yah ky hamara UI/application sy realted jo code hoga usy ham link/connect karwa payen gy apny STORE/GLOABAL STATE ky sath. Iss sy faida
// yah hoga ky ham apny REDUX STORE ki GLOBAL STATE ki STATES ko apnay Component my use kar payen gy. Iss ka use karny sy hamey kuch hooks mil 
// jayen gi jin ka use kar ky ham apnay GLOABAL STATES ki states ko directly apnay components my access kar payen gy.

//3) store ka aik main folder banao src ky andar uss store ky andar index.js / store.js ki file banao marzi hay (check below
//   for difference between these two). Ab store waly folder ky andar hi aik folder or banao slices/features ky name sy. Iss
// ky andar hamary tamam slices ayen gy.

// Step # 01 : Store(folder) ---> slices/features (folder) + index.js/store.js(file) 
// Step # 02 : ConfigureStore in index.js/store.js(file) 
// Step # 03: slices/features (folder): Iss folder ky andar ham apnay multiple slices rakh skty han. for example userSlice.js,
// counterSlice.js etc

// ---------------------------------------------------------------------------------------------------------------------
// index.js vs store.js :
// index.js ki agar file banayen gy agar ham STORE ky andar to hamey isy import karwana nahe pary ga phr hamari marzi
// hogi ky index.js ki file ko import karwayen yah nahe. Path name ky sath hamey index.js ki file ka name likhain yah nahe
// to koi farq nahe pary ga woh khud file grab kar ly ga.
// Lekin agar store.js ky name use kar rahy hongy file banay ky liye to hamey isy import karaty time path ky sath file
// ka name (/store.js) bhe likhna pary ga warna code grab kar ky nahe laye ga.
// --------------------------------------------------------------------------------------------------------------------