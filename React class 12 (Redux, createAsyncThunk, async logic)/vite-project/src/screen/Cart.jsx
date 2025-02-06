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
    </>
  )
}

export default Cart