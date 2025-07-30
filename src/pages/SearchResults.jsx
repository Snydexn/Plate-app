import React from "react";
import TopBar from "../components/TopBar";

export default function SearchResults() {
  const palingDicari = [
    {
      name: "Dinner Set 4 pcs Alicia",
      image: "/assets/produkhome/produk1.png",
    },
    {
      name: "Galet Bowl Set of 5 pcs Dark Gobi",
      image: "/assets/produkhome/produk2.png",
    },
    {
      name: "Dinner Plate 10” Irish Green",
      image: "/assets/produkhome/produk10.png",
    },
  ];

  const produkPopuler = [
    {
      name: "Dinner Plate 10.25” Fusion Grey",
      image: "/assets/produkhome/produk3.png",
    },
    {
      name: "Cup & Saucer 7 Oz Alicia",
      image: "/assets/produkhome/produk5.png",
    },
    {
      name: "Rim Pasta Plate 10” Dark Gobi",
      image: "/assets/produkhome/produk9.png",
    },
  ];

  return (
    <main className="bg-white min-h-screen pt-4 pb-24">
      <TopBar />

      <h2 className="font-semibold text-sm px-4 mb-3">Paling Sering Dicari</h2>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 px-4 mb-4">
        {["Piring", "Mangkok", "Gelas", "Cangkir", "Piring Set", "Bima", "Lumerpa", "Hapita", "Luminarc"].map((tag, idx) => (
          <button
            key={idx}
            className="bg-gray-200 text-xs px-3 py-1 rounded-full"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Dua Kolom Produk */}
      <div className="grid grid-cols-2 gap-4 px-4">
        {/* Kolom kiri */}
        <div className="bg-[#FDCD25] rounded-2xl p-3">
          <h3 className="font-semibold text-sm mb-2">Paling Sering Dicari</h3>
          <div className="bg-white rounded-2xl p-3 space-y-3">
            {palingDicari.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <p className="text-xs text-black leading-tight break-words w-full">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom kanan */}
        <div className="bg-[#FFB229] rounded-2xl p-3">
          <h3 className="font-semibold text-sm mb-2">Produk Populer</h3>
          <div className="bg-white rounded-2xl p-3 space-y-3">
            {produkPopuler.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <p className="text-xs text-black leading-tight break-words w-full">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
