"use strict";
{
  const pageLink = document.querySelectorAll("a[href$='link']");
  const nav = document.getElementById("js-nav");
  const navBtn = document.getElementById("js-nav-btn");
  const navBtnItems = document.querySelectorAll(".nav-btn-item");
  const mask = document.getElementById("js-mask");
  const modal = document.getElementById("js-modal");
  const body = document.body;
  const header = document.getElementById("js-header");

  function closeDrawerMenu() {
    if (nav.classList.contains("show")) {
      body.style.position = "";
      body.style.top = "";
      navBtnItems.forEach((navrBtnItem) => {
        navrBtnItem.classList.remove("active");
      });
      nav.classList.remove("show");
      mask.classList.remove("show");
      navBtn.classList.remove("active");
    }
  }

  function closeModalMenu() {
    if (modal.classList.contains("show")) {
      body.style.position = "";
      body.style.top = "";
      modal.classList.remove("show");
    }
  }

  pageLink.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      closeDrawerMenu();
      closeModalMenu();
      const href = a.getAttribute("href");
      const targetId = document.getElementById(href.replace("#", ""));
      const targetRectTop = targetId.getBoundingClientRect().top;
      const headerHeight = header.offsetHeight;
      const calcElementPosition =
      targetRectTop + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: calcElementPosition,
        left: 0,
        behavior: "smooth",
      });
    });
  });
}
