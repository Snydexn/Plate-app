// src/components/TopBar.jsx
import React, { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useWishlist from "../hooks/useWishlist"; // <- shared wishlist source of truth

const TopBar = ({ hideTrackOrder = false }) => {
  const navigate = useNavigate();
  const { wishlist } = useWishlist(); // uses the same storage/toggle as the “+” buttons

  // Helper to parse prices like "Rp 235.000" -> 235000
  const parsePrice = (val) => {
    if (typeof val === "number") return val;
    const n = String(val || "").replace(/[^\d]/g, "");
    return Number(n || 0);
  };

  // Keep compatibility: if an item doesn't have quantity/checked, use sensible defaults
  const totalPrice = useMemo(() => {
    try {
      return wishlist.reduce((sum, it) => {
        const qty = typeof it.quantity === "number" && it.quantity > 0 ? it.quantity : 1;
        const checked = typeof it.checked === "boolean" ? it.checked : true;
        return checked ? sum + parsePrice(it.price) * qty : sum;
      }, 0);
    } catch {
      return 0;
    }
  }, [wishlist]);

  // (Optional) keep a local search state (matches your old UI)
  const [query] = useState("");

  return (
    <div className="bg-white">
      {/* Header Bar */}
      <div className="bg-[#1076BB] p-3 text-white">
        <div className="flex justify-between items-center">
          <span className="text-[9px] sm:text-sm font-light font-[Montserrat] tracking-wide">
            MON - FRI | 10.00 - 18.00
          </span>

          {/* Sembunyikan tombol track order jika simple */}
          {!hideTrackOrder && (
            <button
              onClick={() => navigate("/track-order")}
              className="text-xs font-semibold text-yellow-300"
            >
              Track Order
            </button>
          )}
        </div>

        {/* Search dan Wishlist */}
        <div className="flex items-center gap-3 mt-2">
          <div className="flex flex-1 items-center bg-white rounded-full px-4 py-1 shadow-sm">
            <img
              src="/assets/Logo BKH.png"
              alt="Logo"
              className="h-9 w-9 mr-2 object-contain cursor-pointer"
              onClick={() => navigate("/homepage")}
            />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 text-sm text-black focus:outline-none"
              onClick={() => navigate("/search")}
              // value={query} onChange={(e) => setQuery(e.target.value)} // keep behavior same as before
            />
            <FaSearch className="text-gray-500 text-xl ml-2" />
          </div>

          {/* Wishlist (same data as '+' buttons). Looks the same; adds a tiny count badge. */}
          <button
            onClick={() => navigate("/wishlist")}
            className="relative"
            aria-label="Wishlist"
            title={`Wishlist (${wishlist.length})`}
          >
            <AiOutlineHeart className="text-white text-2xl cursor-pointer" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-2 text-[10px] min-w-[18px] h-[18px] px-1 rounded-full bg-[#FDCD25] text-black grid place-items-center">
                {wishlist.length}
              </span>
            )}
            {/* Accessible total (optional, invisible visually) */}
            <span className="sr-only">Total: Rp {totalPrice.toLocaleString("id-ID")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
