import React from "react";
// import Products from "../Products/Products";
import ReadMore from "../ReadMore/ReadMore";

const CartList = ({ cart }) => {
  const cartItems = cart.map((item) => {
    return (
      <>
        <div className="image">
          <img src={item.image} alt={item.title}></img>
        </div>
        <div className="content">
          <h2 className="header">{item.title}</h2>
          <div className="meta">
            <span className="category">{item.category}</span>
          </div>
          <div className="description">
            <ReadMore>{item.description}</ReadMore>
          </div>
          <div className="price">
            <h2>Quantity: {item.quantity}</h2>
          </div>
        </div>
      </>
    );
  });

  return <div>{cartItems}</div>;
};

export default CartList;
