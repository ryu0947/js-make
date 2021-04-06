"use strict";

const pageLink = document.querySelectorAll("a[href$='link']");
const nav = document.getElementById("js-nav");
const navBtn = document.getElementById("js-nav-btn");
const navBtnItems = document.querySelectorAll(".nav-btn-item");
const mask = document.getElementById("js-mask");
const modal = document.getElementById("js-modal");
const openBtn = document.getElementById("js-open");
const closeBtn = document.getElementById("js-close");
const body = document.body;
const header = document.getElementById("js-header");

function closeDrawerMenu() {
  if (nav.classList.contains("show")) {
    body.style.position = "";
    body.style.top = "";
    navBtnItems.forEach((navrBtnItem) => {
      navrBtnItem.classList.toggle("active");
    });
    nav.classList.remove("show");
    mask.classList.remove("show");
    navBtn.classList.remove("active");
  }
}

function closeModalMenu() {
  if (modal.classList.contains("show")) {
    body.style.position = "";
    body.style.top = "";
    modal.classList.remove("show");
  }
}

pageLink.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    closeDrawerMenu();
    closeModalMenu();
    const href = a.getAttribute("href");
    const getTargetId = document.getElementById(href.replace("#", ""));
    const getElementPosition = getTargetId.getBoundingClientRect().top;
    const headerHeight = header.offsetHeight;
    const calcElementPosition = getElementPosition + window.pageYOffset - headerHeight;
    window.scrollTo({
      top: calcElementPosition,
      left: 0,
      behavior: "smooth",
    });
  });
});
