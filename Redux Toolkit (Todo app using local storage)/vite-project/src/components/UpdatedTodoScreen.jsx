import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodo from "../components/AddTodo";
import DeleteTodo from "../components/DeleteTodo";
import UpdateTodo from "../components/UpdateTodo";
import DoneOrUndoneTodo from "../components/DoneOrUndoneTodo";
import {
  addTodo,
  deleteTodo,
  updateTodo,
  doneOrUndoTodoStatus,
} from "../store/features/todoSliceWithLocalStorage";

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
            border: todo.isCompleted ? "5px solid green" : "5px solid red",
          }}
          key={todo.id}
        >
          <DoneOrUndoneTodo
            id={todo.id}
            isCompleted={todo.isCompleted}
            onClick={() => dispatch(doneOrUndoTodoStatus(todo.id))}
          />
          Todo id: {todo.id} Todo title: {todo.title}
          <DeleteTodo id={todo.id} onClick={() => dispatch(deleteTodo(todo.id))} />
          <UpdateTodo
            id={todo.id}
            title={todo.title}
            todoTitle={todoTitle}
            setTodoTitle={setTodoTitle}
            updateTodoOrNot={updateTodoOrNot}
            setUpdateTodoOrNot={setUpdateTodoOrNot}
          />
        </div>
      ))}
    </>
  );
}

export default UpdatedTodosScreen;