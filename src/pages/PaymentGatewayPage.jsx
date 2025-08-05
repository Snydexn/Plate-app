import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavbar from "../components/BottomNavbar";

export default function PaymentGatewayPage() {
  const navigate = useNavigate();
  const [methodInfo, setMethodInfo] = useState({
    method: "Mandiri Virtual Account",
    vaNumber: "888996182311312446",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("selectedMethod"));
    if (saved) {
      setMethodInfo(saved);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white mb-30 text-black p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="text-2xl font-bold mr-2"
        >
          &lt;
        </button>
        <h1 className="text-md font-semibold">Menunggu Pembayaran</h1>
      </div>

      {/* Method Label */}
      <div className="bg-[#1479B7] text-white text-sm font-bold px-4 py-2 mb-4 rounded-sm">
        {methodInfo.method.toUpperCase()}
      </div>

      {/* Deadline */}
      <div className="text-sm mb-3">
        <p className="text-gray-700">Lakukan Pembayaran Sebelum</p>
        <p className="font-bold mt-1">21 Juni 2025, 12.00</p>
        <hr className="my-2 border-gray-300" />
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm">Total Pembayaran</p>
          <p className="font-bold text-lg mt-1">Rp 235.000</p>
        </div>
        <span className="text-[#1479B7] font-bold text-sm">LIHAT DETAIL</span>
      </div>

      {/* VA Number */}
      <div className="text-sm mb-4">
        <p className="mb-1">Nomor Virtual Account</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-extrabold tracking-wide">
            {methodInfo.vaNumber}
          </p>
          <button className="bg-[#FDCD25] text-white text-sm font-bold px-4 py-1 rounded-xl">
            SALIN
          </button>
        </div>
      </div>

      {/* Transfer Option Buttons */}
      <div className="bg-[#FDCD25] h-2 rounded-t-full" />
      <div className=" mb-2">
        <button className="w-full bg-[#D9D9D9] py-3 rounded-xl border border-black font-medium text-sm">
          Transfer via ATM Mandiri
        </button>
        <button className="w-full bg-[#D9D9D9] py-3 rounded-xl border border-black font-medium text-sm">
          Transfer via Mobile Internet Banking
        </button>
        <button className="w-full bg-[#D9D9D9] py-3 rounded-xl border border-black font-medium text-sm">
          Sudah Melakukan Pembayaran?
        </button>
      </div>

      {/* Ganti & Batalkan */}
      <div className="space-y-2 mt-4">
        <button className="w-full border border-[#FDCD25] text-[#FDCD25] font-bold py-3 rounded-xl bg-white">
          Ganti Metode Pembayaran
        </button>
        <button className="w-full border border-[#E02525] text-[#E02525] font-bold py-3 rounded-xl bg-[#D9D9D9]">
          Batalkan
        </button>
      </div>
      <BottomNavbar />
    </div>
  );
}
