import React, { useState } from 'react'

function DoneOrUndoneTodo({id,isCompleted}) {
    const [checkboxCheckedOrNot, setcheckboxCheckedOrNot] = useState(false)
    
    const checkboxHandler = () => {
    console.log("Done and undone todo",  id, isCompleted)
    
    if(isCompleted){
        setcheckboxCheckedOrNot(false)

    }
    }
  return (
    <input type="checkbox"  onChange={checkboxHandler} checked={checkboxCheckedOrNot} />
  )
}

export default DoneOrUndoneTodo