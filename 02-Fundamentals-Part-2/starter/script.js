"use strict";
/*
let hasDriversLicennse = false;
const passTest = true;

if (passTest) {
  hasDriversLicennse = true;
}
if (hasDriversLicennse) console.log("I can drive");

// const interface = "Audio";
// const private = 454;


function logger() {
  console.log("My name is Jonas");
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//function declaration
function calcAge1(brithYear) {
  return 2037 - brithYear;
}

const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (brithYear) {
  return 2037 - brithYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);


//arrow function
const calcAge3 = (brithYear) => 2037 - brithYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (brithYear, firstName) => {
  const age = 2037 - brithYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePices = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePices} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 2));

const calcAge = function (brithYear) {
  return 2037 - brithYear;
};

const yearsUntilRetirement = function (brithYear, firstName) {
  const age = calcAge(brithYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement;
  } else return -1;
  //   return `${firstName} retires in ${retirement}`;
};


// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];

friends[2] = "Jay";
const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, friends];

const calcAge = function (brithYear) {
  return 2037 - brithYear;
};

const years = [1991, 1984, 2008, 2020];

const age1 = calcAge(years[0]);
console.log(age1);

const ages = [age1];
console.log(ages);
*/

const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay");
// friends.unshift("John");
// friends.pop();
// friends.shift();
// console.log(friends.indexOf("Steven"));
// console.log(friends.includes("Steven"));
// console.log(friends.indexOf("Bob"));
// console.log(friends.includes("Bob"));

console.log(friends);

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}
