const findTheOldest = function(list) {
    

    let people1 = list;
    let age = [];
    let oldest;
    for (person of people1) {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
        person.age = person.yearOfDeath - person.yearOfBirth;
        age.push(person.age);
    }
    age.sort(function(a, b){return b - a});
    let highestAge = age[0];
    for (person of people1) {
        if (person.age === highestAge) {
            oldest = person;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
