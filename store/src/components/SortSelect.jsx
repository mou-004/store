const SortSelect = ({ sortBy, onSortChange }) => {
  return (
    <div className="control-field sort-field">
      <label htmlFor="sort">Sort Products</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(event) => onSortChange(event.target.value)}
      >
        <option value="default">Default</option>
        <option value="nameAZ">Name A-Z</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="ratingHigh">Highest Rating</option>
      </select>
    </div>
  );
};

export default SortSelect;
