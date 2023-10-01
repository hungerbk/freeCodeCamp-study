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

// fixed navbar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = this.window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// smooth scroll
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeigt = navbar.getBoundingClientRect().height;
    const containerHeigt = lisnksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeigt;

    if (!fixedNav) {
      position = position - navHeigt;
    }
    // 모바일일 때 링크 리스트가 열려있는 경우 > 이동했을 때 상단 여백이 많기 때문에 필요한 부분
    if (navHeigt > 82) {
      position = position + containerHeigt;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // 모바일에서 링크를 누른 경우 링크 리스트가 닫히게
    lisnksContainer.style.height = 0;
  });
});
