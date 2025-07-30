import React from "react";

export default function BrandAndBanner() {
  const brandLogos = [
    { name: "Hapita", src: "/assets/brands/Hapita.png" },
    { name: "Lumerpa", src: "/assets/brands/Lumerpa.png" },
    { name: "Skitchen", src: "/assets/brands/Skitchen.png" },
    { name: "Bima", src: "/assets/brands/Bima.png" },
    { name: "HSI", src: "/assets/brands/HSI Hospitality.png" },
  ];

  const bannerCatalogs = [
    { src: "/assets/banners/image 1.png", alt: "Catalog 1" },
    { src: "/assets/banners/image 2.png", alt: "Catalog 2" },
  ];

  const bannerPromos = [
    { src: "/assets/banners/image 3.png", alt: "Promo 1" },
    { src: "/assets/banners/image 4.png", alt: "Promo 2" },
  ];

  return (
    <div className="bg-white px-4 py-4 space-y-4 overflow-hidden max-w-full">
      {/* Brand Carousel */}
      <div className="flex justify center overflow-x-auto gap-3 px-2 py-2">
        {brandLogos.map((brand, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 rounded-full border border-blue-500 bg-white flex items-center justify-center overflow-hidden"
            style={{ width: "clamp(48px, 14vw, 72px)", height: "clamp(48px, 14vw, 72px)" }}
          >
            <img
              src={brand.src}
              alt={brand.name}
              className="w-[70%] h-[70%] object-contain"
            />
          </div>
        ))}
      </div>


      {/* Catalog Banners */}
      <div className="grid grid-cols-2 gap-3">
        {bannerCatalogs.map((banner, idx) => (
          <img
            key={idx}
            src={banner.src}
            alt={banner.alt}
            className="rounded-xl w-full h-auto object-cover"
          />
        ))}
      </div>

      {/* Promo Banners */}
      <div className="grid grid-cols-2 gap-3">
        {bannerPromos.map((banner, idx) => (
          <img
            key={idx}
            src={banner.src}
            alt={banner.alt}
            className="rounded-xl w-full h-auto object-cover"
          />
        ))}
      </div>
    </div>
  );
}
