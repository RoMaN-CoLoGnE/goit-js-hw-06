function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector("input");
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

createBtnRef.addEventListener("click", onCreateBtnClick);
destroyBtnRef.addEventListener("click", onDestroyBtnClick);

function onDestroyBtnClick(event) {
  boxesRef.innerHTML = "";
  inputRef.value = 0;
}

function onCreateBtnClick(event) {
  const amount = Number(inputRef.value);
  createBoxes(amount);
}

function createBoxes(amount) {
  let markup = "";
  for (let i = 1; i <= amount; i += 1) {
    markup = markup.concat(
      `<div style="width: ${20 + 10 * i}px; height: ${
        20 + 10 * i
      }px; background-color: ${getRandomHexColor()}" ></div>`
    );
  }
  boxesRef.insertAdjacentHTML("beforeend", markup);
}
