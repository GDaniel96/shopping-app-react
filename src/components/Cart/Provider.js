import React, { createContext, useState } from "react";

export const Context = createContext({});

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productToAdd = { ...product, quantity: 1 };

    const indexOfExistingProduct = cart.findIndex(
      (item) => item.id === product.id
    );

    if (indexOfExistingProduct !== -1) {
      const updatedCart = cart.map((cartItem, index) => {
        if (index === indexOfExistingProduct) {
          return { ...cartItem, quantity: cartItem.quantity++ };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, productToAdd]);
    }
  };
  return (
    <Context.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
