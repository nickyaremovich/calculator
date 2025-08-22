// array of operators for operate function 
const operators = ['+', '-', '*', '/'];

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

let firstOperand = 0;
let secondOperand = 0;