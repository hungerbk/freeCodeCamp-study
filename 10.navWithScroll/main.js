// 모바일 링크 리스트 동적 생성
const navBtn = document.querySelector(".nav-button");
const lisnksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navBtn.addEventListener("click", function () {
  const containerHeigt = lisnksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  // 클릭했을 때 현재 높이가 0이면 (리스트가 안보이는 상태)
  if (containerHeigt === 0) {
    // 리스트를 보여줌 (리스트의 높이만큼)
    lisnksContainer.style.height = `${linksHeight}px`;
  } else {
    // 높이가 0이 아니면(리스트가 보이는 상태) 리스트를 안보이게 바꿈
    lisnksContainer.style.height = 0;
  }
});

// set date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
