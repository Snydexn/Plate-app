import React, { useState } from "react";
import TopBar from "../components/TopBar";
import BrandAndBanner from "../components/BrandAndBanner";
import BottomNavbar from "../components/BottomNavbar";
import { useNavigate } from "react-router-dom";

const Lumerpa = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Alice Cappucino Cup Set", price: "Rp 235.000", image: "/assets/lumerpa/1.png", category: "Alice" },
    { id: 2, name: "Arias Dinner Plate 10.75”", price: "Rp 235.000", image: "/assets/lumerpa/2.png", category: "Arias" },
    { id: 3, name: "Asia Chinese Tea Pot", price: "Rp 235.000", image: "/assets/lumerpa/3.png", category: "Asian" },
    { id: 4, name: "Oslo Salad Plate 8.5”", price: "Rp 235.000", image: "/assets/lumerpa/4.png", category: "Oslo" },
    { id: 5, name: "Half Moon Plate", price: "Rp 235.000", image: "/assets/lumerpa/5.png", category: "Plate" },
    { id: 6, name: "Raffles Mug", price: "Rp 235.000", image: "/assets/lumerpa/6.png", category: "Mug" },
    { id: 7, name: "Rim Luncheon Plate 9”", price: "Rp 235.000", image: "/assets/lumerpa/7.png", category: "Luncheon Plate" },
    { id: 8, name: "Sides Big Sauce Boat", price: "Rp 235.000", image: "/assets/lumerpa/8.png", category: "Sauce Boat" },
    { id: 9, name: "Square Bowl 7”", price: "Rp 235.000", image: "/assets/lumerpa/9.png", category: "Bowl" },
    { id: 10, name: "Stackable Soup Cup with Two Handle", price: "Rp 235.000", image: "/assets/lumerpa/10.png", category: "Soup Cup" },
    { id: 11, name: "Coupe Dinner Plate 10.5”", price: "Rp 235.000", image: "/assets/lumerpa/11.png", category: "Dinner Plate" },
    { id: 12, name: "Rim Past Bowl 10.5”", price: "Rp 235.000", image: "/assets/lumerpa/12.png", category: "Bowl" },
    { id: 13, name: "Sofia Cake Plates", price: "Rp 235.000", image: "/assets/lumerpa/13.png", category: "Cake Plates" },
    { id: 14, name: "Amanda High Tea Cup", price: "Rp 235.000", image: "/assets/lumerpa/14.png", category: "Tea Cup" },
    { id: 15, name: "Coupe Oval Plate 9.75”", price: "Rp 235.000", image: "/assets/lumerpa/15.png", category: "Oval Plate" },
    { id: 16, name: "Yin Yang Dish", price: "Rp 235.000", image: "/assets/lumerpa/16.png", category: "Dish" },
  ];

  const categories = [
    "Alice", "Arias", "Asian", "Oslo", "Presentation", "Rafless", "Rim", "Sides", "Square", "Stackable"
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      <TopBar />
      <BrandAndBanner />

      <div className="flex px-4 py-6 gap-4">
        {/* Sidebar */}
      <div className="w-1/4 pr-4">
        <h2 className="font-semibold text-sm mb-3">Semua Lumerpa</h2>
        <div className="space-y-2">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (category === "Arias") {
                  navigate("/lumerpa/arias");
                } else {
                  setSelectedCategory(category);
                }
              }}
              className={`w-full text-left py-2 text-sm rounded-lg whitespace-normal break-words
                ${selectedCategory === category ? 'font-bold text-[#094C78]' : 'text-gray-700'}
                hover:bg-gray-200 transition-all`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

        {/* Produk Grid */}
        <div className="w-3/4">
          <div className="relative mb-4">
            <img
              src="/assets/lumerpa/banner.png"
              alt="Banner"
              className="w-full h-[100px] object-cover rounded-lg"
            />
          </div>
          <h2 className="text-l mb-2">Semua Lumerpa</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col cursor-pointer"
                onClick={() => {
                  if (index === 1) {
                    navigate("/produk/arias");
                  }
                }}
              >
                {/* Image */}
                <div className="aspect-[4/3] w-full bg-white overflow-hidden rounded-t-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Detail */}
                <div className="bg-[#094C78] text-white p-2 rounded-b-2xl flex-1 relative">
                  <p className="text-[10px] leading-tight">{product.name}</p>
                  <p className="text-[#FDCD25] text-[12px] mt-1">{product.price}</p>
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

export default Lumerpa;
