import React from 'react';
import CartBtn from './CartBtn';
import { Card } from 'antd';
import Loader from './Loader';

function CardComponent({ product, isLoading }) {
  const { Meta } = Card;
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
      <div className='mt-2  bg-green-500 hover:bg-green-400 px-2 py-1 rounded-md text-white'>Check Product detail</div>
      <CartBtn />
    </Card>
  );
}

export default CardComponent;