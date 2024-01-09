import React from "react";
import "./Header.css";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/products" className="item">
          Products
        </Link>
        <Link to="/cart" className="item">
          Cart
        </Link>
      </div>
      <div className="cart">
        <Link to="/cart">
          <Cart />
        </Link>
      </div>
    </div>
  );
};

export default Header;
