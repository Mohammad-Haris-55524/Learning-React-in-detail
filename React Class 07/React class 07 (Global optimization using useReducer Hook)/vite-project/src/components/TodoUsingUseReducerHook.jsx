import React, { Component, useReducer, useState } from 'react'
import { actionsTypes } from '../constants';
//-------------------------------------------- BEFORE USING REDUCER HOOK() ? --------------------------------------------- 
// Jo sara kaam phelay ham MAin Component ky andar kar rahy thy STATE ko manage karny ka. Yah phr STATE sy related jo bhe hamara code hay jis my ham
// ny complex and customs logic par kaam kar rahy han jis ki wjah sy hamary Component ka code messy ho raha hy or jab hamary Main Component ka
// code clean or messy hoga to hamey Component ky code ko debug karny ny issue aa skty han issi wjah sy USE REDUCER() HOOK ka use karen gy.
//--------------------------------------------------- WHY WE NEED TO USE REDUCER HOOK() ? ---------------------------------------------------- 
// USE REDUCER() HOOK hamey help kary ga ky jo bhe MAIN COMPONENT sy related STATE ko manage karny ka code complex code hoga ham uss ki 1 alag
// file create kar lein gy jab bhe hamey uss code ki need pary gi ham file ko export and import karawa lein gy yah phr ham code ko MAIN COMPONENT
// sy bahar rakhen gy jiss ki wjah sy hamey Component ky andar code nahe karna pary ga or hamara Main Component ka code clean rahy ga.
// The useReducer Hook accepts two arguments.
// useReducer(<reducer>, <initialState>)
// The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.
// The useReducer Hook returns the current state and a dispatch method.
// 1) Reducer my hamey 1 function milta hay jiss my STATE sy related custom logic hoti hay.
// 2) InitialState ko ham as a INITIAL VALUE use karty han jab bhe STATE ky through koi bhe variable create karwaty han. To iss case my hamary 
// pas initialState my 1 array OBJECT bhe hoskta hay yah phr array bhe hoskta hay jo  
// SYNTAX: 
// const [todos, dispatch] = useReducer(reducer, initialTodos);
// Todos: Todos my array of objects milain gy hamey jo ham ny initialTodos my pass kiye hongy.
// 2) Dispatch my basically hamety 1 function milta hay. Dispatch function ky andar ham woh chezain pass karty han jo hamey apnay reducer ky 
// function my chaihyee apni logic ko perform karwany ky liye woh sab chezain ham Dispatch function ky andar pass karty han or yah sab chezain
//  hamey action ky variable ky andar mil jayen gi jo ky hamary pass reducer function ky andar mojood hay. 
// The dispatch function returned by useReducer lets you update the state to a different value and trigger a re-render. You need to pass the 
// action as the only argument to the dispatch function:
// ---------------------------------------------------------------------------------------------------------------------------------------------
// FOR EXAMPLE: CHECK BELOW OUR COMPONENT CODE WHICH IS RELATED TO STATE HANDLING AND HAS COMPLEX AND MANY CUSTOM LOGIC CODE THAT MIGHT MAKE
// OUR MAIN COMPONENT MESSY THAT IS WHY WE HAVE WROTE THIS CODE OUTSIDE THE COMPONENT, SO THAT OUR COMPONENT CODE REMAINS CLEAN  

// THIS CODE IS RELATED TO TodoUsingUseReducerHook IS KEPT OUTSIDE THE COMPONENT
export const initialTodos = {
todos : [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
],
// isLoading: false,
// errorMessage : false
}
console.log(initialTodos)

