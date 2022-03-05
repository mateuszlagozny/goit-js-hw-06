let inputArea = document.querySelector("#name-input");
let output = document.querySelector("#name-output");
inputArea.addEventListener("input", changeInput);

function changeInput(event) {
    inputArea = event.currentTarget.value;
    if (inputArea !== "") {
        output.textContent = event.currentTarget.value;
    } else {
        output.textContent = "Anonymous";    
    }
}

