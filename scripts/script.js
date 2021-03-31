/*
1- user inputs a number or a negative sign and a number;

    - when the user presses a button, send that to a <p> in the calcDisplay, the text is aligned left;

2- user inputs a mathematical operator;

    - when the user hits a operatior after that store what was sent to <p> in a variable as a number.
    - when the user hits a operator store the operator in a variable;

3- user inputs another number;

    - when the user presses a button, send that to a <p> in the calcDisplay, the text is aligned left;

4- after this user can input more numbers and operators up to a max or hit the equals sign;
5- after equals sign is hit display the result of the operation;

    - remove the content of <p> and send it the result of operate().



- user can hit clear at any moment and it restarts everything;

- in the input for the num I need a RegEx to only take numbers or a minus sign;

- ter um eventListener para um click nos .keys e adcionar um classe .clickedKey e um eventLister para transitionend
 e voltar ao normal 
*/




function add(num1, num2) {
    return num1 + num2;
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

    return result;
}