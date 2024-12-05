import { useEffect, useState } from "react";
// -----------------------------------------------CHAPTER # 01 (A)------------------------------------------------------ 
// --------------------------------------------------USE EFFECT HOOK-----------------------------------------------------
// -----------------(CHAPTER # 01)-DETAILED EXPLANATION USE EFFECT HOOK BY USING EMPTY DEPENDCY ARRAY []-----------------
// WHY WE NEED TO USE USE EFFECT HOOK ? 
// Dekko jab bhe ham kisi component my USE STATE HOOK use karty han to jab bhe hamari STATE update hogi yani MOUNT hogi to
// hamara component RErender hoga uss ki wjah sy ham UI par updated value show kara saken gy kiu ky hamey maloom hay ky 
// react my varibale ka use kar ky ham values ko update nahe kara skty UI par magar magar ....... isi trha aik masla bhe 
// create hota hay woh masla kuch yah hay ky "Ham ny 1 component my multiple functions banayen howy hon gy kuch function 
// STATE use kar rhay hon gy or kuch functions ko STATE ki need nahe hogi yani ky ham kuch function ko sirf data GET karny
// ky liye use kar rhay hon gy. Lekin woh function jin my STATE use ho rahe hogi to un my STATE update hony ki wjah pora 
// component dobara sy RErender hoga or woh function bhe dobara dobara execute hon jayen gy jin my STATE use nahe bhe 
// horahe hogi to iss sy optimization ka masla create hoga yani fazool my function execute ho raha hy to isy roknay ky
// liye ham USE EFFECT HOOK ka use karin gy". (Check explanation with solution below of this code) 
// Example Code:
export const Why_UseEffectHook = () => {
    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([]);
    const fetchData = async()=>{
        try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts") // JSON PLACEHOLDER API
        const data = await response.json();
        console.log("POSTS: ",data)
        setPosts(data)
        }
        catch(err){
        console.log("Error: ",err)
        }
    }
    
    useEffect(()=>{
        console.log("USE EFFECT RENDER")
        fetchData();
    },[])
    
    console.log("Render + RErender: ","Counter", count);

return (
    <div>
        <button value={count} onClick={() =>setCount(count + 1) }>Add</button> 
        <button disabled={count === 0 ? true : false} value={count} onClick={() =>setCount(count - 1) }>Decrease</button> 
        <h2> Counter {count}</h2> 
  {posts.map((post)=>{
        return <div key={post.id} style={{border:"2px solid black", margin: "10px"}}>
            <h1>User Id: {post.id}</h1>
            <p>Title: {post.title}</p>
        </div>})}
    </div>
  )
}
// Explanation of example code:
// Mery pas 1 component hay (Why_UseEffectHook) uss ky andar my aik API ko call karawa raha hon or API ky response ka
//  data jo ky POST ki 
// shakal my hamary pas aye ga my usy UI par show karwao ga or sath hi my isi component ky andar 1 counter bhe UI par show 
// karwa raha hon jis ki values my update kar skty hn lekin PROBLEM: Tab create hogi jab bhe my counter ki value update
// karwo ga to har state update hony par COMPONENT ki state bhe upadte hogi or uss ki wjah sy component dobara sy 
// rerender hoga or iss ky natijay my API par request bar bar gy gi jab bhe counter ki value update hogi.
// How to tackle this issue ? 
// Simple aik 1 useEffect hook ka use karo ga or uss hook ky andar woh function pass kar dn ga jisy my bar bar nahe execute
// karwana chahta balkay sirf 1 hi bar execute karwana chahta hon to my fetchData() ko useEffect hook ky andar  pass kar
// dn ga or sath my empty dependency bhe pass karo ga check line 28 ab yah fetchData sirf 1st time chaly ga jab 
// component 1st time render hoga yah 1st time component ki jab birth hogi.
// -----------------------------------------------------------------------------------------------------------------------
// Points to REMEMBER about USE EFFECT HOOK:
// 1)USE EFFECT hook my woh code/function pass karen gy jis ham state ky update/mount hony par RErender nahe karwana 
// chahty hon.
// 2) USE EFFECT ky andar pass kiya gya code sirf 1 time chaly ga sirf jab component ki birth hogi yani UI RENDER hony par.
// useEffect(()=>{
//     console.log("USE EFFECT RENDER")
//     fetchData();
// },[]) ===> comma ky baad ko empty array [] dala hay issy dependency array bolty han. Agar dependency array [] pass nahe
// karein gy to fetchData() ka function wesy hi kaam kary ga jesy use effect sy bahar kaam kar raha tha. Yani bar bar
// RErender ho raha tha or ham yah nahe chahty ky har bari state update par yah function call ho to isi liye ham ny
// fetchData() ko useEffect hook ky andar daal kar empty dependency array pas kar diya hay

// ____________________________________________________________________________________________________________________
// Isi saray kaam ko kuch professionally implment kiya hay POSTS.JSX waly componenet my loader laga kar. 
// ____________________________________________________________________________________________________________________

