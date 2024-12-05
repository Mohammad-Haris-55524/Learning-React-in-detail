// -----------------------------------------------CHAPTER # 03-------------------------------------------------------- 
// -------------------------------------WHAT WE ARE LEARNING IN THIS CHAPTER-----------------------------------------
// ------------WE ARE LEARNING HOW TO REQUEST TO A SERVER USING AXIOS + ADVANTAGES OF AXIOS OVER FETCH-------------------
// ______________________________________________________________________________________________________________________
// 1) Aik to hamey response ko parse nahe karna pary ga yani JSON format sy JS OBJECT my response ko convert nahe karna 
// pary ga balky hamey direct JS OBJECT response mil raha ho ga.
// yani const data = await response.json(). yah nahe karana pary ga hamey AXIOS my 
// Server par ham jo data bhejty han yah server sy jo data hamry pas ata hy woh JSON format my hota hay usy use karny ky 
// liye hamey usy JAVASCIPT OBJECT  FORMAT my change karna parta hay FETCH API ky andar lekin agar ham AXIOS METHOD ka
//  use karen gy to hamey data server sy direct JAVASCIPT OBJECT ki form my mily ga.
// *********************************************************************************************************************
// What does JSON() do?
// Response: json() method
// It returns a promise which resolves with the result of parsing the body text as JSON . Note that despite the method 
// being named json() , the result is not JSON but is instead the result of taking JSON as input and parsing it to 
// produce a JavaScript object.
// --------------------------------------------------------------------------------------------------------------------
// Why do we use JSON parse ()?
// JSON.parse()
// A common use of JSON is to exchange data to/from a web server. When receiving data from a web server, the data is 
// always a string. Parse the data with JSON.parse() , and the data becomes a JavaScript object.
// *********************************************************************************************************************
// 2) AXIOS my hamey porper ERROR HANDELING dekhny ko milti hay, yani ham jb FETCH use karty thy to kabhi kbar hamey 
// ERROR MESSAGE dekhanay ko nahe milta tha lekin AXIOS my hamey PROPER ERROR MESSAGE milta hay catch block ky andar.
// *********************************************************************************************************************
// 3) Jesa ky hamey pta hay jab ham project par kam karr rahy hoty han to hamein API milti hay jis ko multiple endpoints
// ky sath use kar ky server par request karty han to hamey bar bar API likhni parti hay for example ham 1 project ky 
// andar For example 1 API hy mery pas uss ky andar USERS POSTS TODOS ky endpoint different han or baki pori API same hy 
// to aisi condition my AXIOS hamey 1 feature provide karta hay axios.defaults.baseUrl ka iss ky andar ham apni woh API 
// rakh dety han or ham isy APP.JSX ky andar create karty han check APP.JSX componenet. Yaad rahy API calling ky time 
// sirf endpoint pass kar dety baki kuch pass karny ky need nahe parti.
// *********************************************************************************************************************
// AXIOS 1 or feature bhe provide karta hay ky agar hamey  GET POST PUT DELETE ki request kar rhay han to ham bar bar 
// API calling ky time pora sab likhna pary ga sab likhny sy murad headerw:{} pass karny parein or data: pass karna pary 
// ga POST,PUT,PATCH,DELETE, ky andar to AXIOS hamey 1 or feature bhe provide karta hay ky ham jesy phely ham 
// axios.defaults.baseUrl create karty thy ky hamey API calling ky time URL pass na karna pary bilkul usi trha ham 
// axios.defaults.headers = 
// axios.defaults.data
// bhe pass kar skty han. 
// trha ham headers ky
// likhain gy jis my methods App.jsx ky andar ham 
// *********************************************************************************************************************
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { baseUrl } from '../constants';


export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [users, setUsers] = useState([]);

    const [count,setCount] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null);
    // const [removeErrorMessage, setRemoveErrorMessage] = useState("");
    const [isLoading,setIsLoading] = useState(false)

//   ---------------------------------------------FUNCTION # 01 TODOS -------------------------------------------------- 
    // const getTodos= async () =>{
    //     try{
    //     const {data} = await axios(`https://jsonplaceholder.typicode.com/todos`);
    //     setTodos(data)
    //     }
    //     catch(error){
    //         setErrorMessage(error.message);
    //     }
    // }
