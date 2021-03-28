const nav = document.getElementById("js-nav");
const navBtn = document.getElementById("js-nav-btn");
const navrBtnItems = document.querySelectorAll(".nav-btn-item");
const bodyElem = document.querySelector("body");

navBtn.addEventListener("click", () => {
  navrBtnItems.forEach((navrBtnItem) => {
    navrBtnItem.classList.toggle("active");
  });
  nav.classList.toggle("show");
  navBtn.classList.toggle("active");
  bodyElem.classList.toggle("mask");
});
