"use strict";

const accordionBtn = document.querySelectorAll(".accordion-btn");
const accordionLine = document.querySelectorAll(".accordion-line");

accordionBtn.forEach((clickBtn) => {
  clickBtn.addEventListener("click", () => {
    document.getElementById(clickBtn.dataset.btn).classList.toggle("open");

    accordionLine.forEach((clickLine) => {
      if (clickLine.classList.contains(clickBtn.dataset.line)) {
        clickLine.classList.toggle("active");
      }
    });
  });
});
