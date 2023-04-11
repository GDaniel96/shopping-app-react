import React from "react";
import "./CartList.css";
// import Products from "../Products/Products";

const CartList = ({ cart, setCart }) => {
  let hardCopy = [...cart];

  const totalPriceAmount = hardCopy.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

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

            <h2>
              Quantity:
              <span>
                <button onClick={() => decreaseQuantity(product)}>-</button>
              </span>
              {product.quantity}
              <span>
                <button
                  onClick={() => {
                    increaseQuantity(product);
                  }}
                >
                  +
                </button>
              </span>
            </h2>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>{cartItems}</div>
      <div>
        <h1>Total Price: $ {totalPriceAmount.toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default CartList;
