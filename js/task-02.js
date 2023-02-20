const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const items = ingredients.map((item) => {
  const element = document.createElement("li");
  element.textContent = item;
  element.classList.add("item");
  return element;
});

document.querySelector("#ingredients").append(...items);
