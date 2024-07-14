function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y == 0) {
        alert("Divide by 0 is undefined");
        return;
    } else {
        return x / y;
    }
}

function modulus(x, y) {
    return x % y;
}

function operate(x, y, sign) {
    if (sign == "+") {
        return add(x, y);
    }
    if (sign == "-") {
        return subtract(x, y);
    }
    if (sign == "/") {
        return divide(x, y);
    }
    if (sign == "x") {
        return multiply(x, y);
    }
    if (sign == "%") {
        return modulus(x, y);
    }
}

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const input = document.querySelector("#input");

let num1 = 0;
let num2 = 0;
let operator = '';

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.classList.contains('numbers')) {
            display.textContent = display.textContent + button.textContent;
        } else if (event.target.classList.contains('operators')) {
            if (operator) {
                num2 = Number(display.textContent);
                let result = operate(num1, num2, operator);
                result = parseFloat(result).toFixed(2);
                display.textContent = result;
                num1 = Number(result);
            } else {
                num1 = Number(display.textContent);
            }
            operator = event.target.textContent;
            display.textContent = '';
        } else if (event.target.classList.contains('equals')) {
            num2 = Number(display.textContent);
            let result = operate(num1, num2, operator);
            result = parseFloat(result).toFixed(2);
            display.textContent = result;
            num1 = Number(result);
            num2 = 0;
            operator = '';
        } else if (event.target.classList.contains('allclear')) {
            display.textContent = '';
            num1 = 0;
            num2 = 0;
            operator = '';
        } else if (event.target.classList.contains('clear')) {
            display.textContent = display.textContent.slice(0, -1);
        }
    });
});
