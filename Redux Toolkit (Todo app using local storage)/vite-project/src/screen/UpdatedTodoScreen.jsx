import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodo from "../components/AddTodo";
import UpdateTodo from "../components/UpdateTodo";
import DeleteTodo from "../components/DeleteTodo";
import DoneOrUndoneTodo from "../components/DoneOrUndoneTodo";

function UpdatedTodosScreen() {
  const [todoTitle, setTodoTitle] = useState("");
  const [updateTodoOrNot, setUpdateTodoOrNot] = useState(false);

  // Get todos from Redux state
  const todos = useSelector((state) => state.todos.todosArray);
  const dispatch = useDispatch();

  return (
    <>
      <AddTodo
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        updateTodoOrNot={updateTodoOrNot}
        setUpdateTodoOrNot={setUpdateTodoOrNot}
      />
      <h1>Updated Todos Screen</h1>
      {todos.map((todo) => (
        <div
          style={{
            border: todo.isCompleted ? "5px solid green" : "5px solid red", width: "30rem",
          }}
          key={todo.id}
        >
          <div style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}> 
          <DoneOrUndoneTodo id={todo.id} isCompleted={todo.isCompleted}/>
          Id: {todo.id}, Title: {todo.title} 
          <UpdateTodo id={todo.id} setUpdateTodoOrNot={setUpdateTodoOrNot}/> 
          <DeleteTodo id={todo.id}/>
          </div>


        </div>
      ))}
    </>
  );
}

export default UpdatedTodosScreen;