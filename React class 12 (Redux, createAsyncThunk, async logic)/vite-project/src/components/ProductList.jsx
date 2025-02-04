import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/features/productSlice';
import CartBtn from './CartBtn';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className=''>
      <h1 className='text-3xl font-extrabold'>Products</h1>
      <ul className='border-2 flex justify-between flex-wrap '>
        {products.map((product) => (
          <li className='w-80 border ' key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <CartBtn/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;