//   ---------------------------------------------FUNCTION # 02 POSTS -------------------------------------------------- 
//     const getPost = async () => {
//         try{
//   // (Use Effect Hook while passing states into dependncy array on which it depeneds)
//         const {data} = await axios(`https://jsonplaceholder.typicode.com/users`)
//         setPost(data) // Agar isy comment kar dein gy to NULL mily ga data my kiu ky ham data set nahe karwa rahy hongy
//       //  or card waly section my hamey (No data avaliable) yani falsy wala code chaly ga 
//         }
//         catch(error){
//            setErrorMessage(error.message)
//         }
// }
// ----------------------------------CREATING A GENERIC FUNCTION TO REDUCE THE LINE OF CODE---------------------------
    const getDataOfTodosAndPost= async (endPoint) =>{
      try{
        setIsLoading(true)
// ------------- (APPROACH # 01) CALLING AN API DYNAMICAALY (By using IMPORT EXPORT (MODULES) techique)-----------------
// Iss my ham ny API ko index.jsx ky andar baseURL varibale ky andar save karwaya hay or phr usy yahaan import karwa kar 
// use kar liye hay. Iss ka advantage yah hoga ky hamey bar bar API likhni nahe pary gi bas variable name baseUrl pass 
// karein gy jis name sy index.jsx my isy save karawaya hy ab hamari marzi jahaan jahaan iss API ko call karan pary ga yah
// baseUrl pass kar dein gy bss endpoints different ho skty hn hamari need ky mutabiq
        // const {data} = await axios(`${baseUrl}${endPoint}/${count}`); 
// *********************************************************************************************************************      
// ---------------- (APPROACH # 02) CALLING AN API DYNAMICALY (Purely using AXIOS provided features)--------------------
// ----------------------------------------------------------------------------------------------------------------------
// PART 1: Agar simple GET request karni hy to simple endpoint pass karo API likhny ki koi need nahe hoti hamey AXIOS my
// kiu ky ham APP.JSX my baseURL create karwa chukay han yah feature axios provide karta hay. Sirf endpoint pass karo 
// jis par hit karna hy.
// const {data} = await axios(`${endPoint}/${count}`);
// ----------------------------------------------------------------------------------------------------------------------
// PART 2 : Agar koi method use karna ho axios my to hamey aik object banana pary ga URL: ky andar endpoints pass karein
// gy. Issi trha headers: {} and data: ko bhe isi object ky andar hi pass karna pary ga. 
      // const {data} = await axios({url:`${endPoint}/${count}`,method:'GET',
      // headers:{Accept:"application/json", "Content-Type": "application/json",Authorization:"sfsdfsd412312"}});
// ----------------------------------------------------------------------------------------------------------------------
// PART 3 : Ham apna code mazeed reduce kar skty by using AXIOS provided features. Kesy ? 
// APP/JSX ky andar jao jesy baseUrl pass kiya tha usi trha header or data bhe pass kar do iss sy faida yah hoga ky bar
// bar headers ka object har API call par pass nahe karna pary ga chaihyee PUT,PATCH, DELETE yah koi bhe HTTPS request ho
//  BEST AND MOST PREFERRED TECHNIQUE
      const {data} = await axios({url:`${endPoint}/${count}`,method:'GET'});
// ----------------------------------------------------------------------------------------------------------------------

        // endPoint === 'todos' ? setTodos(data) : setUsers(data);
        if (endPoint === 'todos') {
          setTodos(data);
      } 
      else if (endPoint === 'users') {
          setUsers(data);
      }
      else{
        getDataOfTodosAndPost();
      }
      }
        catch(error){
            setErrorMessage(error.message);
        }
        finally{setIsLoading(false)}
    }
        useEffect(() => {
                getDataOfTodosAndPost('todos')
                getDataOfTodosAndPost('users')
                setErrorMessage(null)
            },[count]);
        
    //--------------------------------------------------COUNTER CODE---------------------------------------------------  
    const onClickAddHandler= (e) => {
        if(!(count >=20))
        setCount((prevCount) => prevCount + 1);
    }
    const onClickSubHandler = (e) =>{
        setCount((prevCount) => prevCount - 1);
    }
    console.log("Render + RErender");
    console.log({count,todos,users,isLoading,errorMessage});


// ---------------------------------------------------JSX CODE----------------------------------------------------------
  return (
    <>
    
    <h1>Counter {count}
    <button onClick={onClickAddHandler}>+</button>
    <button disabled={count <= 0} onClick={onClickSubHandler}>-</button>
    </h1>
    
    {isLoading && "Fetching Data from Server ....."}
    {errorMessage && <div style={{color:"red"}}>{errorMessage}</div>}
    {console.log("error: ", errorMessage)}
  <Container fluid style={{display: "flex", flexWrap:"wrap", gap: "1rem"}}>
    {console.log("Todos lenght: ",todos.length)}
    {(todos.id > 0 && !errorMessage) ? (<div>
                <Row>
                  <Col>
                    <Card style={{ width: '20rem', height: "fit-content", margin: '10px', padding: "0.5rem", border: "2px solid black" }}>
                      <Card.Img style={{ maxWidth: "100%", maxHeight: "12rem", objectFit: "contain", margin: "auto" }} variant="top" src={todos?.image} alt='No image'/>
                      <Card.Body>
                        <Card.Title>Id: {todos?.id}</Card.Title>
                        <Card.Text>
                          <h3>I am from Todos</h3>
                          <div><b>Title:</b>{todos?.title}</div>
                          <div><b>Completed:</b>{todos?.completed === false ? "Falsy value UI par Render nahe hoti" : null}</div>
                        </Card.Text>
                        <Button variant="primary">Add To cart</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
          </div>) : <div>No Todos Found</div>}
  {console.log(users.id)}
 {(users.id <= 10  && !errorMessage) ? (<div>
        <Row>
          <Col>
            <Card style={{ width: '20rem', height: "fit-content", margin: '10px', padding: "0.5rem", border: "2px solid black" }}>
              <Card.Img style={{ maxWidth: "100%", maxHeight: "12rem", objectFit: "contain", margin: "auto" }} variant="top" src={users?.image} alt='No image'/>
              <Card.Body>
                <Card.Title>Id: {users?.id}</Card.Title>
                <Card.Text>
                  <h3>I am from User</h3>
                  <div><b>User Name:</b>{users?.name}</div>
                  <div><b>Email:</b>{users.email}</div>
                </Card.Text>
                <Button variant="primary">Add To cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  </div>) : <div>No Users Found</div>}
</Container>      
</>
)}
