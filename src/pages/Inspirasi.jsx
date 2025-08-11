import React from "react";
import TopBar from "../components/TopBar";
import BottomNavbar from "../components/BottomNavbar";

export default function Inspirasi() {
  const items = [
    { img: "/assets/Inspirasi.png" },
  ];

  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />

      <main className="flex-1 pb-35 px-4">
        <h1 className="text-lg font-bold mt-3 mb-3">Inspirasi Untukmu</h1>

        <div className="space-y-6">
          {items.map((it, idx) => (
            // 🔵 RING mengitari gambar + teks (satu kartu utuh)
            <article
              key={idx}
              className="rounded-2xl ring-2 ring-[#1076BB] bg-white p-3 shadow-sm"
            >
              <img
                src={it.img}
                alt={`Inspirasi ${idx + 1}`}
                className="w-full rounded-xl object-cover"
              />

              <p className="text-sm text-gray-700 mt-3 leading-6">
                {lorem}
              </p>
            </article>
          ))}
        </div>
      </main>

      <BottomNavbar />
    </div>
  );
}
