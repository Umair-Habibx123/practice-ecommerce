// Accessible auto-playing carousel. Pauses on hover, supports
// prev/next and dot navigation. Replaces the legacy version that
// double-counted slides and had a broken pause button.

export function initCarousel(root) {
  const track = root.querySelector(".carousel__track");
  const slides = [...root.querySelectorAll(".carousel__slide")];
  const dotsWrap = root.querySelector(".carousel__dots");
  let index = 0;
  let timer;

  const dots = slides.map((_, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel__dot";
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.addEventListener("click", () => go(i));
    dotsWrap.appendChild(dot);
    return dot;
  });

  function go(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle("is-active", di === index));
  }

  function start() {
    timer = setInterval(() => go(index + 1), 3500);
  }
  function stop() {
    clearInterval(timer);
  }

  root.querySelector(".carousel__btn--prev").addEventListener("click", () => go(index - 1));
  root.querySelector(".carousel__btn--next").addEventListener("click", () => go(index + 1));
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);

  go(0);
  start();
}
