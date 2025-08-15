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
        <img
          src="/assets/kisahkeramik.png"
          alt="Kisah Keramik"
          className="rounded-xl w-full aspect-[4/3] object-cover mb-3"
        />
        <h2 className="text-base font-semibold mb-2">
          Pengrajin keramik di Nusantara
        </h2>

        <p className="text-[15px] text-black leading-6 text-justify">
          Keramik di Nusantara memiliki jejak panjang yang membentang sejak ribuan tahun lalu.
          Bukti arkeologis menunjukkan bahwa masyarakat kepulauan Indonesia telah membuat
          dan menggunakan keramik sejak masa Neolitikum (sekitar 2500–1500 SM).
        </p>

        <p className="text-[15px] text-black leading-6 mb-1 text-justify">
          Ketika arus perdagangan mulai membawa perahu-perahu asing ke pelabuhan Nusantara,
          warna sejarah keramik berubah. Sekitar abad ke-4, pedagang dari India, Cina, dan
          Timur Tengah datang, membawa keramik glasir mengilap, porselen putih, dan tempayan
          bergambar naga atau bunga peony. Barang-barang ini bukan hanya benda pakai,
          tetapi juga simbol kemewahan yang dipajang di istana Sriwijaya atau Majapahit.
          Di Trowulan, bekas ibu kota Majapahit, hingga kini ditemukan pecahan keramik dari
          Dinasti Tang, Song, Yuan, dan Ming—bukti bahwa keramik telah menjadi bagian dari
          diplomasi, perdagangan, dan budaya.
        </p>

        <p className="text-[15px] text-black leading-6 mb-1 text-justify">
          Pengrajin lokal pun mulai meniru bentuk, teknik, dan motif keramik asing, memadukannya dengan pola lokal seperti parang, kawung, dan sulur daun.
Dari masa itu lahirlah sentra-sentra keramik yang masih bertahan hingga kini. Kasongan di Yogyakarta menjadi pusat gerabah hias yang terkenal, lahir dari tradisi turun-temurun.
        </p>

           <p className="text-[15px] text-black leading-6 mb-1 text-justify">
          Plered di Purwakarta dikenal dengan tempayan besar yang dulu menjadi wadah penyimpanan air dan beras. Di Lombok, pengrajin tetap setia pada teknik bakar gosok yang memberikan warna hitam alami nan eksotis. Klampok di Banjarnegara berkembang pesat di masa kolonial Belanda, memproduksi keramik untuk kebutuhan rumah tangga dan perhotelan. 
           </p>

         <p className="text-[15px] text-black leading-6 mb-1 text-justify">
          Memasuki abad ke-20 dan pasca kemerdekaan, industri keramik di Nusantara berkembang pesat. Pabrik-pabrik modern memproduksi stoneware, fine china, dan porselen untuk kebutuhan domestik dan ekspor. Sementara itu, para pengrajin tradisional mulai memadukan warisan lama dengan desain kontemporer, melahirkan karya yang diminati kolektor mancanegara. Dari piring sederhana hingga guci hias berharga tinggi, keramik Nusantara kini menjadi bukti bahwa dari segumpal tanah, lahirlah karya yang tak lekang oleh waktu.
         </p>
      </article>

        <div className="h-5" />
      </main>

      <BottomNavbar />
    </div>
  );
}
