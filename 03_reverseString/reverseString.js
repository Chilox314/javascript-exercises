const reverseString = function(input) {
    const array = input.split("");
    const reversedArray = array.reverse();
    const reversedString = reversedArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
