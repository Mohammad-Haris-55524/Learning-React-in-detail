import React, { useEffect, useState } from 'react'
import axios from 'axios';
//Yahaan useState ky anadar ap ko yaad hoga ham empty array pass karty han jab hamary pas API sy data ata hy ham usy 
// empty array my set karwa dety han yahaan bhe ham yahe kar rahy han bss as a parameter ky through kar rahy han jesy ap 
// ko pta hy default value defaultDataValue ki [] EMPTY ARRAY hi hay lekin ham yah direct kar skty thy magar aisy 
// dynamically kiu kar rahy han ? Uss ki wjah sy POST wali screen kiu ky post wali screen my hamey at a time aik hi 
// object UI par render karwana chahty han to isi liye ham yahaan dynamically useState ki initial value set karwa rahy 
// han taky agar single POST ka data aye to useState(defaultDataValue) my NULL aagy kiu ky single object hi hamey chaihye
// hoga POST ki UI my or agar POSTS ki UI render karwani ho to default value wesy hi empty array hay.
// REMEMBER:- As we know that for single object we use NULL as initial value like as (post screen) and for arrays of 
// object we use ARRAY empty [] array as initial value.
function useFetch(url, defaultDataValue = []) {
  console.log(defaultDataValue)
    const [data, setData] = useState(defaultDataValue);
    const [error, setError] = useState('');
    const [isLoading, setisLoading] = useState(false);
    
    useEffect(()=>{
      fetchData()
    },[])
    
    const fetchData = async () =>{
      console.log(url)
      setisLoading(true)
      try{
        const {data} = await axios(url) 
        // console.log(data)
        setData(data)
      }
      catch(error){
        // console.log(error.message)
        setError(error.message)
      }
      finally{
        setisLoading(false)
      }
    } 
    
  return {data, isLoading, error}
}

export default useFetch

