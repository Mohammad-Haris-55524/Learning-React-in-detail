// // // Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
export const fakeStoreApi = createApi({
  reducerPath: 'fakeStoreApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  tagTypes: ['Product'], // Add this line
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
      providesTags: ['Product'], // Add this to queries you want to refetch
    }),
    
    // ... other endpoints ...

    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: 'products',
        method: 'POST',
        body: newProduct
      }),
      invalidatesTags: ['Product'], // Add this to invalidate cache
    }),
  }),
})

export const { 
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
  useGetCategoriesQuery,
  useAddProductMutation
} = fakeStoreApi