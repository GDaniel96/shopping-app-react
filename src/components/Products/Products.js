import React, { useContext } from "react";
import { Context } from "../Cart/Provider";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Products.css";
import Link from "../Link/Link";

const Products = ({ products }) => {
  const { cart, setCart } = useContext(Context);

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
    <div className="main-product-page-container">
      {products.map((product) => {
        return (
          <Link href={`/products/#${product.id}`} key={product.id}>
            <SingleProduct
              product={product}
              addToCart={addToCart}
              key={product.id}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
