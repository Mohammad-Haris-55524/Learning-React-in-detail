import React, { forwardRef } from 'react'

function ChildRef({refForHandlingMultiplesInputFields}) {
    
    console.log(refForHandlingMultiplesInputFields)
    console.log("Child component Rendered")

    return(
        <>
        <label htmlFor="name">USER NAME</label>
        <div>
        <input type="text" ref={(element) => {
            refForHandlingMultiplesInputFields.current["name"] = element
            console.log(element)
            }}/>
        </div>
        
        <label htmlFor="email">EMAIL</label>
        <div>
        <input type="text" ref={(element)=> {
            // Yah ham email ky element ko target kar rahy han or element my save 
            refForHandlingMultiplesInputFields.current["email"] = element
            console.log(element)
            }} />
        </div>
        
        <label htmlFor="age">AGE</label>
        <div>
        <input type="number" ref={(element)=> {
            refForHandlingMultiplesInputFields.current["age"] = element
            console.log(element)
        }}/>
        </div>
        
        <label htmlFor="range">Range</label>
        <div>
        <input type="range" ref={(element)=>refForHandlingMultiplesInputFields.current["range"] = element } />
        </div>
    
    </>
)
}

export default ChildRef





// import React, { forwardRef } from 'react'

// // function ChildRef({refForHandlingMultiplesInputFields}) {
// function ChildRef(props, ref) {
//     console.log(props,ref)
//     // console.log(refForHandlingMultiplesInputFields)
//     console.log("Child component Rendered")

//     return(
//         <>
//         <label htmlFor="name">USER NAME</label>
//         <div>
//         <input type="text" ref={(element) => {
//             ref.current["name"] = element
//             console.log(element)
//             }}/>
//         </div>
        
//         <label htmlFor="email">EMAIL</label>
//         <div>
//         <input type="text" ref={(element)=> {
//             // Yah ham email ky element ko target kar rahy han or element my save 
//             ref.current["email"] = element
//             console.log(element)
//             }} />
//         </div>
        
//         <label htmlFor="age">AGE</label>
//         <div>
//         <input type="number" ref={(element)=> {
//             ref.current["age"] = element
//             console.log(element)
//         }}/>
//         </div>
        
//         <label htmlFor="range">Range</label>
//         <div>
//         <input type="range" ref={(element)=>ref.current["range"] = element } />
//         </div>
    
//     </>
// )
// }

// export default forwardRef(ChildRef)