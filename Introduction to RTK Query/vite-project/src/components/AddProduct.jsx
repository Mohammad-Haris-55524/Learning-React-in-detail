// // // src/components/AddProduct.js
// import React, { useState,useEffect } from 'react'
// import { useAddProductMutation } from '../store/features/apiSlice'

// // function AddProduct() {
// //   const [addProduct, { isLoading, isSuccess, error }] = useAddProductMutation()
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     price: 0,
// //     description: '',
// //     image: '',
// //     category: ''
// //   })

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()
// //     try {
// //       await addProduct(formData).unwrap()
// //       // Clear form or show success message
// //     } catch (err) {
// //       console.error('Failed to add product:', err)
// //     }
// //   }

// //   const handleChange = (e) => {
// //     const { name, value } = e.target
// //     setFormData(prev => ({ ...prev, [name]: value }))
// //   }

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input
// //         name="title"
// //         value={formData.title}
// //         onChange={handleChange}
// //         placeholder="Product title"
// //       />
// //       <input
// //         name="price"
// //         type="number"
// //         value={formData.price}
// //         onChange={handleChange}
// //         placeholder="Price"
// //       />
// //       <textarea
// //         name="description"
// //         value={formData.description}
// //         onChange={handleChange}
// //         placeholder="Description"
// //       />
// //       <input
// //         name="image"
// //         value={formData.image}
// //         onChange={handleChange}
// //         placeholder="Image URL"
// //       />
// //       <input
// //         name="category"
// //         value={formData.category}
// //         onChange={handleChange}
// //         placeholder="Category"
// //       />
// //       <button type="submit" disabled={isLoading}>
// //         {isLoading ? 'Adding...' : 'Add Product'}
// //       </button>
// //       {isSuccess && <p>Product added successfully!</p>}
// //       {error && <p>Error: {error.message}</p>}
// //     </form>
// //   )
// // }

// // export default AddProduct





// // function AddProduct() {
// //   const [addProduct, { isLoading, isSuccess, error, reset }] = useAddProductMutation();
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     price: 0,
// //     description: '',
// //     image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', // default image
// //     category: 'electronics'
// //   });
// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target
// // //     setFormData(prev => ({ ...prev, [name]: value }))
// // //   }
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await addProduct(formData).unwrap();
// //       // Reset form after successful submission
// //       setFormData({
// //         title: '',
// //         price: 0,
// //         description: '',
// //         image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
// //         category: 'electronics'
// //       });
// //     } catch (err) {
// //       console.error('Failed to add product:', err);
// //     }
// //   };

// //   // Reset mutation state after showing success message
// //   useEffect(() => {
// //     if (isSuccess) {
// //       const timer = setTimeout(() => reset(), 3000);
// //       return () => clearTimeout(timer);
// //     }
// //   }, [isSuccess, reset]);

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input
// //         name="title"
// //         value={formData.title}
// //         onChange={handleChange}
// //         placeholder="Product title"
// //         required
// //       />
// //       <input
// //         name="price"
// //         type="number"
// //         value={formData.price}
// //         onChange={handleChange}
// //         placeholder="Price"
// //         required
// //         min="0"
// //       />
// //       {/* ... other fields ... */}
// //       <button type="submit" disabled={isLoading}>
// //         {isLoading ? 'Adding...' : 'Add Product'}
// //       </button>
// //       {isSuccess && <p>Product added successfully! Refreshing data...</p>}
// //       {error && <p>Error: {error.message}</p>}
// //     </form>
// //   );
// // }

// // export default AddProduct




// // src/components/AddProduct.js
// function AddProduct() {
//   const [formData, setFormData] = useState({
//     title: '',
//     price: '',
//     description: '',
//     image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
//     category: 'electronics'
//   })

//   const [addProduct, { isLoading, isSuccess }] = useAddProductMutation()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     await addProduct(formData)
//     setFormData({
//       title: '',
//       price: '',
//       description: '',
//       image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
//       category: 'electronics'
//     })
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//   }

//   return (
//     <div>
//       <h2>Add Product</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Product title"
//           required
//         />
//         <input
//           name="price"
//           type="number"
//           value={formData.price}
//           onChange={handleChange}
//           placeholder="Price"
//           required
//         />
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? 'Adding...' : 'Add Product'}
//         </button>
//       </form>
//       {isSuccess && (
//         <div>
//           <p>Product added successfully!</p>
//           <p>Note: FakeStoreAPI doesn't persist data. Try with a real API.</p>
//         </div>
//       )}
//     </div>
//   )
// }

// export default AddProduct




import React from 'react'
import { useGetProductsQuery, useDeleteProductMutation } from '../services/fakeStoreApi'

function ProductsList() {
  const { data: products, isLoading, isError, refetch } = useGetProductsQuery()
  const [deleteProduct] = useDeleteProductMutation()

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id).unwrap()
      // No need to manually refetch - invalidatesTags handles it
    } catch (err) {
      console.error('Failed to delete product:', err)
    }
  }

  if (isLoading) return <div>Loading products...</div>
  if (isError) return <div>Error loading products</div>

  return (
    <div>
      <h2>Products</h2>
      <button onClick={refetch}>Refresh Products</button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map(product => (
          <li key={product.id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd' }}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <img src={product.image} alt={product.title} width="100" />
            <button 
              onClick={() => handleDelete(product.id)}
              style={{ 
                backgroundColor: '#ff4444',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                marginTop: '5px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsList