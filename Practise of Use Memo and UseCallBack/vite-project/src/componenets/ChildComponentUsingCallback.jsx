// -------------------------------------- LEARINIG ABOUT CALLBACK HOOK (B) ?---------------------------------------------

import React, { Component, useCallback } from 'react'
import { memo } from 'react'

function ChildComponentUsingCallback({todos,addTodoHandler}) {
    console.log("Rerendering from child component")
  return (
    <div>
         <div>
            <h5>Add Todo: 
            <ul>
            {todos.map((todo,index)=>{
              return <li key={index}>{todo} {index + 1}</li> //For Array
              //  return <li key={index}>{todo.name} {todo.id}</li> //For Object
            })}
            </ul>
            {console.log(todos)}
            </h5>
        </div>
    </div>
  )
}
export default memo(ChildComponentUsingCallback)


// ************************************************* MEMO IN DETAIL *****************************************************
// MEMO ham isi liye use kar rahy han. Agar ham PARENT COMPONENT par nazar dalain to PARENT COMPONENT my 2 varibales ko
// STATE ka ka use kar ky declare kiya gya hay 1) COUNT 2) TODOS.
// ------------------------------------- Ab ham karna kia chah rahy han ? ---------------------------------------------- 
// My TODOS ko as a props pass kar raha hon PARENT COMPONENT sy CHILD COMPONENET ko. Taky Todos ko UI par TODOS ko
// ReRENDER karwa sakoun har ADD TODO ky click hony par.
// ---------------------------------------- Ab issue kahaan aye ga ? I --------------------------------------------------
// Issue yah aye ga ky PARENT COMPONENT my 2 varibales ko STATE ka use kar ky declare kiya gya tha 1) COUNT 2) TODOS.
// Or hamey pta hay jab bhe state ki value change hoti hay to pora component dobara sy RERENDER hota hay, to hamara
// PARENT COMPONENT dobara sy RERENDER hoga. Iss sy problem yah create hoga ky jab bhe COUNT
// ki state update hogi to PARENT COMPONENT dobara sy RERENDER hoga COUNT ki STATE ky change hony ki wjah sy lekin aik
// ISSUE yah create ho ga ky yah sath my yah CHILD COMPONENT ko bhe RERENDER kar dy ga. Kiu ky ham ny <CHILD COMPONENT/>
// ko PARENT COMPONENT ky andar hi use kiya howa hay. Or yah side effect hota hay USE STATES ko use karny ka. Kiu ky my 
// sirf yah chahta hon ky CHILD COMPONENT sirf tab hi REREDNER ho jab <CHILD COMPONENT todos={todos}/> ky props change
// hon. Yaad rahy CHILD COMPONENT ky props my ham TODOS ko pass kar rahy han to CHILD COMPONENT RERENDER bhe tab hi hona
// chaihyee jab TODOS ky props my change aye naa ky COUNT ki state ky change hony par kiu ky CHILD COMPONENT dependent hy
// TODOS ki STATE par naaky COUNT ki STATE par okay.... 
// -------------------------------------- Isy roknay ky liye ham kia karen gy. -----------------------------------------
// USE STATE ky SIDE EFFECT ko roknay ky liye we will use MEMO yaad rahy sirf MEMO use memo nahe woh alag cheez hay.
// MEMO basically IMPURE FUNCTION ko PURE FUNCTION bana deta hay jo bilafazol REREDNER hony sy COMPONENT ko rokta hay.
// Yah sirf tab hi COMPONENT ko REREDNER karwata hay jab PROPS my koi change aye as already discussed all above.
// --------------------------------------------- Memo kia karta hay ? --------------------------------------------------
// MEMO check karta hay kisi bhe Component ko RERENDER karwanay sy phelay kuch iss trha sy ky agar uss Component ka props
// change howa hay to hi uss Component ko RERENDER karwaye ga. Hamary iss scenerio my MEMO check kary ga ky PARENT
// COMPONENT ky andar jo my <CHILD COMPONENT todos = {todos}/> ko call kar ky uss ky andar TODOS ko as ka props pass 
// kar raha hon to ab yah <CHILD COMPONENT/> ko sirf tab hi REREDNER karwaye ga jab CHILD COMPONENT ka props change hoga
// yani ab beshak count ki state badlay to bhe yah bilafazool <CHILD COMPONENT/> ko RERENDER nahe hony day ga.

