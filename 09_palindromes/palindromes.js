const palindromes = function (word) {
    const editWord = word.replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    const array = editWord.split("");
    const reversedArray = array.reverse();
    const reversedWord = reversedArray.join("");
    return (reversedWord === editWord);
};

// Do not edit below this line
module.exports = palindromes;
