// src/pages/Promotional.jsx
import React from "react";
import TopBar from "../components/TopBar";
import BottomNavbar from "../components/BottomNavbar";

export default function Promotional() {
  const banners = [1, 2, 3, 4].map((n) => `/assets/Promotional/${n}.png`);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />

      <main className="flex-1 pb-35 px-4">

        <div className="space-y-4">
          {banners.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Promotional Banner ${idx + 1}`}
              className="w-full rounded-xl shadow-sm object-cover"
            />
          ))}
        </div>
      </main>

      <BottomNavbar />
    </div>
  );
}
