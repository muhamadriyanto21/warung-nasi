// Toggle class active for hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");
hamburgerMenu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

// if i click in out sidebar, it will remove nav
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Toggle Class active for search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", function (e) {
  searchForm.classList.add("active");
  searchBox.focus();
  e.preventDefault();
});
