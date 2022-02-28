const add = function(num1, num2) {
    return (num1 + num2);
};

const subtract = function(num1, num2) {
    return (num1 - num2);
};

const sum = function(array) {
    let newArray = array;
    let sum = 0;
    newArray.forEach(num => { sum += num});
    return sum;
};

const multiply = function(array) {
    let newArray = array;
    let product = 1;
    newArray.forEach(num => product *= num);
    return product;
};

const power = function(base, exponent) {
    return (base**exponent);
};

const factorial = function(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
      result *= i;
    }
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
