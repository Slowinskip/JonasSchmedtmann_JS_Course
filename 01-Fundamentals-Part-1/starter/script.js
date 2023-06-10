//Values and Variables
/*
let js = "amazing";
console.log(40 + 8 - 2);

let firstName = "Patryk";
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

//Data types primitive
let number = 22;
let string = "Jonas";
let boolean = true;
let undefined; //Jeśli zmienna nie posiada przypisanej wartości
null;

console.log(typeof number);

//Math operators
const now = 2037;
const jonasAge = now - 1991;
const saraAge = now - 2018;

// console.log(jonasAge, saraAge);
// console.log(jonasAge * 2, jonasAge / 2);

// const firstName = "Jonas";
// const lastName = "Smit";
// console.log(firstName + " " + lastName);

// //Assignment operators
// let x = 10 + 5;
// x += 10; // x = x + 10
// x *= 4; // x = x * 4
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

// //Comperison operators
// console.log(jonasAge > saraAge); // >, <, <=, >=
// console.log(saraAge >= 23);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (jonasAge + saraAge) / 2;
console.log(averageAge);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2023;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log("String with \n Multiple \n lines");
console.log(`String with
multiple
lines`);


const age = 15;

if (age >= 18) {
  console.log(`Sara can start driving licence`);
} else {
  const yearLeft = 18 - age;
  console.log(`Sara is too young. Wait ${yearLeft} years`);
}

const birthYear = 1998;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old"); // + automatycznie konwetruje do stringa

console.log("23" - "10" - 3); // - skonwertuje to Number i wykona działanie
console.log("23" / "2"); // like +
console.log("23" * "2"); // like +

let n = "1" + 1;
n = n - 1;
console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean(NaN));

// console.log(Boolean("Jonas"));
// console.log(Boolean({}));

// const money = 1;
// if (money) {
//   console.log("Dont spend it all");
// } else {
//   console.log("Get job!");
// }

let height;
// console.log(height);
if (height) {
  console.log("Its ok");
} else {
  console.log("Height is undefined");
}

const age = 18;
if (age === 18) console.log("18");
console.log(18 === 18);
console.log("18" === 18);
console.log("18" == 18);
console.log(18 == 18);
*/

const favourite = Number(prompt("Whats your favourite number?"));
console.log(favourite);

if (favourite === 23) {
  console.log("23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23, 7 or 9");
}

if (favourite !== 23) {
  console.log("Why not a 23?");
}
