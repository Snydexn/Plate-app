const STORAGE_KEY = "wishlist";

export function getWishlist() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveWishlist(wishlist) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
}

export function removeWishlistItem(id) {
  const wishlist = getWishlist().filter((item) => item.id !== id);
  saveWishlist(wishlist);
  return wishlist;
}

export function addWishlistItem(product) {
  const wishlist = getWishlist();
  if (!wishlist.find((item) => item.id === product.id)) {
    const updated = [...wishlist, product];
    saveWishlist(updated);
    return updated;
  }
  return wishlist;
}

export function clearWishlist() {
  localStorage.removeItem(STORAGE_KEY);
}
