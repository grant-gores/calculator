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
let currentValue = "0";  // Initial display value

// Populate display when buttons are pressed
let operandButtons = document.querySelectorAll(".operand");  // Select all operand buttons
let calcDisplay = document.querySelector("#calc");  // Get the display element

// Add event listeners to all operand buttons
operandButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentValue === "0") {
            currentValue = button.innerText;  // Replace with the first clicked number
        } else {
            currentValue += button.innerText;  // Append the clicked number
        }
        calcDisplay.innerText = currentValue;  // Update the display
    });
});

