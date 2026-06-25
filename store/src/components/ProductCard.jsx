const ProductCard = ({ product, onViewDetails }) => {
  return (
    <article className="product-card">
      <div className="card-top">
        <span className="rating-badge">⭐ {product.rating.rate}</span>
        <div className="product-image-wrapper">
          <img src={product.image} alt={product.title} className="product-image" />
        </div>
      </div>

      <div className="product-content">
        <p className="product-category">{product.category}</p>
        <h3 title={product.title}>{product.title}</h3>

        <div className="product-meta">
          <div>
            <small>Price</small>
            <span className="price">${product.price.toFixed(2)}</span>
          </div>
          <div className="review-chip">
            {product.rating.count} reviews
          </div>
        </div>

        <button type="button" onClick={() => onViewDetails(product)} className="details-btn">
          View Details
          <span>→</span>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
