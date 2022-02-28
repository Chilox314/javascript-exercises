const fibonacci = function(num) {
    const num1 = Number(num);
    let firstNum = 1;
    let secondNum = 1;
    let nextNum;
    if (num1 < 1 || typeof num1 != "number") {
        secondNum = "OOPS";
    }
    else if (num1 === 1 || num1 === 2) {
        secondNum = 1;
    }
    else {
        for (let i = 1; i < num1-1; i++) {
            nextNum = firstNum + secondNum;
            firstNum = secondNum;
            secondNum = nextNum;
        }
    }
    return secondNum;
};

// Do not edit below this line
module.exports = fibonacci;
