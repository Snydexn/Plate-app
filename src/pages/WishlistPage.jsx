import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // For navigating to the home page
import BottomNavbar from "../components/BottomNavbar";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch wishlist from localStorage when component mounts
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Function to handle removing an item from the wishlist
  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(item => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save updated wishlist
  };

  // Function to handle item selection
  const handleSelectItem = (productId) => {
    const updatedSelectedItems = selectedItems.includes(productId)
      ? selectedItems.filter(id => id !== productId) // Deselect
      : [...selectedItems, productId]; // Select
    setSelectedItems(updatedSelectedItems);
    calculateTotal(updatedSelectedItems); // Recalculate total when selection changes
  };

  // Function to calculate total price based on selected items
  const calculateTotal = (selectedItems) => {
    const selectedProducts = wishlist.filter(item => selectedItems.includes(item.id));
    const total = selectedProducts.reduce((total, item) => {
      // Remove non-numeric characters and parse the price as a number
      const price = parseInt(item.price.replace(/[^\d]/g, ""), 10);
      
      if (!isNaN(price)) {
        total += price * item.quantity; // Multiply by quantity
      }
      return total;
    }, 0);
    setTotalPrice(total);
  };

  // Function to handle quantity change
  const handleQuantityChange = (productId, operation) => {
    const updatedWishlist = wishlist.map(item => {
      if (item.id === productId) {
        if (operation === "increase") {
          item.quantity += 1;
        } else if (operation === "decrease" && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
      return item;
    });
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save updated wishlist
    calculateTotal(selectedItems); // Recalculate total after quantity change
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-2xl font-semibold text-center text-[#094C78] mb-6">
        Your Wishlist
      </h1>

      {/* Check if wishlist is empty */}
      <div className="px-4 py-8">
        {wishlist.length === 0 ? (
          <div className="text-center text-lg text-gray-600">
            <p>Your wishlist is empty.</p>
            <Link to="/" className="text-blue-500 mt-4 inline-block">
              Back to Home
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {wishlist.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                  {/* Checkbox for selection */}
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                    className="mr-2"
                  />

                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-4"
                  />

                  <div className="flex-1">
                    {/* Product Name */}
                    <p className="font-medium text-sm">{item.name}</p>

                    {/* Product Price */}
                    <p className="text-[#FDCD25] text-base font-semibold mt-1">
                      {item.price}
                    </p>
                  </div>

                  {/* Quantity control */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, "decrease")}
                      className="bg-gray-200 text-black p-1 rounded-sm"
                    >
                      -
                    </button>
                    <p className="font-medium text-sm">{item.quantity}</p>
                    <button
                      onClick={() => handleQuantityChange(item.id, "increase")}
                      className="bg-gray-200 text-black p-1 rounded-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Price Section */}
            <div className="mt-6 flex justify-between items-center">
              <p className="text-lg font-semibold">Total Price:</p>
              <p className="text-lg font-semibold text-[#FDCD25]">
                Rp {totalPrice.toLocaleString("id-ID")}
              </p>
            </div>

            <div className="mt-4 text-center">
              <button
                className="bg-blue-600 text-white px-8 py-2 rounded-full text-sm"
                onClick={() => alert("Proceed to checkout")}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
