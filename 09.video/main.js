const btn = document.querySelector(".switch-button");
const video = document.querySelector(".switch");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
  } else {
    btn.classList.remove("slide");
  }
});