// What is STATE AND ACTION IN A REDUCER FUNCTION PARAMETER?
//1)STATE ky andar hamey woh chezain milain gi jo ky ham ny useReducer(reducer,initialTodos) ky andar as a second argument jo cheezain pass ki 
// hongi iss example my hamey (initialTodos) ka array of object mily ga. To basically STATE ky andar hamey pora array of object of TODOS mil
// gy ga.
const reducer = (state, action) => {
//dispatch function my pass ki gaye TYPE: .... ki value ka object/array hamey yahaan action my mily ga or ham usy action.type kar ky get karein
// gy or SWITCH(EXPRESSION) ky andar pass kar dein gy taky SWITCH ky andar diye gy multiple case ky code ko execute karwa saken.
console.log("Reducer function executed:", state,action, action.type,actionsTypes, actionsTypes.type);
// --------------------- Normal techinique for using USE REDUCER HOOK BY USING SWITCH CASE ----------------------------- 
// _______________________________________ ACTION.TYPE VS ACTIONTYPES.TYPE _____________________________________________
// ACTION.TYPE ko switch ky andar kiu rakha hy. Kia ham actionTypes ky object ko bhe switch (expression) ky andar rakh skty han ????????????
// _________________________________________________ ANSWER ____________________________________________________________ 
// ACTION.TYPE ko switch ky andar isi liye kar rakha hay kiu ky action my hamey woh cheez milti hay jo ham dispatch function my pass karty han
// to phr .type karny sy hamey woh EXPRESSION mil jata hay jisy ham SWITCH statment ky andar diye gay mulitple CASES ky andar check karty han.
// EXPRESSION apnay ko check kary ga SWITCH(EXPRESSION) ky andar. Jab ham SWITCH(ACTION.TYPE) sy match kar gy ga to woh selected case my enter
// hogy ga jo ham ny dispatch function my pass kiya hoga.
// switch (action.type) {  
// case "COMPLETE":// Jesa ky action.type my agar type ky andar type: COMPLETE mily ga to hamara code COMPLETE ky block my aagy ga or sirf 
// COMPLETE waly code ka hi execution kary ga.
//------------------- GOOD PRACTISE USING CONSTANT FOLDER AND IMPRORTING VALUES FORM CONSTANT FOLDER -------------------
//___________________ MAIN QUESTION ARISES: Why we don't pass ACTIONTYPES in Switch(ACTIONTYPES) ? _____________________
// ANSWER: 
// ACTIONTYPES: Kiu ky ACTIONTYPES ky andar hamey OBJECT mily ga jisy ham ny constants ky folder ky andar create kiya hay. Or jab ap SWITCH ky 
// andar Switch(ACTIONTYPES) ko pass karen gy to Iss my hamey object mily ga multiples KEY VALUES ka or ap phely hi janty han ky jab bhe 
// user koi operation perform kary ga to uss operation ky lihaaz jo  bhe function execute hoga to uss ky function ky dispatch function ky andar
// ham jo type ki value pass karien gy woh match nahe kary gi iss OBJECT ACTIONTYPES sy kiu ky ACTIONTYPES OBJECT hay or jo dispatch function
// value dy ga woh single value hogi to uss ki wjah sy SWITCH CASE ki logic break ho gy gi. Or yaad rahy ky agar ham ny ACTIONTYPES.TYPE rakh 
// diya switch ky andar to hamey undefined mily ga kiu ky ACTIONTYPES object hay or iss object ky andar koi type name ki KEY present nahe hy    
      switch(action.type){ 
        case actionsTypes.completeOrInCompleteTodo: {
        return state.map((todo) => {
          if (todo.id === action.id) {
            // console.log(todo)
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        });
      }

        case "Add-Todo": {
        console.log("Add todo clicked")
        console.log({state},action.todoTitle)
        console.log(action)
        // state.push(action.todoTitle);
       return [
            ...state,
            {
              id: state.length + 1, // Best approach Date.now()
              title: action.todoTitle,
              complete: false
            }
       ]
      }

       case "Delete-Todo": {
        console.log("Delete btn clicked: ",action)
        return state.filter((todo)=>{
          if(action.id !== todo.id){
            return todo
          }
          return false
        })
       }
       
       case "Edit-Todo" : {
         console.log("Edit btn clicked")
        // console.log(state, action.payload.title,action.payload.id,action.payload.complete)
        console.log(action.payload)
        // console.log({id:action.payload.id})
        return state.map((todo)=>{
         if(todo.id === action.id){
          return {...todo, title: action.payload }
         } 
         else{
          return todo
         }
        })
       }
      default:
        return state;
    }
  };
  
// ---------------------------------------- Component code starts from here ----------------------------------------
  function TodoUsingUseReducerHook() {
    const [todos, dispatch] = useReducer(reducer, initialTodos.todos);
    console.log(todos,dispatch);
    const [addTodoInput, setAddTodoInput] = useState({todoTitle:""})
    const [showTodoTitleInInputField,setShowTodoTitleInInputField] = useState(null)
    // console.log(todos.length)

    // MARK TODO AS COMPLETE OR UNCOMPLETE
    const handleComplete = (todo) => {
      dispatch({ type: actionsTypes.completeOrInCompleteTodo, id: todo.id }); // dispatch my jo ham pass karein gy woh hamey action my mily ga .
    };
  

// PASS AN INPUT INTO A TODO FIELD AND DATA WILL BE STORED ON EVER INPUT CHANGE INTO THE ADD TODO INPUT. MAGAR HAM 
// CHAHTY HAN KY AddTodoInput WALA DATA SIRF TAB HI FINAL WALI REDUCER HOOK KY TODOS MY ADD HO JAB USER ADD TODO KY BTN
// PAR CLICK KARY TO USS KY LIYE HAM NY NICHEY AIK OR FUNCTION BANYA HOWA HAY onSubmitAddTodosHandler KY NAME SY JO YAHE
// CHEEZ MANAGE KAR RHAA HY   
    const addTodoInputHandler = (e) =>{
     const {id,value} = e.target;
    //  console.log(addTodoInput.todoTitle.length)
    setAddTodoInput((prevTodo)=>{
      return {...prevTodo, [id] : value}
    })
  
  }

// JAB USER ADD TODO PAR CLICK KARY GA SIRF TAB HI INPUT FIELD WALA TODO REDUCER HOOK KY TODOS MY ADD HOGY GA. HAM 
// INPUT TODO KO REDUCER WALY TODOS KY ANDAR ISI LIYE BHEJ RAHY HAN KIU KY AP KO PTA HAY KY HAM NY APNAY JSX CODE KY
// ANDAR TODOS KO MAP KARWAYA HOWA HAY TO HAMEY REDUCER WALY TODOS MAY UPDATED OR NEW VALUES CHAIHYEE HAN TAKY JAB BHE 
// HAMARY TODOS KI STATE MY CHANGE/UPDATE HO TO USY HAM UI PAR RERENDER KARWA SAKEN NAAAKY addTodoInput WALI STATE KO.   
    const onSubmitAddTodosHandler = () =>{
    console.log(addTodoInput,showTodoTitleInInputField)
// Yahaan par error meessage sahe sy kaam nahe kar raha tha phr ham  ny error message ko reducer fun ky andar bnaya
// or phr woh sahe sy kaam karny lag gya. Koshish bhe yahi karni chaihyee ky hamara COMPONNET ka code clean rahy isi 
// liye ham ny error message ki functionality ko Component sy bahar useReducer ky andar milnay waly reducer function ky 
// andar code kiya hay 
  //   if(addTodoInput.todoTitle === ""){
  //   // return (addTodoInput.todoTitle === "" ? <h3>Empty todo cannot be added</h3> : null)
  //   initialTodos.errorMessage = true
  //   console.log(initialTodos.errorMessage)
  //   return false
  // }
  console.log(addTodoInput.todoTitle == true)
  if(!addTodoInput.todoTitle){
    initialTodos.errorMessage = true;
    console.log("Before:", initialTodos.errorMessage)
    return false;
  } 
  initialTodos.errorMessage = false;
  console.log("After:", initialTodos.errorMessage)

  if(showTodoTitleInInputField){
    console.log("I am edit todo",showTodoTitleInInputField,addTodoInput)
    dispatch({type:actionsTypes.editTodo,id: showTodoTitleInInputField.id ,payload: addTodoInput.todoTitle})
  
  }
  else{
    console.log("I am from add todo:",addTodoInput,showTodoTitleInInputField)
    dispatch({type: actionsTypes.addTodo , ...addTodoInput})
    setAddTodoInput("") // to clear the todo title field once the user click on the add todo button.
  }
  setAddTodoInput("")
  setShowTodoTitleInInputField(null)
  console.log(addTodoInput,showTodoTitleInInputField)

}

const deleteTodoHandler = (todo) =>{
dispatch({type:actionsTypes.deleteTodo, id: todo.id})
}

const editTodoHandler = (todo) =>{
console.log(todo.title)
console.log("Before",showTodoTitleInInputField,addTodoInput)
setShowTodoTitleInInputField(todo)
setAddTodoInput({todoTitle:todo.title})
console.log("After",showTodoTitleInInputField,addTodoInput)
}
  

// ------------------------------------------------ JSX CODE STARTS HERE ------------------------------------------------    
    return (
<div className='my-class'> 
{initialTodos.errorMessage ? <h3>Empty Todos cannot be added</h3> : null}
{/* {console.log(initialTodos.errorMessage)}  */}
{/* Taking todo as an input an spreading it into an orignal Todo(initial todo array) whenever the user clicks on add todo */}
  {todos.length  < 1 ? <h1>No todos found </h1> : null}
      <div style={{display:"flex", alignItems: "center"}}>
      <input onChange={addTodoInputHandler}
       value={addTodoInput.todoTitle || ''}
      id='todoTitle' style={{border:"2px solid green", padding: "0.7rem"}}
      type="text"
      placeholder='Add todo title' />
      <button onClick={onSubmitAddTodosHandler} style={{border:"2px solid green", marginLeft:"0.5rem"}}>{showTodoTitleInInputField ? "Update Todo" : "Add Todo"}</button>
      </div>
      {/* Mapping TODOS */}
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="todo" style={{
            border: todo.complete ? "2px solid green" : "2px solid red",
            backgroundColor: todo.complete ?  '#e0ffe0' : '#ffe0e0',
            borderRadius:"0.3rem",display:"flex", justifyContent:"space-between"
        }}>
          <div>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />
              {todo.title}
            </label>
            </div>
            <div>
            <button onClick={()=>deleteTodoHandler(todo)}>Delete Todo</button>
            <button onClick={()=>editTodoHandler(todo)}>Edit Todo</button>

            </div>
          </div>
        ))}
      </div>
</div>
    );
  }
export default TodoUsingUseReducerHook
