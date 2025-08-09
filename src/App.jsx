import { useState } from 'react'
import SearchResults from './pages/SearchResults'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Lumerpa from './pages/Lumerpa';
import WishlistPage from './pages/WishlistPage';
import Hapita from './pages/Hapita';
import ProductDetail from './pages/ProductDetail';
import CheckoutPage from './pages/CheckoutPage';
import PaymentGatewayPage from './pages/PaymentGatewayPage';
import TrackOrder from './pages/TrackOrder';
import ProductDetailArias from './pages/ProductDetailArias';
import Login from './components/Login';
import Arias from './pages/Arias';
import Irish from './pages/Irish';

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
        <Route path="/produk/arias" element={<ProductDetailArias />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment-gateway" element={<PaymentGatewayPage />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lumerpa/arias" element={<Arias />} />
        <Route path="/hapita/irish" element={<Irish />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
