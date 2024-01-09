import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Home from "../Home/Home";
import Products from "../Products/Products";

import CartList from "../Cart/CartList";
import Header from "../Header/Header";
import ProductDetails from "../ProductDetails/ProductDetails";
import Provider from "../Cart/Provider";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Provider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartList />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
};

export default App;
