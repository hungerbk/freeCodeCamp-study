const navToggle = document.querySelector(".navButton");
const navList = document.querySelector(".menuNavList");

navToggle.addEventListener("click", function () {
  // if (navList.classList.contains("showItems")) {
  //   navList.classList.remove("showItems");
  // } else {
  //   navList.classList.add("showItems");
  // }
  navList.classList.toggle("showItems");
});
