import { useEffect, useState } from 'react';
import { getProducts } from '../services/productService';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(['all']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError('');

        const data = await getProducts();
        setProducts(data);

        const uniqueCategories = ['all', ...new Set(data.map((product) => product.category))];
        setCategories(uniqueCategories);
      } catch (err) {
        setError(err.message || 'Something went wrong.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, categories, loading, error };
};
