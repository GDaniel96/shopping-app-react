import React from "react";
import "./Cart.css";
import useCart from "./useCart";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="cart-container">
      <i className="large white shopping cart icon">
        <span className="product-counter">
          {cart.reduce((acc, product) => {
            return acc + product.quantity;
          }, 0)}
        </span>
      </i>
    </div>
  );
};

export default Cart;
