let num1 = '';
let num2 = '';
let operator = '';
let result = '';

const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("ac");

function updateDisplay(value) {
    display.textContent = value;
}

function clear() {
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    updateDisplay('0');
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(operator === '') {
            num1 += button.textContent;
            updateDisplay(num1);
        } else {
            num2 += button.textContent;
            updateDisplay(num1 + ' ' + operator + ' ' + num2)
        }
    })
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === '=') {
            if(num1 && operator && num2) {
                result = operate(Number(num1), Number(num2), operator);
                updateDisplay(result);
                num1 = result;
                operator = '';
                num2 = '';
            }
        } else {
            if(num1 && !num2) {
                operator = button.textContent;
                updateDisplay(num1 + ' ' + operator);
            }
        }
    })
});

clearButton.addEventListener('click', clear);

function add(arg1, arg2) {
    return arg1 + arg2;
}

function subtract(arg1, arg2) {
    return arg1 - arg2;
}

function multiply(arg1, arg2) {
    return arg1 * arg2;
}

function divide(arg1, arg2) {
    return arg2 === 0 ? 'Error' : arg1 / arg2;
}

function operate(arg1, arg2, arg3) {
    if(arg3 === '+') return add(arg1, arg2);
    if(arg3 === '-') return subtract(arg1, arg2);
    if(arg3 === '*') return multiply(arg1, arg2);
    if(arg3 === '/') return divide(arg1, arg2);
}

clear();
