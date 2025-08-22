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

const operator = ['+', '-', '*', '/'];
let firstOperand = 0;
let secondOperand = 0;

function operate (operator, firstOperand, secondOperand) {
    if (!operators.includes(operator)) return 'Invalid operator';

  switch (operator) {
    case '+': return operand1 + operand2;
    case '-': return operand1 - operand2;
    case '*': return operand1 * operand2;
    case '/': return operand1 / operand2;
    default: return 'Error';
  }
};
