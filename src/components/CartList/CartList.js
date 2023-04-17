import React, { useContext } from "react";
import { Context } from "../Cart/Provider";
import "./CartList.css";

const CartList = () => {
  const { cart, setCart } = useContext(Context);

  const totalPriceAmount = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  const increaseQuantity = (product) => {
    let indexOfExistingProduct = cart.findIndex(
      (item) => item.id === product.id
    );
    console.log(indexOfExistingProduct);
    if (indexOfExistingProduct !== -1) {
      const updatedCart = cart.map((cartItem, index) => {
        console.log(cartItem);
        if (index === indexOfExistingProduct) {
          return { ...cartItem, quantity: (cartItem.quantity += 1) };
        }
        return cartItem;
      });
      setCart(updatedCart);
    }
  };

  const decreaseQuantity = (product) => {
    let indexOfExistingProduct = cart.findIndex(
      (item) => item.id === product.id
    );

    if (indexOfExistingProduct !== -1) {
      const updatedCart = cart
        .map((cartItem, index) => {
          if (index !== indexOfExistingProduct) {
            return cartItem;
          }

          if (cartItem.quantity > 1) {
            return { ...cartItem, quantity: (cartItem.quantity -= 1) };
          } else {
            return null;
          }
        })
        .filter((cartItem) => {
          return cartItem !== null;
        });
      setCart(updatedCart);
    }
  };

  return (
    <div>
      <div>
        {cart.map((product) => {
          return (
            <div className="ui segment container" key={product.id}>
              <div className="image">
                <img src={product.image} alt={product.title}></img>
              </div>
              <div className="content">
                <h3 className="header">{product.title}</h3>
                <div className="meta">
                  <span className="category">{product.category}</span>
                </div>

                <div className="price">
                  <div className="price">
                    <h2>$ {product.price}</h2>
                  </div>
                  <div className="quantity-container">
                    <h4>
                      <span>
                        <button onClick={() => decreaseQuantity(product)}>
                          -
                        </button>
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
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total-price-container">
        <h2>Total Price: $ {totalPriceAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default CartList;
