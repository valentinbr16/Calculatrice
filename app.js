let calculatrice = document.querySelector("#calculatrice");

let screen = document.querySelector("#screen");


// calculatrice.addEventListener.

function tapOnButton(event) {
    if(event.target.nodeName === "BUTTON") {
        if(event.target.innerHTML === "=") {
            screen.textContent = eval(screen.textContent);
        }
        else if(event.target.innerHTML === "AC") {
            screen.textContent =  ""
        }
        else if(event.target.innerHTML === "x") {
            screen.textContent += "*";
        }
        else if(event.target.innerHTML === "÷") {
            screen.textContent += "/";
        }
        else {
        screen.textContent += event.target.textContent;
        }
    }
}

calculatrice.addEventListener("click", tapOnButton);