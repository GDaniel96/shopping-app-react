import React from "react";
import "./FilterButtons.css";

const FilterButtons = ({
  products,
  categoryItems,
  filterItem,
  setFilteredProducts,
}) => {
  const setAll = () => {
    setFilteredProducts(products);
  };

  return (
    <div className="ui horizontal text menu">
      <div className="header item">
        <button
          className="item"
          onClick={() => {
            setAll();
          }}
        >
          All
        </button>
        {categoryItems.map((category, id) => {
          return (
            <button
              className="item"
              key={id}
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
