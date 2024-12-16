import React, { Component, useState } from 'react'

function todossUsingState() {
    const initialtodos = [
        {
          id: 1,
          title: "todos 1",
          complete: false,
        },
        {
            id: 2,
            title: "todos 2",
            complete: false,
        },
    ];
    const [todos, settodos] = useState(initialtodos);
    const [addtodosInput, setAddtodosInput] = useState({title:""});
    const [editTodoAndShowOnUi, seteditTodoAndShowOnUi] = useState(false)
    // const btnVal = (Object.keys(addtodosInput.title).length)
    const btnVal = addtodosInput.title !== ""
    console.log(btnVal)
    console.log(addtodosInput.title === true)
    // console.log(todos.length);
    
    const handlerComplete = (mytodos) =>{
        console.log(mytodos.id)
        settodos((prevtodos) => {
        // console.log(mytodos,prevtodos)
       let modifiedtodos = prevtodos.map((item)=>{
        if(mytodos.id === item.id){
        console.log("Handle complete")
        return {...item, complete: !item.complete} 
        }                                          
        else{

          return item
        }
        })
        console.log(modifiedtodos);
        return modifiedtodos; // Jo bhe cheez my yahaan return karawa raha hon woh hamary settodos() ki STATE my save ho gy gi.
        })
  }
// DELETE A SELECTED todos
  const deletetodosHandler = (todosToGetId) =>{
    // console.log({todos},todosToGetId)
    const selectedId = todosToGetId.id
    settodos((prevtodos)=>{
      // console.log(prevtodos)
    const modifiedtodos = prevtodos.filter((item)=>{
        if(selectedId !== item.id){
          console.log(item)
          console.log({prevtodos},{item})
          return [...prevtodos, item]
          // return item
        }
        else{
          return false
        }
      
      })
      console.log(modifiedtodos)
      return modifiedtodos;// Jo bhe cheez my yahaan return karawa raha hon woh hamary settodos() ki STATE my save ho gy gi.  
    })

// PASS AN INPUT INTO A todos FIELD AND DATA WILL BE STORED ON EVERYH INPUT CHANGE INTO THE ADD todos INPUT. 
  }
  const addtodosHandler = (e) =>{
    console.log(e.target)
    const {id,value} = e.target
    console.log({id,value})
    // Approach # 01
    // setAddtodosInput({
    // ...addtodosInput,
    // [id]: value,
    // id: Date.now(),
    // complete: false});
    // Approach # 02
    setAddtodosInput((prevtodos)=>{
      console.log(prevtodos)
      return {
      ...prevtodos,
      [id]: value,
      id: todos.length + 1,
      complete: false}
    });
}

const edittodosHandler = (todo) =>{
console.log(todo.title);
console.log("Before",addtodosInput)
setAddtodosInput({title: todo.title})
console.log("After",addtodosInput)
console.log(todo,todos);
seteditTodoAndShowOnUi(todo);
}
// NOW WE WANT TO SHOW THE DATA ON THE UI THAT IS STORED INTO THE STATE (ADD todos INPUT). WHEN THE USER WILL CLICK ON
// (ADD todos) BUTTON THEN THE (INPUT FIELD DATA) WILL BE SET/PASSED TO ORIGNAL todos STATE (todos). WE ARE SETTING ADD todos
// INPUT FIELD DATA TO THE todos BECAUSE THE todos IS MAPPED IN THE JSX SO THAT WE CAN RERENDER THE ANY CHANGE THAT OCCURS 
// IN THE MAIN todos STATE.
const onSubmitDataHandler = (e) => {
  e.preventDefault();
  // console.log(editTodoAndShowOnUi);
  if(editTodoAndShowOnUi){
  console.log("Edit todo function will work ",editTodoAndShowOnUi,addtodosInput.title)
  settodos((prevtodos)=>{
  // By 2 ways we can return the result after mapping;
  // 1)By using return before mapping. 
    // return prevtodos.map((item)=>{
  //2)By creating a variable and after mapping in the end we will return the result and the result will go in the setTodos
  // only after being return
  const editedTodo = prevtodos.map((item)=>{
      if(item.id === editTodoAndShowOnUi.id){
        // console.log(editTodoAndShowOnUi.id,editTodoAndShowOnUi)
        console.log([...prevtodos],{...prevtodos})
        return {title: addtodosInput.title, id: editTodoAndShowOnUi.id}
      }
      else{
        return item
      }
    })
    return editedTodo; // Jo bhe cheez my yahaan return karawa raha hon woh hamary settodos() ki STATE my save ho gy gi.
  })
  setAddtodosInput("")
  seteditTodoAndShowOnUi(false)
  }
  
  else{
  console.log(addtodosInput)
  console.log(addtodosInput.title)
 if(!addtodosInput){
  return false
 }
  console.log("Add todo function will work")
  // Approach # 01:
  // const newtodos = {
  //   id: Date.now(),
  //   ...addtodosInput,
  //   complete: false
  // }
  settodos((prevtodos)=> {
    // console.log({prevtodos},{newtodos})
    // Apprach # 02:
    return [...prevtodos,{id:Date.now(), ...addtodosInput,complete: false}]
    });
  if(addtodosInput === ""){
    return false
  }
  setAddtodosInput("")

  }

  console.log("I am data submitting: ",todos)
}
  console.log(todos)

  return (
  <>
  <div className='my-class'>
  <div>
  <form onSubmit={onSubmitDataHandler}>
  <input type="text" value={addtodosInput.title || ""} id='title' onChange={addtodosHandler}
  />
  {/* <button disabled={(btnVal > 0 ? false : true)}>Add todos</button> */}
  <button disabled={!btnVal}>{editTodoAndShowOnUi ? "Update Todo" : "Add Todo"}</button>
  {/* disabled={!btnVal} */}
  </form>
  </div>
  <div>{todos.map((t,index)=>{
      return <label key={index}>
        <div style={{border: t.complete ? `2px solid green` : `2px solid red`, marginBottom: "0.4rem"}}>
        <input type="checkbox"
        checked = {t.complete}
        onChange={() => handlerComplete(t)}/>
        {t.title}
        <button onClick={()=>deletetodosHandler(t)}>Delete todos</button>
        <button onClick={()=>edittodosHandler(t)}>Edit todos</button>
        </div>
      </label>
    })}
  </div>
</div>
</>
  )
}

export default todossUsingState

// --------------------------------- WHY WE PREFER USE REDUCER OVER USE STATE ? --------------------------------------
// Conclusion:
//1) Yahaan koi issue to nahe aa raha bss aik problem yah ho rahe hay ky jo logic hay hamary state ko handle karny ki woh
// to woh logic hamary Component ky code ky andar aa rahe hy. Mtlb indirectly hamary Component ka code increase ho raha hy 
//2) Use Reducer ko use karny ka hamry yah faida ho raha hy ky jo bhe STATE sy related custom logic hon gi woh ham 
// Component sy nikal kar yani Component sy extract kar ky aik alag file ky andar rakhen gy.
//3) Jo sara kaam phelay ham Component ky andar kar rahy thy STATE ko manage karny ka For example: (check line 25-37) 
// (check line 44-55). Woh kam ab nahe karen gy or iss trha ki complex logic jo ham COMPONENT ky andar kar rahy thy 
// STATE ko handle karny ky liye woh sab ab ham USE REDUCER ka use kar ky alag file create ky kar uss ky andar complex
// and custom logic ko rakhen gy jiss sy hamary Component ka code bhe clean rahy ga and COMPONENT my code kam sy kam 
// hoga or hamey debugging karny my bhe assani hogi.  
