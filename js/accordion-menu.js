"use strict";

const accordionBtn = document.querySelectorAll(".accordion-btn");

accordionBtn.forEach((clickBtn) => {
  clickBtn.addEventListener("click", () => {
    document.getElementById(clickBtn.dataset.id).classList.toggle("open");
  });
});
