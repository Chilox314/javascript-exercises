const ftoc = function(fahrenheit) {
    let result = (fahrenheit - 32) * (5/9);
    let roundedResult = Math.round(result * 10) / 10;
    return roundedResult;
};

const ctof = function(celsius) {
    let result = celsius * 1.8 + 32;
    let roundedResult = Math.round(result * 10) / 10;
    return roundedResult;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
