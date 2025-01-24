import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doneOrUndoTodoStatus } from '../store/features/todoSlice'

function DoneOrUndoneTodo({id}) {
    const [isChecked, setisChecked] = useState(false)
    const todoState = useSelector((state)=>state.todos.todosArray)
    const dispatch = useDispatch()
    
    console.log(id)
    const checkboxHandler = (e,id) => {
        let doneUndoneTodo;
        let checkboxValue = e.target.checked;
        if(isChecked){
            setisChecked(false)
            todoState.find((todo)=>{
                if(todo.id === id){  
                   return doneUndoneTodo = {id: todo.id, title: todo.title ,isCompleted: checkboxValue}
                }
            })
        }
        
        else{
            setisChecked(true) 
            todoState.find((todo)=>{
                if(todo.id === id){
                   return doneUndoneTodo = {id: todo.id, title: todo.title, isCompleted: checkboxValue}
                }
            })
        }
        dispatch(doneOrUndoTodoStatus(doneUndoneTodo))
    }
  return (
   <>
   {/* <input checked={isChecked} type="checkbox"  onChange={()=>checkboxHandler(id)}/> */}
   <input checked={isChecked} type="checkbox" onChange={(e)=>checkboxHandler(e,id)}/>

   </>
  )
}

export default DoneOrUndoneTodo