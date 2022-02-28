const leapYears = function(year) {
    let leapYear = "";
    if (year % 100 === 0) {
        leapYear = year % 400 === 0 
    }
    else if (year % 4 === 0) {
        leapYear = true;
    }
    else {
        leapYear = false;
    }
    return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
