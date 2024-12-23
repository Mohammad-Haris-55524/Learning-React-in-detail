// ****************************************** TOPIC # 03 IN APP.JSX ****************************************************

import React, { Component } from 'react'
import { useGenericFunctionForFetchingData } from './hooks/useFetchDataForTodosAndPosts'

// function DefeaultPropsInFunctionalComponent(props) {
    // console.log(props) //Here in PROPS i am reveiving an object of (URL) which i have passed while calling my component
    // <DefeaultPropsInFunctionalComponent url={'https://jsonplaceholder.typicode.com/todos'}/> in APP.JSX
    // const users = useGenericFunctionForFetchingData(props.url)
    // console.log("Users: ",users)
    // Destrucring users object taky JSX ky andar nested key ko access karny ky liye bar bar users.isLoading 
    // users.errorMessage wagera na karna pary.
    // ---------------------------------- By DESTRUCTURING USERS OBJECT ------------------------------------------------
    // const {data: users, isLoading, errorMessage} = useGenericFunctionForFetchingData(props.url)
    // console.log(users,isLoading,errorMessage)
// *********************************************************************************************************************
// ----------------------------------- LEARNING WHAT ARE DEFAULTS PROPS ?----------------------------------------------
// DEFAULT PROPS ham as a fallback value ky tor par pass karty han taky agar koi props sy data aa raha ho or ham props
// pass karna hi bhol gy jis ki wjah sy hamaray code my error/issue aa skta hay to aisi situation ko handle karny ky 
// liye ham DEFAULT PROPS ko as a FALLBACK value ky tor par pass karty han. Yaad rahy DEFAULT PROPS functional components
// my simple way sy pass karty han as a paramter ky tor par. Lekin DEFAULT PROPS class components my bilkil different 
// way sy pass hoty han check Component(DefaultPropsInClassComponent)  
// ________________________________ DEFAULT PROPS KAB OR KESY WORK KARTY HAN ? _________________________________________
// Agar props pass kiya howa hy ham ny or sath my default PROPS bhe pass kiya howa hy to normal props hi work kary ga 
// means that DEFAULT PROPS work nahe kary ga. DEFAULT PROPS sirf uss condition my work kary ga jab NORMAL PROPS my 
// ham props pass karna bhol jayen to aisi surat my hamara default PROPS work kary ga or hamey code my error/issue any
//  sy hamey protect kary ga 
// ---------------------------------------------------------------------------------------------------------------------
// Method # 01 (Creating default props without destructuring PROPS)
// function DefeaultPropsInFunctionalComponent(props = 'https://jsonplaceholder.typicode.com/todos') {
//     console.log(props.url);
// ---------------------------------------------------------------------------------------------------------------------
// Method # 02 (Creating default props by destrusturing URL while passing in the function paramter)
function DefeaultPropsInFunctionalComponent({url = 'https://jsonplaceholder.typicode.com/todos'}) {
  console.log(url);
    // ---------------------------------- By DESTRUCTURING USERS OBJECT ------------------------------------------------
    const {data: users, isLoading, errorMessage} = useGenericFunctionForFetchingData(url)
    console.log(users,isLoading,errorMessage)
// *********************************************************************************************************************
  return (
//------- Without DESTRUCTURING USERS object, that is why we are accessing USERS object by user.abc user.ijk etc -------
    // <div style={{border:"2px solid red"}}>
    // <h1>Fetching USERS ...</h1>
    // <h4>{users.isLoading && "Fetching Data from Server .... "}</h4>
    // {users.errorMessage ? <h4>{users.errorMessage}</h4> : users.data.map((user)=>{
    //   return <div key={user.id} style={{border: "2px solid green",maxWidth: "70%", margin:"1rem auto"}}>
    //             <h4>Name: {user.name}</h4>
    //             <p>Id: {user.id}</p>
    //             <p>Email: {user.email}</p>
    //             <p>Phone #: {user.phone}</p>
    //             <p>Company: {user.company.name}</p>
    //   </div>
    // })} </div>
// --------------------------------------------------------------------------------------------------------------------
//By DESTRUCTURING USERS object, now ther is nood need to access USERS object by users.abc etc simple use the
//  destructured key like isLoading, users, errorMessage etc
        <div style={{border:"2px solid red"}}>
        <h1>Fetching USERS ...</h1>
        <h4>{isLoading && "Fetching Data from Server .... "}</h4>
        {errorMessage ? <h4>{errorMessage}</h4> : users.map((user)=>{
          return <div key={user.id} style={{border: "2px solid green",maxWidth: "70%", margin:"1rem auto"}}>
                    <h4>Name: {user?.name}</h4>
                    <p>Id: {user?.id}</p>
                    <p>Email: {user?.email}</p>
                    <p>Phone #: {user?.phone}</p>
                    <p>Company: {user?.company?.name}</p>
          </div>
        })} </div>

  )
}

export default DefeaultPropsInFunctionalComponent