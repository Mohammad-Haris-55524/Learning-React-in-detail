import React, { useMemo, useState } from 'react';

function ItemList({ items = [] }) { // Default value for items
  const [filterText, setFilterText] = useState('');
  const [sortKey, setSortKey] = useState('name');
  const [toggleBtn, setToggleBtn] = useState(false)

    const sortAndFilter = (filterText,sortKey) => {
      let filteredItems = items;
      if(sortKey === "name"){
          filteredItems= items.filter((item)=>{
        if (item.name.toLowerCase().includes(filterText.toLowerCase())){
            return item.name
        }
    })
    // console.log("Result: ",filteredItems)
}
else{
    filteredItems = items.filter((item)=>{
        return item.date.includes(filterText)
    })
    // console.log("Date: ",filteredItems)
}
console.log("Filtered Item: ",filteredItems)
return filteredItems
}

// Yaad rakhna Paramter ka order depend karta hay while passing data sortAndFilter(items,filterText,sortKey) agar order
// change kar diya to jis function my data mil raha hoga woh bhe agy pechy hogy ga
const result = useMemo(() => sortAndFilter(filterText,sortKey),[filterText,sortKey])

console.log("RERENDERING !!!")

return (
    <div>
      <input
        type="text"
        placeholder="Filter items"
        value={filterText}
        onChange={(e) => {setFilterText(e.target.value)
            console.log(e.target.value)}}
      />
      <select value={sortKey} onChange={(e) =>{ setSortKey(e.target.value)
        console.log(e.target.value)
      }}>
        <option value="name">Name</option>
        <option value="date">Date</option>
      </select>
      <ol>
      {result.map((item)=>{
        //   console.log(item)
        return <li key={item.id}>{item.name} - {item.date}</li>
    })}
      </ol>
      {/* <button onClick={() => setToggleBtn("You clicked me !")}>Click Me</button> */}
      <button onClick={() => setToggleBtn(!toggleBtn)}>{toggleBtn ? "You clicked Me" : "Clicked Me PLZ"}</button>
    </div>
  );
}
export default ItemList;

