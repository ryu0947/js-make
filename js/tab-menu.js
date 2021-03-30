"use strict";

const tabItems = document.querySelectorAll(".tab-item");
const tabInners = document.querySelectorAll(".tab-inner");

tabItems.forEach((clickItem) => {
  clickItem.addEventListener("click", () => {
    tabItems.forEach((tabItem) => {
      tabItem.classList.remove("active");
    });

    clickItem.classList.add("active");

    tabInners.forEach((tabInner) => {
      tabInner.classList.remove("active");
    });

    document.getElementById(clickItem.dataset.id).classList.add("active");
  });
});
