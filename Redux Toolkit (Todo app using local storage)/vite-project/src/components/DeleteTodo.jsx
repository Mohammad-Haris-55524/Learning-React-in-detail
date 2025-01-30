import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../store/features/todoSliceUsingLocalStorage';

function DeleteTodo({id}) {
    const dispatch = useDispatch();

    const deleteTodoHandler = () => {
    dispatch(deleteTodo(id)) 
    }
  return (
    <button onClick={deleteTodoHandler} >Delete Todo</button>
  )
}

export default DeleteTodo