import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponent from './components/ChildComponent'
import PureComponent from './components/PureComponent'
import UseMemoHook from './components/UseMemoHook'
import ItemList from './components/ItemList'

function App() {

  return (
<>
{/* <ChildComponent/> */}
{/* <PureComponent/> */}
<UseMemoHook/>
{/* <ItemList/> */}
</>
)
}

export default App
