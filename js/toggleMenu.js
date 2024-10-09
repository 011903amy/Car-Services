const toggleMenu = document.querySelector(".header__toggleMenu");
const headerMenu = document.querySelector(".header__menu");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerMenu.classList.toggle("open");
});
