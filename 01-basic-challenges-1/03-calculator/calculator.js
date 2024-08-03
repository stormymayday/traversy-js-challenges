function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
            // return num1 + num2;
            result = num1 + num2;
            break;
        case "-":
            // return num1 - num2;
            result = num1 - num2;
            break;
        case "*":
            // return num1 * num2;
            result = num1 * num2;
            break;
        case "/":
            // return num1 / num2;
            result = num1 / num2;
            break;
        default:
            // return null;
            throw new Error("Invalid operator");
    }

    return result;
}

module.exports = calculator;
