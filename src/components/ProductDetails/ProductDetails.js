import "./ProductDetails.css";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useCart from "../Cart/useCart";

const ProductDetails = () => {
  const [productData, setProductData] = useState(null);
  const { addToCart, cart, increaseQuantity, decreaseQuantity } = useCart();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          setProductData(
            response.data.find((product) => product.id === parseInt(id))
          );
        })
        .catch((e) => {
          console.log("Ups, there was an error: " + e);
        });
    };
    fetchData();
  }, [id]);

  if (!productData) {
    return null;
  }

  return (
    <div className="product-details-container">
      <div className="product-details" key={productData.id}>
        <div className="product-image">
          <img src={productData.image} alt={productData.title}></img>
        </div>
        <div className="product-content">
          <h2 className="header">{productData.title}</h2>
          <div className="meta">
            <span className="category">{productData.category}</span>
          </div>
          <div className="description">{productData.description}</div>
          <div className="buy">
            <div className="price">
              <h2>$ {productData.price}</h2>
            </div>
          </div>
          <button
            className="add-button-details"
            onClick={() => addToCart(productData)}
          >
            Add to Cart
          </button>
          {cart.find((product) => product.id === parseInt(id)) && (
            <div>
              <button onClick={() => increaseQuantity(productData.id)}>
                +
              </button>
              <button onClick={() => decreaseQuantity(productData.id)}>
                -
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
