// -----------------------------------------------CHAPTER # 02-------------------------------------------------------- 

// -----------------------THIS COMPONENT IS DIVIDED INTO 2 PARTS OF TOPIC # 01 & TOPIC # 02-----------------------------
// ------------------------------What we are learning in this COMPONENT CHAPTER ?-------------------------------------- 
// ----------HOW TO MAKE AN API CALL BY USING FETCH IN REACT + WHILE PASSING A STATE INTO DEPENDECY ARRAY----------------
// 1) Kesy API call sy aik product ko card my show karwana hy or phr uss card ko UI par render karwana hay. 
// 2) (TOPIC # 01) (Iss topic ki JSX ko my ny 3 different ways sy kiya hay. APPROACH # 01 best hay. Iss ky andar ham 
// COUNTER ki value jesy update kar rahy han usi URL ka product hamary pas uth kar aa raha hy kiu ky ham API request 
// karty waqt /${count} pass kar rahy han API my.
// 3)(TOPIC # 02): Jesy jesy counter ki value change hogi utnay hi CARD UI par render hongy (TOPIC # 02) LIMIT API ky part
// my yah implement kiya hay iss ki API ky andar END POINT my ham limit ka query param pass kar rahy han or uss ky andar
//  count ki value pass kar rahy hon gy jitni COUNT ki value hogi utny products hamary UI par RENDER ho jayen gy.
// ---------------------------------------------------------------------------------------------------------------------
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export const Post = () => {
    const [count,setCount] = useState(1)
    const [post,setpost] = useState(null)
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading,setIsLoading] = useState(false)

    const getPost = async () => {
       setIsLoading(true) 
        try{
  // Topic # 01(Use Effect Hook while passing states into dependncy array on which it depeneds)
        const response = await fetch(`https://fakestoreapi.com/products/${count}`)
  // Topic # 02 (Testing Limit API PART (check its code on line 148 and so on) + Use Effect Hook while passing state
  // into dependency array on which the use effect hook depeneds)
        // const response = await fetch(`https://fakestoreapi.com/products?limit=${count}`);
        const data = await response.json();
        console.log(data);
        setpost(data) // Agar isy comment kar dein gy to NULL mily ga data my kiu ky ham data set nahe karwa rahy hongy
      //  or card waly section my hamey (No data avaliable) yani falsy wala code chaly ga 
        }
        catch(error){
            console.log(error.message)
           setErrorMessage(error.message)
        }
        finally{
            setIsLoading(false)
        }
}

    const onClickAddHandler= (e) => {
        if(!(count >=20))
        setCount((prevCount) => prevCount + 1);
    }
    const onClickSubHandler = (e) =>{
        setCount((prevCount) => prevCount - 1);
    }
    useEffect(() => {
        getPost()
    },[count]);
    console.log("Render + RErender");
    console.log({count,post,isLoading,errorMessage});

  return (
    <>
    <h1>Counter {count}
    <button onClick={onClickAddHandler}>+</button>
    <button disabled={count <= 1} onClick={onClickSubHandler}>-</button>
    </h1>
{/*---------- Best and the most effective approach in which i am handling many Potential issues if they occurs----------
Dekho hamey 4 tarikay sy error ko handle karna hay.
(1) Agar (Is Loading) 'TRUE' ho rahe ho to to Is LOADING ... dekhana hay or agar (Is Loading) 'FALSE' ho gy to check karo 
ERROR MESSAGE my jaa kar ky agar ("ERROR MESSAGE") TRUE howa hay to ("ERROR MESSAGE") dekhao. Agar ("ERROR MESSAGE") bhe
"FALSE" hogya hay yani Is loading my API sy SUCESSFULLY data aagya hay or koi ERROR bhe nahe aya to POST ko check karo 
ky woh NULL / UNDEFINED to nahe hay kiu ky NULL / UNDEFINED bhe falsy values han inhay bhe control karna lazmi hay isi
liye my POST ko check karwa raha hon ky agar POST "TRUE" hay to card bana kar show kara do data ko lekin agar POST my 
NULL/UNDEFINED value ati hay to NO DATA AVALAIBLE show karwa do.(ALWAYS USE APPRACH # 01 or 02 for best Data handeling).
(2) Error ata hay agar API request fail hoti hay to error message dekha do warna
(3) Agr koi product nahe hay to empty card mat dekhana bal ky uss ki jagah No data avaliable dekhao Yah situtaion tab 
as skti hay jab mery pas koi POST NULL / UNDEFINED ho gy to uss scenerio my Error ky bajye No Data Avalaible
1) Uninitialized post:
Ensure post is correctly initialized and only rendered when it is not null or undefined.
2) Error Handling:
The code assumes post will always have image, id, title, and price properties. Adding optional chaining (e.g., post?.image) can prevent runtime errors if any of these properties are missing.
3) Fallback for Empty post:
Add a fallback to handle cases when post is null or undefined after fetching:
4) Styling Consistency:
Ensure consistent styling. For instance, the Card component has inline styles that might be better handled using CSS 
classes for maintainability.*/}
    <Container fluid>
      {isLoading ? "Fetching Data from Server ....." : errorMessage ? <div style={{color:"red"}}>{errorMessage}</div> :
        post ? (<Container>
              <Row>
                <Col>
                  <Card style={{ width: '20rem', height: "fit-content", margin: '10px', padding: "0.5rem", border: "2px solid black" }}>
                    <Card.Img style={{ maxWidth: "100%", maxHeight: "12rem", objectFit: "contain", margin: "auto" }} variant="top" src={post?.image} />
                    <Card.Body>
                      <Card.Title>Posts Id: {post?.id}</Card.Title>
                      <Card.Text>
                        <div><b>Post Title:</b>{post?.title}</div>
                        <div><b>Price:</b>{post?.price}</div>
                      </Card.Text>
                      <Button variant="primary">Add To cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>) : <div>No Data Avaliable {errorMessage}</div>// agar post null hoti hay or setPost() karana bhol jayen to yah
            // wala code execute hogy ga
        }
</Container>
{/* ----------------------------------------------------------------------------------------------------------------- */}
{/*------------ APPROACH # 02 (DOING SAME THING COVERED IN APPRAOCH 1 WITHOUT USING LONG TERNARY chaining)----------- */}
{/* {errorMessage && <div style={{color:"red"}}>{errorMessage}</div>}
<Container fluid> */}
{/* IsLoading agar true nahe hota to false waly block my jao or check karo post NULL / UNDEFINED to nahe hay. Agar NULL/
UNDEFINED hojata hay to Falsy block my No data avaliable ko UI par RENDER karwa do. My post ko remove karwa kar direct
 <Container> ko UI par RENDER karwa skty tha lekin iss chakkar my bhot sy potential issue cover na hoty jesy appraoch 2 
 nahe howy*/}
{/* {isLoading ? <div>Is Loading.........</div> : post ? ( 
            <Container>
              <Row>
                <Col>
                  <Card style={{ width: '20rem', height: "fit-content", margin: '10px', padding: "0.5rem", border: "2px solid black" }}>
                    <Card.Img style={{ maxWidth: "100%", maxHeight: "12rem", objectFit: "contain", margin: "auto" }} variant="top" src={post?.image} />
                    <Card.Body>
                      <Card.Title>Posts Id: {post?.id}</Card.Title>
                      <Card.Text>
                        <div><b>Post Title:</b>{post?.title}</div>
                        <div><b>Price:</b>{post?.price}</div>
                      </Card.Text>
                      <Button variant="primary">Add To cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>) : <div>No data avaliable</div>
}
</Container> */}
{/* ----------------------------------------------------------------------------------------------------------------- */}
{/* APPRAOCH 3 (Not best approach kiu ky iss my bhot sy potential issues ko handle nahe kiya jaa raha check Apprach #01
ap ko pta chal gy ga ky kia kia issues aa skty han or unhay kesy chaining ky through handle karna hay*/}
{/* {isLoading && <div>Fetching Data from Server .....</div>}
<Container fluid>
{errorMessage ? <div style={{color:"red"}}>{errorMessage}</div> : (
            <Container>
              <Row>
                <Col>
                  <Card style={{ width: '20rem', height: "fit-content", margin: '10px', padding: "0.5rem", border: "2px solid black" }}>
                    <Card.Img style={{ maxWidth: "100%", maxHeight: "12rem", objectFit: "contain", margin: "auto" }} variant="top" src={post?.image} />
                    <Card.Body>
                      <Card.Title>Posts Id: {post?.id}</Card.Title>
                      <Card.Text>
                        <div><b>Post Title:</b>{post?.title}</div>
                        <div><b>Price:</b>{post?.price}</div>
                      </Card.Text>
                      <Button variant="primary">Add To cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>) 
}
</Container> */}
{/* _________________________________________________TOPIC # 02______________________________________________________ */}
{/* --------------------------------------------Testing API LIMIT----------------------------------------------------- */}
{/*---Jitna counter ki value ho gi usi lihaaz sy PRODUCTS barhay gy or kam hongy utnay products UI par render hon gy---*/}
{/* <Container fluid style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {isLoading ? "Fetching Data from Server ....." : errorMessage ? <div style={{color:"red"}}>{errorMessage}</div> :
        post?.length > 0 ? (post.map((products)=>{
  return (<div>
              <Row>
                <Col>
                  <Card style={{ width: '20rem', height: "fit-content", margin: '10px', padding: "0.5rem", border: "2px solid black" }}>
                    <Card.Img style={{ maxWidth: "100%", maxHeight: "12rem", objectFit: "contain", margin: "auto" }} variant="top" src={products?.image} />
                    <Card.Body>
                      <Card.Title>Posts Id: {products?.id}</Card.Title>
                      <Card.Text>
                        <div><b>Post Title:</b>{products?.title}</div>
                        <div><b>Price:</b>{products?.price}</div>
                      </Card.Text>
                      <Button variant="primary">Add To cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>) }))  : <div>No Data Avaliable</div> // agar post null hoti hay or setPost() karana bhol jayen to yah
            // wala code execute hogy ga
        }
</Container> */}
</>
)
}
