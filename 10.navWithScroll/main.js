const navBtn = document.querySelector(".nav-button");
const lisnksContainer = document.querySelector(".links-container");
const nav = document.getElementById("nav");

navBtn.addEventListener("click", function () {
  lisnksContainer.classList.toggle("show-links");
  nav.classList.toggle("show-links");
});
