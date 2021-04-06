"use strict";

const pcNav = document.querySelectorAll(".pc-list li a");
const spNav = document.querySelectorAll(".sp-list li a");

pcNav.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const href = a.getAttribute("href");
    const getTargetId = document.getElementById(href.replace("#", ""));
    const getElementPosition = getTargetId.getBoundingClientRect().top;
    const scrollY = window.pageYOffset;
    const headerHeight = 90;
    const calcElementPosition = getElementPosition + scrollY - headerHeight;
    window.scrollTo({
      top: calcElementPosition,
      left: 0,
      behavior: "smooth",
    });
  });
});
