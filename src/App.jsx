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
import Promotional from './pages/Promotional';
import Inspirasi from './pages/Inspirasi';
import Legacy from './pages/Legacy';
import Arturo from './pages/Arturo';
import Hospitality from './pages/Hospitality';
import Coupe from './pages/Coupe';
import Boomi from './pages/Boomi';
import Essentials from './pages/Essentials';
import KisahKeramik from './pages/KisahKeramik';

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
        <Route path="/promotional" element={<Promotional />} />
        <Route path="/inspirasi" element={<Inspirasi />} />
        <Route path="/legacy" element={<Legacy />} />
        <Route path="/legacy/arturo" element={<Arturo />} />
        <Route path="/hospitality" element={<Hospitality />} />
        <Route path="/hospitality/coupe" element={<Coupe />} />
        <Route path="/boomi" element={<Boomi />} />
        <Route path="/boomi/essentials" element={<Essentials />} />
        <Route path="/kisah-keramik" element={<KisahKeramik />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
