const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  const glowLeft = document.querySelector('.hero__glow--left');
  const glowRight = document.querySelector('.hero__glow--right');
  let x = 0;
  let y = 0;
  window.addEventListener(
    'pointermove',
    (event) => {
      const nx = event.clientX / window.innerWidth - 0.5;
      const ny = event.clientY / window.innerHeight - 0.5;
      x = nx * 14;
      y = ny * 10;
      if (glowLeft) {
        glowLeft.style.transform = `translate(${x * 1.2}px, ${y * 1.4}px)`;
      }
      if (glowRight) {
        glowRight.style.transform = `translate(${-x * 0.9}px, ${-y * 1.1}px)`;
      }
    },
    { passive: true }
  );
}
