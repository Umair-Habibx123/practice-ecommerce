// Lightweight toast notification — replaces the legacy full-screen
// "Item added to cart!" modal overlay that you had to dismiss by hand.

let toastEl;
let hideTimer;

export function toast(message) {
  if (!toastEl) {
    toastEl = document.createElement("div");
    toastEl.className = "toast";
    toastEl.setAttribute("role", "status");
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = message;
  // Force reflow so the transition replays on rapid calls.
  void toastEl.offsetWidth;
  toastEl.classList.add("is-visible");

  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => toastEl.classList.remove("is-visible"), 2000);
}
