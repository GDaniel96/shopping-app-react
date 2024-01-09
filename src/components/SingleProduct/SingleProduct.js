import "./SingleProduct.css";
import { Link } from "react-router-dom";
import useCart from "../Cart/useCart";

const SingleProduct = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <>
      <Link to={`/products/${product.id}`}>
        <div className="ui card card-container">
          <div className="image">
            <img src={product.image} alt={product.title}></img>
          </div>

          <div className="content">
            <h2 className="header">{product.title}</h2>
            <div className="meta">
              <span className="category">{product.category}</span>
            </div>

            <div className="buy">
              <div className="price">
                <h2>$ {product.price}</h2>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <button className="add-button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </>
  );
};

export default SingleProduct;
