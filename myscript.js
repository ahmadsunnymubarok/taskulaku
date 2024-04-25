// toggleclass  active untuk hmburger  menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggleclaass active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//  klik diluar sidebar untuk mengehilangkan nav
// klik di luar menu

const hamMenu = document.querySelector("#menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});