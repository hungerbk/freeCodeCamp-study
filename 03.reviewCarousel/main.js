const reviewList = [
  {
    id: 1,
    name: "짱난",
    job: "유치원생 탐정",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla culpa nam, ad nesciunt quo maiores, sint dolor id tempora dolorem minus! Quia, molestias nobis accusamus vel officiis sapiente eos.",
    profileImage: "./profile1.jpeg",
  },
  {
    id: 2,
    name: "흰둥이",
    job: "강아지 유치원생",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla culpa nam, ad nesciunt quo maiores, sint dolor id tempora dolorem minus! Quia, molestias nobis accusamus vel officiis sapiente eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla culpa nam, ad nesciunt quo maiores, sint dolor id tempora dolorem minus! Quia, molestias nobis accusamus vel officiis sapiente eos.",
    profileImage: "./profile2.jpeg",
  },
  {
    id: 3,
    name: "짱아",
    job: "고등학생",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla culpa nam, ad nesciunt quo maiores, sint dolor id tempora dolorem minus! Quia, molestias nobis accusamus vel officiis sapiente eos.",
    profileImage: "./profile3.jpeg",
  },
  {
    id: 4,
    name: "신형만",
    job: "로봇",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla culpa nam, ad nesciunt quo maiores, sint dolor id tempora dolorem minus! Quia, molestias nobis accusamus vel officiis sapiente eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla culpa nam, ad nesciunt quo maiores, sint dolor id tempora dolorem minus! Quia, molestias nobis accusamus vel officiis sapiente eos.",
    profileImage: "./profile4.jpeg",
  },
  {
    id: 5,
    name: "봉미선",
    job: "짱쎈신부",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla culpa nam, ad nesciunt quo maiores, sint dolor id tempora dolorem minus! Quia, molestias nobis accusamus vel officiis sapiente eos.",
    profileImage: "./profile5.png",
  },
];

const profileImage = document.querySelector(".profileImage");
const name = document.querySelector(".name");
const job = document.querySelector(".job");
const review = document.querySelector(".review");

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const randomButton = document.querySelector(".randomButton");

let currentReview = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviewList[currentReview];
  profileImage.src = item.profileImage;
  name.textContent = item.name;
  job.textContent = item.job;
  review.textContent = item.review;
}

nextButton.addEventListener("click", function () {
  currentReview++;
  if (currentReview > reviewList.length - 1) {
    currentReview = 0;
  }
  showPerson();
});

prevButton.addEventListener("click", function () {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviewList.length - 1;
  }
  showPerson();
});
