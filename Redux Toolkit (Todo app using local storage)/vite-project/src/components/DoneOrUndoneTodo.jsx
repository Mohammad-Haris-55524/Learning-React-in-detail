// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { checkedOrUncheckedTodoStatus } from '../store/features/todoSliceUsingLocalStorage';


// function DoneOrUndoneTodo({id,isCompleted}) {
//     const [checkboxCheckedOrNot, setcheckboxCheckedOrNot] = useState(false)
//     const todos = useSelector((state) => state.todos.todosArray);
//     const dispatch = useDispatch();
    
//     const checkboxHandler = (e) => {
//     console.log("Done and undone todo",  id, isCompleted)
//     let isChecked = e.target.checked
//     console.log(isChecked)

//     if(isChecked){
//         isChecked === false
//         setcheckboxCheckedOrNot(isChecked)
//         console.log("If")
//         todos.find((todo)=> {
//             if(todo.id === id){

//             let todoStatus = {
//                 id: todo.id,
//                 title: todo.title,
//                 isCompleted: isChecked
//             }
//             dispatch(checkedOrUncheckedTodoStatus(todoStatus))
//             }
//         })
      
//     }
 
//     else{
//         isChecked === true
//         setcheckboxCheckedOrNot(isChecked)
//         console.log("Else")
//         todos.find((todo)=> {
//             if(todo.id === id){
//             let todoStatus = {
//                 id: todo.id,
//                 title: todo.title,
//                 isCompleted: isChecked
//             }
//             dispatch(checkedOrUncheckedTodoStatus(todoStatus))

//             }
      

//         })
//     }
 
//     }
//   return (
//     <input type="checkbox"  onChange={checkboxHandler} checked={checkboxCheckedOrNot} />
//   )
// }

// export default DoneOrUndoneTodo

// ------------------------------------------------------------ CLEAN AND IMPROVED CODE ------------------------------------------------------

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkedOrUncheckedTodoStatus } from '../store/features/todoSliceUsingLocalStorage';


function DoneOrUndoneTodo({id,isCompleted}) {
    const [checkboxCheckedOrNot, setcheckboxCheckedOrNot] = useState(false)
    const todos = useSelector((state) => state.todos.todosArray);
    const dispatch = useDispatch();
    
    const checkboxHandler = (e) => {
    console.log("Done and undone todo",  id, isCompleted)
    let isChecked = e.target.checked
    console.log(isChecked)
    setcheckboxCheckedOrNot(isChecked)
    const todo = todos.find((todo) => todo.id === id)
    console.log(todo)
        let todoStatus = {
        id: todo.id,
        title: todo.title,
        isCompleted: isChecked
        }
        dispatch(checkedOrUncheckedTodoStatus(todoStatus)) 
    }
  return (
    <input type="checkbox"  onChange={checkboxHandler} checked={checkboxCheckedOrNot} />
  )
}

export default DoneOrUndoneTodo