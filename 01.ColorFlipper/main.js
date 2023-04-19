const flipperButton = document.getElementById("colorFlipper");

const changeColor = () => {
  const colorList = ["red", "orange", "blue", "aqua", "white", "yellow"];
  let changedColor = colorList[Math.floor(Math.random() * colorList.length)];
  let currentColor = document.body.style.backgroundColor;
  document.body.style.backgroundColor = currentColor === changedColor ? changeColor() : changedColor;
  document.querySelector(".changedColorName").textContent = document.body.style.backgroundColor;
};

flipperButton.addEventListener("click", changeColor);
