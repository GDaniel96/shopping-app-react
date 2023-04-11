import React from "react";
import Link from "../Link/Link";

const Header = () => {
  return (
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
  );
};

export default Header;
