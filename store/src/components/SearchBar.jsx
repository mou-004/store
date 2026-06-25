const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="control-field search-field">
      <label htmlFor="search">Search Products</label>
      <div className="input-shell">
        <span className="input-icon">⌕</span>
        <input
          id="search"
          type="text"
          placeholder="Search by product name..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
