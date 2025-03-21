import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/features/productSlice';

function FetchingProducts() {
    const dispatch = useDispatch();
    // const { error, isLoading, products: { products } } = useSelector((state) => state.products);
    

    // Getting data from WAY # 01 of API calling in PRODUCTSLICE.JS FILE 
    const {error, isLoading, products: {products}} = useSelector((state) => state.products);
    console.log(error, isLoading , products)

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (isLoading) return <h1 className='flex justify-center items-center text-2xl font-bold'>Loading products ...</h1>;
    if (error) return <h1 className='flex justify-center items-center text-red-500 text-2xl font-bold'>Error: {error}</h1>;

    return (
        <div className='container mx-auto p-6  bg-gray-100'>
            <h1 className='text-center font-bold text-4xl mb-8'>Our Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                {(products || []).map((product) => (
                    <div key={product.id} className='bg-white shadow-lg rounded-lg overflow-hidden p-4 transition-transform transform hover:scale-105'>
                        <img src={product.image} alt={product.title} className='w-full h-40 object-cover rounded-md' />
                        <div className='mt-4'>
                            {console.log(product.image)}
                            <h2 className='text-lg font-semibold'>{product.title}</h2>
                            <p className='text-gray-600 text-sm'>{product.brand}</p>
                            <p className='text-gray-800 font-bold mt-2'>Rs {product.price}</p>
                            <p className='text-gray-500 text-xs'>{product.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FetchingProducts;



// import React, { useEffect, useState, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../store/features/productSlice';

// function FetchingProducts() {
//     const dispatch = useDispatch();
//     const { error, isLoading, products: { products } } = useSelector((state) => state.products);
//     const [visibleProducts, setVisibleProducts] = useState(10); // Initial number of products
//     const observerTargetRef = useRef(null);

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             const [entry] = entries;
//             if (entry.isIntersecting) {
//                 setVisibleProducts((prev) => 
//                     prev + 10 > products.length ? products.length : prev + 10
//                 );
//             }
//         }, { threshold: 1.0 });

//         if (observerTargetRef.current) observer.observe(observerTargetRef.current);

//         return () => {
//             if (observer) observer.disconnect();
//         };
//     }, [products]);

//     if (isLoading) return <h1 className='flex justify-center items-center text-2xl font-bold'>Loading products ...</h1>;
//     if (error) return <h1 className='flex justify-center items-center text-red-500 text-2xl font-bold'>Error: {error}</h1>;

//     return (
//         <div className='container mx-auto p-6 bg-gray-100 min-h-screen'>
//             <h1 className='text-center font-bold text-4xl mb-8'>Our Products</h1>
//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
//                 {(products || []).slice(0, visibleProducts).map((product) => (
//                     <div key={product.id} className='bg-white shadow-lg rounded-lg overflow-hidden p-4 transition-transform transform hover:scale-105'>
//                         <img src={product.image} alt={product.title} className='w-full h-40 object-cover rounded-md' />
//                         <div className='mt-4'>
//                             <h2 className='text-lg font-semibold'>{product.title}</h2>
//                             <p className='text-gray-600 text-sm'>{product.brand}</p>
//                             <p className='text-gray-800 font-bold mt-2'>Rs {product.price}</p>
//                             <p className='text-gray-500 text-xs'>{product.category}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div ref={observerTargetRef} className='h-20 mt-10'></div>
//         </div>
//     );
// }

// export default FetchingProducts;




// -------------------------------------------------------- By using React.LAZYLOAD ---------------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../store/features/productSlice';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

// function FetchingProducts() {
//     const dispatch = useDispatch();
//     const { error, isLoading, products: { products } } = useSelector((state) => state.products);
//     const [visibleProducts, setVisibleProducts] = useState(10); // Initial products count

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     const loadMoreProducts = () => {
//         setVisibleProducts((prev) => Math.min(prev + 10, products.length));
//     };

//     if (isLoading) return <h1 className='flex justify-center items-center text-2xl font-bold'>Loading products ...</h1>;
//     if (error) return <h1 className='flex justify-center items-center text-red-500 text-2xl font-bold'>Error: {error}</h1>;

//     return (
//         <div className='container mx-auto p-6 bg-gray-100 min-h-screen'>
//             <h1 className='text-center font-bold text-4xl mb-8'>Our Products</h1>
//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
//                 {(products || []).slice(0, visibleProducts).map((product) => (
//                     <div key={product.id} className='bg-white shadow-lg rounded-lg overflow-hidden p-4 transition-transform transform hover:scale-105'>
//                         <LazyLoadImage 
//                             src={product.image} 
//                             alt={product.title} 
//                             className='w-full h-40 object-cover rounded-md' 
//                             effect='blur' // Applies a blur effect while loading
//                         />
//                         <div className='mt-4'>
//                             <h2 className='text-lg font-semibold'>{product.title}</h2>
//                             <p className='text-gray-600 text-sm'>{product.brand}</p>
//                             <p className='text-gray-800 font-bold mt-2'>Rs {product.price}</p>
//                             <p className='text-gray-500 text-xs'>{product.category}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Load More Button */}
//             {visibleProducts < products.length && (
//                 <div className='flex justify-center mt-10'>
//                     <button 
//                         onClick={loadMoreProducts} 
//                         className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all'
//                     >
//                         Load More Products
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default FetchingProducts;
