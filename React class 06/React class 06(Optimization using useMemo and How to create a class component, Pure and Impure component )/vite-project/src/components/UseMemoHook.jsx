import React, { Component, useEffect, useMemo } from 'react'
import { useState } from 'react';

function UseMemoHook() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    // const arr = []

    // Passing count value to a function thats name is expensive cal and then storing a function in a varibale.
    // const result = expensiveCalculation(count);

    // OPTIMIZATION BY USING USE MEMO HOOK
    const result = useMemo(() => expensiveCalculation(count),[count]); 
    
    //Counter value Handler   
    const counterHandler = () =>{
        setCount((previousCount) => previousCount + 1);
        console.log("Counter ReRendered", count)
    }
    //Add Todo value Handler   
    const addTodosHandler = (count) => {
        // arr.push("New Todo");
        setTodos((previousTodo) => {
        // console.log(previousTodo); //[]
        console.log("Todos ReRendered", todos)
       return [...previousTodo, "New todo"] //[new todo]
    });
    // setTodos((previousTodo) => [...previousTodo , "New todo"])
    // console.log(arr)
    }
    console.log("ReRender");


  return (
    <div>
        <div>
            <h3>Counter {count}</h3>
            <button onClick={counterHandler}>Counter</button>
        </div>
        <div>
            <div style={{border: "2px solid black"}}>
            <h3>My Todos</h3> 
            <button onClick={addTodosHandler}>Add Todo</button>
            {todos.map((todo,index) => {
                return <h3 key={index}>{todo} {index + 1}</h3>
            })}
            </div>
        </div>
    <div>
        <h3>Expensive Calculation: {result} </h3>
    </div>
    </div>
  )
}

// Expensive calculation function ko isi liye sab sy end par banaye hy kiu ky ham ny arrow function ka use kar ky 
// function banaya hay to yah function hoisted nahe hoty or ham ny function ko line # 09 par call kar liya hay 
// to woh error dy ga cannot access before initialization ka. Han agar ap iss function ko normal function ky thorugh
// banao gy to kaheen bhe banao iss function ko error nahe aye ga kiu ky normal function hoisted hoty han.
const expensiveCalculation = (num) => {
    console.log("Calculating...");
    // for (let i = 0; i <= 10; i++) {
        // console.log(num + i) // 0 + 0 = 0, 0 + 1 = 1, 1 + 2 = 3, 3+3 = 6, 6+4=10, 10+5= 15, 15+6 = 21, 21+7 = 28, so on..
    for (let i = 0; i < 1000000000; i++) {
        // console.log(num + 1) // 0+1=1, 1+1=2, 2+1=3, 3+1=4, 4+1=5, 5+1=5, 6+1=7, 7+1=8, 8+1=9 and so on untill loops end 
        num = num + 1 // yah line har counter value change hony par 1000000000 times chaly gi that is why its expensive
        // calculation
    }
    console.log("Result: ",num);
    return num;
}


export default UseMemoHook

