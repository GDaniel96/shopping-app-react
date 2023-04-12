import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart-container">
      <i className="large shopping cart icon">
        {cart.length === 0 ? null : (
          <span className="product-counter">{cart.length}</span>
        )}
      </i>
    </div>
  );
};
export default Cart;
