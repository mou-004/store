import ProductCard from './ProductCard';

const ProductGrid = ({ products, onViewDetails }) => {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🔎</div>
        <h2>No products found</h2>
        <p>Try changing the search keyword, category filter or sorting option.</p>
      </div>
    );
  }

  return (
    <section className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
        />
      ))}
    </section>
  );
};

export default ProductGrid;
