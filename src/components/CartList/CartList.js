import React, { useState } from "react";
// import Products from "../Products/Products";
import ReadMore from "../ReadMore/ReadMore";

const CartList = ({ cart, setCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  let hardCopy = [...cart];

  const increaseQuantity = (product) => {
    let sameIndex = hardCopy.findIndex((item) => item.id === product.id);
    console.log(hardCopy);

    if (sameIndex !== -1) {
      hardCopy[sameIndex].quantity++;
      setCart([...hardCopy]);
    } else {
      setCart([...hardCopy, product]);
    }
  };

  const decreaseQuantity = (product) => {
    let sameIndex = hardCopy.findIndex((item) => item.id === product.id);
    console.log(sameIndex);

    if (sameIndex !== -1) {
      if (hardCopy[sameIndex].quantity <= 1) {
        hardCopy = hardCopy.filter((item) => item.id !== product.id);
        setCart(hardCopy);
      } else {
        hardCopy[sameIndex].quantity--;
        setCart([...hardCopy]);
      }
    }
  };

  const cartItems = cart.map((product) => {
    return (
      <div className="container" key={product.id}>
        <div className="image">
          <img src={product.image} alt={product.title}></img>
        </div>
        <div className="content">
          <h2 className="header">{product.title}</h2>
          <div className="meta">
            <span className="category">{product.category}</span>
          </div>

          <div className="price">
            <div className="price">
              <h2>$ {product.price}</h2>
            </div>
            <button onClick={() => decreaseQuantity(product)}>-</button>
            <h2>Quantity: {product.quantity}</h2>
            <button
              onClick={() => {
                increaseQuantity(product);
              }}
            >
              +
            </button>
          </div>
        </div>
        <p>{totalPrice}</p>
      </div>
    );
  });

  return <div>{cartItems}</div>;
};

export default CartList;
