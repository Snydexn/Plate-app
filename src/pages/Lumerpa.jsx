import React, { useState } from "react";
import TopBar from "../components/TopBar";
import BrandAndBanner from "../components/BrandAndBanner";
import BottomNavbar from "../components/BottomNavbar";

const Lumerpa = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Data produk
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

  // Kategori untuk sidebar
  const categories = [
    "Alice", "Arias", "Asian", "Oslo", "Presentation", "Rafless", "Rim", "Sides", "Square", "Stackable"
  ];

  // Filter produk berdasarkan kategori yang dipilih
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      <TopBar />
      <BrandAndBanner />

      <div className="flex px-4 py-6 gap-4">
        {/* Sidebar kategori */}
        <div className="w-1/4 pr-4">
          <h2 className="font-semibold text-sm mb-3">Semua Hapita</h2>
          <div className="space-y-2">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-4 py-2 text-sm rounded-lg 
                  ${selectedCategory === category ? 'font-bold text-[#094C78]' : 'text-gray-700'}
                  hover:bg-gray-200 transition-all`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Produk */}
        <div className="w-3/4">
         <div className="relative mb-2">
            <img 
              src="/assets/lumerpa/banner.png"  // Replace with your banner image path
              alt="Banner"
              className="w-full h-[100px] object-cover rounded-lg" // Ensures the image has rounded corners
            />
          </div>
          <h2 className=" text-l mb-2">Semua Lumerpa</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm relative"
                style={{
                  width: '120px', // Smaller width for the card
                  height: '180px', // Adjust height to maintain proportions
                  margin: '0 auto',
                }}
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[90px] object-cover bg-white" // Adjust image to fit smaller cards
                />

                {/* Product Details */}
                <div className="bg-[#094C78] text-white p-2 rounded-b-2xl min-h-[60px] relative">
                  <div className="text-xs pr-8">
                    <p className="text-[10px]">{product.name}</p> {/* Reduced font size for name */}
                    <p className="text-[#FDCD25] font-semibold text-[12px] mt-1">{product.price}</p> {/* Reduced font size for price */}
                  </div>

                  {/* Add to Cart Button */}
                  <button className="absolute bottom-3 right-3 bg-yellow-300 text-[#01497c] w-6 h-6 rounded-full flex items-center justify-center text-lg font-bold leading-none">
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