// MEMO basically aik watcher hay dekhta hay observe karta hay yah phr check karta hay comparision karwata hay
// (PREVIOUS STATE VS CURRENT STATE) yah phr (PREVIOUS PROPS VS CURRENT PROPS)
// 1) Yah observe karta hay ky koi change aya hay hay CURRENT PROPS my PREVIOUS PROPS sy 
// 2) Yah phr CURRENT STATE ki value my vs PREVIOUS STATE sy
// Agar isy koi change nazar ata hay or usy new value mili hoti hay to woh sirf uss Component ko RERENDER karwata hay jiss
// my change aa raha ho taky hamey new updated UI mily. 
// By using MEMO it helps us to prevent unnecessary re-renderings that originate from the re-renderings of the components
// parent/ancestors.
// ***************************************** MEMO KY ANDAR BHE KUCH ISSUES HAN ***************************************** 
// MEMO my issue tab aye ga jab ham koi NON PRIMITIVE DATA TYPES SPECIALLY FUNCTIONS pass karein to woh COMPONETS ki 
// bilafazzol RENDERING ko control nahe kar pata.Then we use USE CALLBACK HOOK (CHECK THE BELOW EXPLANATION)



// ******************************************************************************************************************** 
// ------------------------------------ WHY WE NEED TO USE USE CALLBACK HOOK -------------------------------------------
// ******************************************************************************************************************** 
// Lekin issue MEMO my tab ata hay jab ham koi function pass kar dein as a PROPS. 
// Agar ham PARENT COMPONENT par nazar dalain to PARENT COMPONENT my 2 varibales ko STATE ka ka use kar ky declare kiya
// gya hay 1) COUNT 2) TODOS. Jesa ky hamey STATE ka behavior pta hay (Jab bhe STATE ki value update/mount hogi to 
// hamary pora PARENT COMPONENT RERENDER hoga har update par) =======> (To control unNecessary RERENDER we use MEMO)
// My PARENT COMPONENT ky andar CHILD COMPONENT ko call kar raha hon. May TODOS and function (addTodoHandler) ko bhe as a 
// PROPS pass kar raha hon CHILD COMPONENT ky andar. Ab yahaan 1 issue create hoga RERENDERING ka jisy ham MEMO ka use
// kar ky bhe control nahe kar skty woh issue ki hay ? 
// Memo my 1 issue yah hay ky jab ham iss my PRIMIMITE TYPE ka props pass karen tab tak to yah sahe kaam karta hay
// yani agar my <ChildComponentUsingCallback todos={todos}/> yani CHILD COMPONENT my TODOS ko as a PROPS pass karo jesa
// ky hamey pta hay TODOS function nahe hay kiu ky TODOS ko ham ny STATE ka use ky banaya hay to yahaan to MEMO sahe
// work kary ga. Lekin jesy hi koi function pass kar diya .................................
// <ChildComponentUsingCallback todos={todos} addTodoHandler={addTodoHandler}/> (addTodoHandler IS
// A FUNCTION THAT IS CREATED IN PARENT COMPONENT) To MEMO bhe apna apna kaam karna chor dy ga yani REACT ka old behavior
// wapis aa gy ga jesy hi koi bhe state update hogi jis ka koi lena dena naa bhe ho hamary CHILD COMPONENT sy tab bhe pora 
// Component dobara sy REREDNER hoga.
// ---------------------------------------------------------------------------------------------------------------------
// ----- FUNCTION KO AS A PROPS PASS KARNY PAR COMPONENT AIK BAR PHR SY BILAFAZOOL RERNDER HONA KIU SHURU HOGY GA ?-----
// ---------------------------------------------------------------------------------------------------------------------
// Dekho bhai PARENT COMPONENT my jab COUNT ki STATE my change aye ga to pora PARENT Component dobara sy REREDNER hoga. Ab
// smjhnay ki baat yah hy kay iss bar ham ny CHILD Component my (TODOS) ky sath aik function (addTodoHandler) ko bhe as a 
// PROPS pass kiya hay. PARENT COMPONENT ki reRENDERING ki wjah sy jo function ham ny as a PROPS pass kiya tha woh bhe 
// har COUNT ky update par bar bar create hoga mtlb ?
// ---------------------------- Yah function bana howa hay PARENT COMPONENT KY ANDAR -----------------------------------
// const addTodoHandler = () => setTodos((prevTodos) => [...prevTodos, "New Todo"]);

