// Load cart from localStorage (or create new)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// --- ADD TO CART FUNCTION ---
function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();

  // ✅ Optional: small checkmark popup confirmation
  const check = document.createElement("div");
  check.textContent = "✔ Added to Cart!";
  check.style.position = "fixed";
  check.style.bottom = "20px";
  check.style.right = "20px";
  check.style.background = "#4CAF50";
  check.style.color = "white";
  check.style.padding = "10px 20px";
  check.style.borderRadius = "8px";
  check.style.fontWeight = "bold";
  document.body.appendChild(check);
  setTimeout(() => check.remove(), 1200);
}

// --- UPDATE CART COUNT ---
function updateCartCount() {
  const count = JSON.parse(localStorage.getItem('cart'))?.length || 0;
  const countEl = document.getElementById('cart-count');
  if (countEl) countEl.textContent = count;
}

// --- INITIALIZE CART COUNT ON PAGE LOAD ---
document.addEventListener("DOMContentLoaded", updateCartCount);
// Mobile hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Dropdown toggle for mobile
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const btn = dropdown.querySelector('.dropbtn');
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent page jump
    const menu = dropdown.querySelector('.dropdown-content');
    menu.classList.toggle('show');
  });
});

