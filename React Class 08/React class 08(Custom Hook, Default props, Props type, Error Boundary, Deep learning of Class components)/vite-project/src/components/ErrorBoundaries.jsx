// *************************************** TOPIC # 05 (PART A) IN APP.JSX **********************************************

// ------------------------------- Catching rendering errors with an ERROR BOUNDARY -------------------------------------
// A JavaScript error in a part of the UI shouldn’t break the whole app. To solve this problem for React users, React 16 
// introduces a new concept of an “error boundary”.
// Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those 
// errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during 
// rendering, in lifecycle methods, and in constructors of the whole tree.
// --------------------------------------------------------------------------------------------------------------------
// ---------------------------------------- WHY WE USE ERROR BOUNDARIES ? ----------------------------------------------
// Maan lo mery pas kuch errors atay han jinhay my ny handle nahe kiya howa jis ki wjah sy mera code break hogy ga or UI
// par ERROR SCREEN anay lag gy gi aap ny aksar dekha hoga REACT ky andar jab error ata hay to hamary pas RED BLACK color
// ki screen aajati hy or wohi same hamey CONSOLE my bhe dekhny ko mil raha hota hy. Iss sab ki wjah sy hamey pta chal 
// jata hay ky hamary code my error hy yah hamari website proper work nahe kar rahe he lekin yaad rahy ERROR SCREENS hamey
// sirf DEVELOPMENT MODE my hi dekhny ko milti hay.
// ---------------------------------------------------------------------------------------------------------------------
// Maan lo my apni website PRODUCTION MODE par lay gya. PRODUCTION MODE means my ny website complete bana kar CLIENT ko
// delever kar di. Or jab CLIENT ny use ki to uss ky pass website my error aagya ab yaad rahy PRODUCTION MODE my ERROR 
// SCREEN nahe dekhny ko nahe milti. To ab client ko ERROR SCREEN ki jagah WHITE BLANK SCREEN dekhny ko mily gi or usy lagy
// ga ky webiste yah to crash kar gaye hy yah phr sahe sy webiste nahe banaye DEVELOPER ny. To hamey chahyee ky jab koi 
// aisi situtation ho to ham CLIENT/USER ko koi FALLBACK UI dekha saken. Kiu ky CLIENT NON TECHNICAL bhe hoskta hy usy
// nahe pta hota ky yah error kiu aa raha hy yah phr yah bhe hoskta hy ky webiste bilkul sahe bani ho or
// ham sy kisi value ko handle karny my koi mistake hogaye ho or jesy hi user uss value ko access karny ki koshish karta
// hy to webiste crash hojati hay or USER/CLIENT ko white screen dekhna start hojati hy to yah koi sahe cheez nahe. Ham
// aisi situation ko hi handle karny ky liye FALLBACK UI ka use karty han by using ERROR BOUNDARIES. 
// --------------------------------------------------------------------------------------------------------------------
// Dosra scenrio yah bhe hoskta hy ky webiste ky kuch features under development hon or ham usy pora develop karna bhol 
// gy hon or jab user un features ko access kary ga to webiste crash hogy gi or aik WHITE SCREEN dekhny ko mily gi client 
// ko. To ham chahty han ky aisi situtatuon jab bhe aye to ham CLIENT/USER ko koi FALLBACK UI dekha saken. 
// To iss sab ko handle karny ky liye ham ERROR BOUNDARY ka concept use karin gy.
// Maan lo meri webite my koi unnecessary ERROR aajata hy maybe woh ERROR hamry code my kisi value ko proper handle na
// karny ki wjah sy ho to my chahta hon ky PRODUCTION MODE par jab yah webite gy to CLIENT ko WHITE BLANK screen ky 
// bajyee koi meaning full message dekhny ko mil gy. FOR EXAMPLE: WEBISTE IS UNDER DEVELOPMENT etc ... or sath my hi 
// baki screens bilkul sahe sy work karein yah phr sirf meaningfull(ERROR/mesasge) sirf usi Component par show ho jis my
// koi problem yah phr under development ho baki Components sahe sy work karein. To aisi surat my ham ERROR BOUNDARY 
// use karty han.
// --------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------- POINTS TO REMEMBER --------------------------------------------------
// Error boundaries do not catch errors for: (Error boundary in 4 chezo par work nahe karti jab in chezo sy error aye)
// 1) Event handlers.
// 2) Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
// 3) Server side rendering
// 4) Errors thrown in the error boundary itself (rather than its children)
// ----------------------------------------------------------------------------------------------------------------------
// 1) ERROR BOUNDARY CATCH BLOCK KI TRHA ACT KARTA HY FOR COMPONENTS ONLY, MEANS THAT KY JAB BHE KISI COMPONENTS KY CODE
// MY ERROR AYE GA TO ERROR BOUNDARY USY CATCH KAR LY GA OR PHR HAM USS ERROR KI JAGAH FALLBACK UI MY MEANING FULL 
// MESSAGE SHOW KARA DEIN TAKY HAMARI PORI WEBISTE CRASH NA HO.
// 2) ERROR BOUNDARY BANANY KY LIYE HAM SIRF CLASS COMPONENT KA HI USE KAR SKTY HAN. PHR HAM ERROR BOUNDARY WALY CLASS
// COMPONENT KY ANDAR APNA WOH COMPONENT WRAP KAR DEIN GY JIS MY ERROR ANY KA DAR HO YAH PHR WOH UNDERDEVELOPMENT HO.
// 3) ERROR BOUNDARY KY ANDAR MY APNAY SARY REACT KY COMPONENTS BHE WRAP KAR SKTA HON. JESY HI KOI CODE BREAK HOGA YAH 
// KISI BHE COMPONENT KY CODE MY ERROR AYE GA TO ERROR BOUNDARY HAMEY PRODUCTION MODE PAR AIK FALLBACK UI DEKHA DY GI.
// 4) MAAN LO MERY PAS 4 COMPONENTS HAN COMP-1, COMP-2, COMP-3, COMP-4 MY NY IN TAMAM COMPONENTS KO ERROR BOUNDARY KY 
// ANDAR WRAP KAR DIYA JESY HY AGAR KISI AIK COMPONENT KA BHE CODE BREAK HOGA TO ERROR BOUNDARY HAMEY FALL BACK UI DEKHA
// DY GI OR BAKI SARY COMPONENTS KY CODE KI JAGAH WOH FALLBACK UI AAGY GI ISS SY HOGA YAH KY HAMARI PRODUCTION LEVEL 
// PAR WHITE BLANK SCREEN NAHE AYE GI BALY USS KI JAGAH FALLBACK UI AYE GI. LEKIN MAAN HAM CHAHTY KY COMP-1 AGAR CRASH
// HO TO SIRF COMP-1 KI UI KI JAGAH FALLBACK UI DEKHY BAKI COMPONENTS KI UI PAR KOI FARQ NA PARY, YAH PHR AGAR COMP-2 KI
// UI BREAK HO TO SIRF COMP-2 KI UI KI JAGAH HI FALLBACK UI DEKHY OR BAKI COMP-1, COMP-3, COMP-4 KI UI PAR KOI FARQ NA
// PARY TO USS KY LIYE HAMEY ALAG ALAG ERROR BOUNDARY KY COMPONENT KY ANDAR COMPONENTS KO WRAP KARNA PARY GA
// FOR EXAMPLE (CHECK APP.JSX COMPONENT) ===========>  (TOPIC # 05 ERROR BOUNDARIES) =============> (SCENERIO # 02)


import React, { Component } from "react";
export class ErrorBoundaries extends Component {
    constructor(props) {
      super(props);
      this.state = {
      hasError: false
      }
      console.log(this);
    }
  
  static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
    console.log('getDerivedStateFromError:', error);
    return {hasError: true}
  }
  
componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch:', error, errorInfo);
  // You can also log the error to an error reporting service
}

render() {
  if (this.state.hasError) {
    console.log('Rendering fallback UI');
    // You can render any custom fallback UI
    return <h2>404 Error: Something went wrong!</h2>;
  }

  return this.props.children; 
}
  }

