import "./SingleProduct.css";
import ReadMore from "../ReadMore/ReadMore";

const SingleProduct = ({ product, addToCart }) => {
  return (
    <div className="ui card card-container" key={product.id}>
      <div className="image">
        <img src={product.image} alt={product.title}></img>
      </div>
      <div className="content">
        <h2 className="header">{product.title}</h2>
        <div className="meta">
          <span className="category">{product.category}</span>
        </div>
        <div className="description">
          <ReadMore>{product.description}</ReadMore>
        </div>
        <div className="buy">
          <div className="price">
            <h2>$ {product.price}</h2>
          </div>
        </div>
      </div>
      <button className="add-button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default SingleProduct;
