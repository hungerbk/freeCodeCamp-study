const navBtn = document.querySelector(".nav-button");
const lisnksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const nav = document.getElementById("nav");

navBtn.addEventListener("click", function () {
  // lisnksContainer.classList.toggle("show-links");
  nav.classList.toggle("show-links");
  const containerHeigt = lisnksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeigt === 0) {
    lisnksContainer.style.height = `${linksHeight}px`;
  } else {
    lisnksContainer.style.height = 0;
  }
});

// set date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
