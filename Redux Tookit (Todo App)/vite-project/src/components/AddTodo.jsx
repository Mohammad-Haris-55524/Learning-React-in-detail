import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../store/features/todoSlice'


function AddTodo({todoTitle, setTodoTitle,updateTodoOrNot, setupdateTodoOrNot}) {
   
    
    const ableOrDisableAddTodoBtn = todoTitle.trim() !== undefined &&  todoTitle.trim() !== ""
    console.log(ableOrDisableAddTodoBtn)

    // useSelector Hook for accessing the gloabal state
    const todoState = useSelector((state)=>state)
    console.log(todoState)
    // useDispatch Hook for accessing function creater made in global state
    const dispatch = useDispatch()

    const addTodoTitleHandler = (e) =>{
      // console.log(e.target.value)
      setTodoTitle(e.target.value)
    }

    const todoSubmitHandler = (e) => {
    e.preventDefault()
    if(updateTodoOrNot){
      console.log("I am from update todo", updateTodoOrNot ,todoTitle )
      const userUpdatedTodo = {
        id: updateTodoOrNot.id, title: todoTitle
      }

      dispatch(updateTodo(userUpdatedTodo))
      setupdateTodoOrNot(false)
    }
    else{
      const userInputTodo = {
        id: Date.now(), title: todoTitle
      }
    dispatch(addTodo(userInputTodo)) 

    }
    setTodoTitle('')
    }

  return (
    <>
    <h1>Todo Application using Redux (Global state managnment)</h1>
    <form onSubmit={todoSubmitHandler}>
    <input type="text" value={todoTitle} placeholder='Add Title' onChange={addTodoTitleHandler} />
    <button disabled={!ableOrDisableAddTodoBtn}>{updateTodoOrNot ? "Update Todo" : "Add Todo"}</button>
    </form>
    </>
    
  )
}

export default AddTodo