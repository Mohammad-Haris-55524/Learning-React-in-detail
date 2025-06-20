// src/components/ProductsList.js
import React from 'react'
import { useGetProductsQuery } from '../store/features/apiSlice'
import AddProduct from './AddProduct'

function ProductsList() {
  const { data: products, error, isLoading } = useGetProductsQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <img src={product.image} alt={product.title} width="100" />
          </li>
        ))}
      </ul>
      <AddProduct/>
    </div>
  )
}

export default ProductsList