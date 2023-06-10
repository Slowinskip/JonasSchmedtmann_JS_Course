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
*/

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
