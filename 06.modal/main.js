const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".close-modal");

openModalBtn.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

closeModalBtn.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});
