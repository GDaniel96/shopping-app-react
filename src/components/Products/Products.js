import React from "react";
import "./Products.css";
import ReadMore from "../ReadMore/ReadMore";

const Products = ({ products, setCart, cart }) => {
  let hardCopy = [...cart];

  const addToCart = (product) => {
    product["quantity"] = 1;

    let sameIndex = hardCopy.findIndex((item) => item.id === product.id);
    console.log(sameIndex);

    if (sameIndex !== -1) {
      hardCopy[sameIndex].quantity++;
      setCart([...hardCopy]);
    } else {
      setCart([...hardCopy, product]);
    }
  };

  const listOfProducts = products.map((product) => {
    return (
      <div className="ui card" key={product.id}>
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
          <div className="price">
            <h2>$ {product.price}</h2>
          </div>
          <div className="buy">
            <button onClick={() => addToCart(product)}> Add to Cart </button>
          </div>
        </div>
      </div>
    );
  });
  return <div className="main-product-page-container">{listOfProducts}</div>;
};

export default Products;
