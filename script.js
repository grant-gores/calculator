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

function operate(firstNumber, operator, secondNumber){
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
}

