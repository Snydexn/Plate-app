import React from "react";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom

export default function BrandAndBanner() {
  const brandLogos = [
    { name: "Hapita", src: "/assets/brands/Hapita.png", link: "/hapita" },
    { name: "Lumerpa", src: "/assets/brands/Lumerpa.png", link: "/lumerpa" },
    { name: "Legacy", src: "/assets/brands/Legacy.png", link: "/legacy" },
    { name: "HSI", src: "/assets/brands/HSI Hospitality.png", link: "/hospitality" },
    { name: "Bima", src: "/assets/brands/Boomi.png", link: "/boomi" },
    
  ];

  return (
    <div className="bg-white px-4 py-4 space-y-4 overflow-hidden max-w-full">
      {/* Brand Carousel */}
      <div className="flex justify-center overflow-x-auto gap-3 px-2 py-2">
        {brandLogos.map((brand, idx) => (
          <div key={idx} className="flex-shrink-0">
            {/* Gunakan Link untuk navigasi ke halaman tertentu */}
            <Link to={brand.link}>
              <div
                className="rounded-full border border-blue-500 bg-white flex items-center justify-center overflow-hidden"
                style={{
                  width: "clamp(48px, 14vw, 72px)",
                  height: "clamp(48px, 14vw, 72px)",
                }}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="w-[70%] h-[70%] object-contain"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
