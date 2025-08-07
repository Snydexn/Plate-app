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
    <div className="min-h-screen bg-white mb-30 text-black flex flex-col">
      {/* Header */}
      <div className="relative mb-4 p-4 flex items-center justify-center">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 text-2xl font-bold p-4"
        >
          &lt;
        </button>
        <h1 className="text-md">Menunggu Pembayaran</h1>
      </div>


      {/* Method Label */}
      <div className="bg-[#1076BB] text-white text-sm font-extrabold py-4 mb-4 px-4 rounded-sm font-[Montserrat]">
        {methodInfo.method.toUpperCase()}
      </div>


      {/* Deadline */}
      <div className="text-sm mb-3 p-4 font-[Montserrat]">
        <p className="text-black font-medium">Lakukan Pembayaran Sebelum</p>
        <p className="font-extrabold mt-1">21 Juni 2025, 12.00</p>
        <hr className="my-2 border-gray-300" />
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mb-4 p-4 font-[Montserrat]">
        <div>
          <p className="text-sm font-medium">Total Pembayaran</p>
          <p className="font-extrabold text-lg mt-1">Rp 235.000</p>
        </div>
        <span className="text-[#094C78] font-extrabold text-sm">LIHAT DETAIL</span>
      </div>

      {/* VA Number */}
      <div className="text-sm mb-4 p-4 font-[Montserrat]">
        <p className="mb-1 font-medium">Nomor Virtual Account</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-extrabold tracking-wide">
            {methodInfo.vaNumber}
          </p>
          <button className="bg-[#FFB229] text-white text-sm font-bold px-4 py-1 rounded-xl">
            SALIN
          </button>
        </div>
      </div>

      <div className="mb-2 mt-4 px-4">
      {/* Garis Kuning */}
      <div className="bg-[#FFB229] h-2 rounded-t-full" />

      {/* Tombol Transfer */}
      <div className="font-[Montserrat]">
        <button className="w-full bg-[#D9D9D9] py-3 px-4 rounded-xl border border-black font-semibold text-sm text-left">
          Transfer via ATM Mandiri
        </button>
        <button className="w-full bg-[#D9D9D9] py-3 px-4 rounded-xl border border-black font-semibold text-sm text-left">
          Transfer via Mobile Internet Banking
        </button>
        <button className="w-full bg-[#D9D9D9] py-3 px-4 rounded-xl border border-black font-semibold text-sm text-left">
          Sudah Melakukan Pembayaran?
        </button>
      </div>
    </div>




      {/* Ganti & Batalkan */}
      <div className="space-y-2 mt-4 p-4 font-[Montserrat]">
        <button className="w-full border border-[#FDCD25] bg-[#D9D9D9] text-[#FDCD25] font-semibold py-2 rounded-xl">
          Ganti Metode Pembayaran
        </button>
        <button className="w-full border border-[#E02525] text-[#E02525] font-semibold py-2 rounded-xl bg-[#D9D9D9]">
          Batalkan
        </button>
      </div>
      <BottomNavbar />
    </div>
  );
}
