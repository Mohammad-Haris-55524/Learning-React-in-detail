import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {fetchProducts} from '../store/features/productSlice'
function FetchingProducts() {
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.products)
    console.log(products)

    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);

  return (
    <div>FetchingProducts</div>
  )
}

export default FetchingProducts