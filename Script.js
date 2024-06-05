/*!
=================================================================================================================================
     *Responsive Nav Bar
=================================================================================================================================
*/

const navbarMenu = document.querySelector(".navlist");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");

hamburgerBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());


