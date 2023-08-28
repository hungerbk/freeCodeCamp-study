// document.querySelectorAll()
// addEventListener()
// forEach()
// classList.remove()
// classList.toggle()

// 클릭 이벤트가 발생하면 모든 디테일에서 show 클래스를 지운 후, 클릭한 버튼에 해당하는 디테일만 show를 남겨둠..?

const detailBtns = document.querySelectorAll(".show-detail-btn");

detailBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const detail = e.currentTarget.parentElement.children[2];
    detail.classList.toggle("show-text");
    e.currentTarget.classList.toggle("show-text");
  });
});
