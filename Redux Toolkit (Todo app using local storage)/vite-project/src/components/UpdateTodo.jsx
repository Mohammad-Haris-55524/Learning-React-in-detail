import React from 'react'

function UpdateTodo({id,setUpdateTodoOrNot}) {
    const updateTodoHandler = () => {
        console.log("Update todo clicked", id,setUpdateTodoOrNot)
        setUpdateTodoOrNot(id)

    }
  return (
   
    <button onClick={updateTodoHandler}>Update Todo</button>
  )
}

export default UpdateTodo