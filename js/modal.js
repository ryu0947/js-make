"use strict";

const modal = document.getElementById("js-modal");
const openBtn = document.getElementById("js-open");
const closeBtn = document.getElementById("js-close");

openBtn.addEventListener("click", () => {
    modal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});