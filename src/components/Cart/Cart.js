import React, { useContext } from "react";
import { Context } from "./Provider";
import "./Cart.css";

const Cart = () => {
  const { cart, setCart } = useContext(Context);
  return (
    <div className="cart-container">
      <i className="large white shopping cart icon">
        {cart.length === 0 ? null : (
          <span className="product-counter">{cart.length}</span>
        )}
      </i>
    </div>
  );
};
export default Cart;
