const btn = document.querySelector(".switch-button");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    // 비디오를 제어해야 하기 때문에 이전처럼 toggle()을 사용하는 것이 아니라 if문 사용
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});
