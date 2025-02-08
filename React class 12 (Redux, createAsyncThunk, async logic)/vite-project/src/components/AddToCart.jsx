import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from '../store/features/cartSlice'
import { Link, useLocation } from "react-router-dom";

const AddToCart = () => {
  const dispatch = useDispatch();
  const {state: { product }} = useLocation()
  const cartItems  = useSelector((state) => state.cart.cart);
  console.log(cartItems)

  return (
    <>
    <h1>Add to cart screen</h1>
      <div className="flex justify-between items-center border-b-2 p-2">
      <div>Item</div>
      <div>Price</div>
      <div>Quantity</div>
      <div>Total</div>
      </div>
   
    <div className="flex justify-between items-center border-4">
      {cartItems.map((item) => {
        return <> 
        <div className="border flex justify-between items-center">
          <img className="h-22 w-30 object-contain border" src={item.image} alt={item.title} />
        <div>
          <h1>Item Id: {item.id}</h1>
          <h1>Item Name: {item.title}</h1>
        </div>
     </div>

     <div>
     <h1>Item Price: {item.price}</h1>
     </div>

     <div>
     <button>0</button>
     <button>0</button>

     </div>

     <div>
     <h1>Item Price: {item.price}</h1>
     </div>
      </>
      
      })}
     
    {/* <button onClick={()=>dispatch(addItemToCart(product))} className="bg-green-400 hover:bg-green-500 text-white font-medium px-2 py-1 rounded-md">Add item Quantity</button>
    <button className="bg-red-400 hover:bg-red-500  text-white font-medium px-2 py-1 rounded-md">Decrease item Quantity</button> */}
    </div>

    </>
  );
};

export default AddToCart;
