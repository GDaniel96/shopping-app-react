import React, { useEffect, useState } from "react";
import "./App.css";
// import Home from "./Home/Home";
import Products from "./Products/Products";
import axios from "axios";
import FilterButtons from "./FilterButtons/FilterButtons";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          setProducts(response.data);
          setIsLoading(false);
          setFilteredProducts(response.data);
        })
        .catch((e) => {
          console.log("Ups, there was an error: " + e);
        });
    };
    fetchData();
  }, []);

  const categoryItems = [
    ...new Set(products.map((product) => product.category)),
  ];

  const filterItem = (currentCategory) => {
    const newItem = products.filter((newValue) => {
      return newValue.category === currentCategory;
    });
    setFilteredProducts(newItem);
  };

  return (
    <div>
      {isLoading ? (
        "Loading data..."
      ) : (
        <>
          {/* <Home products={products} /> */}
          <FilterButtons
            products={products}
            categoryItems={categoryItems}
            filterItem={filterItem}
            setFilteredProducts={setFilteredProducts}
          />
          <Products products={filteredProducts} />
        </>
      )}
    </div>
  );
};

export default App;