// COUNT VALUE =  0 (INITIAL RENDER 1ST TIME WHEN PARENT COMPONENT LOADS) 
// const addTodoHandler1 = () => setTodos((prevTodos) => [...prevTodos, "New Todo"]); (PREVIOUS FUNCTION)

// (COUNT = 0) TO (COUNT = 1) When user click on COUNTER and COUNT VALUE IS UPDATED
// const addTodoHandler2 = () => setTodos((prevTodos) => [...prevTodos, "New Todo"]); (CURRENT FUNCTION)

// Yaad rahy functions ko ham jin vairables my save karwa rahy han un ky sath my ny khud 1 and 2 likha hay sirf smjhnay ky 
// liye taaky jab my usy compare karwa sako kiu ky same name ky 2 functions nahe ban skty error aye ga kiu ky ham block 
// scope const/let ka use kar rahay han (Cannot redeclare block-scoped variable) or wesy bhe const to wesy bhe redeclare 
// nahe hoskta. Only var can be redelared.

// console.log(addTodoHandler1 == addTodoHandler2); FALSE (Mean that dono function different han same nahe han)
// JS my ham jab bhe koi 2 function ko apass my compare karty han beshak woh same hi function kiu na hon to hamey result 
// my FALSE hi milta hay. Jab bhe ham function ko as a PROPS pass karty han to MEMO sahe sy work nahe karta. Uss ki
//  wjah yah hay ky MEMO only works for PRIMITIVE DATA TYPES.

// ----------------------------------------------- MORE DETAIL -------------------------------------------------------
// Iss cheez ko zara ghor sy smjhna hay maan lo user ny COUNTER ky button par cliCk kiya to COUNT ki STATE change hogi
// TODOS ki STATE wesy ki wesi pari han yani ADD TODOS ky button par USER ny click nahe kiya. Ab zahir si baat hay COUNT 
// ki STATE update howi hay PARENT COMPONENT dobara sy RERENDER hoga or isi PARENT COMPONENT ky andar 2 functions banayen 
// howy han. Acha COUNT ki state update hony par jab PARENT COMPONENT dobara sy RERENDER hoga to hamaray sary function
// dobara sy recreate hongy kiu ky COUNT ki STATE change hony ki wjah sy PARENT COMPONENT ki RERENDERING jo howi hay.

// Ab jesa ky ham janty han FUNCTIONs NON PRIMITIVE DATA TYPES hay or 1st jab PARENT COMPONENT RENDER hoga yani jab
// 1st time hamara code create howa hoga initial render par. Check Initial render(RENDER) vs Rendering (Initial Render par not reRENDERING kiu ky 1st time Component load hony par render hota hay sirf STATE AND PROPS change hony par RERENDERING hoti hay)
// or phr jab user COUNTER ky button par click kary ga to phr COUNT ki state change hony par PARENT COMPONENT ab RERENDER 
// hoga or iss time phr dobara sy sara code phr sy RECREATE hoga or hamary sary functions bhe dobara sy recreate hon gy. 
// Iss time MEMO check kary ga ky PROPS ky andar koi change aya hay yah nahe.

// ------------------------------------ MEMO PROPS ko check kesy karta hay ---------------------------------------------
// DEKHO ham ny as a PROPS <ChildComponentUsingCallback addTodoHandler={addTodoHandler}/> CHILD COMPONENT ky andar 
// function pass kardiya hay 1st time jab code RENDER hoga yani initial render hamey function mily ga  
// addTodoHandler (maan lo isy PREVIOUS FUNCTION) or jab USER COUNTER par click kary ga or COUNT ki value update hogi
// to PARENT COMPONENT iss bar RERENDER hoga jiss ki wjah sy addTodoHandler wala function dobara sy RECREATE iss baar 
// ap addTodoHandler (ko maan lo CURRENT FUNCTION). Ab MEMO ka real kaam start hoga MEMO ko jo 1ST TIME initial load
// (RENDER) par jo function mily tha addTodoHandler(PREVIOUS FUNCTION) ko MEMO compare kary ga 
// addTodoHandler (CURRENT FUNCTION) ky sath  kuch iss trha sy.

// COUNT VALUE =  0 (INITIAL RENDER 1ST TIME WHEN PARENT COMPONENT LOADS) 
// const addTodoHandler = () => setTodos((prevTodos) => [...prevTodos, "New Todo"]); (PREVIOUS FUNCTION)

