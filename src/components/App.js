import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home/Home";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          setProducts(response.data);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log("Ups, there was an error: " + e);
        });
    };
    fetchData();
  }, []);

  return (
    <div>{isLoading ? "Loading data..." : <Home products={products} />}</div>
  );
};

export default App;
