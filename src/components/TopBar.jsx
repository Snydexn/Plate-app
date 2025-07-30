import React from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai"; // outline heart

export default function TopBar() {
  return (
    <div className="bg-[#1076BB] px-4 py-3 text-white">
      {/* Baris atas: Jam operasional & Track Order */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs sm:text-sm font-light tracking-wide"  style={{ fontFamily: "'Montserrat', sans-serif" }}>
          MON - FRI | 10.00 - 18.00
        </span>
        <button className="text-xs font-semibold text-yellow-300">
          Track Order
        </button>
      </div>

      {/* Search bar dan icon love */}
      <div className="flex items-center gap-3">
        {/* Search Box */}
        <div className="flex flex-1 items-center bg-white rounded-full px-4 py-1 shadow-sm">
          {/* Logo */}
          <img
            src="/assets/Logo BKH.png"
            alt="Logo"
            className="h-9S w-9 mr-2 object-contain"
          />

          {/* Input */}
          <input
            type="text"
            placeholder=""
            className="flex-1 text-sm text-black focus:outline-none"
          />

          {/* Search Icon di kanan */}
          <FaSearch className="text-gray-500 text-s ml-2" />
        </div>

        {/* Icon Love Outline (putih, tidak terpotong) */}
        <AiOutlineHeart className="text-white text-2xl" />
      </div>
    </div>
  );
}
