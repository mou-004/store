import ThemeToggle from './ThemeToggle';

const Header = ({ totalProducts = 0, totalCategories = 0 }) => {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="pulse-dot"></span>
          Live products from Store API
        </div>

        <h1>
          Discover Products
          <span> Effortlessly</span>
        </h1>

        <p>
          Browse, search, filter and preview product details in a clean,
          responsive React shopping interface.
        </p>

        <div className="hero-stats">
          <div className="stat-card">
            <strong>{totalProducts}</strong>
            <span>Products</span>
          </div>
          <div className="stat-card">
            <strong>{Math.max(totalCategories - 1, 0)}</strong>
            <span>Categories</span>
          </div>
          <div className="stat-card">
            <strong>4+</strong>
            <span>Features</span>
          </div>
        </div>
      </div>

      <div className="hero-panel">
        <ThemeToggle />
        <div className="floating-card card-one">
          <span>⭐</span>
          <div>
            <strong>Top Rated</strong>
            <small>Filter by ratings</small>
          </div>
        </div>
        <div className="floating-card card-two">
          <span>🛍️</span>
          <div>
            <strong>Smart Search</strong>
            <small>Debounced input</small>
          </div>
        </div>
        <div className="hero-orb"></div>
      </div>
    </header>
  );
};

export default Header;
