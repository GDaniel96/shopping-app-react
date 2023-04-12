import React from "react";
import "./Header.css";
import Cart from "../Cart/Cart";
import Link from "../Link/Link";

const Header = ({ cart, setCart }) => {
  return (
    <div className="header-container">
      <div className="ui secondary pointing menu">
        <Link href="/" className="item">
          Home
        </Link>
        <Link href="/products" className="item">
          Products
        </Link>
        <Link href="/cart" className="item">
          Cart
        </Link>
      </div>
      <div className="cart">
        <Link href="/cart">
          <Cart cart={cart} setCart={setCart} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
