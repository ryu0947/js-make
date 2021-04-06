"use strict";
{
  const modal = document.getElementById("js-modal");
  const openBtn = document.getElementById("js-open");
  const closeBtn = document.getElementById("js-close");
  const body = document.body;
  let scrollPos = 0;

  openBtn.addEventListener("click", () => {
    modal.classList.add("show");
    scrollPos = window.pageYOffset;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, scrollPos * 1);
  });
}
