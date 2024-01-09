import React, { useContext, useMemo } from "react";
import { Context } from "../Cart/Provider";

const useCart = () => {
  const { cart, setCart } = useContext(Context);

  const totalPriceAmount = useMemo(
    () =>
      cart.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0
      ),
    [cart]
  );

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }

      return product;
    });

    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart
      .map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      })
      .filter((product) => product.quantity > 0);

    setCart(updatedCart);
  };

  const addToCart = (productToAdd) => {
    // Product already in cart
    if (cart.find((cartProduct) => cartProduct.id === productToAdd.id)) {
      const updatedCart = cart.map((product) => {
        if (product.id === productToAdd.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });

      setCart(updatedCart);
      return;
    }

    // Product not in cart
    const productToAddWithQty = { ...productToAdd, quantity: 1 };

    const updatedCart = [...cart, productToAddWithQty];

    setCart(updatedCart);
  };

  return {
    cart,
    setCart,
    addToCart,
    totalPriceAmount,
    increaseQuantity,
    decreaseQuantity,
  };
};

export default useCart;
