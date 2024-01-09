import React, { useEffect, useState } from "react";
import "./FilterButtons.css";
import axios from "axios";

const FilterButtons = ({ activeFilter, setActiveFilter }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          const categoryItems = new Set(
            response.data.map((product) => product.category)
          );
          setCategories([...categoryItems]);
        })
        .catch((e) => {
          console.log("Ups, there was an error: " + e);
        });
    };
    fetchData();
  }, []);

  if (!categories.length) {
    return null;
  }

  return (
    <div className="filter-container">
      <div className="header item">
        <button
          className="item"
          onClick={() => {
            setActiveFilter(null);
          }}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              className="item"
              key={category}
              onClick={() => setActiveFilter(category)}
              style={{
                textDecoration:
                  activeFilter === category ? "underline" : "none",
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterButtons;
