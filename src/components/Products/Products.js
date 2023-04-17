import React, { useContext } from "react";
import { Context } from "../Cart/Provider";
import "./Products.css";
import ReadMore from "../ReadMore/ReadMore";

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
    <div className="  main-product-page-container">
      {products.map((product) => {
        return (
          <div className="ui card card-container" key={product.id}>
            <div className="image">
              <img src={product.image} alt={product.title}></img>
            </div>
            <div className="content">
              <h2 className="header">{product.title}</h2>
              <div className="meta">
                <span className="category">{product.category}</span>
              </div>
              <div className="description">
                <ReadMore>{product.description}</ReadMore>
              </div>
              <div className="buy">
                <div className="price">
                  <h2>$ {product.price}</h2>
                </div>
              </div>
            </div>
            <button className="add-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
