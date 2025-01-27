import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todosArray: [
        // {id: Date.now(), title: "Breakfast at 5:30 am", isCompleted: false},
    ]
}


const todoSliceUsingLocalStorage = createSlice({
  name: "todo",
  initialState: initialState,

  reducers: {
    addTodo: (state,action)=>{
        console.log("add todo clicked", action.payload)
          state.todosArray.push(action.payload)
        
        // Getter for local storage: 
        // const gettingTodosDataFromLocalStorage = (localStorage.getItem('todosData') || []);
        // console.log(gettingTodosDataFromLocalStorage)
    const settingDataIntoArray = localStorage.setItem('todosData', JSON.stringify(state.todosArray));
    // settingDataIntoArray.push(action.payload)
    // gettingTodosDataFromLocalStorage.push(action.payload)
    // Setter for local storage: 
    // localStorage.setItem('todosData', JSON.stringify(settingDataIntoArray));
      
    // localStorage.setItem('todosData', JSON.stringify(gettingTodosDataFromLocalStorage.push(action.payload)));
    },

    deleteTodo: (state,action)=>{
      console.log("delete todo clicked", action.payload)
      // Getter for local storage: 
      const gettingTodosDataFromLocalStorage = localStorage.getItem('todosData');
      let convertingDateToJsObject = JSON.parse(gettingTodosDataFromLocalStorage)
      convertingDateToJsObject = convertingDateToJsObject.filter((todo)=>{
        console.log(todo.id, action.payload)
         if(todo.id !== action.payload){
          return todo
         }
        })
        console.log(state.todosArray, convertingDateToJsObject)
        localStorage.setItem('todosData', JSON.stringify(convertingDateToJsObject));
},

    updateTodo: (state, action) => {
      console.log("Update todo clicked", action.payload, state.todosArray);
      // console.log(state.todosArray[1].)
      const { id, title } = action.payload; // Extracting id and title from payload
      const todoIndex = state.todosArray.findIndex((todo) => todo.id === id);
      console.log(todoIndex)
    
      if (todoIndex !== -1) {
        // If the todo exists, update its title
        // state.todosArray[todoIndex].title = title;
        //------------- OR --------------------
        // state.todosArray[todoIndex].title = action.payload.title
        // console.log("Todo updated:", state.todosArray[todoIndex]);
        const gettingTodosDataFromLocalStorage = localStorage.getItem('todosData');
        let convertingDateToJsObject = JSON.parse(gettingTodosDataFromLocalStorage)
        convertingDateToJsObject[todoIndex].title = title;
        localStorage.setItem('todosData', JSON.stringify(convertingDateToJsObject));
      } 
      else {
        console.log("Todo not found");
      }
},

showUpdatedDataAndRenderItOnUi: () =>{

},

doneOrUndoTodoStatus: (state,action) =>{
      console.log("Done or undone slice: ", action.payload)
    }
    

  }  
})

export const {addTodo, deleteTodo, updateTodo, doneOrUndoTodoStatus} = todoSliceUsingLocalStorage.actions

// Way : 01 (Naming export)
// export const todoSliceReducer = todoSliceUsingLocalStorage.reducer

// Way : 02 (Defualt export)
export default todoSliceUsingLocalStorage.reducer

