"use strict";
{
  const modal = document.getElementById("js-modal");
  const openBtn = document.getElementById("js-open");
  const closeBtn = document.getElementById("js-close");
  const body = document.body;

  openBtn.addEventListener("click", () => {
    modal.classList.add("show");
    const scrollY = window.pageYOffset;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  });
}
