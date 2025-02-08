import React from 'react';
import CartBtn from './AddToCart';
import { Card } from 'antd';
import { Link, useNavigate,  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../store/features/cartSlice';

function CardComponent({ product, isLoading }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { Meta } = Card;

  const passingProductAndProductIdrToProductDetailComponentHandler = () => {
    // Passing single product detail to product detail page so we could show it on UI.
    console.log("Product for product detail component", product)
    navigate(`/products/${product.id}?title${product.title}&product_Id${product.id}`, {state:{product: product}})
  }

  const passingProductAndProductToCartComponentHandler = () => {
    console.log("Product for cart component ", product)
    dispatch(addItemToCart(product))
    navigate(`/cart/${product.id}?title${product.title}&product_Id${product.id}`, {state:{product: product}})
  }
  return (
    <Card
      size="default"
      style={{ width: 200 }}
      cover={
        <img
          className="h-40 w-full object-contain" // Set fixed height and ensure the image covers the area
          alt="example"
          src={product.image}
        />
      }
    >
      <Meta title={product.title}/>
      <div className='mt-2 font-extrabold'>Price: Rs: {product.price}</div>

      {/* (METHOD # 01) =======================> Navigating from main product screen to product detail screen */}
      
      {/* <Link to={`/products/${product.id}`}>
      <button className='mt-2  bg-green-500 hover:bg-green-400 px-2 py-1 rounded-md text-white' >Check Product detail</button>
      </Link>  */}

      {/* (METHOD # 02) ======================> Navigating from main product screen to product detail screen  */}
    <button onClick={passingProductAndProductIdrToProductDetailComponentHandler}
     className='mt-2  bg-green-500 hover:bg-green-400 px-2 py-1 rounded-md text-white'>
    Check Product detail
    </button>
    
    {/* <Link to={`/cart/${product.id}`}>
    <button className='bg-blue-500 px-4 py-1 mt-4 text-white  rounded-md w-max hover:bg-blue-400' >Add to Cart</button>
    </Link>  */}


  <button onClick={passingProductAndProductToCartComponentHandler}
     className='bg-blue-500 px-4 py-1 mt-4 text-white  rounded-md w-max hover:bg-blue-400'>
   Add to Cart
    </button>

    </Card>
  );
}

export default CardComponent;