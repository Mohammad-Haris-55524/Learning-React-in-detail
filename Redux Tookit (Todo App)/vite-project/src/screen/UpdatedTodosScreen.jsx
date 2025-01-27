import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AddTodo from '../components/AddTodo'
import DeleteTodo from '../components/DeleteTodo'
import UpdateTodo from '../components/UpdateTodo'
import DoneOrUndoneTodo from '../components/DoneOrUndoneTodo'

// function UpdatedTodosScreen() {

//   // For todo Slice does not contain local storage functionalites
//    const [todoTitle, setTodoTitle] = useState("")
//    const [updateTodoOrNot, setupdateTodoOrNot] = useState(false)
//     const allTodos = useSelector((state)=> state.todos.todosArray)
//     console.log({allTodos})

//   return (
//     <>
//     <AddTodo todoTitle={todoTitle} setTodoTitle={setTodoTitle} updateTodoOrNot={updateTodoOrNot} 
//     setupdateTodoOrNot={setupdateTodoOrNot}/>
//     <h1>Updated Todos Screen</h1>
//     {(allTodos || []).map((todo)=>{
//         console.log(todo)
     
//         return <div style={{border: todo.isCompleted ? "5px solid green" : "5px solid red"}} key={todo.id}>
//         <DoneOrUndoneTodo id={todo.id} isCompleted={todo.isCompleted} 
//         // setdoneUndoneTodo={setdoneUndoneTodo}
//         /> Todo id: {todo.id} Todo title: {todo.title}
//         <DeleteTodo id={todo.id}/> 
//         <UpdateTodo id={todo.id} title={todo.title} todoTitle={todoTitle} setTodoTitle={setTodoTitle} 
//         updateTodoOrNot={updateTodoOrNot} setupdateTodoOrNot={setupdateTodoOrNot}/>
        
//         </div> 
//     })}
    
//     </>
//   )
// }


function UpdatedTodosScreen() {

  // This is for  todo Slice with local storage it contain all local storage functionalites
   const [todoTitle, setTodoTitle] = useState("")
   const [updateTodoOrNot, setupdateTodoOrNot] = useState(false)
    const allTodos = useSelector((state)=> state.todos.todosArray)
    console.log({allTodos})

    const gettingTodosDataFromLocalStorage = localStorage.getItem('todosData');
    let convertingDateToJsObject = JSON.parse(gettingTodosDataFromLocalStorage)
    console.log(gettingTodosDataFromLocalStorage,convertingDateToJsObject)

    useEffect(()=>{
      
    },[convertingDateToJsObject])

  return (
    <>
    <AddTodo todoTitle={todoTitle} setTodoTitle={setTodoTitle} updateTodoOrNot={updateTodoOrNot} 
    setupdateTodoOrNot={setupdateTodoOrNot}/>
    <h1>Updated Todos Screen</h1>
    {(convertingDateToJsObject || []).map((todo)=>{
        console.log(todo)
     
        return <div style={{border: todo.isCompleted ? "5px solid green" : "5px solid red"}} key={todo.id}>
        <DoneOrUndoneTodo id={todo.id} isCompleted={todo.isCompleted} 
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