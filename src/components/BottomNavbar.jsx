import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-xl">
      {/* Promo Bar */}
      <div className="bg-[#094C78] text-white px-4 py-2 rounded-tr-3xl rounded-tl-3xl">
        <div className="flex items-center gap-2">
          <div className="bg-white text-[#094C78] font-bold w-6 h-6 rounded-full flex items-center justify-center text-sm">
            %
          </div>
          <div>
            <p className="text-sm leading-none">Diskon 30% untuk pengguna baru</p>
            <p className="text-xs text-gray-200 -mt-0.5">Klaim sekarang juga</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex justify-between items-center px-4 pt-3 pb-2 bg-white">
        {[{ name: "Home", icon: "/assets/nav/home.png", link: "/" }, 
          { name: "Category", icon: "/assets/nav/category.png", link: "/category" },
          { name: "Design Your Own Plate", icon: "/assets/nav/design.png", link: "/design" },
          { name: "Cart", icon: "/assets/nav/cart.png", link: "/cart" },
          { name: "Account", icon: "/assets/nav/account.png", link: "/account" }].map((item, index) => (
          <Link key={index} to={item.link} className="flex flex-col items-center text-[11px] font-medium text-black text-center w-[20%]">
            <img
              src={item.icon}
              alt={item.name}
              className="w-6 h-6 mb-1 object-contain"
            />
            <span className="leading-tight">
              {item.name.includes(" ") ? (
                <>
                  {item.name.split(" ").slice(0, 1).join(" ")} <br />
                  {item.name.split(" ").slice(1).join(" ")}
                </>
              ) : (
                item.name
              )}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
