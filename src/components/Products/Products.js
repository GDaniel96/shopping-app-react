import React, { useContext } from "react";
import { Context } from "../Cart/Provider";
import SingleProduct from "../SingleProduct/SingleProduct";
import Link from "../Link/Link";
import "./Products.css";

const Products = ({ products }) => {
  const { addToCart } = useContext(Context);

  return (
    <div className="main-product-page-container">
      {products.map((product) => {
        return (
          <div className="product-container" key={product.id}>
            <Link href={`/products/#${product.id}`}>
              <SingleProduct
                product={product}
                addToCart={addToCart}
                key={product.id}
              />
            </Link>
            <button className="add-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
