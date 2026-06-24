import { renderLayout } from "../components/layout.js";
import { renderProducts } from "../components/product-card.js";
import { products, categories } from "../data/products.js";

renderLayout("products.html");

const grid = document.querySelector("[data-product-grid]");
const toolbar = document.querySelector("[data-filters]");

// Build filter chips: "All" + one per category.
const filters = [{ id: "all", label: "All" }, ...categories];
filters.forEach(f => {
  const chip = document.createElement("button");
  chip.className = "chip";
  chip.dataset.filter = f.id;
  chip.textContent = f.label;
  chip.addEventListener("click", () => apply(f.id));
  toolbar.appendChild(chip);
});

function apply(category) {
  const list = category === "all" ? products : products.filter(p => p.category === category);
  renderProducts(grid, list);
  toolbar.querySelectorAll(".chip").forEach(chip =>
    chip.classList.toggle("is-active", chip.dataset.filter === category)
  );
  // Reflect the active filter in the URL so it can be shared/bookmarked.
  const url = new URL(location);
  if (category === "all") url.searchParams.delete("category");
  else url.searchParams.set("category", category);
  history.replaceState(null, "", url);
}

// Honour ?category= coming from the home page category cards.
const initial = new URLSearchParams(location.search).get("category") || "all";
apply(categories.some(c => c.id === initial) ? initial : "all");
