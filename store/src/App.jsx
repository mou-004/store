import { ThemeProvider } from './context/ThemeContext.jsx';
import ProductsPage from './pages/ProductsPage.jsx';

const App = () => {
  return (
    <ThemeProvider>
      <ProductsPage />
    </ThemeProvider>
  );
};

export default App;
