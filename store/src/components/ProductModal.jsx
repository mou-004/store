import { useEffect } from 'react';

const ProductModal = ({ product, onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!product) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} type="button" aria-label="Close modal">
          ×
        </button>

        <div className="modal-image-wrapper">
          <span className="modal-category-pill">{product.category}</span>
          <img src={product.image} alt={product.title} className="modal-image" />
        </div>

        <div className="modal-content">
          <p className="modal-kicker">Product Details</p>
          <h2>{product.title}</h2>
          <p className="modal-description">{product.description}</p>

          <div className="modal-info-grid">
            <div className="modal-info-card">
              <span>Price</span>
              <strong>${product.price.toFixed(2)}</strong>
            </div>
            <div className="modal-info-card">
              <span>Rating</span>
              <strong>⭐ {product.rating.rate} / 5</strong>
            </div>
            <div className="modal-info-card">
              <span>Reviews</span>
              <strong>{product.rating.count}</strong>
            </div>
          </div>

          <button className="modal-action" type="button" onClick={onClose}>
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
