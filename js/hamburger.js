const nav = document.getElementById("js-nav");
const navBtn = document.getElementById("js-nav-btn");
const navrBtnItems = document.querySelectorAll(".nav-btn-item");
const body = document.body;

function scrollFixed() {
  if (nav.classList.contains("show")) {
    const scrollY = window.pageYOffset;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
  } else {
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY) * -1);
  }
}

navBtn.addEventListener("click", () => {
  navrBtnItems.forEach((navrBtnItem) => {
    navrBtnItem.classList.toggle("active");
  });
  nav.classList.toggle("show");
  body.classList.toggle("mask");
  scrollFixed();
});
