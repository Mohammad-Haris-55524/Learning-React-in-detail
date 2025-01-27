import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// For normal todo slice
// import { deleteTodo } from '../store/features/todoSlice'

// For Local storage todo slice
import { deleteTodo } from '../store/features/todoSliceWithLocalStorage'


function DeleteTodo({id}) {
        // useDispatch Hook for accessing function creater made in global state
        const dispatch = useDispatch()
        // console.log(id)
  return (
    <>
    <button onClick={()=>dispatch(deleteTodo(id))}>Delete Todo</button>
    </>
  )
}

export default DeleteTodo