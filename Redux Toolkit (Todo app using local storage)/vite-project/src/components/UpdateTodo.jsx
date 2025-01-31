import React from 'react'

function UpdateTodo({id,title,setUpdateTodoOrNot, setTodoTitle}) {
    const updateTodoHandler = () => {
        console.log("Update todo clicked", id,title)
// Todo update karna hy yah nahe ? Agar update karna hy to ID pass kar dein gy jis my add todo my check karen gy ky agar id aa rahe hay
  // to update todo karo warna add todo hi karna 
        setUpdateTodoOrNot(id)
// Yahaan title jab pass karen gy to update ky button par click karen gy to jis todo ko update karna chah rahy han uss ka title input field 
// my aagy ga or sath my yahe updated title ham apny updated waly todo my set karwayen gy
        setTodoTitle(title)

    }
  return (
   
    <button onClick={updateTodoHandler}>Update Todo</button>
  )
}

export default UpdateTodo