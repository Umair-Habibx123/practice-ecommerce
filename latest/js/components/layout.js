// Shared chrome (header + footer) injected once per page.
// In the legacy version this markup was copy-pasted into all four HTML
// files; changing a nav link meant editing it four times. Here it lives
// in one place and every page calls renderLayout().

import { cart } from "../store/cart.js";

const NAV = [
  { href: "index.html", label: "Home" },
  { href: "products.html", label: "Products" },
  { href: "contact.html", label: "Contact" },
];

function header(active) {
  const links = NAV.map(
    ({ href, label }) =>
      `<a href="${href}"${href === active ? ' aria-current="page"' : ""}>${label}</a>`
  ).join("");

  return `
  <header class="site-header">
    <div class="container site-header__inner">
      <a class="logo" href="index.html">
        <span class="logo__mark">🛍️</span> Shop<b>wave</b>
      </a>
      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button>
      <nav class="nav" id="primary-nav">
        ${links}
        <a class="cart-link" href="cart.html">
          🛒 Cart <span class="cart-badge" data-cart-badge hidden>0</span>
        </a>
      </nav>
    </div>
  </header>`;
}

function footer() {
  const cols = [
    { title: "Explore", links: ["About", "Announcements", "Community", "Security Center"] },
    { title: "Help & Contact", links: ["Resolution Center", "Seller Center", "Contact Us"] },
    { title: "Legal", links: ["Privacy Policy", "User Agreement", "Accessibility"] },
  ];
  const columns = cols
    .map(
      col => `
      <div>
        <h4>${col.title}</h4>
        <ul>${col.links.map(l => `<li><a href="#">${l}</a></li>`).join("")}</ul>
      </div>`
    )
    .join("");

  return `
  <footer class="site-footer">
    <div class="container site-footer__grid">
      ${columns}
      <div>
        <h4>Follow</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div class="site-footer__bottom container">
      © ${new Date().getFullYear()} Shopwave — a learning project. Not a real store.
    </div>
  </footer>`;
}

export function renderLayout(activePage) {
  const headerSlot = document.querySelector("[data-header]");
  const footerSlot = document.querySelector("[data-footer]");
  if (headerSlot) headerSlot.outerHTML = header(activePage);
  if (footerSlot) footerSlot.outerHTML = footer();

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");
  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Keep the cart badge in sync everywhere.
  cart.subscribe(() => {
    const badge = document.querySelector("[data-cart-badge]");
    if (!badge) return;
    const count = cart.count();
    badge.textContent = count;
    badge.hidden = count === 0;
  });
}
