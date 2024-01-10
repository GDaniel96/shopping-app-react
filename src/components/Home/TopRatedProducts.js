import React, { useState, useEffect } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import axios from "axios";

const topRatedProducts = (product) => {
  return product.rating.rate > 4.5;
};

const TopRatedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          setProducts(response.data.filter(topRatedProducts));
        })
        .catch((e) => {
          console.log("Ups, there was an error: " + e);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="trending-products-container">
      <div className="products-container">
        {products.map((product) => {
          return (
            <div className="product-container" key={product.id}>
              <SingleProduct product={product} key={product.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRatedProducts;
