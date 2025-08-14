import React, { useState, useMemo } from "react";
import TopBar from "../components/TopBar";
import BrandAndBanner from "../components/BrandAndBanner";
import BottomNavbar from "../components/BottomNavbar";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../store/products";

const SECTION = "Hospitality";

const Hospitality = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Alicia Dinner Plate 27cm', price: 'Rp 235.000', image: '/assets/hapita/1.png', category: 'Alicia' },
    { id: 2, name: 'Irish Green Pasta Bowl', price: 'Rp 235.000', image: '/assets/hapita/2.png', category: 'Irish' },
    { id: 3, name: 'Reactive Green Rice Bowl', price: 'Rp 235.000', image: '/assets/hapita/3.png', category: '' },
    { id: 4, name: 'Fusion Grey Dinner Plate 27cm', price: 'Rp 235.000', image: '/assets/hapita/4.png', category: 'Fusion Grey' },
    { id: 5, name: 'Caldera Blue Mug 12oz', price: 'Rp 235.000', image: '/assets/hapita/5.png', category: '' },
    { id: 6, name: 'Coffee Mug 11oz', price: 'Rp 235.000', image: '/assets/hapita/6.png', category: '' },
    { id: 7, name: 'Light Gobi Rim Deep Plate', price: 'Rp 235.000', image: '/assets/hapita/7.png', category: '' },
    { id: 8, name: 'Irregular Oval 10”', price: 'Rp 235.000', image: '/assets/hapita/8.png', category: '' },
    { id: 9, name: 'Irish Brown Dinner Plate 26cm', price: 'Rp 235.000', image: '/assets/hapita/9.png', category: '' },
    { id: 10, name: 'Hikari Ramen Bowl', price: 'Rp 235.000', image: '/assets/hapita/10.png', category: '' },
    { id: 11, name: 'Alicia Dinner Plate 27cm', price: 'Rp 235.000', image: '/assets/hapita/11.png', category: '' },
    { id: 12, name: 'Fusion Black Oval Plate', price: 'Rp 235.000', image: '/assets/hapita/12.png', category: '' },
    { id: 13, name: 'Atelier Brown Oden Bowl', price: 'Rp 235.000', image: '/assets/hapita/13.png', category: '' },
    { id: 14, name: 'Caldera Pink Coup Soup 20.5cm', price: 'Rp 235.000', image: '/assets/hapita/14.png', category: '' },
    { id: 15, name: 'Clara Appetizer Dish', price: 'Rp 235.000', image: '/assets/hapita/15.png', category: '' },
    { id: 16, name: 'Graphite Cappuccino Cup & Saucer', price: 'Rp 235.000', image: '/assets/hapita/16.png', category: '' },
  ];

  const categories = [
    'Rim', 'Coupe', 'Presentation', 'Rectangular', 'Beverages', 'Essentials',
  ];

  const dynamicProducts = useMemo(
    () => getProducts(SECTION, selectedCategory),
    [selectedCategory]
  );

  // Gabungkan static + dynamic
  const mergedProducts = [...products, ...dynamicProducts];

  // === GANTI BAGIAN INI (filteredProducts) ===
  const filteredProducts = selectedCategory
    ? mergedProducts.filter(
        (product) => (product.category || "") === selectedCategory
      )
    : mergedProducts;

  return (
    <div>
      <TopBar />
      <BrandAndBanner />

      <div className="flex px-4 pb-35 py-6 gap-4">
        {/* Sidebar */}
        <div className="w-1/4 pr-4">
          <h2 className="font-semibold text-sm mb-3">Semua Hospitality</h2>
          <div className="space-y-2">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (category === "Coupe") {
                    navigate("/hospitality/coupe");
                  } else {
                    setSelectedCategory(category);
                  }
                }}
                className={`w-full text-left py-2 text-sm rounded-lg whitespace-normal break-words
                  ${
                    selectedCategory === category
                      ? "font-bold text-[#094C78]"
                      : "text-gray-700"
                  }
                  hover:bg-gray-200 transition-all`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Produk */}
        <div className="w-3/4">
          <div className="relative mb-4">
            <img
              src="/assets/banners/HSI.png"
              alt="Banner"
              className="w-full h-[100px] object-cover rounded-lg"
            />
          </div>
          <h2 className="text-xl mb-2">Semua Hospitality</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col"
              >
                {/* Gambar */}
                <div className="aspect-[4/3] w-full bg-white overflow-hidden rounded-t-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Detail Produk */}
                <div className="bg-[#094C78] text-white p-2 rounded-b-2xl flex-1 relative">
                  <p className="text-[10px] leading-tight">{product.name}</p>
                  <p className="text-[#FDCD25] text-[12px] mt-1">
                    {product.price}
                  </p>
                  <button className="absolute bottom-2 right-2 bg-yellow-300 text-[#01497c] w-6 h-6 rounded-full flex items-center justify-center text-lg font-bold leading-none">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
};

export default Hospitality;