// Toggle class active for hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

hamburgerMenu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
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
});
