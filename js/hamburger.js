const hamburgerBtn = document.getElementById("js-hamburger");
const drawerBtn = document.getElementById("js-drawer");
const hamburgerNav = document.getElementById("js-hamburger-nav");
const drawerNav = document.getElementById("js-drawer-nav");
const hamburgerTop = document.getElementById("hamburger-top");
const hamburgerCenter = document.getElementById("hamburger-center");
const hamburgerBottom = document.getElementById("hamburger-bottom");
const drawerTop = document.getElementById("drawer-top");
const drawerCenter = document.getElementById("drawer-center");
const drawerBottom = document.getElementById("drawer-bottom");

function hamburgerActive() {
  hamburgerTop.classList.toggle("active");
  hamburgerCenter.classList.toggle("active");
  hamburgerBottom.classList.toggle("active");
  hamburgerNav.classList.toggle("show");
}

function drawerActive() {
  drawerTop.classList.toggle("active");
  drawerCenter.classList.toggle("active");
  drawerBottom.classList.toggle("active");
  drawerNav.classList.toggle("show");
}

hamburgerBtn.addEventListener("click", () => {
  hamburgerActive();
});

drawerBtn.addEventListener("click", () => {
  drawerActive();
});
