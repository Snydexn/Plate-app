import React from "react";
import TopBar from "../components/TopBar";
import BottomNavbar from "../components/BottomNavbar";

export default function KisahKeramik() {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />

      <main className="flex-1 pb-28 px-4">
        {/* Judul halaman */}
        <h1 className="text-lg font-semibold mt-3 mb-3">Kisah Keramik</h1>
        <article className="rounded-2xl ring-2 ring-[#0A68A6] bg-white p-3 shadow-sm">
          <div className="rounded-xl bg-[#0A68A6] w-full aspect-[4/3] mb-3" />
          <h2 className="text-base font-semibold mb-2">
            Pengrajin keramik di Nusantara
          </h2>
          <p className="text-sm text-gray-800 leading-6">{lorem}{lorem} {lorem}</p>
        </article>
        <div className="h-5" />
      </main>

      <BottomNavbar />
    </div>
  );
}
