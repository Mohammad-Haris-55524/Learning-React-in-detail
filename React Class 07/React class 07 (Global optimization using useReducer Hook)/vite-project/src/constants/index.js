// Jab bhe ap ky pas complex states hon yah phr ap complex logic building ho to tab ap ko USE REDUCER ko use karna chaihyee 
// nakky USE STATE ka.

// ----------------------------------- WHY WE CREATE CONSTANTS FOLDER ?------------------------------------------------- 
// Yah tarika good practise my ata hay iss my ham kar yah rahy han ky jidhar jidhar useReducer ky actionTypes ky switch
// cases ky andar ham har case my jaa kar COMPLETE , ADD TODO, DELETE, EDIT likha par raha tha cases ky andar taky sirf
// usy lihaz sy action perform ho. Iss my issue yah hoskta hay ky maybe ham sy koi typing error hogy for example: 
// CASE : ADD TODO ki jagah ham ny agar CASE: ADD todo likha diya to yah switch case ADD TODO walay code ky andar nahe gy 
// ga or hamara code sahe sy work nahe kary ga. Basically constants ky folder ky andar han un chezo ko variable/objects
// my save karawa kar export karwaty han jin ka use code my zaida hota hay iss sy faida yah hota hay ky hamey jab bhe 
// in varibales ki need pary gi jahaan kahen bhe ham inhay import karwa lein gy iss sy hamara code bhe clean rahy ga 
// or line of code my kam hogy ga. Ap ko yaad hoga ham ny axios API ka jab use kiya tha to uss my ham ny  1 base URL
// ka use kiya tha kiu ky woh pori API takreban har call par same reh rahe the sirf uss ky endpoint change ho rahy thy to 
// ham ny API ka URL base URL bana kar constants ky folder my save kara diya tha yaad rahy ky sirf AXIOS hamey BASE URL 
// ka feature provide karta hay.
export const actionsTypes = {
    completeOrInCompleteTodo : "CompleteTodoOrInCompleteTodo",
    addTodo : "Add-Todo",
    editTodo : "Edit-Todo",
    deleteTodo : "Delete-Todo"
}