import React from "react";
import { useSelector, useDispatch } from "react-redux";
import addToCart from '../store/features/cartSlice'
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems  = useSelector((state) => state.cart.cart);
  console.log(cartItems)

  return (
    <>
    <h1>Add to cart screen</h1>
    </>
  );
};

export default Cart;
