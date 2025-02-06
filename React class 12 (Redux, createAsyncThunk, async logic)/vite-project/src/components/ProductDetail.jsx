import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state: { product } } = useLocation();
  console.log(product, id);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white p-6 shadow-lg rounded-lg max-w-2xl w-full">
        {/* Product Image */}
        <div className="w-full h-60 flex justify-center items-center overflow-hidden rounded-md">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Product Name */}
        <h2 className="text-4xl font-bold mt-4 text-gray-800">{product.name}</h2>

        {/* Price Section */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-600 uppercase">Price</h3>
          <p className="text-xl text-gray-700 font-bold">Rs: {product.price}</p>
        </div>

        {/* Description Section */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-600 uppercase">Description</h3>
          <p className="text-gray-500 mt-1 leading-relaxed">{product.description}</p>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/products")}
          className="mt-6 w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition"
        >
          Back to Products
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
