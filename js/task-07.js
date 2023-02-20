const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

inputRef.addEventListener("input", onInput);
spanRef.style.fontSize = `${inputRef.value}px`;
function onInput(event) {
  spanRef.style.fontSize = `${event.target.value}px`;
}
