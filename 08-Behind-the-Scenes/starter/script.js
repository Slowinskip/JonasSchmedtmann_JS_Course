'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  console.log(firstName);

  function printAge() {
    let output = `${firstName} ,you are ${age}, born is ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      let millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = `New output`;
    }
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// console.log(me, job, year);

var me = `Jonas`;
let job = `teacher`;
const year = 1991;

console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => {
  a + b;
};


// console.log(this);

const calcAge = function (year) {
  console.log(2037 - year);
  console.log(this);
};
// calcAge(1991);

const calcAge1 = year => {
  console.log(2037 - year);
  console.log(this);
};
// calcAge1(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

const jonas = {
  firstName: `Jonas`,
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    const self = this;
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 3);

const addArrow = (a, b) => {
  //   console.log(arguments);

  a + b;
};
addArrow(2, 3);


let lastName = `Williams`;
let oldLastName = lastName;
lastName = `Davis`;
console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};
const marriedJedissa = jessica;
marriedJedissa.lastName = `Davis`;

console.log(jessica);
console.log(marriedJedissa);
*/

const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
  family: [`Alice`, `Bob`],
};

const jessicaCoppy = Object.assign({}, jessica);
jessicaCoppy.lastName = `Davis`;
jessicaCoppy.family.push(`Adam`);
console.log(jessica);
console.log(jessicaCoppy);
