import React from "react";
import "./CartList.css";
import useCart from "./useCart";

const CartList = () => {
  const { cart, totalPriceAmount, increaseQuantity, decreaseQuantity } =
    useCart();

  return (
    <div className="cart-list-main-container">
      <h2>Cart items</h2>
      <div className="cart-item-container">
        {cart.map((product) => {
          return (
            <div className="ui segment container " key={product.id}>
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
                        <button onClick={() => decreaseQuantity(product.id)}>
                          -
                        </button>
                      </span>
                      {product.quantity}
                      <span>
                        <button
                          onClick={() => {
                            increaseQuantity(product.id);
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
