document.addEventListener('DOMContentLoaded', () => {
  console.log('Plant website loaded');

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
  const text = "Bring Nature";   // 👈 YAHAN text change hota hai
const typingElement = document.getElementById("typing-text");

let index = 0;
let isDeleting = false;

function loopType() {
  if (!isDeleting) {
    typingElement.textContent = text.substring(0, index + 1);
    index++;

    if (index === text.length) {
      setTimeout(() => (isDeleting = true), 1200);
    }
  } else {
    typingElement.textContent = text.substring(0, index - 1);
    index--;

    if (index === 0) {
      isDeleting = false;
    }
  }

  const speed = isDeleting ? 70 : 120;
  setTimeout(loopType, speed);
}

loopType();


  // Add to Cart Interaction
  const cartButtons = document.querySelectorAll('button');
  cartButtons.forEach(btn => {
    if (btn.innerText.includes('Get Started') || btn.innerText.includes('Subscribe')) return;

    btn.addEventListener('click', (e) => {
      // Simple ripple or feedback could go here
      const originalContent = btn.innerHTML;
      btn.innerHTML = `<svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
      setTimeout(() => {
        btn.innerHTML = originalContent;
      }, 2000);
    });
  });
});
