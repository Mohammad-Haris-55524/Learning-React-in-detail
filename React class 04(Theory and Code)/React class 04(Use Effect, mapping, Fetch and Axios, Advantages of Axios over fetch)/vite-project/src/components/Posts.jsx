// -----------------------------------------------CHAPTER # 01(B)-------------------------------------------------------- 
// ------------------------------What we are learning in this COMPONENT CHAPTER ?--------------------------------------
// 1) We studied about USE EFFECT HOOK. USE EFFECT HOOK can be sumarized into 2 parts. Yani USE EFFECT ko 2 ways sy use
// skty han 1 tab jab ham as a empty dependecy array rakh kar use karty han.
// 2) Kesy API call sy sy saray posts ky data ko ky CARDS bana kar UI par render karwana hay. Or sab sy important
// cheez ky counter ki value update hony par pora componenet RErender ho raha hy lekin tab bhe hmari API par bar bar 
// bila fazool request nahe jaa rahi. Sirf tab hi API par request gy gi jab component 1st time RENDER hoga. Yahi yah sab 
// karny ky liye my USE EFFECT ka hook use karo ga or uss my apna woh function call kar dn ga jisy my aik hi bar yani 
// component ki birth par hi call karwana chah raha hon ga to aisy function ko useEffect my pass karo ga empty dependency
// array ky sath.(For introduction and more detail check check Why_UseEffectHook.js FOR PART 1 of USE EFFECT)
// ---------------------------------------------------------------------------------------------------------------------
// 3) 2nd PART for USE EFFECT HOOK is covered in  POST.JSX (Introduction) :- USE EFFECT ky empty array(dependecy array)
//my ham woh chezain pass karty han jis par mera USE EFFECT depend kar raha hoga. By default USE EFFECT sirf 1st time call
// hota hay jab component RENDER hota hay yah component ki 1st time birth hoti hay. Lekin agar ap chah rahy ho ky mery
// component ki STATE,PROPS ky update par hamara component dobara sy CALL/RERENDER karwana ho to ham uss STATE/PROPS ko 
// dependecy array[count] my pass kar dein gy.
// Basically  dependecy array [] ky andar woh STATE/PROPS pass kar dein gy jis ham ny  watch krwana ho yah uss ki update
// par koi action perform karwana ho (check POST.JSX for detail)
// ---------------------------------------------------------------------------------------------------------------------
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Posts = () => {
    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    
    console.log("Render + RErender",{count,posts,isLoading,errorMessage})

    const fetchData = async()=>{
        setIsLoading(true)
        try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts") // JSON PLACEHOLDER API
        // const response = await fetch("https://fakestoreapi.com/products"); // fake Store API
        const data = await response.json();
        console.log("POSTS: ",data)
        setPosts(data);
        // setIsLoading(false)
        }
        catch(err){
        // console.log("Error: ",err)
        setErrorMessage(err.message);
        // setIsLoading(false) 
        }
    // setIsLoading jab true hoga to loader chalyga yani jab tak API sy data nahe aye ga LOADING chaly ga lekin jesy hi
    // API sy data aagy ga yah phr API request fail bhe hojati hay to dono surto my setIsLoading false kar dein gy taky
    // agr data aagya hay to data dekha do agar data nahe aya to error msg dekha do. setIsLoading ko try or catch ky 
    // block my jaa kar false karny sy acha hy finally my false kar do kiu ky finally block har bari chalta hay chahay
    // condition true ho yah false.
        finally{
        setIsLoading(false) 
        }
    }
    
// Points to REMEMBER about USE EFFECT HOOK:
// 1)USE EFFECT hook my woh code/function pass karen gy jis ham state ky update/mount hony par RErender nahe karwana 
// chahty hon.
// 2) USE EFFECT ky andar pass kiya gya code sirf 1 time chaly ga sirf jab component ki birth hogi yani UI RENDER hony par.
useEffect(()=>{
    console.log("USE EFFECT RENDER")
    fetchData();
},[]) //comma ky baad ko empty array [] dala hay issy dependency array bolty han. Agar dependency array [] pass nahe
// karein gy to fetchData() ka function wesy hi kaam kary ga jesy use effect sy bahar kaam kar raha tha. Yani bar bar
// RErender ho raha tha or ham yah nahe chahty ky har bari state update par yah function call ho to isi liye ham ny
// fetchData() ko useEffect hook ky andar daal kar empty dependency array pas kar diya hay
// _____________________________________________________________________________________________________________________
//CONDITIONAL RENDERING: Yahi same kaam ham apni JSX ky andar bhe kar skty thy lekin JSX ko clean rakhny ky liye ham woh
// sara kaam apni REACT CODE ky andar kar rahy han taky gitch pitch na ho hamara JSX code, OR JSX clean and Readable rahy. 
    if(isLoading){ //Yah code tab chaly ga jab tak API sy data aa raha hoga jesy hi data aye ga loading hat gy ga.
        return <div>Loading...</div>
    }
    if(errorMessage){
        return <div style={{color:"red"}}>Error found: {errorMessage}</div>
    }
    else{
  return (
    <>
{/* -------------------------------------------------------------------------------------------------------------------*/}
{/* Yahi same kaam uper REACT CODE ky andar kiya hay ky agar if isLoading true hay to Loading...  dekhao. Hamey hamesha
   kosish yahi karni chaihyee ky JSX clean rakehn isi liye ham ny REACT my code kiya hay.  */}
    {/* {isLoading ? <div>Loading ....</div> :  <div>Posts</div> } */}
    {/* <div>Posts</div> */}
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
  {posts.map((post) => {
    return (
      <div key={post.id}>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: '18rem',height:"15rem", margin: '10px' ,padding:"0.5rem"}}>
                {/* <Card.Img variant="top" src={post.image} /> */}
                <Card.Body>
                  <Card.Header>Posts For User {post.userId}</Card.Header>
                  <Card.Title>Posts Id: {post.id}</Card.Title>
                  <Card.Text>
                    <b>Post Title: </b>
                    {post.title}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  })}
</div>

{/*{------------------------------------------ WHY USE EFFECT HOOK ? -----------------------------------------------}*/}
{/* Jab bhe STATE UPDATE hogi to POSTS wala component RERENDER hoga ham ny Counter ky andar STATE ko use kiya hay
lekin uss ky side effect hamey kuch iss trha dekhnay ko milain gy ky......
Iss sy yah issue create ho rha hay ky jo fetchData() wala function hay woh fazool my execute ho raha hy kiu ky har
bari counter ki state update ho rahe hy jis ki wajah sy har bari STATE update hony par component dobara sy RERENDER
ho raha hy or bar bar SERVER par fazool my request jaa rahe hy or hamey bar bar POSTS ka data mily ga har state update
hony par. To agar optimization ky lihaaz se dekhain to yah bhot buri approach hay. To issue ko resolve karny ky liye
WE WILL USE ============================================================> USE EFFECT HOOK*/}
    <button value={count} onClick={() =>setCount(count + 1) }>Add</button> 
    <button disabled={count === 0 ? true : false} value={count} onClick={() =>setCount(count - 1) }>Decrease</button> 
    <h2> Counter {count}</h2> 
    </>
  )
}

}
