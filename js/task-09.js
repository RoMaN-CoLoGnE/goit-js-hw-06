function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

buttonRef.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  spanRef.textContent = color;
}
