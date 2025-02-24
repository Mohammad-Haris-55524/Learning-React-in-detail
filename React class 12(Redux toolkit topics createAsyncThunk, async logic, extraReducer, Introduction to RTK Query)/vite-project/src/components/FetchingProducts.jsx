import React from 'react'

function FetchingProducts() {
    const products = useSelector(()=>state)
    console.log(products)
  return (
    <div>FetchingProducts</div>
  )
}

export default FetchingProducts