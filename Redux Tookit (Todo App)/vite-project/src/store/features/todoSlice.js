// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     todosArray: [
//         {id: Date.now(), title: "Breakfast at 5:30 am", isCompleted: false},
//     ]
// }
// const todoSlice = createSlice({
//   name: "todo",
//   initialState: initialState,

//   reducers: {
//     addTodo: (state,action)=>{
//       console.log("add todo clicked",action.payload)
//       state.todosArray.push(action.payload)
//     },

//     deleteTodo: (state,action)=>{
//       state.todosArray = state.todosArray.filter((todo)=>{
//       console.log("delete todo clicked", action.payload)
//         console.log(todo.id, action.payload)
//          if(todo.id !== action.payload){
//           return todo
//          }
//         })
 
// },

//     updateTodo: (state, action) => {
//       console.log("Update todo clicked", action.payload, state.todosArray);
//       const { id, title } = action.payload; // Extracting id and title from payload
//       const todoIndex = state.todosArray.findIndex((todo) => todo.id === id);
//       console.log(todoIndex)
    
//       if (todoIndex !== -1) {
//         // If the todo exists, update its title
//         state.todosArray[todoIndex].title = title;
//         //------------- OR --------------------
//         // state.todosArray[todoIndex].title = action.payload.title
//         console.log("Todo updated:", state.todosArray[todoIndex]);
//       } 
//       else {
//         console.log("Todo not found");
//       }
// },

// doneOrUndoTodoStatus: (state,action) =>{
//       console.log("Done or undone slice: ", action.payload)
//     }
//   }  
// })

// export const {addTodo, deleteTodo, updateTodo, doneOrUndoTodoStatus} = todoSlice.actions

// // Way : 01 (Naming export)
// // export const todoSliceReducer = todoSlice.reducer

// // Way : 02 (Defualt export)
// export default todoSlice.reducer

