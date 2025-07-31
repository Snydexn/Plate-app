import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import {
  getWishlist,
  saveWishlist,
  removeWishlistItem,
} from "../utils/wishlistStorage";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const savedWishlist = getWishlist();
    setWishlist(savedWishlist);

    const initialQuantities = {};
    const initialChecked = {};
    savedWishlist.forEach(item => {
      initialQuantities[item.id] = 1;
      initialChecked[item.id] = false;
    });
    setQuantities(initialQuantities);
    setCheckedItems(initialChecked);
  }, []);

  const toggleChecked = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const removeItem = (id) => {
    const updatedWishlist = removeWishlistItem(id);
    const updatedChecked = { ...checkedItems };
    const updatedQuantities = { ...quantities };

    delete updatedChecked[id];
    delete updatedQuantities[id];

    setWishlist(updatedWishlist);
    setCheckedItems(updatedChecked);
    setQuantities(updatedQuantities);
  };

  const handleQuantity = (id, delta) => {
    const newQty = (quantities[id] || 1) + delta;
    if (newQty <= 0) {
      removeItem(id);
    } else {
      setQuantities(prev => ({ ...prev, [id]: newQty }));
    }
  };

  const getTotal = () => {
    return wishlist.reduce((total, item) => {
      if (checkedItems[item.id]) {
        const qty = quantities[item.id] || 1;
        const price = parseInt(item.price.replace(/[^\d]/g, ""));
        return total + qty * price;
      }
      return total;
    }, 0);
  };

  const handleSelectAll = (checked) => {
    const newChecked = {};
    wishlist.forEach(item => {
      newChecked[item.id] = checked;
    });
    setCheckedItems(newChecked);
  };

  return (
    <div className= "min-h-screen flex flex-col justify-between">
      <TopBar />
      {/* Wishlist Content */}
      <div className="p-4 flex-1 overflow-y-auto">
        <h2 className="font-semibold text-lg mb-4">Pilihanmu</h2>
        {wishlist.length === 0 ? (
          <p className="text-center text-gray-600 text-sm italic">Tidak ada wishlist</p>
        ) : (
          wishlist.map((item) => (
            <div key={item.id} className="flex items-center justify-between px-3 py-2 bg-white rounded-lg shadow-sm mb-3">
              <div className="flex items-center gap-3">
                <input type="checkbox" checked={checkedItems[item.id] || false} onChange={() => toggleChecked(item.id)} className="w-5 h-5 accent-black" />
                <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded-xl" />
                <div>
                  <p className="text-sm font-medium text-black">{item.name}</p>
                  <p className="text-sm font-semibold text-[#F5C000]">{item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-[#E3E3E3] px-2 py-1 rounded-full">
                <button className="text-lg font-semibold px-2" onClick={() => handleQuantity(item.id, -1)}>−</button>
                <span className="text-sm">{quantities[item.id]}</span>
                <button className="text-lg font-semibold px-2" onClick={() => handleQuantity(item.id, 1)}>+</button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {wishlist.length > 0 && (
        <div className="bg-white rounded-t-xl shadow-md">
          <div className="bg-[#074A77] text-white px-4 py-2 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-lg">🎫</span>
              <span className="text-sm font-medium">Voucher</span>
            </div>
            <span className="text-sm text-gray-300">Gunakan/masukkan code &gt;</span>
          </div>

          <div className="flex justify-between items-center px-4 py-3">
            <label className="flex items-center gap-2 text-black text-sm">
              <input
                type="checkbox"
                onChange={(e) => handleSelectAll(e.target.checked)}
                checked={
                  wishlist.length > 0 &&
                  wishlist.every((item) => checkedItems[item.id])
                }
              />
              Semua
            </label>
            <div className="flex items-center gap-3">
              <span className="text-[#074A77] font-bold text-sm">
                Rp {getTotal().toLocaleString("id-ID")}
              </span>
              <button className="bg-[#FDCD25] text-white font-bold text-sm px-4 py-2 rounded">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}