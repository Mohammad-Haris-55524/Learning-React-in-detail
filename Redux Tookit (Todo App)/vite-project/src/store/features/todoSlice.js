import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todosArray: [
        {id: Date.now(), title: "Breakfast at 5:30 am"},
    ]
}
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,

  reducers: {
    addTodo: (state,action)=>{
      console.log("add todo clicked")
      // console.log(action.payload)
      const userInputTodo = {
        id: Date.now(), title: action.payload
      }
      state.todosArray.push(userInputTodo)
      console.log(state.todosArray)
      

    },

    deleteTodo: (state,action)=>{
      console.log("delete todo clicked", action.payload)
      state.todosArray = state.todosArray.filter((todo)=>{
        console.log(todo.id, action.payload)
         if(todo.id !== action.payload){
          return todo
         }
        })
        console.log(state.todosArray)
      
    },

    updateTodo: (state,action) =>{
      console.log("Update todo clicked",action.payload)
      
    
    } 

  }  
})

export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions

// Way : 01 (Naming export)
// export const todoSliceReducer = todoSlice.reducer

// Way : 02 (Defualt export)
export default todoSlice.reducer

