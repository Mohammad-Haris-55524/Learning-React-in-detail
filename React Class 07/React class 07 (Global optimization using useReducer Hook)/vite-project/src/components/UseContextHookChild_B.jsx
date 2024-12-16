//---- THIS IS A 1ST CHILD COMPONENT OF PARENT COMPONENT (GlobalStateManagnmentUsingUseContextHookParentComponent_A) ----
// Basically "Child component B" and "Child component C" are the sibling because they both have same PARENT 
// (GlobalStateManagnmentUsingUseContextHookParentComponent_A)

// This "CHILD COMPONENT B" HAS 2 MORE NESTED CHILD COMPONENT (UseContextHookChild_D) AND (UseContextHookChild_E) 
import React from 'react'
import UseContextHookChild_D from './UseContextHookChild_D'
import UseContextHookChild_E from './UseContextHookChild_E'

function UseContextHookChild_B() {

  return (
    <div>
      I am a "Child Component B" of "Parent Component A"
      <UseContextHookChild_D/>
      <UseContextHookChild_E/>
    </div>
  )
}

export default UseContextHookChild_B