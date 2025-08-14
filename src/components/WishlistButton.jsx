/// b/src/components/WishlistButton.jsx
import React, { useState } from 'react';
import useWishlist from '../hooks/useWishlist';

export default function WishlistButton({ product, className = '' }) {
  const { isInWishlist, toggle } = useWishlist();
  const active = isInWishlist(product.id);
  const [bump, setBump] = useState(false);

  const onClick = (e) => {
    e.stopPropagation();
    toggle(product);
    setBump(true);
    setTimeout(() => setBump(false), 250);
  };

  return (
    <button
      onClick={onClick}
      aria-label="Add to wishlist"
      className={`rounded-full border px-3 py-1 text-lg leading-none transition-all duration-200
        ${active ? 'bg-[#094C78] text-white border-[#094C78]' : 'bg-white text-[#094C78] border-[#094C78]'}
        ${bump ? 'scale-110' : 'scale-100'} ${className}`}
    >
      {active ? '✓' : '+'}
    </button>
  );
}
