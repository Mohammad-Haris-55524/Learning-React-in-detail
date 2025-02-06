import React from 'react';
import CartBtn from './CartBtn';
import { Card } from 'antd';
import { Link, useNavigate,  } from 'react-router-dom';

function CardComponent({ product, isLoading }) {
  const navigate = useNavigate()
  const { Meta } = Card;

  const passingProductAndProductIdHandler = () => {
    // Passing single product detail to product detail page so we could show it on UI.
    navigate(`/products/${product.id}?title${product.title}&product_Id${product.id}`, {state:{product: product}})
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
    <button onClick={passingProductAndProductIdHandler}
     className='mt-2  bg-green-500 hover:bg-green-400 px-2 py-1 rounded-md text-white'>
    Check Product detail
    </button>
    
               

      <CartBtn />
    </Card>
  );
}

export default CardComponent;