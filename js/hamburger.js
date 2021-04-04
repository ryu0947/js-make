"use strict";

{
  const nav = document.getElementById("js-nav");
  const navBtn = document.getElementById("js-nav-btn");
  const navBtnItems = document.querySelectorAll(".nav-btn-item");
  const body = document.body;
  let scrollPos = 0;
  let checked = false;

  function scrollFixed() {
    if (nav.classList.contains("show")) {
      if (body.style.top) {
        const scrollY = body.style.top;
        body.style.position = "fixed";
        body.style.top = `-${scrollY}px`;
        scrollPos = scrollY;
        checked = true;
        return;
      }
      const scrollY = window.pageYOffset;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
    } else {
      if (checked) {
        const scrollY = scrollPos;
        body.style.position = "";
        body.style.top = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
        return;
      }
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
    body.classList.toggle("mask");
    navBtn.classList.toggle("active");
    scrollFixed();
  });
}
