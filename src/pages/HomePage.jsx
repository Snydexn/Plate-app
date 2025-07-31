import React, { useState } from "react";
import TopBar from "../components/TopBar";
import BrandAndBanner from "../components/BrandAndBanner";
import BottomNavbar from "../components/BottomNavbar";

export default function HomePage() {
  const [wishlist, setWishlist] = useState([]);

  const bannerCatalogs = [
    { src: "/assets/banners/image 1.png", alt: "Catalog 1" },
    { src: "/assets/banners/image 2.png", alt: "Catalog 2" },
  ];

  const bannerPromos = [
    { src: "/assets/banners/image 3.png", alt: "Promo 1" },
    { src: "/assets/banners/image 4.png", alt: "Promo 2" },
  ];

  const inspirations = [
    "/assets/inspirasi/1.png",
    "/assets/inspirasi/2.png",
    "/assets/inspirasi/3.png",
    "/assets/inspirasi/4.png",
    "/assets/inspirasi/5.png",
  ];

  const products = [
    {
      id: 1,
      name: "Dinner Set 4 pcs Alicia",
      price: "Rp 235.000",
      image: "/assets/produkhome/produk1.png",
    },
    {
      id: 2,
      name: "Galet Bowl Set of 5 pcs Dark Gobi",
      price: "Rp 300.000",
      image: "/assets/produkhome/produk2.png",
    },
    {
      id: 3,
      name: "Dinner Plate 10.25” Fusion Grey",
      price: "Rp 120.000",
      image: "/assets/produkhome/produk3.png",
    },
    {
      id: 4,
      name: "Pasta Bowl 7.5” Caldera Blue",
      price: "Rp 85.000",
      image: "/assets/produkhome/produk4.png",
    },
    {
      id: 5,
      name: "Cup & Saucer 7 Oz Alicia",
      price: "Rp 75.000",
      image: "/assets/produkhome/produk5.png",
    },
      {
    id: 6,
    name: "Casserole 10.5 Oz Lumerpa",
    price: "Rp 240.000",
    image: "/assets/produkhome/produk6.png",
  },
  {
    id: 7,
    name: "Pizza Plate 11.75” Lumerpa",
    price: "Rp 175.000",
    image: "/assets/produkhome/produk7.png",
  },
  {
    id: 8,
    name: "Half Moon Plate Lumerpa",
    price: "Rp 137.000",
    image: "/assets/produkhome/produk8.png",
  },
  {
    id: 9,
    name: "Rim Pasta Plate 10” Dark Gobi",
    price: "Rp 130.000",
    image: "/assets/produkhome/produk9.png",
  },
   {
    id: 10,
    name: "Dinner Plate 10” Irish Green",
    price: "Rp 120.000",
    image: "/assets/produkhome/produk10.png",
  },
  ];

  // Function to handle adding items to wishlist
  const addToWishlist = (product) => {
    // Check if the product is already in the wishlist
    if (!wishlist.some((item) => item.id === product.id)) {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist); // Update wishlist state
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save to localStorage
    }
  };

  // Function to check if an item is in the wishlist
  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <main className="min-h-screen text-black pb-35">
      {/* Komponen TopBar dan Banner */}
      <TopBar />
      <BrandAndBanner />

      {/* Catalog Banners */}
      <div className="grid grid-cols-2 gap-3 p-2">
        {bannerCatalogs.map((banner, idx) => (
          <img
            key={idx}
            src={banner.src}
            alt={banner.alt}
            className="rounded-xl w-full h-auto object-cover"
          />
        ))}
      </div>

      {/* Promo Banners */}
      <div className="grid grid-cols-2 gap-3 p-2">
        {bannerPromos.map((banner, idx) => (
          <img
            key={idx}
            src={banner.src}
            alt={banner.alt}
            className="rounded-xl w-full h-auto object-cover"
          />
        ))}
      </div>

      {/* Inspirasi Untukmu */}
      <section className="pt-4 pb-6 text-black">
        <h2 className="px-4 font-semibold text-sm mb-3">Inspirasi Untukmu</h2>
        <div className="flex gap-2 px-4 justify-between">
          {inspirations.map((src, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden bg-white"
              style={{ width: "18%", aspectRatio: "3 / 4" }}
            >
              <img
                src={src}
                alt={`inspirasi-${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Produk Pilihan Section */}
      <section className="px-4 pb-8 text-black">
        <h2 className="font-semibold text-sm mb-3">Produk Pilihan</h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm relative"
              style={{ maxWidth: "200px", margin: "0 auto" }}
            >
              {/* Icon Love */}
              <div
                className={`absolute top-2 right-2 text-lg cursor-pointer ${
                  isInWishlist(product.id) ? "text-red-500" : "text-blue-400"
                }`}
                onClick={() => addToWishlist(product)} // Add item to wishlist
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[140px] object-contain bg-white"
              />

              {/* Product Details */}
              <div className="bg-[#094C78] text-white p-3 rounded-b-2xl min-h-[80px] relative">
                <div className="text-xs pr-8">
                  <p>{product.name}</p>
                  <p className="text-[#FDCD25] font-semibold mt-1">
                    {product.price}
                  </p>
                </div>

                <button className="absolute bottom-3 right-3 bg-yellow-300 text-[#01497c] w-7 h-7 rounded-full flex items-center justify-center text-lg font-bold leading-none">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BottomNavbar />
    </main>
  );
}
