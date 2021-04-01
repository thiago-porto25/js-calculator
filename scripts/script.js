/*

add a number maximum;

find a way to add a zero before the float number if it is pressed after a operator;

check for bugs if user presses "=" early;

add keyboard support;
*/

const keys = document.querySelector("#calcKeys");
const display = document.querySelector("#calcDisplay p");
const button = Array.from(document.querySelectorAll("button"));

console.log(display.textContent)

keys.addEventListener("click", e => {

    if (e.target.matches("button")) {

        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        key.classList.add("clickedKey");
        key.addEventListener("transitionend", () => key.classList.remove("clickedKey"));

        if (!action) {
            if (displayedNum == "0") {
                display.textContent = keyContent;
            }
            if (displayedNum != "0") {
                display.textContent += keyContent;
            }
        }

        if (action == "add" ||
            action == "subtract" ||
            action == "divide" ||
            action == "multiply") {

            let help = display.textContent;
            let iAdd = help.indexOf("+");
            let iSub = help.indexOf("-");
            let iMul = help.indexOf("*");
            let iDiv = help.indexOf("/");

            display.textContent += " " + keyContent + " ";

            if (help.slice(iAdd, iAdd + 1) == "+" ||
                help.slice(iSub, iSub + 1) == "-" ||
                help.slice(iMul, iMul + 1) == "*" ||
                help.slice(iDiv, iDiv + 1) == "/") {
                inputArray = display.textContent.split(" ");
                operate(inputArray[0], inputArray[1], inputArray[2]);
                display.textContent += " " + keyContent + " ";
            }
        }

        if (action == "decimal") {

            let decimalCheck = display.textContent;
            let iDecimal = decimalCheck.indexOf(".");
            let iAddDec = decimalCheck.indexOf("+");
            let iSubDec = decimalCheck.indexOf("-");
            let iMulDec = decimalCheck.indexOf("*");
            let iDivDec = decimalCheck.indexOf("/");
            let lastDec = decimalCheck.split(".").length - 1;
            console.log(lastDec);

            if (lastDec == 2) {
                return;
            }

            if (decimalCheck.slice(iDecimal, iDecimal + 1) == "." &&
                decimalCheck.slice(iAddDec, iAddDec + 1) == "+" ||
                decimalCheck.slice(iSubDec, iSubDec + 1) == "-" ||
                decimalCheck.slice(iMulDec, iMulDec + 1) == "*" ||
                decimalCheck.slice(iDivDec, iDivDec + 1) == "/") {
                display.textContent += keyContent;
            }

            if (decimalCheck.slice(iDecimal, iDecimal + 1) == ".") {
                return;
            }

            else display.textContent += keyContent;
        }
        if (action == "undo") {
            let test = display.textContent.slice(-2, -1);
            let zeroTest = display.textContent;
            console.log(zeroTest.length)

            if (test == "+" ||
                test == "-" ||
                test == "*" ||
                test == "/") {
                display.textContent = display.textContent.slice(0, -2);
            }
            if (test == " ") {
                display.textContent = display.textContent.slice(0, -2);
            }
            else display.textContent = display.textContent.slice(0, -1);

            if (zeroTest.length == "1") {
                display.textContent = "0";
            }
        }
        if (action == "clear") {
            display.textContent = "0";
        }
        if (action == "calculate") {
            inputArray = display.textContent.split(" ");
            operate(inputArray[0], inputArray[1], inputArray[2]);
        }
    }

})



function add(num1, num2) {
    return parseInt(num1 * 100) / 100 + parseInt(num2 * 100) / 100;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) return "Hey! Do you want to glitch the Matrix?"
    else return num1 / num2;
}

function operate(num1, operator, num2) {
    let result;

    if (operator == "*") {
        console.log(num1);
        result = multiply(num1, num2);
    }

    else if (operator == "/") {
        result = divide(num1, num2);
    }

    else if (operator == "+") {
        result = add(num1, num2);
    }

    else if (operator == "-") {
        result = subtract(num1, num2);
    }
    else return "ERROR";

    display.textContent = Math.round(result * 100) / 100;
}