import { useState } from 'react'
import SearchResults from './pages/SearchResults'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Lumerpa from './pages/Lumerpa';
import WishlistPage from './pages/WishlistPage';
import Hapita from './pages/Hapita';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/lumerpa" element={<Lumerpa />} />
        <Route path="/hapita" element={<Hapita />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/produk/alicia" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
