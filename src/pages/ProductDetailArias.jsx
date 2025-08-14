import React from "react";
import TopBar from "../components/TopBar";
import { useNavigate } from "react-router-dom";

export default function ProductDetailArias() {
  const navigate = useNavigate();

  const product = {
    id: 1,
    name: "Arias Dinner Plate 10.75”",
    price: 235000,
    image: "/assets/lumerpa/2.png",
    material: "Keramik Fine China",
    keunggulan: [
      "1. 1 pcs Dinner Plate 27cm",
      "2. 1 pcs Salad Plate 23cm",
      "3. 1 pcs Pasta Bowl 22cm",
      "4. 1 pcs Cereal Bowl 15cm",
      "5. 1 pcs Mug 12oz",
    ],
    spesifikasi: ["1. 1 pcs Dinner Plate 27cm"],
  };

  const goCheckoutNow = () => {
  // simpan price sesuai format CheckoutPage
  const checkoutItem = {
    id: product.id,
    name: product.name,
    price: `Rp ${product.price.toLocaleString("id-ID")}`, // <-- string format
    image: product.image,
    quantity: 1,
  };

  localStorage.setItem("checkout", JSON.stringify([checkoutItem]));
  navigate("/checkout");
};

  return (
    <div className="relative min-h-screen pb-32 text-black bg-white">
      <TopBar />

      {/* CARD PRODUK */}
      <div className="p-4">
        <div className="rounded-2xl overflow-hidden shadow bg-white">
          <img src={product.image} alt={product.name} className="w-full object-cover" />
          <div className="bg-[#094C78] text-white p-4 rounded-b-2xl">
            <p className="font-medium text-xl">{product.name}</p>
            <p className="text-yellow-300 text-base font-bold mt-1">
              Rp {product.price.toLocaleString("id-ID")}
            </p>
          </div>
        </div>
      </div>

      {/* DESKRIPSI */}
      <div
        className="px-4 text-sm leading-relaxed"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <p className="font-semibold mb-2">LUMERPA Arias</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>

        <div className="mt-4">
          <p>
            <span className="font-bold">Material:</span> {product.material}
          </p>
        </div>

        <div className="mt-4">
          <p className="font-semibold mb-2">Keunggulan:</p>
          {product.keunggulan.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>

        <div className="mt-4">
          <p className="font-semibold mb-2">Spesifikasi Produk:</p>
          {product.spesifikasi.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </div>

      {/* NAVBAR BAWAH (tetap desain lama) */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 px-4 py-3 z-50 flex items-center justify-between">
        {/* Ikon Keranjang */}
        <div className="relative" onClick={goCheckoutNow}>
          <img src="/assets/nav/cart.png" alt="cart" className="w-9 h-9 cursor-pointer" />
        </div>

        {/* Tombol langsung checkout */}
        <button
          onClick={goCheckoutNow}
          className="bg-yellow-400 text-white font-bold px-6 py-2 rounded-lg hover:bg-yellow-500"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
