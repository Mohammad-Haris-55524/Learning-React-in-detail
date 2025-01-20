import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../store/features/todoSlice'

function AddTodo() {
    const [todoTitle, setTodoTitle] = useState("")
    
    const ableOrDisableAddTodoBtn = todoTitle.trim() !== undefined &&  todoTitle.trim() !== ""
    console.log(ableOrDisableAddTodoBtn)

    // useSelector Hook for accessing the gloabal state
    const todoState = useSelector((state)=>state)
    console.log(todoState)
    // useDispatch Hook for accessing function creater made in global state
    const dispatch = useDispatch()

    const addTodoTitleHandler = (e) =>{
      console.log(e.target.value)
      setTodoTitle(e.target.value)
    }

    const todoSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(todoTitle)) 
    setTodoTitle('')
    }
  return (
    <>
    <h1>Todo Application using Redux (Global state managnment)</h1>
    <form onSubmit={todoSubmitHandler}>
    <input type="text" value={todoTitle} placeholder='Add Title' onChange={addTodoTitleHandler} />
    <button disabled={!ableOrDisableAddTodoBtn}>Add Todo</button>
    </form>
    </>
    
  )
}

export default AddTodo