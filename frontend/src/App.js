import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import SupplierPage from './pages/SupplierPage';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>E-Commerce App</h1>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Produk</Link>
          <Link to="/categories" style={{ marginRight: '10px' }}>Kategori</Link>
          <Link to="/suppliers">Supplier</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/suppliers" element={<SupplierPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
