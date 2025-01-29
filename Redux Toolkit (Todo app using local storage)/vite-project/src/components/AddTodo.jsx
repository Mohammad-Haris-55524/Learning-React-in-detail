import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../store/features/todoSliceWithLocalStorage";

function AddTodo({ todoTitle, setTodoTitle, updateTodoOrNot, setUpdateTodoOrNot }) {
  const dispatch = useDispatch();

  const todoSubmitHandler = (e) => {
    e.preventDefault();
    if (updateTodoOrNot) {
      const userUpdatedTodo = {
        id: updateTodoOrNot.id,
        title: todoTitle,
        isCompleted: false,
      };
      dispatch(updateTodo(userUpdatedTodo));
      setUpdateTodoOrNot(false);
    } else {
      const userInputTodo = {
        id: Date.now(),
        title: todoTitle,
        isCompleted: false,
      };
      dispatch(addTodo(userInputTodo));
    }
    setTodoTitle("");
  };

  return (
    <>
      <h1>Todo Application using Redux (Global state management)</h1>
      <form onSubmit={todoSubmitHandler}>
        <input
          type="text"
          value={todoTitle}
          placeholder="Add Title"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button disabled={!todoTitle.trim()}>
          {updateTodoOrNot ? "Update Todo" : "Add Todo"}
        </button>
      </form>
    </>
  );
}

export default AddTodo;