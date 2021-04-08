"use strict";
{
  const accordionBtn = document.querySelectorAll(".accordion-btn");
  const accordionIcon = document.querySelectorAll(".accordion-icon");

  accordionBtn.forEach((clickBtn) => {
    clickBtn.addEventListener("click", () => {
      document.getElementById(clickBtn.dataset.btn).classList.toggle("open");

      accordionIcon.forEach((clickLine) => {
        if (clickLine.classList.contains(clickBtn.dataset.icon)) {
          clickLine.classList.toggle("active");
        }
      });
    });
  });
}