// (COUNT = 0) TO (COUNT = 1) When user click on COUNTER and COUNT VALUE IS UPDATED
// const addTodoHandler = () => setTodos((prevTodos) => [...prevTodos, "New Todo"]); (CURRENT FUNCTION)
// ----------------------------------------------------------------------------------------------------------------------
//CHILD COMP PASSED INTO PARENT COMPONENT: <ChildComponentUsingCallback todos={todos} addTodoHandler={addTodoHandler}/> 
// Now MEMO WILL CHECK WETHER THERE IS CHANGE IN THE PROPS OF CHILD COMPONENT OR NOT BECAUSE THE FUNCTION IS PASSED
// INTO A CHILD COMPONENT:
// COMPARING PROPS:- addTodoHandler (PREVIOUS FUNCTION) === addTodoHandler (CURRENT FUNCTION) 
// RESULT: (IT WILL GET FALSE DUE TO PREMITIVE DATE TYPE behavior)
// ----------------------------------------------------------------------------------------------------------------------

// CONCUSION:
// NON PRIMITIVE DATA TYPES ki wjah sy kabhi bhe 2 function equal nahe hoskty beshak un ki values same ki kiu naa 
// ho. Isi wjah sy MEMO ko PROPS my change mily ga kiu ky MEMO MATCH kary ga addTodoHandler (PREVIOUS FUNCTION) function
// ko jo usy initial render par mily ga jab COMPONENT 1ST TIME load hoga WITH the addTodoHandler (CURRENT FUNCTION)
// jo tab create hoga jab bhe mery COUNT ki STATE update hogi or mera PARENT COMPONENT dobara sy RENDER hoga or sath my
// mera sara code bhe RECREATE hoga or isi trha jo PARENT COMPONENT my jo function banayen hongy woh bhe dobara sy 
// RECREATE hon gy or ab iss time hamey addTodoHandler(CURENT FUNCTION) mily ga.
// MEMO compare kary ga dono functions ko addTodoHandler(PREVIOUS FUNCTION)  ==== addTodoHandler (CURRENT FUNCTION)
// lekin NON PRIMITIVE DATA TYPE hony ki wjah sy usy change milay mily ga (PREVIOUS FUNCTION) vs (CURRENT FUNCTION) ky 
// andar kiu ky NON PRIMITIVE DATA TYPES CANNOT BE EQUAL

// ------------------------------------THE BEST CONCLUSION FOR USE CALLBACK HOOK ? -------------------------------------
//"useCallback is hook that return memorized version of callback function only changes when one of dependency is changed
// 1) Hamari iss example my ham use useCallback isi liye use kar rhay han kiu ky jab ham function ko as a props pass kar
// rhay han child Component ko to jab count ki state update hoti the to hamara pora Component unnecessary rerender hojata
// tha. Bhai jab COUNT ko ham as a props Child Component ko pass kar hi nahe rahy to phr CHILD COMPONENT kiu RErender ho
// raha hy.
// 2) Hamey maloom hay COUNT ky variable ko ham ny STATE ka use kar ky banaya hy to jab bhe count ki value update hogi to 
// PARENT COMPONENT to RERENDER hoga hona bhe chaihyee lekin CHILD COMPONENT ka RERENDER hona nahe banta.
// 3) Jab bhe COUNT Ki state ki value update hogi to sara code PARENT COMPONENT recreate hoga kiu ky COUNT PARENT COMPONENT
// my hay. Iss sy hoga yah ky jo bhe functions han woh bhe dobara sy recreate hon gy on every COUNT ki STATE update par.
// Phr ham jo PROPS pass kar rahy han Child Component ko woh (Todos) and (addTodoHandler) function hay. Memo my ham ny
// Child Function ko wrap kiya howa tha jo bilkul sahe chal raha tha lekin jesy hi ham ny CHILD Component my function pass
// pass kiya MEMO ki functionality break hogayi. Kiu ky MEMO only works good for PRIMITIVE DATA TYPES and function
// is NON PRIMITIVE DATA TYPE. Jab count ki state update hogi to sara code recreate hoga phr jo addTodoHandler wala function
// hay yah bhe dobara sy recreate hoga phr MEMO check kary ga 1st time render hony waly function ko with COUNT ki state par
// update hony waly function ky sath to hamey maloom hay NON PRIMITIVE DATA TYPES KABHI EQUAL nahe ho skti behsak same hi 
// kiu na ho due to its Reference type. Iss sy hoga yah ky MEMO ko har COUNT ki STATE change hony par addTodoHandler wala 
// function RECREATE ho kar mily ga or phr jab MEMO usy compare kary ga previus function ky sath to usy false mily ga yani 
// ky dono function equal nahe han mltb MEMO smjhy ga usy new function mil gaya hy isi wjah sy COUNT ki STATE update
// hony par hamara CHILD COMPONENT RERENDER ho raha tha inspite of using MEMO. 
// 4) To ab USE CALLBACK HAMARY Function KO MEMOIZE KAR DY GA YANI AB HAMARA addTodoHandler WALA function jo phely har COUNT 
// KI VALUE UPDATE HONY PAR RECREATE HOJATA THA WOH AB BAR BAR RECREATE NAHE HOGA COUNT KI STATE CHANGE HONY PAR. KIU KY
// HAM NY useCallback HOOK KA USE KAR LIYE HAY OR useCallback HOOK KY DEPENDECNY ARRAY MY TODOS KO PASS KAR DIYA HAY. 
// ISS SY YAH HOGA YAH KY addTodoHandler WALA Function SIRF TAB HI RECREATE HOGA JAB SIRF TODOS MY CHANGE AYE GA. KIU KY
// DEPENDECNY ARRAY MY TODOS KO PASS KAR RAKHA HAY ISS TRHA SY HAM UNNECESSARY RECREATETION OF FUNCTION AND UNNECESSARY
//  RERENDER KO ROK SKTY WHILE PASSING DATA FROM ONE COMPONENT TO ANOTHER BY USING REACT  

