const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(element =>{
  const list = document.createElement("li");
  list.textContent = element;
  list.classList.add("item");
  document.querySelector("#ingredients").append(list);
});


