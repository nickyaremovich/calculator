// array of operators for operate function 
const operators = ['+', '-', '*', '/'];
let currentInput = '0';
let previousInput = '';
let operator = null;
let isNewInput = false;
// update display function
function updateDisplay() {
    document.querySelector('#display').value = currentInput;
};
// handle numbers
function handleNumber(value) {
    if (currentInput === '0' || isNewInput) {
        currentInput = value;
        isNewInput = false;
    } else {
        currentInput += value;
    } 
    updateDisplay();
};
function handleDecimal(value) {
   if (value === '.' && currentInput.includes('.')) return;

  if (currentInput === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }

  updateDisplay();
}

//handle op
function handleOperator(op) {
    if (operator && previousInput && currentInput) {
        operate();
    }
    previousInput = currentInput;
    operator = op;
    isNewInput = true
    currentInput= '';
    updateDisplay();
}
//backspace function
function backspace() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = '0';
  }
  updateDisplay();
}
function operate() {
  
  const firstOperand = parseFloat(previousInput);
  const secondOperand = parseFloat(currentInput);
  let result;

  console.log('First:', firstOperand, 'Second:', secondOperand, 'Operator:', operator);

  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      if (secondOperand === 0) {
        currentInput = "Can't do that!";
        updateDisplay();
        return;
      }
      result = firstOperand / secondOperand;
      break;
    default:
      currentInput = 'Error';
      updateDisplay();
      return;
  }

  console.log('Result:', result);
  currentInput = parseFloat(result.toFixed(3)).toString();
  previousInput = '';
  operator = null;
  updateDisplay();
};

function clear() {
  currentInput = '0';
  previousInput = ''
  operator = null;
  updateDisplay();
}


//add event listeners to buttons
document.querySelectorAll('.number').forEach(button => {
  button.addEventListener('click', () => handleNumber(button.getAttribute('data-value')));
});

document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => handleOperator(button.getAttribute('data-op')));
});  

document.getElementById('equal').addEventListener('click', operate);
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('backspace').addEventListener('click', backspace);
// keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;


  if (!isNaN(key) || key === '.') {
    handleNumber(key);
  }

  if (['+', '-', '*', '/'].includes(key)) {
    handleOperator(key);
  }

  if (key === 'Enter' || key === '=') {
    operate();
  }

 
  if (key === 'Backspace') {
    e.preventDefault(); 
    backspace();
  }


  if (key === 'Escape') {
    clear();
  }
});
