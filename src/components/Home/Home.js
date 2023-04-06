import React from "react";
import ReadMore from "../ReadMore/ReadMore";
import HomePhoto from "../../assets/shop.jpg";
import "./Home.css";

const Home = ({ products }) => {
  const ratedProducts = products.filter((product) => {
    return product.rating.rate > 4.5;
  });

  const displayedProducts = ratedProducts.map((product) => {
    return (
      <div className="ui card rated-product-container" key={product.id}>
        <div className="image">
          <img src={product.image} alt={product.title}></img>
        </div>
        <div className="content">
          <h2 className="header"> {product.title}</h2>
          <div className="meta">
            <span>Description</span>
          </div>
          <div className="description">
            <ReadMore>{product.description}</ReadMore>
          </div>
          <div className="exta">
            <p> Rating: {product.rating.rate}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="home-container">
      <div className="home">
        <h2>Best products in town</h2>
        <h1>Here you can find the latest and the greatest</h1>
      </div>
      <div className="trending">
        <h1>Trending products</h1>
      </div>
      <div className="products-container">{displayedProducts}</div>
    </div>
  );
};

export default Home;
