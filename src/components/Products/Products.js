import React, { useState, useEffect } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Products.css";
import FilterButtons from "./FilterButtons";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((e) => {
          console.log("Ups, there was an error: " + e);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          if (activeFilter) {
            setProducts(
              response.data.filter((product) => {
                return product.category === activeFilter;
              })
            );
          } else {
            setProducts(response.data);
          }
        })
        .catch((e) => {
          console.log("Ups, there was an error: " + e);
        });
    };
    fetchData();
  }, [activeFilter]);

  return (
    <>
      <FilterButtons
        setActiveFilter={setActiveFilter}
        activeFilter={activeFilter}
      />
      <div className="main-product-page-container">
        {products.map((product) => {
          return (
            <div className="product-container" key={product.id}>
              <SingleProduct product={product} key={product.id} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
