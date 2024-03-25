"use strict";
const tabBtns = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");

tabBtns.forEach((el, indx) => {
  el.addEventListener("click", function () {
    content.forEach((el) => el.classList.add("hide"));
    tabBtns.forEach((el) => el.classList.remove("active"));
    el.classList.add("active");
    content[indx].classList.remove("hide");
  });
});
