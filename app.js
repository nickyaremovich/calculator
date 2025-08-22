function add (a, b) {
    return a + b
    
};

function subtract (a, b) {
    return a - b;
}


function multiply (a, b) {
    return a * b;
}


function divide (a, b) {
    return a / b;
}

const operators = ['+', '-', '*', '/'];
let firstOperand = 0;
let secondOperand = 0;

function operate (operator, firstOperand, secondOperand) {
    if (!operators.includes(operator)) return 'Invalid operator';

  switch (operator) {
    case '+': return firstOperand + secondOperand;
    case '-': return firstOperand - secondOperand;
    case '*': return firstOperand * secondOperand;
    case '/': return firstOperand / secondOperand;
    default: return 'Error';
  }
};

console.log(operate('+', 5, 55));