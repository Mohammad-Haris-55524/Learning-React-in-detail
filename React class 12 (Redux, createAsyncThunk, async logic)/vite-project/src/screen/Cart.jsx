import React from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'


function Cart() {
const {id} = useParams()
console.log(id)
  return (
    <>
    <Header/>
    <h1>Cart</h1>
    {/* {product.map((item) => {
        return <div>
          <h1>Item Id: {item.id}</h1>
          <h1>Item Name: {item.title}</h1>
          <h1>Item Price: {item.price}</h1>
         

        </div>
      })} */}
    </>
  )
}

export default Cart