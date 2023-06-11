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

const jonasArray = [
  "Jonas",
  "Schmedtman",
  2037 - 1991,
  "teacher",
  ["Michal", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michal", "Peter", "Steven"],
};

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);

const interested = prompt("What do you want to know about Jonas?");
console.log(jonas[interested]);

if (jonas[interested]) {
  console.log(jonas[interested]);
} else {
  console.log(`${interested} are wrong request!`);
}

jonas.location = "Portugal";
jonas["twitter"] = "@twitter";

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michal", "Peter", "Steven"],
};

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friends is called ${jonas.friends[0]}`
);

console.log(jonas);


const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michal", "Peter", "Steven"],
  hasDriversLicence: false,
  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he ${
      this.hasDriversLicence
        ? `has a driver's licence`
        : `dont hava a driver's licence`
    }`;
  },
};
// console.log(jonas.calcAge());

// console.log(jonas.age);

// console.log(
//   `${jonas.firstName} is a ${jonas.age}-year old teacher, and he ${
//     jonas.hasDriversLicence
//       ? `has a driver's licence`
//       : `dont hava a driver's licence`
//   }`
// );
console.log(jonas.getSummary());


for (let rep = 1; rep <= 10; rep++) {
  console.log(`Repetition ${rep}`);
}


const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michal", "Peter", "Steven"],
};


const jonasArray = [
  "Jonas",
  "Schmedtman",
  2037 - 1991,
  "teacher",
  ["Michal", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  // console.log(jonasArray[i], typeof jonasArray[i]);
  types.push(typeof jonasArray[i]);
  // types[i] = typeof jonasArray[i];
}

console.log(types);


const years = [1991, 2007, 1960, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
// console.log(ages);

const jonasArray = [
  "Jonas",
  "Schmedtman",
  2037 - 1991,
  "teacher",
  ["Michal", "Peter", "Steven"],
];

const types = [];

console.log("==Continue==");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
  // types.push(typeof jonasArray[i]);
  // types[i] = typeof jonasArray[i];
}

console.log("==Brake==");

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
  // types.push(typeof jonasArray[i]);
  // types[i] = typeof jonasArray[i];
}


const jonas = [
  "Jonas",
  "Schmedtman",
  2037 - 1991,
  "teacher",
  ["Michal", "Peter", "Steven"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}


for (let expression = 1; expression <= 3; expression++) {
  console.log(`--Startking Exercise ${expression}--`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Repetition ${rep}`);
  }
}
*/

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Repetition ${rep}`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is abot to end..`);
}
