// array of operators for operate function 
const operators = ['+', '-', '*', '/'];
let currentInput = '0';
let previousInput = '';
let operator = null;

function operate (operator) {
    if (!operators.includes(operator)) return 'Invalid operator';


  switch (operator) {
    case '+': return firstOperand + secondOperand;
    case '-': return firstOperand - secondOperand;
    case '*': return firstOperand * secondOperand;
    case '/': 
        if (secondOperand === 0) return 'Can\t do that!';
        return firstOperand / secondOperand;
    default: return 'Error';
  }
};


// not sure if I need these?
let firstOperand = 0;
let secondOperand = 0;


//add event listeners to buttons
document.querySelectorAll('.number').forEach(button => {
  button.addEventListener('click', () =>

document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () =>