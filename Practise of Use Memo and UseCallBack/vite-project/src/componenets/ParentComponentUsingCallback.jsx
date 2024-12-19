// -------------------------------------- LEARINIG ABOUT CALLBACK HOOK (A) ?---------------------------------------------
// 1) WHY WE NEED TO USE USE CALLBACKS HOOK
// 2) USE CALLBACKS VS MEMO
// 3) ALWAYS REMEMBER MEMO, USE MEMO, USE CALLBACKS ALL THESE HOOKS ARE USE FOR OPTIMIZATION AND TO INCRAESE PERFORMANCE 
// OF OUR REACT APPLICATION
// ---------------------------------------------------------------------------------------------------------------------
import React, { useCallback, useState } from 'react'
import ChildComponentUsingCallback from './ChildComponentUsingCallback';

function ParentComponentUsingCallback() {
    const [todos, setTodos] = useState([]);
    const [counter, setCounter] = useState(0);

    const counterHandler = () =>{
        setCounter(() => counter + 1);
    }

// ------------------------------------------ PART 01 (CREATES SIMPLE ARRAY) ------------------------------------------
//----------------- A NORMAL FUNCTION WITHOUT USE CALLBACK HOOK CAN CAUSE unnecessary re-renderings --------------------
// A NORMAL FUNCTION WITHOUT USE CALLBACK CAUSES UNNECESSARY RERENDERS WHEN A FUNCTION IS PASSED AS A PROPS TO ANY 
// COMPONENT
//This funct will create an array when a user click's on add todo button it adds the previous todo with the updated todo.
    // const addTodoHandler = () => setTodos((prevTodos) => [...prevTodos, "New Todo"]);
       
//-------------------------------THE POWER OF USE CALLBACK HOOK VS A NORMAL FUNCTION------------------------------------
// USE CALLBACK WILL STOP UNNECESSARY RERENDER's like when COUNT STATE WILL BE UPDATED THIS FUNCTION WILL NOT WORK
    const addTodoHandler = useCallback(()=>{
        setTodos((prevVal) => [...prevVal, "New Todo"]);
    },[todos])
    
// ----------------------------------------- PART 02 (CREATES ARRAY OF OBJECT) -----------------------------------------
//----------------- A NORMAL FUNCTION WITHOUT USE CALLBACK HOOK CAN CAUSE unnecessary re-renderings --------------------
// A NORMAL FUNCTION THAT CREATES AN ARRAY OF OBJECT WHENEVER A USER CLICK'S ON ADD TODO BUTTON
    // const addTodoHandler = () =>{
    //     setTodos((prevVal) => {
    //         console.log({todos},{prevVal})
    //         return [...prevVal, {id: todos.length ,name: "New Todo"}];
    //     });
    // }
//-------------------------------THE POWER OF USE CALLBACK HOOK VS A NORMAL FUNCTION------------------------------------
// const addTodoHandler = useCallback(()=>{
//     setTodos((prevVal) => {
//         console.log({todos},{prevVal})
//         return [...prevVal, {id: todos.length ,name: "New Todo"}];
//     });
// },[todos])
    

//----------------------------------- SELF REVISON ABOUT NON PRIMITIVE DATA TYPES --------------------------------------
    // SELF PRACTISE JUST CHECKING WETHER THE 2 FUNCTIONS CAN BE EUQAL OR NOT IF THEY HAVE SAME VALUES 
    // const addTodoHandler1 = () => setTodos((prevTodos) => [...prevTodos, "New Todo"]);
    // console.log(addTodoHandler == addTodoHandler1); // (false) Again, despite identical bodies, their references are
    //  different.
    
    // const z = addTodoHandler1 // Here, z is assigned the reference of addTodoHandler1.
    // // Since both addTodoHandler1 and z point to the same function object in memory, the comparison returns true
    // console.log(z ===addTodoHandler1) // (true)
    // console.log(z === addTodoHandler) // (false) Again, despite identical bodies, their references are different.
// ---------------------------------------------------------------------------------------------------------------------


    console.log("Rendering From PARENT COMPONENT ....")
  return (
    <div>
        <div>
            <button onClick={counterHandler}>Counter</button>
            <h3>Counter: {counter}</h3>
        </div>
            <div>
            <button onClick={addTodoHandler}>Add Todo</button>
        </div>
        <ChildComponentUsingCallback todos={todos} addTodoHandler={addTodoHandler}/>

    </div>
  )
}

export default ParentComponentUsingCallback