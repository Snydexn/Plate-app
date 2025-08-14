import React, { useState } from "react";
import TopBar from "../components/TopBar";
import BrandAndBanner from "../components/BrandAndBanner";
import BottomNavbar from "../components/BottomNavbar";
import { useNavigate } from "react-router-dom";
import WishlistButton from '../components/WishlistButton';
import MotionFadeIn from '../components/MotionFadeIn'; // (added where needed)


const Essentials = () => {
  const [selectedCategory, setSelectedCategory] = useState("Essentials");
  const navigate = useNavigate();

  const categories = [
    'Rim', 'Coupe', 'Presentation', 'Rectangular', 'Beverages', 'Essentials',
  ];

  const products = [
    { id: 1, name: "Irish Dinner Plate 27cm", price: "Rp 235.000", image: "/assets/hapitairish/1.png" },
    { id: 2, name: "Irish Green Pasta Bowl", price: "Rp 235.000", image: "/assets/hapitairish/2.png" },
    { id: 3, name: "Reactive Green Rice Bowl", price: "Rp 235.000", image: "/assets/hapitairish/3.png" },
    { id: 4, name: "Fusion Grey Dinner Plate 27cm", price: "Rp 235.000", image: "/assets/hapitairish/4.png" },
    { id: 5, name: "Caldera Blue Mug 12oz", price: "Rp 235.000", image: "/assets/hapitairish/5.png" },
    { id: 6, name: "Coffee Mug 11oz", price: "Rp 235.000", image: "/assets/hapitairish/6.png" },
    { id: 7, name: "Light Gobi Rim Deep Plate", price: "Rp 235.000", image: "/assets/hapitairish/7.png" },
    { id: 8, name: "Irregular Oval 10”", price: "Rp 235.000", image: "/assets/hapitairish/8.png" },
    { id: 9, name: "Irish Brown Dinner Plate 26cm", price: "Rp 235.000", image: "/assets/hapitairish/9.png" },
    { id: 10, name: "Hikari Ramen Bowl", price: "Rp 235.000", image: "/assets/hapitairish/10.png" },
    { id: 11, name: "Alicia Dinner Plate 27cm", price: "Rp 235.000", image: "/assets/hapitairish/11.png" },
    { id: 12, name: "Fusion Black Oval Plate", price: "Rp 235.000", image: "/assets/hapitairish/12.png" },
    { id: 13, name: "Atalier Brown Oden Bowl", price: "Rp 235.000", image: "/assets/hapitairish/13.png" },
    { id: 14, name: "Caldera Pink Coup Soup 20.5cm", price: "Rp 235.000", image: "/assets/hapitairish/14.png" },
    { id: 15, name: "Clara Appetizer Dish", price: "Rp 235.000", image: "/assets/hapitairish/15.png" },
    { id: 16, name: "Graphite Cappuccino Cup & Saucer", price: "Rp 235.000", image: "/assets/hapitairish/16.png" },

  ];

  const filtered = selectedCategory && selectedCategory !== "Semua Boomi"
    ? products
    : products;

  return (
    <div>
      <TopBar />
      <BrandAndBanner />

      <div className="flex px-4 pb-35 py-6 gap-4">
        {/* Sidebar */}
        <div className="w-1/4 pr-4">
        <h2 
            className="text-sm mb-3 cursor-pointer rounded-lg hover:bg-gray-200 transition-all`"
            onClick={() => navigate("/boomi")}
        >
            Semua Boomi
        </h2>
          <div className="space-y-2">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (category === "Semua Boomi") {
                    navigate("/boomi");
                    setSelectedCategory(null);
                  } else if (category === "Essentials") {
                    navigate("/boomi/essentials");
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
              src="/assets/banners/Boomi.png"
              alt="Banner Arturo"
              className="w-full h-[100px] object-cover rounded-lg"
            />
          </div>

          <h2 className="text-xl mb-2">Semua Boomi</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((product) => (
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
                  <WishlistButton product={product} className="absolute bottom-3 right-3" />
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

export default Essentials;
