// Create calculator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Function to perform operation
function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
        default:
            return null;
    }
}

// Variables to store the state
let firstNumber = null;
let operator = null;
let secondNumber = null;
let awaitingSecondNumber = false;
let currentValue = "0";
const MAX_DIGITS = 9;

// Display element
const calcDisplay = document.querySelector("#calc");

// Update display function
function updateDisplay(value) {
    calcDisplay.innerText = value;
}

// Event listeners for operand buttons
document.querySelectorAll(".operand").forEach(button => {
    button.addEventListener("click", () => {
        if (awaitingSecondNumber) {
            currentValue = button.innerText;
            awaitingSecondNumber = false;
        } else {
            if (currentValue === "0") {
                currentValue = button.innerText;
            } else if (currentValue.length < MAX_DIGITS) {
                currentValue += button.innerText;
            }
        }
        updateDisplay(currentValue);
    });
});

// Event listeners for operator buttons
document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        if (firstNumber === null) {
            firstNumber = parseFloat(currentValue);
        } else if (operator) {
            secondNumber = parseFloat(currentValue);
            firstNumber = operate(firstNumber, operator, secondNumber);
            updateDisplay(firstNumber);
        }
        operator = button.innerText;
        awaitingSecondNumber = true;
    });
});

// Event listener for equals button
document.querySelector(".equals").addEventListener("click", () => {
    if (firstNumber !== null && operator !== null && !awaitingSecondNumber) {
        secondNumber = parseFloat(currentValue);
        const result = operate(firstNumber, operator, secondNumber);
        updateDisplay(result);
        firstNumber = result;
        operator = null;
        awaitingSecondNumber = true;
    }
});

// Event listener for clear button
document.querySelector(".clear").addEventListener("click", () => {
    firstNumber = null;
    operator = null;
    secondNumber = null;
    awaitingSecondNumber = false;
    currentValue = "0";
    updateDisplay(currentValue);
});