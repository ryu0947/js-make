"use strict";

{
  const nav = document.getElementById("js-nav");
  const navBtn = document.getElementById("js-nav-btn");
  const navBtnItems = document.querySelectorAll(".nav-btn-item");
  const body = document.body;
  const mask = document.getElementById("js-mask");

  function scrollFixed() {
    if (nav.classList.contains("show")) {
      if (body.style.top) {
        const scrollY = body.style.top;
        body.style.position = "fixed";
        body.style.top = `-${scrollY}px`;
        return;
      }
      const scrollY = window.pageYOffset;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
    } else {
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }

  navBtn.addEventListener("click", () => {
    navBtnItems.forEach((navrBtnItem) => {
      navrBtnItem.classList.toggle("active");
    });
    nav.classList.toggle("show");
    mask.classList.toggle("show");
    navBtn.classList.toggle("active");
    scrollFixed();
  });
}
