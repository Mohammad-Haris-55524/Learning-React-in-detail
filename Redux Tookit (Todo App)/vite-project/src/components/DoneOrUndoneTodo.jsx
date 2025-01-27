import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// For normal todo slice
// import { doneOrUndoTodoStatus } from '../store/features/todoSlice'

// For Local storage todo slice
import { doneOrUndoTodoStatus } from '../store/features/todoSliceWithLocalStorage'

function DoneOrUndoneTodo({id}) {
    const [isChecked, setisChecked] = useState(false)
    const todoState = useSelector((state)=>state.todos.todosArray)
    const dispatch = useDispatch()
    console.log(id)

// ----------------------------------------------- Average code quality -----------------------------------------------
    // const checkboxHandler = (id) => {
    //     let doneUndoneTodo;
    //     if(isChecked){
    //         setisChecked(false)
    //         todoState.find((todo)=>{
    //             if(todo.id === id){  
    //                return doneUndoneTodo = {id: todo.id, title: todo.title ,isCompleted: checkboxValue}
    //             }
    //         })
    //     }
        
    //     else{
    //         setisChecked(true) 
    //         todoState.find((todo)=>{
    //             if(todo.id === id){
    //                return doneUndoneTodo = {id: todo.id, title: todo.title, isCompleted: checkboxValue}
    //             }
    //         })
    //     }
    //     dispatch(doneOrUndoTodoStatus(doneUndoneTodo))
    // }


// ----------------------------------------------- Good code quality -----------------------------------------------

const checkboxHandler = (e) => {

const checked = e.target.checked;
setisChecked(checked)
console.log(checked, isChecked)


const todo = todoState.find((todo)=> todo.id === id);
if(!todo) return; // agar todo milta hi nahe hay nichey ka code execute nae karwao yah safety ky liye code my likha hy 
// lekein ham ny add todo wala button hi disable kar diya hay aisa ho hi nahe skta ky todo undefined null yah empty mily 

const doneUndoneTodo = {
    id: todo.id,
    title: todo.title,
    // isCompleted: isChecked //Will not work fine check below
    isCompleted: checked // (checked) local variable hay yah har update par change hoga jab ky useState wala isChecked 1st
    // time par update nahe hoga second update par change hoga. check line 41 and in the end for more deep study between
    // useState changes the value between local variable(means without use state wala) 
}
console.log(doneUndoneTodo)
dispatch(doneOrUndoTodoStatus(doneUndoneTodo))
}


  return (
   <>
{/* // --------------------------------------------- Average code quality --------------------------------------------- */}
   {/* <input checked={isChecked} type="checkbox"  onChange={()=>checkboxHandler(id)}/> */}
   {/* <input checked={isChecked} type="checkbox" onChange={(e)=>checkboxHandler(e,id)}/> */}

{/* // ----------------------------------------------- Good code quality ----------------------------------------------- */}
  {/* Bhai id pass karny ki kia zarort jab id mil hi props ky through rahe hay kahen bhe use kar lo  */}
   <input checked={isChecked} type="checkbox" onChange={(e)=>checkboxHandler(e)}/>


   </>
  )
}

export default DoneOrUndoneTodo