import React, { useMemo, useState, useEffect, useRef } from "react";
import TopBar from "../components/TopBar";
import BottomNavbar from "../components/BottomNavbar";
import {
  addProduct,
  getProducts,
  removeProduct,
  getSections,
  getCategories,
  saveProducts,
  loadProducts,
} from "../store/products";
import { useNavigate } from "react-router-dom";

const KNOWN_SECTIONS = ["Boomi", "Hospitality", "Legacy", "Lumerpa", "Hapita"];

const KNOWN_CATEGORIES = {
  Boomi: ["Rim", "Coupe", "Presentation", "Rectangular", "Beverages", "Essentials"],
  Hospitality: ["Rim", "Coupe", "Presentation", "Rectangular", "Beverages", "Essentials"],
  Legacy: ["Rim", "Coupe", "Presentation", "Rectangular", "Beverages", "Essentials", "Phoenix", "Melbourne", "Arturo"],
  Lumerpa: ["Alice", "Arias", "Asian", "Oslo", "Presentation", "Rafless", "Rim", "Sides", "Square", "Stackable"],
  Hapita: ["Alicia", "Clara", "Serena", "Dark Gobi", "Fusion Grey", "Pedra Rocha", "Rustic", "Atelier", "Irish", "Hikari"],
};


export default function Akun() {
  const navigate = useNavigate();

  // --- Admin Mode (default OFF) ---
  const [adminMode, setAdminMode] = useState(false);
  useEffect(() => {
    // optional: remember last toggle
    const v = localStorage.getItem("admin_mode") === "1";
    setAdminMode(v);
  }, []);
  const toggleAdmin = () => {
    const v = !adminMode;
    setAdminMode(v);
    localStorage.setItem("admin_mode", v ? "1" : "0");
  };

  // form state
  const [section, setSection] = useState("Boomi");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("Nama Produk");
  const [price, setPrice] = useState("Rp 0");
  const [image, setImage] = useState("/assets/hapita/1.png");

  // SUCCESS POPUP
  const [showSuccess, setShowSuccess] = useState(false);
  // --- Upload dari perangkat (local image) ---
  const fileInputRef = useRef(null);
  const onPickLocalImage = () => {
    fileInputRef.current?.click();
  };
  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result); // data:image/...;base64,xxxx
    };
    reader.readAsDataURL(file);
    e.target.value = ""; // reset supaya bisa pilih file sama lagi
  };


  // daftar products berdasar filter
  const products = useMemo(() => getProducts(section, category || null), [section, category]);

  // sections dari storage (kalau ada), digabung dengan known lalu di-unique
  const existingSections = getSections();
  const sectionOptions = useMemo(() => {
    const set = new Set([...KNOWN_SECTIONS, ...existingSections]);
    return Array.from(set);
  }, [existingSections]);

  // categories berdasarkan section terpilih, gabung known + storage
  const existingCats = getCategories(section);
  const categoryOptions = useMemo(() => {
    const known = KNOWN_CATEGORIES[section] || [];
    const set = new Set([...known, ...existingCats]);
    return Array.from(set);
  }, [section, existingCats]);

  // reset category saat ganti section jika category sekarang tidak valid
  useEffect(() => {
    if (category && !categoryOptions.includes(category)) setCategory("");
  }, [section, categoryOptions]); // eslint-disable-line

  const onAdd = (e) => {
    e.preventDefault();
    if (!adminMode) return; // guard kalau ada akses via devtools
    if (!section) return alert("Pilih section.");
    if (!name.trim()) return alert("Nama produk wajib diisi.");

    addProduct({ section, category: category || "", name: name.trim(), price, image });

    // reset nama (opsional reset field lain kalau mau)
    setName("");

    // tampilkan popup sukses
    setShowSuccess(true);
    // auto-dismiss setelah 1.5 detik
    setTimeout(() => setShowSuccess(false), 1500);
  };

  const onDelete = (id) => {
    if (!adminMode) return; // guard
    if (!window.confirm("Hapus produk ini?")) return;
    removeProduct(id);
    // trigger rerender ringan
    setName((s) => s);
  };

  // (opsional) fungsi export masih ada kalau suatu saat dibutuhkan
  const onExportJSON = () => {
    const data = loadProducts();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "products-export.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <TopBar />

      <div className="max-w-5xl mx-auto p-4 text-black pb-24 md:pb-28 lg:pb-32 [padding-bottom:calc(env(safe-area-inset-bottom)+6rem)]">
        {/* Header + Admin toggle */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Akun — Kelola Produk</h1>

          {/* Switch sederhana (default OFF) */}
          <button
            onClick={toggleAdmin}
            role="switch"
            aria-checked={adminMode}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border transition-colors
              ${adminMode ? "bg-[#094C78] text-white border-[#094C78]" : "bg-white text-[#094C78] border-[#094C78]"}`}
            title={`Admin Mode: ${adminMode ? "ON" : "OFF"}`}
          >
            <span
              className={`inline-block w-2.5 h-2.5 rounded-full ${adminMode ? "bg-white" : "bg-[#094C78]"}`}
            />
            Admin Mode: {adminMode ? "ON" : "OFF"}
          </button>
        </div>

        {/* Form tambah produk — hanya tampil saat Admin Mode ON */}
        {adminMode && (
          <form onSubmit={onAdd} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-xl shadow">
            {/* SECTION DROPDOWN */}
            <div>
              <label className="text-sm block mb-1">Section / Halaman</label>
              <select
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="w-full border p-2 rounded"
              >
                {sectionOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Pilih halaman tempat produk akan tampil (Boomi, Hospitality, Legacy, Lumerpa, Hapita).
              </p>
            </div>

            {/* CATEGORY DROPDOWN */}
            <div>
              <label className="text-sm block mb-1">Kategori</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="">(tanpa kategori)</option>
                {categoryOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Opsi kategori menyesuaikan section terpilih dan bisa terbaca dari data yang sudah ada.
              </p>
            </div>

            <div>
              <label className="text-sm block mb-1">Nama Produk</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded"
                placeholder="Dinner Plate 27cm"
              />
            </div>

            <div>
              <label className="text-sm block mb-1">Harga (teks)</label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border p-2 rounded"
                placeholder='contoh: "Rp 235.000" atau 235000'
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm block mb-1">Gambar (path di /assets/... atau URL)</label>
              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full border p-2 rounded"
                placeholder="/assets/... atau https://..."
              />

            {/* Tombol pilih gambar dari perangkat */}
            <div className="flex items-center gap-2 mt-2">
                <button
                type="button"
                onClick={onPickLocalImage}
                className="px-3 py-2 border rounded-lg hover:bg-gray-50"
                >
                Pilih gambar dari perangkat
                </button>

                {/* input file hidden */}
                <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onFileChange}
                />
            </div>

              {image && (
                <img
                  src={image}
                  alt="preview"
                  className="mt-2 w-full h-40 object-contain border rounded-lg bg-white"
                />
              )}
            </div>

            <div className="md:col-span-2 flex gap-2">
              <button type="submit" className="px-4 py-2 bg-[#094C78] text-white rounded-lg">
                Tambah
              </button>
              {/* (opsional) export json */}
              {/* <button type="button" onClick={onExportJSON} className="px-4 py-2 border rounded-lg">
                Export JSON
              </button> */}
            </div>
          </form>
        )}

        {/* List produk untuk filter aktif */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold">
              Produk Dinamis — {section} {category ? `/ ${category}` : ""}
            </h2>
            <button
              className="text-sm underline"
              onClick={() => navigate(`/${section.toLowerCase()}`)}
            >
              Lihat Halaman {section}
            </button>
          </div>

          {products.length === 0 ? (
            <div className="text-sm text-gray-500">Belum ada produk dinamis pada filter ini.</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((p) => (
                <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col">
                  <div className="aspect-[4/3] w-full bg-white overflow-hidden rounded-t-2xl">
                    <img src={p.image || "/assets/placeholder.png"} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 p-3">
                    <h3 className="text-sm font-medium">{p.name || "(tanpa nama)"}</h3>
                    <p className="text-sm text-gray-500">{p.price || ""}</p>
                    <p className="text-xs text-gray-400 mt-1">{section}{p.category ? ` · ${p.category}` : ""}</p>

                    {/* Tombol hapus hanya saat Admin Mode ON */}
                    {adminMode && (
                      <button
                        onClick={() => onDelete(p.id)}
                        className="mt-2 px-3 py-1 border rounded-lg"
                      >
                        Hapus
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* POPUP BERHASIL */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-5 w-[90%] max-w-sm text-center shadow-xl">
            <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              {/* ikon centang */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-semibold text-green-700">Produk berhasil ditambahkan</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-4 px-4 py-2 rounded-lg bg-[#094C78] text-white"
            >
              Oke
            </button>
          </div>
        </div>
      )}

      <div className="h-24 md:h-28 lg:h-32 [height:calc(env(safe-area-inset-bottom)+6rem)]" aria-hidden="true" />

      <BottomNavbar />
    </div>
  );
}
