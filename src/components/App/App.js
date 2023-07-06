import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Home from "../Home/Home";
import Products from "../Products/Products";
import FilterButtons from "../FilterButtons/FilterButtons";
import CartList from "../CartList/CartList";
import Route from "../Route/Route";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import Provider from "../Cart/Provider";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <Provider>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Route path="/">
              <Home products={products} />
            </Route>
            <Route path="/products">
              <FilterButtons
                products={products}
                setFilteredProducts={setFilteredProducts}
              />
              <Products products={filteredProducts} />
            </Route>
            <Route path="/cart">
              <CartList />
            </Route>
          </>
        )}
      </div>
    </Provider>
  );
};

export default App;
