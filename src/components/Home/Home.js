import React from "react";
import TopRatedProducts from "./TopRatedProducts";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="headers">
          <h2>Best products in town,</h2>
          <h1>here you can find the latest and the greatest!</h1>
        </div>
      </div>
      <div className="trending-header">
        <h1>Trending products</h1>
      </div>
      <TopRatedProducts />
    </>
  );
};

export default Home;
