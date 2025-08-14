// b/src/pages/Akun.jsx
import React, { useState, useMemo } from 'react';
import TopBar from '../components/TopBar';
import BottomNavbar from '../components/BottomNavbar';
import { addProduct, getProducts, removeProduct, getSections, getCategories } from '../store/products';

const knownSections = ['Boomi', 'Hospitality']; // extend if needed
const knownCategories = {
  Hospitality: ['Rim', 'Coupe', 'Presentation', 'Rectangular', 'Beverages', 'Essentials'],
  Boomi: ['Alicia','Irish','Fusion Grey','Hikari','Caldera','Atelier'],
};

const Akun = () => {
  const [section, setSection] = useState('Boomi');
  const [category, setCategory] = useState('Alicia');
  const [name, setName] = useState('Nama Produk');
  const [price, setPrice] = useState('Rp 0');
  const [image, setImage] = useState('/assets/hapita/1.png');

  const dynamicList = useMemo(() => getProducts(section, category), [section, category]);

 const onAdd = (e) => {
    e.preventDefault();
    if (!section || !category || !name) return;
    addProduct({ section, category, name, price, image });
    setName('');
  };

  const onDelete = (id) => {
    removeProduct(id);
    setImage(img => img); // trigger rerender
  };

  const existingSections = getSections();
  const suggestionSections = Array.from(new Set([...knownSections, ...existingSections]));

  const existingCats = getCategories(section);
  const suggestionCats = Array.from(new Set([...(knownCategories[section] || []), ...existingCats]));

  return (
    <div>
      <TopBar />
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Akun — Kelola Produk</h1>
        <form onSubmit={onAdd} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-xl shadow">
          <div>
            <label className="text-sm">Section/Halaman</label>
            <input list="sections" value={section} onChange={e=>setSection(e.target.value)} className="w-full border p-2 rounded" />
            <datalist id="sections">
              {suggestionSections.map(s => <option key={s} value={s} />)}
            </datalist>
          </div>
          <div>
            <label className="text-sm">Kategori</label>
            <input list="cats" value={category} onChange={e=>setCategory(e.target.value)} className="w-full border p-2 rounded" />
            <datalist id="cats">
              {suggestionCats.map(c => <option key={c} value={c} />)}
            </datalist>
          </div>
          <div>
            <label className="text-sm">Nama Produk</label>
            <input value={name} onChange={e=>setName(e.target.value)} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="text-sm">Harga (teks)</label>
            <input value={price} onChange={e=>setPrice(e.target.value)} className="w-full border p-2 rounded" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm">Gambar (path di /assets/...)</label>
            <input value={image} onChange={e=>setImage(e.target.value)} className="w-full border p-2 rounded" />
          </div>
          <div className="md:col-span-2 flex gap-2">
            <button type="submit" className="px-4 py-2 bg-[#094C78] text-white rounded-lg">Tambah</button>
          </div>
        </form>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Produk Dinamis — {section} / {category}</h2>
          {dynamicList.length === 0 ? (
            <div className="text-sm text-gray-500">Belum ada produk dinamis untuk filter ini.</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {dynamicList.map(p => (
                <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col">
                  <div className="aspect-[4/3] w-full bg-white overflow-hidden rounded-t-2xl">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 p-3">
                    <h3 className="text-sm font-medium">{p.name}</h3>
                    <p className="text-sm text-gray-500">{p.price}</p>
                    <button onClick={()=>onDelete(p.id)} className="mt-2 px-3 py-1 border rounded-lg">Hapus</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Akun;
