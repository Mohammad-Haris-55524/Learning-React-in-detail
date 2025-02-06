import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/features/productSlice';
import CardComponent from '../components/CardComponent';
import Loader from '../components/Loader';
import Header from '../components/Header';

const ProductsScreen = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) return <div className='flex justify-center items-center'><Loader/></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    <Header/>
    <div>
      <h1 className='text-3xl font-extrabold text-center mb-4'>Products Screen</h1>
      <div className='flex items-center flex-wrap gap-y-3  gap-x-4 justify-center '>
        {products.map((product) => (
          <CardComponent key={product.id} product={product} isLoading={isLoading}/>
        ))}
      </div>
    </div>
  </>
  );
};

export default ProductsScreen;