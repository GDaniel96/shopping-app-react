import "./ProductDetails.css";

const ProductDetails = ({ products }) => {
  const productId = window.location.href;

  return (
    <div className="product-details-container">
      {products
        .filter((product) => {
          if (product.id === Number(productId.split("#")[1])) {
            return true;
          }
          return false;
        })
        .map((item) => {
          return (
            <div className="product-details" key={item.id}>
              <div className="product-image">
                <img src={item.image} alt={item.title}></img>
              </div>
              <div className="product-content">
                <h2 className="header">{item.title}</h2>
                <div className="meta">
                  <span className="category">{item.category}</span>
                </div>
                <div className="description">{item.description}</div>
                <div className="buy">
                  <div className="price">
                    <h2>$ {item.price}</h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductDetails;
