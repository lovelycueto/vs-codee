const toggleMenu = document.querySelector(".toggle__menu");
const header__nav2 = document.querySelector(".header__nav2");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  header__nav2.classList.toggle("open");
})