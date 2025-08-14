//+++  b/src/hooks/useWishlist.js
import { useEffect, useState } from 'react';

const KEY = 'wishlist';

const read = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; }
};

export default function useWishlist() {
  const [wishlist, setWishlist] = useState(() => read());

  useEffect(() => {
    const onStorage = (e) => { if (e.key === KEY) setWishlist(read()); };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  const toggle = (product) => {
    const current = read();
    const exists = current.some((item) => item.id === product.id);
    const next = exists ? current.filter((i) => i.id !== product.id) : [...current, product];
    localStorage.setItem(KEY, JSON.stringify(next));
    setWishlist(next);
    return !exists;
  };

  return { wishlist, isInWishlist, toggle };
}
