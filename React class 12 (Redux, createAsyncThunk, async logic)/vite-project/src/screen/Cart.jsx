import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseProductQuantity, increaseProductQuantity, clearAllCartItems } from "../store/features/cartSlice";

import PopUpMessage from "../components/PopUpMessage";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const [showComponent, setShowComponent] = useState(false)

  //Here we are calculating the total cost of all the items present in the cart 
  const totalPrice = cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0);

  // const clearAllCartItemHandler = () => {
  //   setShowComponent(true)
  //   showComponent && <PopUpMessage/>
  // }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200 dark:border-gray-700 text-center">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="p-3 border border-gray-300 dark:border-gray-600">Item</th>
              <th className="p-3 border border-gray-300 dark:border-gray-600">Price</th>
              <th className="p-3 border border-gray-300 dark:border-gray-600">Quantity</th>
              <th className="p-3 border border-gray-300 dark:border-gray-600">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="p-4 border border-gray-300 dark:border-gray-600 flex items-center space-x-4">
                  <img className="h-16 w-16 object-contain" src={item.image} alt={item.title} />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">{item.title}</p>
                    <p className="text-sm text-gray-500">ID: {item.id}</p>
                  </div>
                </td>
                <td className="p-4 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white">
                  Rs: {item.price}
                </td>
                <td className="p-4 border border-gray-300 dark:border-gray-600">
                  <div className="flex items-center justify-center space-x-3">
                    <button
                      onClick={() => dispatch(decreaseProductQuantity(item.id))}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                    >
                      -
                    </button>
                    <span className="font-semibold text-gray-800 dark:text-white">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(increaseProductQuantity(item.id))}
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-4 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white">
                  Rs: {item.quantity * item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 text-right">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Total Price: Rs {totalPrice}</h2>
        </div>
      )}

      <div>
        <button onClick={()=>setShowComponent(!showComponent)}>{showComponent && <PopUpMessage/>}Click to empty cart</button>
        {/* <button onClick={<PopUpMessage/>}>Clear all cart item</button> */}


      </div>
    </div>
    
  );
}

export default Cart;