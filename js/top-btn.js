"use strict";

const topBtn = document.getElementById("js-top-btn");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  if (scrollY > 200) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
