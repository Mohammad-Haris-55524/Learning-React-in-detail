import React from 'react'
import { useSelector } from 'react-redux'
import AddTodo from '../components/AddTodo'
import DeleteTodo from '../components/DeleteTodo'
import UpdateTodo from '../components/UpdateTodo'

function UpdatedTodosScreen() {
    const allTodos = useSelector((state)=> state.todos.todosArray)
    console.log(allTodos)
  return (
    <>
    <AddTodo />
    <h1>Updated Todos Screen</h1>
    {allTodos.map((todo)=>{
        console.log(todo)
        return <div key={todo.id}>Todo id: {todo.id} Todo title: {todo.title}
        <DeleteTodo id={todo.id}/> 
        <UpdateTodo id={todo.id} title={todo.title}/>
        
        </div> 
    })}
    
    </>
  )
}

export default UpdatedTodosScreen