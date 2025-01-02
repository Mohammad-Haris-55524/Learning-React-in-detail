import React,{ Component, forwardRef, useId }  from 'react'

function InputChild(props,ref) {
  console.log(props,ref)
  const id = useId();
  console.log(id)

  const onFocusHandler = (e) => {
    console.log(e.target)
    }
    
    const onBlurHandler = (e) =>{
      console.log(e.target)
    
    }
  
  return (
    <>
    <label htmlFor={id}>{props.label}</label>
    <div>
    <input type={props.type} ref={ref} onFocus={onFocusHandler} onBlur={onBlurHandler} />
    </div>
    </>
  )
}

export default forwardRef(InputChild)




// Props lifting me aap data flow ko reverse karte hain, yani child component se parent tak data le aate hain. Yeh mostly
//  functions ya state ke saath hota hai.
// SELF MADE EXPLANATION:
// Foward ref simple iss trha smjha jaa skta hy ky iss my ham apny ref() ko Parent Component sy child Component ko foward
// kar dety han. Means that jab mujhy Parent Component sy child Component my koi data pass karna ho yah phr parent sy
// child Component ky kisi elemnt ko target karna ho aisy situation my ham foward ref ka use karein gy 

// --------------------------- DEEP STUDY INTO FOWARD REF VS PROPS UPLIFTING AND PROPS DRILLING -------------------------
// CHATGPT Response FOWARD REF:

// ForwardRef ki madad se, aap ref ko parent se child tak directly transfer karte hain, jisse parent component directly 
// child component ke kisi DOM element ko control kar sakta hai. Aap ise ref passing bhi keh sakte hain.
// forwardRef tab useful hota hai jab parent ko child component ke kisi DOM element (jaise input, button, etc.) ko 
// directly manipulate karna ho, jaise focus karna, value get/set karna, (AS DONE ABOVE FORM DATA) etc.

// forwardRef ko props drilling se match karna zyada sahi hai, na ke props uplifting se. Yeh is liye kyunki:

// Props Uplifting: Jab child component data ko parent tak bhejta hai, to hum props uplifting kar rahe hote hain. Yeh ek
// bottom-up approach hai, jismein child se parent ko data pass hota hai (e.g., form inputs child me hain, aur data 
// parent me bhejna hai).

// Props Drilling: Jab data ya props parent component se niche child components ko pass hote hain, toh ise props drilling kehte hain. Yeh ek top-down approach hai.

// ForwardRef Concept
// forwardRef me ref parent component se child component ko pass hota hai, aur parent us ref ke zariye child ke DOM 
// elements ya methods ko access karta hai. Yeh flow top-down hai, jismein parent component ref ko directly child ko
//  provide karta hai. Isliye, yeh props drilling se zyada milta hai.
// Summary:
// forwardRef ka flow parent to child hai, jo props drilling ki tarah hai.
// Props Uplifting opposite hai, kyunki woh child to parent data flow hai.
// Isliye forwardRef ko props drilling se match karna sahi hai!