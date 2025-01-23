// Create calculator functions
function add(a, b) {
    const result = a + b;
    // Check if result has decimals and round to 5 places if necessary
    if (result % 1 !== 0) {
        return Number(result.toFixed(5)); // Return with 5 decimal places
    } else {
        return result; // Return as an integer if no decimals
    }
}

function subtract(a, b) {
    const result = a - b;
    // Check if result has decimals and round to 5 places if necessary
    if (result % 1 !== 0) {
        return Number(result.toFixed(5)); // Return with 5 decimal places
    } else {
        return result; // Return as an integer if no decimals
    }
}

function multiply(a, b) {
    const result = a * b;
    // Check if result has decimals and round to 5 places if necessary
    if (result % 1 !== 0) {
        return Number(result.toFixed(5)); // Return with 5 decimal places
    } else {
        return result; // Return as an integer if no decimals
    }
}

function divide(a, b) {
    if (b === 0) {
        return "silly";
    }
    const result = a / b;
    // Check if result has decimals and round to 5 places if necessary
    if (result % 1 !== 0) {
        return Number(result.toFixed(5)); // Return with 5 decimal places
    } else {
        return result; // Return as an integer if no decimals
    }
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
let operatorPressedLast = false; // New flag to track consecutive operator presses

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
        operatorPressedLast = false; // Reset operator press flag
    });
});

// Event listeners for operator buttons
document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        if (operatorPressedLast) {
            // Update the operator if pressed consecutively
            operator = button.innerText;
            return;
        }

        if (firstNumber === null) {
            firstNumber = parseFloat(currentValue);
        } else if (operator) {
            secondNumber = parseFloat(currentValue);
            firstNumber = operate(firstNumber, operator, secondNumber);
            updateDisplay(firstNumber);
        }
        operator = button.innerText;
        awaitingSecondNumber = true;
        operatorPressedLast = true; // Set operator press flag
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
        operatorPressedLast = false; // Reset operator press flag
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
    operatorPressedLast = false; // Reset operator press flag
});

// Event listener for decimal button
document.querySelector(".decimal").addEventListener("click", () => {
    alert("Functionality for this button does not exist yet.");
});

// Event listener for sign button
document.querySelector(".sign").addEventListener("click", () => {
    alert("Functionality for this button does not exist yet.");
});

// Event listener for percent button
document.querySelector(".percent").addEventListener("click", () => {
    alert("Functionality for this button does not exist yet.");
});