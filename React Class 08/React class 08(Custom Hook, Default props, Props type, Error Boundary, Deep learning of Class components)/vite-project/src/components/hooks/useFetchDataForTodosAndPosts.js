// ---------------------- PAGE # 03 IS IS LINKED TO COMPONENT FETCHING TODOS & FETCHING POSTS ---------------------------
// ------------------------------------------ CREATING A GENERIC FUNCTION ----------------------------------------------
// Hooks are reusable functions.
// When you have same component logic that needs to be used by multiple components, we can extract that logic to a 
// custom Hook.
// Yah ham ny aik custom hook create kiya hy taaky jo phely STATES HOOK USE EFFECT HOOK and baki logic wala CODE repeat
// ho raha tha uss tamam code ko aik hi generic function ky andar bana kar rakh dena chaihyee. 
// ----------------------------------------------------------------------------------------------------------------------
// QUESTION:- The main question arises Ky jab code ko repeat hony sy hi bachana tha taky same code bar bar multiples 
// Components my na karna pary to ham ny CODE RESUBILITY ky liye FUNCTION kiu nahe create kiya CUSTOM HOOK hi kiu create
// ki hay.
// ANSWER:- Creating custom Hooks in React allows developers to encapsulate and reuse logic within functional components.
// It promotes code reusability, readability, and maintainability by abstracting away complex logic into reusable units.
// Dekho bhai HOOK ki DEFINATION kiya hay ? "Hook ko sirf ham FUNCTION COMPONENT ky andar hi use kar skty han".
// "Yah phr HOOK ko ham CUSTOM COMPONENT ky andar hi use karein gy". Iss ka mltb yah howa hy agar hamey FUNCTION 
// COMPONENTS my code resulblity ko dekhna hay to uss ky liye hamey CUSTOM HOOKS create karna parein gy kiu ky HOOK ko 
// ham normal functions ky andar use nahe kar skty. Isi wjah sy ham agar my 'use' ka keyward use na karta apnay CUSTOM
// HOOK (useGenericFunctionForFetchingData) ky sath to REACT hamey kabhi ijazat nahe deta USE STATE, USE EFFECT HOOKS ko
// use karny ki isi liye ham ny CUSTOM HOOK create kiye taky ham HOOKS ko use kar saken.
// ----------------------------------------------------------------------------------------------------------------------

import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'


export function useGenericFunctionForFetchingData(url) {
    console.log({url})
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(()=>{
        fetchingTodosAndPostsData(url)
    },[])

const fetchingTodosAndPostsData = async (url) =>{
    console.log({url})
        try{
        setIsLoading(true)
        const {data} = await axios(url)  
        console.log(data);
        setData(data)
        }
        catch(e){
        setIsLoading(true)
        console.log(e.message)
        setErrorMessage(e.message)
        }
        finally{
            setIsLoading(false)
        }
    }
    console.log("Component Rendered !")
    return {data , errorMessage, isLoading};
    // Jo bhe cheezain  my ny yahaan sy return karwayen han woh sab mujhy useGenericFunctionForFetchingData ky andar 
    // mil jayen gy or iss function ko ham ny already CUSTOM HOOK bana kar use kar rahy han or ham isy export karwa rahy 
    // han or hamey jis jis Component my in chezo {data , errorMessage, isLoading}; ki need pary gi wahaan ham inhy 
    // function ko call karwa kar access kar lein gy go and check FetchingTodos and FetchingPosts Components
    
}

