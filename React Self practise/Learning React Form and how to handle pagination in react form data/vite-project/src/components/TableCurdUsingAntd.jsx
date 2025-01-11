import React, { useEffect, useState } from 'react'
import { Table, Button } from "antd";
import { columns } from './Column.jsx';

import DynamicModalComponenet from './DynamicModalComponent';
import axios from "axios"
  
function TableCurdUsingAntd() {
const [dataSource, setDataSource] = useState([])
console.log(dataSource)
const getJsonData = async () =>{
  const {data} = await axios.get('http://localhost:3000/users')
  console.log(data)
  setDataSource(data)
} 
useEffect(()=>{
  getJsonData()
},[]) 



// Mock data ko useState hook my isi liye daala hay taky jab data update ho to hamey uss ka effect UI par render ho saky
    const receivedData = (getData) =>{
      console.log("Form Data in parent component: ",getData)
      setDataSource((prevData=>  [...prevData, getData]))
      postRequestToJsonData(getData)
}
// axios.post(url, data, config)
const postRequestToJsonData = async (getData) => {
  try {
    console.log("from post method:", getData);
    await axios.post('http://localhost:3000/users', getData, {
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
      },
    });
    // Fetch the latest data after posting
    getJsonData();
  } catch (error) {
    console.error("Error posting data:", error);
  }
}

 




  return (
    <>
    <main style={{display: "flex", gap: "2rem"}}>
    <div style={{border: "2px solid black"}}>
    <Table dataSource={dataSource}  
    columns={columns}
    rowKey="id"
  
    />
    </div>
    <div>
    <DynamicModalComponenet receivedData={receivedData}/>
    </div>
    </main>
</>
  )
}

export default TableCurdUsingAntd