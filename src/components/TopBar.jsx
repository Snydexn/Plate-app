import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate(); // Initialize navigate hook

  // Fetch wishlist from localStorage when component mounts
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
    calculateTotal(savedWishlist);
  }, []);

  // Function to calculate total price
  const calculateTotal = (wishlist) => {
    let total = 0;
    wishlist.forEach(item => {
      if (item.checked) {
        total += item.price * item.quantity; // Update price calculation for checked items
      }
    });
    setTotalPrice(total);
  };

  // Handle checkbox change for an item
  const handleCheckboxChange = (index) => {
    const updatedWishlist = [...wishlist];
    updatedWishlist[index].checked = !updatedWishlist[index].checked;
    setWishlist(updatedWishlist);
    calculateTotal(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Update localStorage
  };

  // Handle quantity change
  const handleQuantityChange = (index, increment) => {
    const updatedWishlist = [...wishlist];
    const newQuantity = updatedWishlist[index].quantity + increment;
    if (newQuantity >= 1) {
      updatedWishlist[index].quantity = newQuantity;
      setWishlist(updatedWishlist);
      calculateTotal(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); 
    }
  };

  return (
    <div className="bg-white">
      {/* Header Bar */}
      <div className="bg-[#1076BB] p-3 text-white">
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm font-light tracking-wide">
            MON - FRI | 10.00 - 18.00
          </span>
          <button className="text-xs font-semibold text-yellow-300">
            Track Order
          </button>
        </div>
        {/* Search Box */}
        <div className="flex items-center gap-3 mt-2">
          <div className="flex flex-1 items-center bg-white rounded-full px-4 py-1 shadow-sm">
            <img src="/assets/Logo BKH.png" alt="Logo" className="h-9 w-9 mr-2 object-contain" onClick={() => navigate("/homepage")}/>
            <input type="text" placeholder="Search" className="flex-1 text-sm text-black focus:outline-none" onClick={() => navigate("/search")} />
            <FaSearch className="text-gray-500 text-xl ml-2" />
          </div>
          {/* Heart Icon for Wishlist */}
          <AiOutlineHeart
            className="text-white text-2xl cursor-pointer"
            onClick={() => navigate("/wishlist")}
          />
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
