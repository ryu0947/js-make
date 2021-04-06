"use strict";
{
  const loading = document.getElementById("js-loading");

  window.addEventListener("load", () => {
    function loadingOpacity() {
      loading.style.opacity = 0;
    }

    function loadingDisplay() {
      loading.style.display = "none";
    }

    setTimeout(loadingOpacity, 1000);
    setTimeout(loadingDisplay, 1300);
  });
}
