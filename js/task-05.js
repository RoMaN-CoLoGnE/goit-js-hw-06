const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInput);

function onInput(event) {
  spanRef.textContent = event.target.value ? event.target.value : "Anonymous";
}
