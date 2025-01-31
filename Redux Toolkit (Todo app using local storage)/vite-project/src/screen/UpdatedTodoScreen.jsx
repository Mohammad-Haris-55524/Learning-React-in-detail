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
      <h1>Todos Main Screen (No of Todos: {todos.length})</h1>
      {todos.length === 0 && <h1>No Todos Found !</h1>}
      {todos.map((todo,index) => (
        <div
          style={{
            border: todo.isCompleted ? "5px solid green" : "5px solid red", width: "30rem", marginBottom: "1rem"
          }}
          key={todo.id}
        >
          <div style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}> 
          <DoneOrUndoneTodo id={todo.id} isCompleted={todo.isCompleted}/>
          No: {index + 1} Id: {todo.id}, Title: {todo.title} 
          <UpdateTodo id={todo.id} title={todo.title} setUpdateTodoOrNot={setUpdateTodoOrNot}
          setTodoTitle={setTodoTitle}/>
          <DeleteTodo id={todo.id}/>
          </div>


        </div>
      ))}
    </>
  );
}

export default UpdatedTodosScreen;