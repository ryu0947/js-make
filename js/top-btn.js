"use strict";

const topBtn = document.getElementById("js-top-btn");

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
