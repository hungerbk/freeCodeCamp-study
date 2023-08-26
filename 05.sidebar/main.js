const sidebarToggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector("aside");
const closeBtn = document.querySelector(".close-button");

sidebarToggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
