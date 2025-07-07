// RTK Query Explained in Simple Terms

// What is RTK Query?
// RTK Query is a powerful data fetching and caching tool that comes with Redux Toolkit (RTK). It's designed to simplify how you manage 
// server state in your React applications.

// In the easiest way possible: RTK Query is like a smart assistant that:

// Remembers data you've already fetched
// Automatically updates your UI when data changes
// Handles loading and error states for you
// Reduces the amount of code you need to write

// Why Do We Need RTK Query?
// Before RTK Query, developers had to:

// Write a lot of Redux boilerplate code
// Manually handle loading states
// Manage caching themselves
// Deal with complex data fetching logic
// RTK Query solves these problems by:

// Reducing code - Less boilerplate than traditional Redux

// Automatic caching - No more duplicate requests
// Auto-refreshing - Can refetch data when needed
// Built-in loading states - No manual state management
// Optimistic updates - Make UI feel faster

// Key Features
// API endpoint definition - Define how to fetch data in one place

// Automatic caching - Same data isn't fetched twice
// Auto-generated hooks - Easy-to-use React hooks for data fetching
// Mutation support - For creating/updating data
// Pagination & polling - Built-in support for common patterns


// Interview Questions About RTK Query
// --------------------------------------------------------- Basic Questions-----------------------------------------------------------

// 1. What is RTK Query and how does it differ from traditional Redux?

// Answer: RTK Query is a data fetching and caching library built into Redux Toolkit that eliminates much of the boilerplate associated 
// with traditional Redux. While traditional Redux requires manually writing actions, reducers, and selectors for async operations, 
// RTK Query automatically generates these and handles caching, loading states, and data synchronization.

// Follow-up: What problems does RTK Query solve that traditional Redux doesn't handle well?

// Answer: It specifically solves server-state management problems like caching, deduping requests, managing loading states, and keeping
// data synchronized with the server, which traditionally required lots of custom code in Redux.


// 2. How do you create an API slice in RTK Query?

// Answer: You use the createApi function from @reduxjs/toolkit/query/react. Here's a basic example:
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
  }),
})

// Follow-up: What's the purpose of the reducerPath and baseQuery?

// Answer: reducerPath specifies where the RTK Query reducer will be mounted in the Redux store. baseQuery is the base fetch function that
// all endpoints will use, with fetchBaseQuery being a lightweight wrapper around the fetch API.


// -------------------------------------------------------- Intermediate Questions ------------------------------------------------------
// 3. How does RTK Query handle caching?
// Answer: RTK Query automatically caches data by endpoint name and query parameters. It uses a "cache-and-invalidate" strategy where 
// data is kept until either a mutation invalidates it, a refetch is triggered manually, or the cache timeout expires.

// Follow-up: How can you control how long data stays cached?
// Answer: You can set the keepUnusedDataFor option at the API level or per endpoint to control cache lifetime (in seconds). You can 
// also manually invalidate tags to force refetching.

// 4. What are "tags" in RTK Query and how are they used?

// Answer: Tags are used for cache invalidation. You can tag queries with identifiers and then invalidate those tags in mutations to 
// automatically refetch affected queries. There are two types: providesTags for queries and invalidatesTags for mutations.
// Follow-up: Can you show an example of tag usage?

// Answer:
endpoints: (builder) => ({
  getPosts: builder.query({
    query: () => 'posts',
    providesTags: ['Posts'] // This query provides a 'Posts' tag
  }),
  addPost: builder.mutation({
    query: (post) => ({
      url: 'posts',
      method: 'POST',
      body: post
    }),
    invalidatesTags: ['Posts'] // This mutation invalidates the 'Posts' tag
  })
})



// --------------------------------------------------------- Advanced Questions -------------------------------------------------------
// 5. How would you implement optimistic updates with RTK Query?

// Answer: You can use the onQueryStarted lifecycle method in mutations to implement optimistic updates. Here's an example:
updatePost: builder.mutation({
  query: (post) => ({
    url: `posts/${post.id}`,
    method: 'PUT',
    body: post
  }),
  async onQueryStarted(post, { dispatch, queryFulfilled, getState }) {
    // Optimistically update the cache
    const patchResult = dispatch(
      apiSlice.util.updateQueryData('getPosts', undefined, (draft) => {
        const postIndex = draft.findIndex(p => p.id === post.id)
        if (postIndex !== -1) draft[postIndex] = post
      })
    )
    try {
      await queryFulfilled
    } catch {
      patchResult.undo() // Revert if the mutation fails
    }
  }
})


// Follow-up: What are the potential pitfalls of optimistic updates?
// Answer: The main risks are UI inconsistency if the server response differs from our optimistic update, and the need to properly handle error cases to roll back changes. It also adds complexity to the code.

// 6. How would you handle authentication with RTK Query?
// Answer: You can customize the baseQuery to include authentication tokens. Example:
const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) headers.set('authorization', `Bearer ${token}`)
    return headers
  }
})


// Follow-up: How would you handle token refresh when a request fails with 401?
// Answer: You can implement token refresh using a custom baseQuery with retry logic:

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error?.status === 401) {
    // Try to refresh token
    const refreshResult = await baseQuery('/refreshToken', api, extraOptions)
    if (refreshResult.data) {
      // Store the new token
      api.dispatch(tokenReceived(refreshResult.data.token))
      // Retry original request
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}


// When to Use RTK Query
// You should consider RTK Query when:

// Your app needs to fetch data from APIs
// You want to reduce Redux boilerplate
// You need automatic caching
// Your app has many components using the same data
// You want built-in loading/error states

// RTK Query is particularly useful for medium to large applications that need to manage complex server state with minimal boilerplate.