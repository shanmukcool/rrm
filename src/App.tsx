import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import StoresPage from './pages/StoresPage';
import AboutUsPage from './pages/AboutUsPage';
import FranchiseEnquiryPage from './pages/FranchiseEnquiryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/stores" element={<StoresPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/franchise" element={<FranchiseEnquiryPage />} />
    </Routes>
  );
}

export default App;