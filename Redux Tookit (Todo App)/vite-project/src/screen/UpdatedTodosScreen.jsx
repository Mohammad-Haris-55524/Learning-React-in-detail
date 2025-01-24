import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AddTodo from '../components/AddTodo'
import DeleteTodo from '../components/DeleteTodo'
import UpdateTodo from '../components/UpdateTodo'
import DoneOrUndoneTodo from '../components/DoneOrUndoneTodo'

function UpdatedTodosScreen() {
   const [todoTitle, setTodoTitle] = useState("")
   const [updateTodoOrNot, setupdateTodoOrNot] = useState(false)
  //  const [doneUndoneTodo, setdoneUndoneTodo] = useState(false)
    const allTodos = useSelector((state)=> state.todos.todosArray)
    console.log({allTodos})
  return (
    <>
    <AddTodo todoTitle={todoTitle} setTodoTitle={setTodoTitle} updateTodoOrNot={updateTodoOrNot} 
    setupdateTodoOrNot={setupdateTodoOrNot}/>
    <h1>Updated Todos Screen</h1>
    {(allTodos || []).map((todo)=>{
        console.log(todo)
     
        return <div key={todo.id}><DoneOrUndoneTodo id={todo.id} isCompleted={todo.isCompleted} 
        // setdoneUndoneTodo={setdoneUndoneTodo}
        /> Todo id: {todo.id} Todo title: {todo.title}
        <DeleteTodo id={todo.id}/> 
        <UpdateTodo id={todo.id} title={todo.title} todoTitle={todoTitle} setTodoTitle={setTodoTitle} 
        updateTodoOrNot={updateTodoOrNot} setupdateTodoOrNot={setupdateTodoOrNot}/>
        
        </div> 
    })}
    
    </>
  )
}

export default UpdatedTodosScreen