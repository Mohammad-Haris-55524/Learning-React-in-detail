import { Posts } from "./components/Posts"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Why_UseEffectHook } from "./components/Why_UseEffectHook"
import { Post } from "./components/Post"
import Todos from "./components/Todos"
import axios from "axios"
function App() {
  //--------------------------- CODE RELATED TO TODOS.JSX (CHECK TODOS.JSX COMPONENT)-----------------------------------
  axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
  axios.defaults.headers = {Accept:"application/json", "Content-Type": "application/json",Authorization:"sfsdfsd412312"}
  // axios.defaults.data = iss trha data bhe pass kar skty han 
  // ------------------------------------------------------------------------------------------------------------------
  return (
  <>
  <Header/>
  {/* <Posts/>  */}
  {/* <Why_UseEffectHook/>  */}
  {/* <Post/> */}
  <Todos/>
  <Footer/>
  </>

  )
}

export default App
