// // src/components/AddProduct.js
import React, { useState,useEffect } from 'react'
import { useAddProductMutation } from '../store/features/apiSlice'

// function AddProduct() {
//   const [addProduct, { isLoading, isSuccess, error }] = useAddProductMutation()
//   const [formData, setFormData] = useState({
//     title: '',
//     price: 0,
//     description: '',
//     image: '',
//     category: ''
//   })

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       await addProduct(formData).unwrap()
//       // Clear form or show success message
//     } catch (err) {
//       console.error('Failed to add product:', err)
//     }
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         name="title"
//         value={formData.title}
//         onChange={handleChange}
//         placeholder="Product title"
//       />
//       <input
//         name="price"
//         type="number"
//         value={formData.price}
//         onChange={handleChange}
//         placeholder="Price"
//       />
//       <textarea
//         name="description"
//         value={formData.description}
//         onChange={handleChange}
//         placeholder="Description"
//       />
//       <input
//         name="image"
//         value={formData.image}
//         onChange={handleChange}
//         placeholder="Image URL"
//       />
//       <input
//         name="category"
//         value={formData.category}
//         onChange={handleChange}
//         placeholder="Category"
//       />
//       <button type="submit" disabled={isLoading}>
//         {isLoading ? 'Adding...' : 'Add Product'}
//       </button>
//       {isSuccess && <p>Product added successfully!</p>}
//       {error && <p>Error: {error.message}</p>}
//     </form>
//   )
// }

// export default AddProduct





function AddProduct() {
  const [addProduct, { isLoading, isSuccess, error, reset }] = useAddProductMutation();
  const [formData, setFormData] = useState({
    title: '',
    price: 0,
    description: '',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', // default image
    category: 'electronics'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(formData).unwrap();
      // Reset form after successful submission
      setFormData({
        title: '',
        price: 0,
        description: '',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        category: 'electronics'
      });
    } catch (err) {
      console.error('Failed to add product:', err);
    }
  };

  // Reset mutation state after showing success message
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => reset(), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, reset]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Product title"
        required
      />
      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        required
        min="0"
      />
      {/* ... other fields ... */}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add Product'}
      </button>
      {isSuccess && <p>Product added successfully! Refreshing data...</p>}
      {error && <p>Error: {error.message}</p>}
    </form>
  );
}

export default AddProduct