// Get DOM elements
const number1 = document.getElementById("number1");

const number2 = document.getElementById("number2");

const resultSpan = document.getElementById("calculation-result");


function calculate(operation) {
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);

    
    if (isNaN(num1) || isNaN(num2)) {
        resultSpan.textContent = "Please enter valid numbers.";
        return;
    }

    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                resultSpan.textContent = "Cannot divide by zero!";
                return;
            }
            result = num1 / num2;
            break;
    }

    // Display result
    resultSpan.textContent = result;
}


document.getElementById("add").addEventListener("click", () => calculate("add"));

document.getElementById("subtract").addEventListener("click", () => calculate("subtract"));

document.getElementById("multiply").addEventListener("click", () => calculate("multiply"));

document.getElementById("divide").addEventListener("click", () => calculate("divide"));
