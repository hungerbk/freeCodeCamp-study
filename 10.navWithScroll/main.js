const navBtn = document.querySelector(".nav-button");
const lisnksContainer = document.querySelector(".links-container");

navBtn.addEventListener("click", function () {
  lisnksContainer.classList.toggle("show-links");
  nav.classList.toggle("show-links");
});

// set date
const nav = document.getElementById("nav");
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
