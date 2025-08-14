import React, { useState } from "react";
import TopBar from "../components/TopBar";
import BrandAndBanner from "../components/BrandAndBanner";
import BottomNavbar from "../components/BottomNavbar";
import { useNavigate } from "react-router-dom";
import WishlistButton from '../components/WishlistButton';
import MotionFadeIn from '../components/MotionFadeIn'; // (added where needed)


const Arias = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Arias"); // default bold di Arias

  const categories = [
    "Alice",
    "Arias",
    "Asian",
    "Oslo",
    "Presentation",
    "Raffles",
    "Rim",
    "Sides",
    "Square",
    "Stackable",
  ];

  const products = [
    { id: 1,  name: "Arias Chop Plate 12\"",      price: "Rp 235.000", image: "/assets/lumerpaarias/1.png" },
    { id: 2,  name: "Arias Dinner Plate 10.75\"", price: "Rp 235.000", image: "/assets/lumerpaarias/2.png" },
    { id: 3,  name: "Arias Salad Plate 8.5\"",    price: "Rp 235.000", image: "/assets/lumerpaarias/3.png" },
    { id: 4,  name: "Arias Salad Plate 7.5\"",    price: "Rp 235.000", image: "/assets/lumerpaarias/4.png" },
    { id: 5,  name: "Arias BB Plate 6.25”",       price: "Rp 235.000", image: "/assets/lumerpaarias/5.png" },
    { id: 6,  name: "Arias Soup Plate 9.5”",      price: "Rp 235.000", image: "/assets/lumerpaarias/6.png" },
    { id: 7,  name: "Arias Flare Mug",            price: "Rp 235.000", image: "/assets/lumerpaarias/7.png" },
    { id: 8,  name: "Arias Straight Mug",         price: "Rp 235.000", image: "/assets/lumerpaarias/8.png" },
    { id: 9,  name: "Arias Flare Mug",            price: "Rp 235.000", image: "/assets/lumerpaarias/9.png" },
    { id: 10, name: "Arias Tea Cup 9 oz",         price: "Rp 235.000", image: "/assets/lumerpaarias/10.png" },
    { id: 11, name: "Arias Tea Saucer",           price: "Rp 235.000", image: "/assets/lumerpaarias/11.png" },
    { id: 12, name: "Arias Coffee Cup 5.25 oz",   price: "Rp 235.000", image: "/assets/lumerpaarias/12.png" },
    { id: 13, name: "Arias Coffee Saucer 5.75\"", price: "Rp 235.000", image: "/assets/lumerpaarias/13.png" },
    { id: 14, name: "Arias Creamer",              price: "Rp 235.000", image: "/assets/lumerpaarias/14.png" },
    { id: 15, name: "Arias Covered Sugar",        price: "Rp 235.000", image: "/assets/lumerpaarias/15.png" },
    { id: 16, name: "Tea Cup & Saucer",           price: "Rp 235.000", image: "/assets/lumerpaarias/16.png" },
  ];

  return (
    <div>
      <TopBar />
      <BrandAndBanner />

      <div className="flex px-4 pb-35 py-6 gap-4">
        <div className="w-1/4 pr-4">
        <h2 
            className="text-sm mb-3 cursor-pointer rounded-lg hover:bg-gray-200 transition-all`"
            onClick={() => navigate("/lumerpa")}
        >
            Semua Lumerpa
        </h2>
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

        {/* Grid Produk */}
        <div className="w-3/4">
          <div className="relative mb-4">
            <img
              src="/assets/lumerpa/banner.png"
              alt="Banner Arias"
              className="w-full h-[100px] object-cover rounded-lg"
            />
          </div>

          <h2 className="text-l mb-2">Semua Lumerpa</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"              >
                <div className="aspect-[4/3] w-full bg-white overflow-hidden rounded-t-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#094C78] text-white p-2 rounded-b-2xl flex-1 relative">
                  <p className="text-[10px] leading-tight">{product.name}</p>
                  <p className="text-[#FDCD25] text-[12px] mt-1">{product.price}</p>
                  <WishlistButton product={product} className="absolute bottom-3 bg-yellow-300 right-3" />
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

export default Arias;
