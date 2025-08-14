  // b/src/store/products.js
  // Simple localStorage-based product store
  const KEY = 'dynamic_products_v1';
  
  const safeParse = (s) => {
    try { return JSON.parse(s || '[]'); } catch(e) { return []; }
  };
  
  export const loadProducts = () => {
    if (typeof window === 'undefined') return [];
    return safeParse(localStorage.getItem(KEY));
  };
  
  export const saveProducts = (list) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(KEY, JSON.stringify(list));
  };
  
  export const addProduct = (item) => {
    const now = Date.now();
    const id = item.id || now + Math.floor(Math.random()*1000);
    const list = loadProducts();
    list.push({ ...item, id });
    saveProducts(list);
    return id;
  };
  
  export const removeProduct = (id) => {
    const list = loadProducts().filter(p => p.id !== id);
    saveProducts(list);
  };
  
  export const removeBy = (section, category) => {
    const list = loadProducts().filter(p => !(p.section === section && p.category === category));
    saveProducts(list);
  };
  
  export const getProducts = (section, category=null) => {
    let list = loadProducts().filter(p => p.section === section);
    if (category) list = list.filter(p => (p.category || '') === category);
    return list;
  };
  
  export const getSections = () => {
    const set = new Set(loadProducts().map(p => p.section).filter(Boolean));
    return Array.from(set);
  };
  
  export const getCategories = (section) => {
    const set = new Set(loadProducts().filter(p => p.section === section).map(p => p.category || '').filter(Boolean));
    return Array.from(set);
  };
