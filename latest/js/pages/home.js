import { renderLayout } from "../components/layout.js";
import { initCarousel } from "../components/carousel.js";
import { renderProducts } from "../components/product-card.js";
import { products, categories } from "../data/products.js";

renderLayout("index.html");
initCarousel(document.querySelector(".carousel"));

// Category cards link through to the products page, pre-filtered.
const catWrap = document.querySelector("[data-categories]");
catWrap.innerHTML = categories
  .map(
    c => `
    <a class="category-card" href="products.html?category=${c.id}">
      <img src="${c.image}" alt="${c.label}">
      <h3>${c.label}</h3>
    </a>`
  )
  .join("");

// A small "featured" selection on the home page.
const featured = products.filter((_, i) => i % 4 === 0).slice(0, 6);
renderProducts(document.querySelector("[data-featured]"), featured);
