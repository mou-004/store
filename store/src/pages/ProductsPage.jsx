import { useMemo, useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import SortSelect from '../components/SortSelect';
import ProductGrid from '../components/ProductGrid';
import ProductModal from '../components/ProductModal';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import Pagination from '../components/Pagination';
import { useProducts } from '../hooks/useProducts';
import { useDebounce } from '../hooks/useDebounce';
import { paginate } from '../utils/pagination';

const ITEMS_PER_PAGE = 8;

const ProductsPage = () => {
  const { products, categories, loading, error } = useProducts();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('default');

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    return [...result].sort((a, b) => {
      if (sortBy === 'nameAZ') return a.title.localeCompare(b.title);
      if (sortBy === 'priceLow') return a.price - b.price;
      if (sortBy === 'priceHigh') return b.price - a.price;
      if (sortBy === 'ratingHigh') return b.rating.rate - a.rating.rate;
      return a.id - b.id;
    });
  }, [products, debouncedSearchTerm, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = paginate(filteredProducts, currentPage, ITEMS_PER_PAGE);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return (
    <main className="app">
      <Header totalProducts={products.length} totalCategories={categories.length} />

      <section className="toolbar">
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <SortSelect sortBy={sortBy} onSortChange={handleSortChange} />
      </section>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="result-summary">
        <div>
          Showing <strong>{filteredProducts.length}</strong> product
          {filteredProducts.length !== 1 ? 's' : ''}
        </div>
        <span>Page {totalPages === 0 ? 0 : currentPage} of {totalPages}</span>
      </div>

      {loading && <Loader />}

      {!loading && error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <>
          <ProductGrid
            products={paginatedProducts}
            onViewDetails={setSelectedProduct}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
};

export default ProductsPage;
