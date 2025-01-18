// Create calculator functions
function add(a, b){
    let result = 0;
    return result = a + b;
};

function subtract(a, b){
    let result = 0;
    return result = a - b;
};

function multiply(a, b){
    let result = 0;
    return result = a * b;
};

function divide(a, b){
    let result = 0;
    return result = a/b;
};

// three variables for an operation
let firstNumber = 0;
let operator = "";
let secondNumber = 0;

function operate(operator, firstNumber, secondNumber){
    if (operator === "+"){
        return add(firstNumber,secondNumber);
    }
    else if(operator === "-"){
        return subtract(firstNumber,secondNumber);
    }
    else if(operator === "*"){
        return multiply(firstNumber,secondNumber);
    }
    else if(operator === "/"){
        return divide(firstNumber,secondNumber);
    }   
    else{
        return "Enter a valid operator ('+', '-', '*', or '/')";
    }
};

// Store the current display value in a variable
let currentValue = "0";
const MAX_DIGITS = 9;

// Add event listeners to all operand buttons
let operandButtons = document.querySelectorAll(".operand");
let calcDisplay = document.querySelector("#calc");

operandButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentValue === "0") {
            currentValue = button.innerText;
        } else if (currentValue.length < MAX_DIGITS) {
            currentValue += button.innerText;
        }
        calcDisplay.innerText = currentValue;
    });
});


// Add event listener to clear button
let clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
    currentValue = "0";
    calcDisplay.innerText = currentValue;
});

