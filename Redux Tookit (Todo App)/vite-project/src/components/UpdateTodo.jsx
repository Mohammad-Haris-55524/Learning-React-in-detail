import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTodo } from '../store/features/todoSlice'

function UpdateTodo({id,title}) {
    const dispatch = useDispatch()
    console.log(id,title)
  return (
    <>
        <button onClick={()=>dispatch(updateTodo({id,title}))}>Update Todo</button>
    
    </>
  )
}

export default UpdateTodo