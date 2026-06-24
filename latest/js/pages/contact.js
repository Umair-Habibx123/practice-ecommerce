import { renderLayout } from "../components/layout.js";
import { toast } from "../components/toast.js";

renderLayout("contact.html");

// Replaces the legacy inline onclick="alert(...)" with a real,
// validated submit handler. (No backend — this is a mock.)
document.querySelector("[data-contact-form]").addEventListener("submit", e => {
  e.preventDefault();
  e.target.reset();
  toast("Thanks! We'll get back to you soon.");
});
