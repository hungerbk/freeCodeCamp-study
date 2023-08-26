let counterButton = document.querySelectorAll(".counterButton");
let counter = document.querySelector(".number");
let number = Number(document.querySelector(".number").textContent);

const handleCounter = (e) => {
  if (e.currentTarget.textContent === "DECREASE") {
    --number;
  } else if (e.currentTarget.textContent === "INCREASE") {
    ++number;
  } else {
    number = 0;
  }

  counter.textContent = number;

  if (number < 0) {
    counter.classList.remove("green");
    counter.classList.add("red");
  } else if (number > 0) {
    counter.classList.remove("red");
    counter.classList.add("green");
  } else {
    counter.classList.remove("red");
    counter.classList.remove("green");
  }
};

counterButton.forEach((el) => el.addEventListener("click", handleCounter));
