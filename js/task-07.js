let input = document.querySelector("input");
let span = document.querySelector("span");

input.addEventListener("input", () => {
    span.style.fontSize = `${input.value}px` 
});