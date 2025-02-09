import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const [quantity, setquantity] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);

  return (
    <>
      <h1>Main Cart screen</h1>
      <table className="border-separate border-spacing-0 border-b-gray-600 w-full text-center">
        <thead>
          <tr>
            <th className="border-b-2">Item</th>
            <th className="border-b-2">Price</th>
            <th className="border-b-2">Quantity</th>
            <th className="border-b-2">Total</th>
          </tr>
        </thead>

        <tbody>
          <h1>{cartItems.length <=0 && 'NO ITEM IS PRESENT IN THE CART'} </h1>
          {cartItems.map((item) => {
            return (
              <tr key={item.product.id}>
                <td className="border border-gray-300 dark:border-gray-700">
                  <div className="flex justify-evenly items-center p-2">
                    <div>
                      <img
                        className="h-22 w-30 object-contain"
                        src={item.product.image}
                        alt={item.product.title}
                      />
                    </div>
                    <div>
                      <p className="font-bold">Product Id: {item.product.id}</p>
                      <p className="font-bold">Product Name: {item.product.title}</p>
                    </div>
                  </div>
                </td>

                <td className="border border-gray-300 dark:border-gray-700 p-2">
                  <p className="font-bold"> Rs:{item.price}</p>
                </td>

                <td className="border border-gray-300 dark:border-gray-700 p-2">
                  <button onClick={() => setquantity(quantity - 1)}>-</button>
                  <button onClick={() => setquantity(quantity + 1)}>
                    {quantity}+
                  </button>
                </td>

                <td className="border border-gray-300 dark:border-gray-700 p-2">
                  Product Price: {item.price}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Cart;
