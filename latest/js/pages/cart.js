import { renderLayout } from "../components/layout.js";
import { cart } from "../store/cart.js";
import { toast } from "../components/toast.js";

renderLayout("cart.html");

const itemsEl = document.querySelector("[data-cart-items]");
const summaryEl = document.querySelector("[data-cart-summary]");
const modal = document.querySelector("[data-checkout-modal]");

function render() {
  const lines = cart.lines();

  if (lines.length === 0) {
    itemsEl.innerHTML = `<p class="empty-state">Your cart is empty. <a href="products.html">Browse products →</a></p>`;
    summaryEl.hidden = true;
    return;
  }
  summaryEl.hidden = false;

  itemsEl.innerHTML = lines
    .map(
      line => `
      <div class="cart-row" data-id="${line.id}">
        <img src="${line.image}" alt="${line.name}">
        <div>
          <h3 class="cart-row__name">${line.name}</h3>
          <p class="cart-row__price">$${line.price.toFixed(2)} each</p>
          <button class="cart-row__remove" data-remove>Remove</button>
        </div>
        <div class="qty" aria-label="Quantity for ${line.name}">
          <button data-dec aria-label="Decrease">−</button>
          <span>${line.qty}</span>
          <button data-inc aria-label="Increase">+</button>
        </div>
      </div>`
    )
    .join("");

  const total = cart.total();
  summaryEl.querySelector("[data-subtotal]").textContent = `$${total.toFixed(2)}`;
  summaryEl.querySelector("[data-total]").textContent = `$${total.toFixed(2)}`;
}

// Event delegation for qty + remove controls.
itemsEl.addEventListener("click", e => {
  const row = e.target.closest(".cart-row");
  if (!row) return;
  const id = row.dataset.id;
  const current = cart.items().find(i => i.id === id)?.qty ?? 0;

  if (e.target.matches("[data-inc]")) cart.setQty(id, current + 1);
  else if (e.target.matches("[data-dec]")) cart.setQty(id, current - 1);
  else if (e.target.matches("[data-remove]")) cart.remove(id);
});

document.querySelector("[data-clear]").addEventListener("click", () => {
  cart.clear();
  toast("Cart cleared");
});

// Checkout modal
document.querySelector("[data-checkout]").addEventListener("click", () => {
  if (cart.count() === 0) return toast("Your cart is empty");
  modal.hidden = false;
});
modal.querySelector("[data-close]").addEventListener("click", () => (modal.hidden = true));
modal.addEventListener("click", e => {
  if (e.target === modal) modal.hidden = true;
});
modal.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  modal.hidden = true;
  cart.clear();
  toast("Order placed! Thank you 🎉");
});

cart.subscribe(render);
