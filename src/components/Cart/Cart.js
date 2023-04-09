import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="ui segment">
      <i className=" big shopping cart icon">
        {cart.length === 0 ? null : (
          <span className="product-counter">{cart.length}</span>
        )}
      </i>
    </div>
  );
};
export default Cart;