//****************************************** CONCLUSION ABOUT USE MEMO HOOK: ******************************************
// Use memo return a memoized value.
// Dekho seen kuch aisa hay ky jab bhe ham USE STATE sy varibale banaty han to hamey pta hay jab bhe USE STATE ki value 
// change hogi to hamara component dobara sy reRender hoga. Ab yahaan par 2 varibales han hamary pas 1) Todo 2) Count
// dono ky dono USE STATE ky through create kiye gy han. 
// ---------------------------------- My 2 operations perform karwa raha hon -------------------------------------------
// 1) Jab user Add Todos ky button par click kary ga to hamary pas UI par TODOS show hongy.
// 2) Jab User Counter par click kary ga to counter ki value change hogi.
//---------------------------------------------- Ab ISSUE kia aye ga ? -------------------------------------------------
// Dekho jab ham ADD TODO ky button par click karein to jesa ky hamey pta hay Todo ko ham ny USE STATE  ky through create 
// kiya hay to hamara componenet dobara sy ReRENDER hoga, Uss sy issue yah aye ga ky hamari line # 09 par lika code
// const result = expensiveCalculation(count); dobara sy execute hoga. Iss code my basically ham ny 1 function ky andar
// count ki value ko pass kiya hay or phr usy 1 variable RESULT my save karwaya hay. 
// ---------------------------- Yah expensiveCalculation(count) ka function kia kar raha hy ? --------------------------
// Yah function count ki value ko as an argument lay raha hy or phr yah 1 bhot lambi iteration perform karwa raha hy 
// jo ky 1 bhot time taking task hay. Iss sy nuksaan yah ho raha hy ky hamari application ki performance kharab ho rahe 
// hy, kuch iss trha sy ky jab bhe user ADD TODO ky button par click karta hay to USE STATE ky thorugh variable (TODO)
// create hony ki wjah sy pora component dobara sy REREDNER hota hay to isi RERENDERing ki wjah sy LINE NO 09 par likha
// code ==> const result = expensiveCalculation(count); execute hojata hay jo ky expensiveCalculation(count) ko 
// bilafazool call karwata hay. Or iss function ky chalnay ki wjah sy time taking iteration hoti hay jiss ka koi lena
// dena hi nahe ADD TODOS ky button ky par click hony par.
// --------------------------- SO HOW CAN I AVOID THIS OPTIMIZATION ISSUE IN MY APPLICATION: --------------------------
// My line line # 09 par lika code ko use MEMO ky andar WRAP kar dn ga kuch iss trha 
// const result = useMemo(() => expensiveCalculation(count),[count]); 
// ---------------------------------------------Iss sy hoga kia ? -----------------------------------------------------
// Dekho ham RERENDERING ko to nahe roky ga or nahe RERENDERING ko koi rok skta hay kiu ky ham ny STATE ky through
// varibales (todos),(count) ko create kiya hay. Ham bss yah rokain gy ky bhai ap jo expensiveCalculation(count) waly 
// function ko har USE STATE ki value par change hony par call hojata tha. Ab ham iss function expensiveCalculation(count)
// ko sirf tab hi call call karein gy jab USE STATE (count) ki value update hogi. Yani ky iss function ki dependecy array
// my ham ny [count] ko pass kar diya hay to iss sy yah hoga ky yah function sirf tab hi execute hoga jab count ki value 
// my koi change/updation aye gi. Kiu ky hamey maloom hay ky ADD TODO ka iss expensive calculation waly function sy 
// koi lena dena nahe tha. ExpensiveCalculation(count) dependent hay count ki value par kiu ky expensiveCalculation(count)
// ky function ky andar ham ny count ki value ko jo pass kar rahy han har counter ky update hony par. Jab bhe count 
// ki value update hogi to har updated value par expensiveCalculation wala function 1000000000 times execute hoga.
//  Mtlb kuch iss trha sy For example: (1ST TIME ITERATION PAR COUNT KI VALUE 0 HAY OR CODE KI EXECUTION KUCH ISS TRHA
// HO GI expensiveCalculation KY FUNCTION KY ANDAR NUM MY INTIAL TIME PAR NUM = 0 HOGA BY DEFAULT JO HAM NY USE STATE MY
// COUNT KO 0 RAKHAWA THA ===> (num = 0 + 1) ==> 0+1=1, 1+1=2, 2+1=3, 3+1=4, 4+1=5, 5+1=5, 6+1=7, 7+1=8, 8+1=9 , 9+1=10 ,
//  10+1=11, and so on untill loops end yani yahi num ki value har iteration par update hoti rahy gi or isi 
// trha 1000000000 times execute hogi har COUNT ky update hony par.
// const expensiveCalculation = (num) =>{  
// for (let i = 0; i < 1000000000; i++) { 
//     num = num + 1 }
// console.log("Result: ",num);
// return num; 
// }
// Iss sy fiada yah hoga ky expensiveCalculation() wala function ab sirf count ky click hony par hi execute hoga.
// ADD TODOS ky button par click karny jo phely expensiveCalculation() bhe call hojata tha woh ab nahe hoga kiu ky 
// expensiveCalculation() ki dependency my ham ny count pass kardiya hay yani ab expensiveCalculation() dependent hay 
// COUNT ki value par kiu ky ham count ki value ko expensiveCalculation(count) ky andar pass karwa rahy han or har 
// count par 1000000000 times iteration karwa rahy han expensiveCalculation() ky andar.

// Dekho Jab bhe ham apni REACT APPLICATION banaty han to mainly hamara focus jis par cheez par hona chaihyee woh 
// hamari APPLICATION ki performance hay to usy optimize karny ky liye ham USE MEMO hook ka use karty han, agar ham yah
// exepensive calculation perform nahe karwaty jis ki wjah sy hamari APPLICATION ki 
// performance kharab ho rahe hy to beshak my ADD TODO  ky button or COUNTER ky button par click hony par pory pory 
// Component ko RERENDER hony dety.  



