// Toggle class active for hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

hamburgerMenu.addEventListener("click", (e) => {
  navbarNav.classList.toggle("active");

  e.preventDefault();
});

// if i click in out elemens
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  // e.preventDefault();
});

// Toggle Class active for search form

searchButton.addEventListener("click", function (e) {
  if (searchForm.classList.contains("active")) {
    // If search form is active, hide it
    searchForm.classList.remove("active");
  } else {
    // If search form is not active, show it
    searchForm.classList.add("active");
    searchBox.focus();
  }
  e.preventDefault();
});

// Click Outside sidebar for remove nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!searchForm.contains(e.target) && !searchButton.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (
    !searchForm.contains(e.target) &&
    !shoppingCartButton.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

const shoppingCartButton = document.querySelector("#shopping-cart-button");
const shoppingCart = document.querySelector("#shopping-cart");
shoppingCartButton.addEventListener("click", (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  });
});

// Click Button Close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Klik Diluar Modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
