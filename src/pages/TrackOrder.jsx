import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import OrderProgress from "../components/OrderProgress";

export default function TrackOrder() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("checkout")) || [];
    setItems(saved);
  }, []);

  return (
    <div>
      <TopBar hideTrackOrder />
    <div className="min-h-screen bg-white px-4 pt-6 flex flex-col">
      

      {/* Header Navigasi Step */}
      <OrderProgress />
      {/* Item List */}
      {items.length === 0 ? (
        <p className="text-center text-gray-500">Tidak ada item dalam pesanan.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              {/* Image & Info */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain rounded-md"
                />
                <div>
                  <p className="text-[11px] font-medium text-black">{item.name}</p>
                  <p className="text-[#FDCD25] font-medium text-[11px] mt-1">{item.price}</p>
                </div>
              </div>

              {/* Quantity Display */}
              <div className="flex items-center gap-2 bg-[#E3E3E3] px-3 py-1 rounded-full">
                <span className="text-lg font-bold">−</span>
                <span className="text-sm">{item.quantity || 1}</span>
                <span className="text-lg font-bold">+</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Return to Shop Button */}
      <div className="mt-auto mb-6 text-center">
        <button
          className="mx-auto mt-10 px-5 py-2 bg-[#1076BB] text-white font-bold rounded font-[Montserrat]"
          onClick={() => navigate("/")}
        >
          Return to Shop
        </button>
      </div>
    </div>
  </div>
  );
}
