import React, { useMemo } from "react";
import "./FilterButtons.css";

const FilterButtons = ({ products, setFilteredProducts }) => {
  const categoryItems = useMemo(() => {
    return [...new Set(products.map((product) => product.category))];
  }, [products]);

  const filterItem = (currentCategory) => {
    const newItem = products.filter((newValue) => {
      return newValue.category === currentCategory;
    });
    setFilteredProducts(newItem);
  };

  const setAll = () => {
    setFilteredProducts(products);
  };

  return (
    <div className="filter-container">
      <div className="header item">
        <button
          className="item"
          onClick={() => {
            setAll();
          }}
        >
          All
        </button>
        {categoryItems.map((category) => {
          return (
            <button
              className="item"
              key={category}
              onClick={() => filterItem(category)}
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
