import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTodo } from '../store/features/todoSlice'

function UpdateTodo({id,title, todoTitle, setTodoTitle, updateTodoOrNot, setupdateTodoOrNot, isCompleted}) {
    const todoState = useSelector((state)=>state.todos.todosArray)
    const dispatch = useDispatch()
    // console.log("Todos: ",id)
  //  console.log(isCompleted)

    const updateTodoHandler = (id) => {
      console.log("todo button clicked: ",id)
      todoState.filter((todo)=>{
        if(todo.id === id){
          // console.log(todo)
          setTodoTitle(todo.title)
          setupdateTodoOrNot({id})
          // dispatch(updateTodo({id, title}))
        }

      })
    }
  return (
    <>
    
        {/* <button onClick={()=>dispatch(updateTodo({id,title}))}>Update Todo</button> */}
        <button onClick={()=>updateTodoHandler(id)}>Update Todo</button>

    
    </>
  )
}

export default UpdateTodo