// A tiny reactive cart store backed by localStorage.
//
// The legacy code kept TWO competing carts ("cart" and "productsInCart")
// that never agreed with each other, and stored prices as display strings.
// This store keeps a single { id, qty } list and looks prices up from the
// catalogue, so the numbers can never drift.

import { productById } from "../data/products.js";

const STORAGE_KEY = "shopwave.cart";
const listeners = new Set();

function read() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function write(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  listeners.forEach(fn => fn(items));
}

export const cart = {
  /** Subscribe to changes; returns an unsubscribe function. */
  subscribe(fn) {
    listeners.add(fn);
    fn(read());
    return () => listeners.delete(fn);
  },

  items: () => read(),

  /** Detailed lines joined with catalogue data. */
  lines() {
    return read()
      .map(({ id, qty }) => {
        const product = productById(id);
        return product ? { ...product, qty } : null;
      })
      .filter(Boolean);
  },

  count() {
    return read().reduce((n, item) => n + item.qty, 0);
  },

  total() {
    return this.lines().reduce((sum, line) => sum + line.price * line.qty, 0);
  },

  add(id, qty = 1) {
    const items = read();
    const existing = items.find(item => item.id === id);
    if (existing) existing.qty += qty;
    else items.push({ id, qty });
    write(items);
  },

  setQty(id, qty) {
    let items = read();
    if (qty <= 0) {
      items = items.filter(item => item.id !== id);
    } else {
      const existing = items.find(item => item.id === id);
      if (existing) existing.qty = qty;
    }
    write(items);
  },

  remove(id) {
    write(read().filter(item => item.id !== id));
  },

  clear() {
    write([]);
  },
};
