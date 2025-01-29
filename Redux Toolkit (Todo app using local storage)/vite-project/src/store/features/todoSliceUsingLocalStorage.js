import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosArray: [], // Initial state is empty
};

const todoSliceUsingLocalStorage = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log("add todo clicked", action.payload);
      state.todosArray.push(action.payload); // Add new todo to the state
    },

    deleteTodo: (state, action) => {
      console.log("delete todo clicked", action.payload);
      state.todosArray = state.todosArray.filter(
        (todo) => todo.id !== action.payload
      ); // Remove todo from the state
    },

    updateTodo: (state, action) => {
      console.log("Update todo clicked", action.payload);
      const { id, title } = action.payload; // Extract id and title from payload
      const todoIndex = state.todosArray.findIndex((todo) => todo.id === id);

      if (todoIndex !== -1) {
        // If the todo exists, update its title
        state.todosArray[todoIndex].title = title;
      } else {
        console.log("Todo not found");
      }
    },

    doneOrUndoTodoStatus: (state, action) => {
      console.log("Done or undone slice: ", action.payload);
      const todoIndex = state.todosArray.findIndex(
        (todo) => todo.id === action.payload
      );

      if (todoIndex !== -1) {
        // Toggle the completion status
        state.todosArray[todoIndex].isCompleted =
          !state.todosArray[todoIndex].isCompleted;
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, doneOrUndoTodoStatus } =
  todoSliceUsingLocalStorage.actions;

export default todoSliceUsingLocalStorage.reducer;