import GlobalStateManagnmentUsingUseContextHookParentComponent_A from "./components/GlobalStateManagnmentUsingUseContextHookParentComponent_A";
import TodosUsingState from "./components/TodosUsingState";
import TodoUsingUseReducerHook from "./components/TodoUsingUseReducerHook";


function App() {
//   const fun1 = (x) =>{
//     return (y)=>{
//       return (z)=>{
//         return (x + y + z)
//       }
//     }
// }

// const curryingFunction = (num1,num4) =>{
//   console.log(num1,num4)
//   return function(num2){
//   console.log(num2)
//     return function(num3){
//       console.log(num3);
//       return (num1 + num4 + num2 + num3)
//     }
//   }
// }
// console.log(curryingFunction(5,100)(10)(15))


// const introduction = (str1) =>{
//   console.log(str1)
// return (str2)=>{
// return (str3)=>{
//   return `${str1} ${str2} ${str3}`
// }}
// }
// console.log(introduction("My Name is")("Mohamamd")("Haris"))

return (
  <>
  <TodosUsingState/>
  {/* <TodoUsingUseReducerHook/> */}
  {/* <GlobalStateManagnmentUsingUseContextHookParentComponent_A/> */}
  </>
  )
}

export default App
