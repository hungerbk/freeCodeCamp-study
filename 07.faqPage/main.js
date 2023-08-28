// 한 요소를 선택 후, 그 요소의 내부 요소를 선택하여 이벤트를 적용하는 방식

const questions = document.querySelectorAll(".question-item");

questions.forEach((question) => {
  const detailBtn = question.querySelector(".show-detail-btn");
  const detail = question.querySelector(".detail");
  detailBtn.addEventListener("click", function () {
    questions.forEach((item) => {
      if (item.children[2] !== detail && item.children[1] !== detailBtn) {
        item.children[2].classList.remove("show-text");
        item.children[1].classList.remove("show-text");
      }
    });
    detail.classList.toggle("show-text");
    detailBtn.classList.toggle("show-text");
  });
});

// 필요한 요소를 선택하여 이벤트를 지정하는 방식

// const detailBtns = document.querySelectorAll(".show-detail-btn");

// detailBtns.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     const detail = e.currentTarget.parentElement.children[2];
//     detail.classList.toggle("show-text");
//     e.currentTarget.classList.toggle("show-text");
//   });
// });