{/* <ChildComponentUsingCallback todos={todos} addTodoHandler={addTodoHandler}/> */}




// *********************************************************************************************************************
// -----------A SHORT REVISION ABOUT NON PRIMITIVE DATA TYPES TO UNDERSTAND WHY WE NEED USE USECALLBACK IN JS----------
// What is the Reason behind that ?
// Dekho bhai JS my (FUNCTIONS OBJECTS & ARRAYS NON PRIMIITIVE DATA TYPES) hoti han jab bhe ap inhay apas my compare 
// karo gy like this // console.log(addTodoHandler1 == addTodoHandler2); to result my hamey FALSE hi mily ga. Uss ki 
// wjah yah hay ky NON PRIMITIVE DATA TYPES do not store the actual value. Instead, they store a reference or a pointer
// to the location in memory where the value is stored. Yani ky NON PRIMITIVE DATA TYPES directly values ko apas my 
// compare nahe karty balky har value ka aik reference create karta hay uss location ka jahaan par value save hoti hay 
// for example: Jab addTodoHandler1 ka function create hoga memory my kisi location par iss ka 1 reference bhe create 
// hogy ga maan lo iss ki memory location ka reference 123 hay or uss refrence ky andar iss function ki value save hay
// or isi trha jab addTodoHandler2 ka function create hoga to iss ki bhe memory my kisi location par 1 reference create
// hogy ga or maan lo iss ki memory location ka reference 132 hay or uss refrence ky andar iss function ki value save hay.
// Jesa ky 2 references means memory location kabhi bhe same nahe ho skty isi wjah sy jab bhe NON PRIMITIVE DATA TYPES ko
// ham apas my compare karwaty han to yah hamesha FALSE hi milain gy kabhi bhe TRUE nahe ho sakti kiu ky NON PRIMITIVE
// DATA TYPES REFERCES ko match karti han values ko nahe 

// const addTodoHandler1 = () => setTodos((prevTodos) => [...prevTodos, "New Todo"]); (memory location ka reference 123)
// const addTodoHandler2 = () => setTodos((prevTodos) => [...prevTodos, "New Todo"]); (memory location ka reference 132)

// console.log(addTodoHandler1(memory location reference 123) == addTodoHandler2 (memory location reference 132)); FALSE
// (Mean that dono function different han same nahe han) This is also called refrential equality
// JS my ham jab bhe koi 2 function ko apass my compare karty han beshak woh same hi function kiu na hon to hamey result 
// my FALSE hi milta hay. Jab bhe ham function ko as a PROPS pass karty han to MEMO sahe sy work nahe karta. Uss ki
//  wjah yah hay ky MEMO only works for PRIMITIVE DATA TYPES.
// *********************************************************************************************************************
