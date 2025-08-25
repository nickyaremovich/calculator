// array of operators for operate function 
const operators = ['+', '-', '*', '/'];
let currentInput = '0';
let previousInput = '';
let operator = null;

// update display function
function updateDisplay() {
    document.querySelector('#display').value = currentInput;
};
// handle numbers
function handleNumber(value) {
    if (currentInput === '0' || operator) {
        currentInput = value;
    } else {
        currentInput += value;
    } 
    operator = null;
    updateDisplay();
};
//handle op
function handleOperator(op) {
    if (operator && previousInput) {
        operate();
    }
    previousInput = currentInput;
    operator = op;
    currentInput= '';
    updateDisplay();
}
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
  updateDisplay();
};

// not sure if I need these?
let firstOperand = 0;
let secondOperand = 0;


//add event listeners to buttons
document.querySelectorAll('.number').forEach(button => {
  button.addEventListener('click', () => handleNumber(button.getAttribute('data-value')));
});

document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => handleOperator(button.getAttribute('data-op')));
});  

document.getElementById('equal').addEventListener('click', operate(operator));