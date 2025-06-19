// src/components/AddProduct.js
import React, { useState } from 'react'
import { useAddProductMutation } from '../services/fakeStoreApi'

function AddProduct() {
  const [addProduct, { isLoading, isSuccess, error }] = useAddProductMutation()
  const [formData, setFormData] = useState({
    title: '',
    price: 0,
    description: '',
    image: '',
    category: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addProduct(formData).unwrap()
      // Clear form or show success message
    } catch (err) {
      console.error('Failed to add product:', err)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Product title"
      />
      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add Product'}
      </button>
      {isSuccess && <p>Product added successfully!</p>}
      {error && <p>Error: {error.message}</p>}
    </form>
  )
}

export default AddProduct