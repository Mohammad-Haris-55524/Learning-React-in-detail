import React from 'react'
import ReactDOM from 'react-dom/client'
//---------------------------------------RULES while using naming EXPORT----------------------------------------------- 
// import {Haris} from './App.jsx' //Always use {} brackets while naming export (Path name must be correctly written +  
// componenet name should be same as the file name thorugh which we are exporting (yani jo component ka name hay wohi 
// name import ky sath bhe likhna hay yani componenet ka name agar Haris hay to import {Haris} likhna lazmi hay
//----------------------------------------RULES while using DEFAULT EXPORT--------------------------------------------
// NO NEED OF ANY {} brackets while DEFAULT export (Path name must be correctly written + No need of same componenet name 
// (yani jo component ka name hay zarori nahe usi name sy hi file ko export bhe karwain yani componenet ka name agar
// Haris hay to import Zain bhe likh dein to sahe kaam kary ga  bss path sahe define hona chaihyee.
import Zain from './App.jsx'
// ---------------------------------------------NORMAL DEFAULT IMPORT-------------------------------------------------
import App from './App.jsx'

 
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // {/* <Haris/> */} 
    // {/* <Zain/> */}
    <App />
  // {/* </React.StrictMode>, */}
)
