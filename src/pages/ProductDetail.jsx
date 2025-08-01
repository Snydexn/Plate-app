import React, { useState, useEffect } from "react";
import TopBar from "../components/TopBar";

export default function ProductDetail() {
  const product = {
    id: 1,
    name: "Dinner Set 5 pcs Alicia",
    price: 235000,
    image: "/assets/produkhome/produk1.png",
    material: "Keramik Stoneware Premium Grade A+",
    spesifikasi: [
      "1. 1 pcs Dinner Plate 27cm",
      "2. 1 pcs Salad Plate 23cm",
      "3. 1 pcs Pasta Bowl 22cm",
      "4. 1 pcs Cereal Bowl 15cm",
      "5. 1 pcs Mug 12oz",
    ],
  };

  const [quantity, setQuantity] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((item) => item.id === product.id);
    if (existing) setQuantity(existing.quantity);
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(total);
  }, []);

  const updateCart = (newQty) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (newQty < 1) {
      const updatedCart = cart.filter((item) => item.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setQuantity(0);
      const total = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(total);
      return;
    }

    let updatedCart;
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: newQty } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: newQty }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setQuantity(newQty);
    const total = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(total);
  };

  return (
    <div className="relative min-h-screen pb-32 text-black bg-white">
      <TopBar />
      {/* CARD PRODUK */}
      <div className="p-4">
        <div className="rounded-2xl overflow-hidden shadow bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-cover"
          />
          <div className="bg-[#094C78] text-white p-4 rounded-b-2xl">
            <p className="font-medium text-xl">{product.name}</p>
            <p className="text-yellow-300 text-base font-bold mt-1">
              Rp {product.price.toLocaleString("id-ID")}
            </p>
          </div>
        </div>
      </div>

      {/* DESKRIPSI */}
      <div className="px-4 text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <p className="font-semibold mb-2">HAPITA Alicia</p>
        <p>
          BKH Set Tableware Keramik Piring Mangkuk Gelas Cangkir Exclusive
          untuk Hotel Restaurant Cafe. Tampil bold dan berkarakter, Alicia
          Series hadir dengan warna coklat gelap yang elegan dan finishing
          reactive glaze yang unik.
        </p>

        <div className="mt-4">
          <p>
            <span className="font-bold">Material:</span> {product.material}
          </p>
        </div>

        <div className="mt-4">
          <p className="font-semibold mb-2">Spesifikasi Produk:</p>
          <ul className="list-disc space-y-1">
            {product.spesifikasi.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </ul>
        </div>
      </div>

      {/* NAVBAR BAWAH */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 px-4 py-3 z-50 flex items-center justify-between">
        {/* Ikon Keranjang */}
        <div className="relative">
          <img src="/assets/nav/cart.png" alt="cart" className="w-9 h-9" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>

        {/* Tombol Dinamis */}
        {quantity === 0 ? (
          <button
            onClick={() => updateCart(1)}
            className="bg-yellow-400 text-white font-bold px-6 py-2 rounded-lg hover:bg-yellow-500"
          >
            Tambah Ke Keranjang
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <button
              onClick={() => updateCart(quantity - 1)}
              className="bg-gray-200 w-8 h-8 rounded-full text-xl font-semibold"
            >
              –
            </button>
            <span className="text-lg font-bold">{quantity}</span>
            <button
              onClick={() => updateCart(quantity + 1)}
              className="bg-gray-200 w-8 h-8 rounded-full text-xl font-semibold"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
