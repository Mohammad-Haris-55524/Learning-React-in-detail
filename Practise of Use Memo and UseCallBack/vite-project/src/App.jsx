import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ItemList from './componenets/ItemList'
import ParentComponentUsingCallback from './componenets/ParentComponentUsingCallback';


function App() {
  const items = [
    { id: 1, name: 'Apple', date: '2023-01-01' },
    { id: 2, name: 'Banana', date: '2023-02-01' },
    { id: 3, name: 'Cherry', date: '2023-03-01' },
  ];
  
  return (
  <>
    {/* <ItemList items={items}/> */}
    <ParentComponentUsingCallback/>
  </>
  )
}

export default App
