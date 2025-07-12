// // // Need to use the React-specific entry point to import createApi
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// // Define a service using a base URL and expected endpoints
// // export const pokemonApi = createApi({
// //   reducerPath: 'pokemonApi',
// //   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
// //   endpoints: (builder) => ({
// //     getPokemonByName: builder.query<Pokemon, string>({
// //       query: (name) => `pokemon/${name}`,
// //     }),
// //   }),
// // })

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// // export const { useGetPokemonByNameQuery } = pokemonApi


// // src/services/fakeStoreApi.js
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const fakeStoreApi = createApi({
//   reducerPath: 'fakeStoreApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
//   endpoints: (builder) => ({
//     // Get all products
//     getProducts: builder.query({
//       query: () => 'products',
//     }),
    
//     // Get single product by ID
//     getProductById: builder.query({
//       query: (id) => `products/${id}`,
//     }),
    
//     // Get products in a specific category
//     getProductsByCategory: builder.query({
//       query: (category) => `products/category/${category}`,
//     }),
    
//     // Get all categories
//     getCategories: builder.query({
//       query: () => 'products/categories',
//     }),
    
//     // Add a new product (example of mutation)
//     addProduct: builder.mutation({
//       query: (newProduct) => ({
//         url: 'products',
//         method: 'POST',
//         body: newProduct
//       }),
//     }),
//   }),
// })

// // Export hooks for usage in components
// export const { 
//   useGetProductsQuery,
//   useGetProductByIdQuery,
//   useGetProductsByCategoryQuery,
//   useGetCategoriesQuery,
//   useAddProductMutation
// } = fakeStoreApi


// src/services/fakeStoreApi.js
// src/services/fakeStoreApi.js

// -----------------------------------------------------------------------------------------------------------------------------------
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const fakeStoreApi = createApi({
//   reducerPath: 'fakeStoreApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
//   tagTypes: ['Product'], // For cache invalidation
//   endpoints: (builder) => ({
//     // GET all products
//     getProducts: builder.query({
//       query: () => 'products',
//       providesTags: ['Product'] // This data can be tagged
//     }),
    
//     // POST new product
//     addProduct: builder.mutation({
//       query: (newProduct) => ({
//         url: 'products',
//         method: 'POST',
//         body: newProduct
//       }),
//       invalidatesTags: ['Product'] // This will refetch products
//     }),
//   }),
// })

// // Export hooks
// export const { 
//   useGetProductsQuery,
//   useAddProductMutation
// } = fakeStoreApi

// -----------------------------------------------------------------------------------------------------------------------------------

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fakeStoreApi = createApi({
  reducerPath: 'fakeStoreApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
      providesTags: ['Product']
    }),
    
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: 'products',
        method: 'POST',
        body: newProduct
      }),
      invalidatesTags: ['Product']
    }),
    
    // NEW: Delete product endpoint
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
      // Optimistic update (optional)
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          fakeStoreApi.util.updateQueryData('getProducts', undefined, draft => {
            return draft.filter(product => product.id !== id)
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      }
    })
  }),
})

// Export all hooks
export const { 
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation // NEW
} = fakeStoreApi