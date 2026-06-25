const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="category-section">
      <div className="section-heading">
        <span>Categories</span>
        <small>Choose one</small>
      </div>

      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={selectedCategory === category ? 'category-tab active' : 'category-tab'}
            onClick={() => onCategoryChange(category)}
          >
            {category === 'all' ? 'All' : category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
