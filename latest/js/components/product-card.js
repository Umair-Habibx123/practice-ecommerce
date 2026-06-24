// Renders a product card and wires its "Add to cart" button.
// Reused by both the home page and the products page.

import { cart } from "../store/cart.js";
import { toast } from "./toast.js";

export function productCard(product) {
  const el = document.createElement("article");
  el.className = "product-card";
  el.innerHTML = `
    <img class="product-card__img" src="${product.image}" alt="${product.name}" loading="lazy">
    <div class="product-card__body">
      <span class="product-card__cat">${product.category}</span>
      <h3 class="product-card__name">${product.name}</h3>
      <p class="product-card__price">$${product.price.toFixed(2)}</p>
      <button class="btn btn--block" type="button">Add to Cart</button>
    </div>`;

  el.querySelector("button").addEventListener("click", () => {
    cart.add(product.id);
    toast(`${product.name} added to cart`);
  });

  return el;
}

export function renderProducts(container, list) {
  container.innerHTML = "";
  if (list.length === 0) {
    container.innerHTML = `<p class="empty-state">No products found.</p>`;
    return;
  }
  const frag = document.createDocumentFragment();
  list.forEach(p => frag.appendChild(productCard(p)));
  container.appendChild(frag);
}
