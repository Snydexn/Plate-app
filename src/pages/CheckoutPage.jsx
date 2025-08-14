import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const [items, setItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

  // Modal login
  const [showLoginModal, setShowLoginModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("checkout")) || [];
    setItems(saved);

    const initialQuantities = {};
    saved.forEach((item) => {
      initialQuantities[item.id] = item.quantity || 1;
    });
    setQuantities(initialQuantities);

    // ❌ Tidak memunculkan login saat membuka halaman
  }, []);

  const handleQuantity = (id, delta) => {
    setQuantities((prev) => {
      const newQty = Math.max(1, (prev[id] || 1) + delta);
      return { ...prev, [id]: newQty };
    });
  };

  const getTotal = () => {
    return items.reduce((total, item) => {
      const qty = quantities[item.id] || 1;
      // item.price di-save sebagai string "Rp 235.000"
      const price = parseInt(item.price.replace(/[^\d]/g, ""));
      return total + qty * price;
    }, 0);
  };

  // 🔐 Selalu minta login dulu ketika klik Lanjut Bayar
  const onProceedPayment = () => {
    setShowPaymentModal(false);
    setShowLoginModal(true);
  };

  // ✅ Setelah login, langsung buka modal pembayaran
  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    setShowPaymentModal(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9]">
      {/* Header Checkout */}
      <div className="bg-[#0C72B0] px-4 pt-6 pb-4">
        <div className="text-white text-lg font-medium flex items-center gap-3">
          <button onClick={() => window.history.back()} className="text-2xl font-bold">
            &lt;
          </button>
          <span>Keranjang</span>
        </div>
      </div>

      {/* Informasi Pembeli */}
      <div className="bg-white px-4 py-5 text-black text-sm space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Informasi Pembeli</p>
            <p>Avisenna - 08123456789</p>
          </div>
          <span className="text-xl">&gt;</span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Dikirim Ke</p>
            <p>Jl. Sukasari no 21, Bogor</p>
          </div>
          <span className="text-xl">&gt;</span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Ekspedisi</p>
            <p>JNE Standard</p>
          </div>
          <span className="text-xl">&gt;</span>
        </div>

        <div className="h-3 bg-[#D9D9D9] rounded-full mt-2" />
      </div>

      {/* Daftar Produk */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto mb-[160px]">
        {items.length === 0 ? (
          <p className="text-center text-gray-500">Tidak ada produk yang dipilih.</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-contain rounded-xl"
              />
              <div className="flex-1 px-4">
                <p className="text-sm font-semibold text-black leading-snug">{item.name}</p>
                <p className="text-[#F5C000] font-semibold text-sm mt-1">{item.price}</p>
              </div>
              <div className="flex items-center gap-2 bg-[#E3E3E3] px-3 py-1 rounded-full">
                <button
                  onClick={() => handleQuantity(item.id, -1)}
                  className="text-lg font-semibold"
                >
                  −
                </button>
                <span className="text-sm font-medium">{quantities[item.id]}</span>
                <button
                  onClick={() => handleQuantity(item.id, 1)}
                  className="text-lg font-semibold"
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {items.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-2xl">
          {/* Promo */}
          <div className="bg-[#094C78] text-white px-4 py-2 rounded-t-3xl">
            <div className="flex items-center gap-2">
              <div className="bg-white text-[#094C78] font-bold w-6 h-6 rounded-full flex items-center justify-center text-sm">
                %
              </div>
              <div>
                <p className="text-sm font-medium">Diskon 30% untuk pengguna baru</p>
                <p className="text-xs text-gray-200 -mt-0.5">Klaim sekarang juga</p>
              </div>
            </div>
          </div>

          {/* Total & Button */}
          <div className="flex justify-between items-center px-4 py-4">
            <div>
              <p className="text-sm text-black">Total Pembayaran</p>
              <p className="text-lg font-bold text-black">
                Rp {getTotal().toLocaleString("id-ID")}
              </p>
            </div>
            <button
              onClick={onProceedPayment}
              className="bg-[#FDCD25] text-white font-bold text-sm px-6 py-3 rounded-2xl"
            >
              Lanjut Bayar
            </button>
          </div>
        </div>
      )}

      {/* Modal Metode Pembayaran */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
          <div className="bg-white w-full max-w-md rounded-t-2xl p-5 shadow-lg">
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm font-semibold">Pilihan Metode Pembayaran</p>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="text-xl font-bold"
              >
                &times;
              </button>
            </div>

            <div className="space-y-3 mb-4">
              {[
                { id: "gopay", name: "GoPay", icon: "/assets/payments/gopay.png" },
                { id: "bca", name: "BCA Virtual Account", icon: "/assets/payments/bca.jpg" },
                { id: "mandiri", name: "Mandiri Virtual Account", icon: "/assets/payments/mandiri.png" },
              ].map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`flex items-center gap-3 p-2 rounded-lg border cursor-pointer ${
                    selectedMethod === method.id ? "border-[#0C72B0]" : "border-gray-300"
                  }`}
                >
                  <img src={method.icon} alt={method.name} className="w-8 h-8 object-contain" />
                  <span className="text-sm font-medium">{method.name}</span>
                </div>
              ))}
            </div>

            <hr className="my-3" />
            <div className="text-sm mb-2">
              <p className="text-gray-500">Ringkasan Pembayaran</p>
              <div className="flex justify-between font-semibold text-black mt-1">
                <span>Total Tagihan</span>
                <span>Rp {getTotal().toLocaleString("id-ID")}</span>
              </div>
            </div>

            <hr className="my-3" />
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Kamu Harus Bayar</p>
                <p className="text-lg font-bold text-black">
                  Rp {getTotal().toLocaleString("id-ID")}
                </p>
              </div>
              <button
                className="bg-[#FDCD25] text-white font-bold px-5 py-2 rounded-xl text-sm"
                onClick={() => {
                  if (!selectedMethod) {
                    alert("Pilih metode pembayaran dulu ya.");
                    return;
                  }

                  const mapLabel = {
                    gopay: "GoPay",
                    bca: "BCA Virtual Account",
                    mandiri: "Mandiri Virtual Account",
                  };
                  const mapNumber = {
                    gopay: "0812-xxxx-xxxx",
                    bca: "8888881234567890",
                    mandiri: "888996182311312446",
                  };

                  const payload = {
                    method: mapLabel[selectedMethod],
                    vaNumber: mapNumber[selectedMethod],
                  };
                  localStorage.setItem("selectedMethod", JSON.stringify(payload));

                  setShowPaymentModal(false);
                  navigate("/payment-gateway");
                }}
              >
                Lanjut Bayar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Login */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center">
          <div className="bg-gradient-to-b from-[#1076BB] to-white rounded-3xl w-[90%] max-w-md text-center text-white relative px-6 py-8">
            {/* X: tutup modal saja */}
            <button
              className="absolute top-2 right-4 bg-black text-white px-2 py-1 rounded-full text-sm"
              onClick={() => setShowLoginModal(false)}
            >
              X
            </button>

            <h2 className="text-3xl font-bold mb-6">Masuk</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-white bg-transparent py-2 px-1 placeholder-white text-white focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border-b border-white bg-transparent py-2 px-1 placeholder-white text-white focus:outline-none"
              />
              <div className="flex justify-between items-center text-xs mt-2 mb-4 text-white">
                <label className="flex items-center gap-1">
                  <input type="checkbox" className="accent-white" />
                  Remember me
                </label>
                <span className="underline">Forget Password?</span>
              </div>

              <button
                type="button"
                onClick={handleLoginSuccess}
                className="bg-[#FDCD25] text-white font-semibold py-2 rounded-full w-full"
              >
                Login
              </button>

              <p className="text-sm mt-4">
                Don’t have an account? <span className="font-bold text-white">Register</span>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
