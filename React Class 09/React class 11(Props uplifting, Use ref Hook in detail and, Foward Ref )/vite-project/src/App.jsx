import { useState } from 'react'
import './App.css'
import PropsUpliftingParentComponent from './components/PropsUpliftingParentComponent'
import LearninguseRefHookInDetail from './components/LearninguseRefHookInDetail'
import Parent from './components/LearningFowardRefConceptInDetail/Parent'
import ParentRef from './components/PassingRefDataFromChildToParent/ParentRef'


function App() {
return (
   <>
{/*--------------- {Topic # 01 ======> PROPS UPLIFTING (Passing data from CHILD to PARENT component)} ---------------*/}
   {/* <PropsUpliftingParentComponent/> */}

{/*-------------------------- {Topic # 02-A and 2-B ======> Learning UseRef() Hook in detail} ------------------------*/}
  {/* <LearninguseRefHookInDetail/> */}

{/*----------------------- {Topic # 3 ======> Passing ref() data from child to parent Approach} ----------------------*/}
{/* <ParentRef/> */}

{/*-------------------- {Topic # 04 ======> Learning Foward Ref (higher-order component (HOC) )} ---------------------*/}
  <Parent/>
</>
)
}

export default App
