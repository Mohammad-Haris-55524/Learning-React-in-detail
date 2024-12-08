// --------------------------------What are we learning in this component ? -------------------------------------------
// Iss component my my ny apna JSON SERVER banaya hy phr uss ky andar multiples products ko rakha hay or uss JSON SERVER
// bananay ky result my mujhy 1 API mili hay uss ka use kar raha hon my iss componenet my PRODUCTS ko REDNER or DELETE
//  karwanay my by using HTTP methods.
// _____________________________________________________________________________________________________________________
// Iss componenet my PRODUCTS ko DELETE karwa raha hon by using HTTP method. My ny JSON server create kiya hy uss ky 
// through my multiples products ky card bana kar UI par render karwany ky baad my ny un my 1 DELETE ka button diya hay.
//  Jab bhe user DELETE ky button par click kary ga woh product apni id ky through JSON SERVER sy ho gy gi
// _____________________________________________________________________________________________________________________
// DELETE: KOI FIELD KOI ENTRY SERVER SY DELETE KARANI HO TO DELETE METHOD USE KARTY HAN FOR EXAMPLE AGAR KOI PRODUCT 
// PRODUCT DELETE KARANA CHAH RAHY HON TO DELETE METHOD KO USE KAREIN GY  
// DELETE:
// Purpose: Delete a specified resource.
// Example: DELETE /users/123, deleting user data with ID 123.
// _____________________________________________________________________________________________________________________

import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function FetchAndDeletePostMethod() {
    const [data, setData] = useState([])
    const fetchAndUpdateData = async () =>{
      try{
        // JSON SERVER KY ANDAR DATA DAAL KAR DELETE OPERATION API KY THROUGH PERFORM KAR RAHY HAN HAM 
        const response = await fetch(`http://localhost:3000/products`);
        // fetch('https://fakestoreapi.com/products/1')
        const data = await response.json();
        console.log(data);
        setData(data);
      }
      catch(error){
        console.log(error)
      }
    }
    useEffect(()=>{
        fetchAndUpdateData() //State updated hony par bar bar API call na ho isi liye USE EFFECT ky andar uss function 
        // ko dal diya hy jo API CALLING kar raha hay.
    },[])

    const deleteProductHandler = (postId) => {
        console.log("Post Id to delete the selected Product: ",postId);
        const deleteProduct = async()=>{
            try{
          const response = await fetch(`http://localhost:3000/products/${postId}`,{
                method: "DELETE" })
            const data  = await response.json();
            console.log(data)
            fetchAndUpdateData() //Delete hony ky baad jo updated result hay woh aagy mery pas isi liye iss function ko 
// dobara run karwao ga taky Jo remaining products database my bachain hongy woh baki lay aye ga hamary pas.
            }
            catch(error){
                console.log(error)
            }
        }
        deleteProduct();
    }
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap", width:"100%"}}>
        {data.map((post,index)=>{
             return(<div key={index} style={{width: '22%'}}> 
                <Card style={{border: "2px solid black", margin:"0.5rem 0rem"}}>
                  <Card.Img variant="top" src={post.image }style={{width:'100%',height:"13rem",objectFit:"contain"}}/>
                  <Card.Body>
                <div>
                    <Card.Title>Product Title</Card.Title>
                    {post.title}
                </div>
                    <Card.Text>
                        <b>Product Price: </b>{post.price}
                    </Card.Text>
                    <Button variant="primary"onClick={() => deleteProductHandler(post.id)}>Delete Product</Button>
                  </Card.Body>
                </Card>
                </div>);
            })}
</div>)
}

export default FetchAndDeletePostMethod

// TOPICS TO BE COVERED TOMMORROW INSHAALAH 
// ALL FETCH API HOW TO PUT UPDATE DTA USING FECTH AND AXIOS