// __________________________________ Topics to be covered in this lecture are _________________________________________
// 1) Dynamic and Nested Routing, (CHECK APP.JSX COMPONENT AND TODOS FOLDER CHECK INDEX.JSX FOR NESTED ROUTING)
// 2) What is OUTLET COMPONENT AND WHY WE NEED TO USE IT IN NESTED ROUTING (CHECK TODOS FOLDER THEN CHECK INDEX.JSX COMPONENT)
// 3) Link vs Navlink, (When to use Link vs Navlink and UseNavigate hook) =========> CHECK POST COMPONENT 
// 4) How to avoid repeatation of code ====> (By creating dynamic component), 
// ______________________________________________________________________________________________________________________
// 5) Hooks(useParam, useSearchParam, UseNavigate, useLocation), (Check POST COMPONENT)
// 6) Conditional navigation by using (useNavigate vs navigate & what is replace wrapper ? and why it is used ? 
// (Check POST COMPONENT + LOGIN SCREEN)
// 7) What is (Pathname, State, search, hash, key) and how to access them ===========> By using useLocation() Hook 
// WHY is STATE, SEARCH, PATHNAME IS USEFULL. DEEP STUDY ABOUT STATE (Check POST comp)
// ______________________________________________________________________________________________________________________
// 8) Deep study about the importance QueryParams(woh jo ? mark daal kar URL my pass/set karwaty han unhy
// queryParam bolty han yah set). Query param my kia value pass ki gaye hy yah set karwaye gaye hay woh hamey search my
// mil gy gi search hamey useLocation() ky hook my milta hy check (POST SCREEN, DynamicUiForPostsAndPostScreen COMPONENT)
// 9) Deep study how to set QUERY PARAM VALUE dynamically and filter POSTS by using it  (Check POSTS COMPONENT IN THE LAST)
// ______________________________________________________________________________________________________________________
import 'antd/dist/reset.css'; // Import Ant Design styles (reset version)
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './screens/Login'
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Switch } from 'antd';
import './App.css'
import Home from './screens/Home'
import Contact from './screens/Contact'
import Services from './screens/Services'
import About from './screens/About'
//-------------------------------- Importing for POSTS SCREEN Without Lazy Loading ----------------------------------
// import Posts from './screens/Posts'
import Post from './screens/Post'
import PageNotFound from './screens/PageNotFound'
import Header from './components/Header'
import HeaderForActiveLinks from './components/HeaderForActiveLinks'
import Footer from './components/Footer'
//------------------------------ Importing for TODOS MAIN SCREEN Without Lazy Loading ----------------------------------
// import Todos from './screens/Todos'
import AllTodosList from './screens/Todos/AllTodosList'
import AddTodo from './screens/Todos/addTodo'
import SearchTodo from './screens/Todos/SearchTodo'
import UpdateTodo from './screens/Todos/UpdateTodo'
import { Spin } from 'antd';

// ------- LEARNING LAZY LOADING (IMPLEMENTING IT ON POSTS AND TODOS SCREEN WHERE DATA WILL BE IN LARGE AMOUNT) --------
//Remember 1 things all lazy load screen should be imported in the last otherwise there will be error ....
// By using Lazy Loading
const LazyPosts = lazy(()=> import('./screens/Posts'))
// By using Lazy Loading
const LazyMainTodoScreen = lazy(()=> import('./screens/Todos'))

function App() {
const [isToggled, setIsToggled] = useState(false);

let body = useRef(null)
body.current = document.body;


useEffect(() => {
  // Assign the document.body to the ref
  body.current = document.body;
   // Set the initial background color
  body.current.style.backgroundColor = isToggled ? 'lightblue' : 'lightcoral';
}, [isToggled]); // Re-run the effect when isToggled changes

const toggleModeHandler = () =>{
  body.current = document.body;
  // if(isToggled){
  //   body.current.style.backgroundColor = 'lightblue' 
  //   setIsToggled(false)
  // }
  // else{
  //   body.current.style.backgroundColor = 'red'
  //   setIsToggled(true)
  // }

  setIsToggled(!isToggled);
  console.log({isToggled})
  // setIsToggled(prevState => !prevState)
}
return (
<div className='container'>
{/* PATH my PAGE name: /contact etc name pass karty han for example abhe domain name hy http://localhost:5173/pageName 
PAGE name ka mtlb jis page par ham redirect karwana ho usy PATH my /pageName (/about) kar ky pas kar dein gy */}
{/* ELEMENT my uss component ko pass karein gy jis ka domain PATH my dala hy for example path my /contact hy to element
ky andar contact ka component ko pass karna taky contact ky component par redirect hojayen   */}
<BrowserRouter>
{/* <Header/> */} 
<HeaderForActiveLinks/>
{/* Alag alag page par jaa kar same hi styling karni ho yah phr container my dalna hy har page ky content ko to uss ky 
liye har page ky andar jaa jaa kar container banany sy acha hy kiu na short hand technique use kar li gy. Ham direct tamam
pages ky routes ko aik hi TAG/container(div/main(semantic tags)) my daal kar usy par hi styling apply kar do ab woh 
styling tamam pages par aagy gi */}
<main style={{border:"5px solid yellow"}}>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/about-us' element={<About/>}/>
    {/* <Route path='/posts' element={<Posts/>}/> */}
{/* ----------------------------------- By using Lazy Loading For MAIN (POSTS SCREEN) --------------------------------*/}
    <Route path='/posts' element={<Suspense fallback={<Spin size={'large'}></Spin>}><LazyPosts/></Suspense>}/>
    <Route path='/posts/:postId' element={<Post/>}/>
    {/* When path does not matches OR the user enter the wrong domain name it will redirect to PAGE NOT FOUND */}

{/*Lecture # 02: Here we are learning how to create nested Routes yaad rahy nested PARENT ka route ky childs ko PATH 
define karty time path my backslash(/) mat dalna warna error aagy ga sahe sy routing nahe work kary gi bss yaad rahy
only for NESTING ROUTING but not for simple and dynamic routing (Dynamic routing and simple routing  my backslah kar ky
hi path define karty han check lecture # 01) and for NESTED route example check below for todos ===> addtodo, search,
all todos list and update todos screen ko PATH define karty time ham ny backslash(/) ka use nahe kiya */}

  {/* <Route path="/todos" element={<Todos/>}>  */}
{/* ------------------------------ By using Lazy Loading For MAIN (TODO SCREEN) -------------------------------------*/}
    <Route path="/todos" element={<Suspense fallback={<Spin size={'large'}></Spin>}><LazyMainTodoScreen/></Suspense>}> 
      <Route path="add-todo" element={<AddTodo/>}/>
      <Route path="search" element={<SearchTodo/>}/>
      <Route path="update-todo" element={<UpdateTodo/>}/>
      <Route path="all-todo" element={<AllTodosList/>}/>
    </Route>
  <Route path='/login' element={<Login/>}/>
  {/* Yah wala route hamesha last my ata hy jab koi route ghalat gahalat daal dy user to iss par redirect ho gy ga  */}
    <Route path= '*' element={<PageNotFound/>}/>
  </Routes>
  <Switch onClick={toggleModeHandler}
      checkedChildren={"ON"}
      unCheckedChildren={"OFF"}
      // defaultChecked
    />
  </main>
  <Footer/>
  </BrowserRouter>
  </div>
  )
}

export default App
