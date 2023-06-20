'use strict';

/*
const bookings = [];

const createBooking = function (flightNum, numPassangers = 1, price = 199) {
  //   numPassangers = numPassangers || 1;
  //   price = price || 199;

  const booking = {
    flightNum: flightNum,
    numPassangers: numPassangers,
    price: price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH200', 2, 800);

const flight = 'LH111';
const jonas = {
  name: 'Jonas',
  passport: 11223344,
};

const checkIn = function (flightNumb, passanger) {
  flightNumb = 'LH999';
  passanger.name = 'Mr ' + passanger.name;

  if (passanger.passport === 11223344) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};
newPassport(jonas);
checkIn(flight, jonas);

console.log(flight);
console.log(jonas);


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
const transformer = function (str, fn) {
  console.log(`Original: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const hight5 = function () {
  console.log('5');
};
document.body.addEventListener('click', hight5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');

const arrGreet = greeting => name => {
  console.log(`${greeting} ${name}`);
};
arrGreet('Hi')('Jonas');

const lufthansa = {
  airline: 'Lufgthansa',
  iataCode: 'LG',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
// console.log(lufthansa);

// lufthansa.book(230, 'Jonas');
// lufthansa.book(230, 'Emily');

const eurowings = { airline: 'Eurowings', iataCode: 'WE', booking: [] };
const book = lufthansa.book;

book.call(eurowings, 23, 'David');
// book.call(lufthansa, 234, 'Johny');

const swis = {
  airline: 'Swiss Air',
  iataCode: 'MM',
  booking: [],
};

// book.call(swis, 88, 'Patryk');

const flightData = [522, 'George'];
// book.call(swis, ...flightData);
// console.log(swis);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swis);

// bookEW(21, 'Jacob');

const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Patryk');

//Event lisners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rade, value) => value + value * rade;
// console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);

// console.log(addVat(100));

const addTaxRate2 = function (rade) {
  return function (value) {
    return value + value * rade;
  };
};
const addVat2 = addTaxRate2(0.23);

console.log(addVat2(100));


Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  displayResults: function () {
    console.log(this.answers);
  },
  registerNewAnswer: function () {
    const promptAnswet = Number(prompt(`${poll.question}\n${poll.options}`));
    if (
      typeof promptAnswet === 'number' &&
      promptAnswet >= 0 &&
      promptAnswet <= 3
    ) {
      poll.answers[promptAnswet] += 1;
    } else {
      console.log('Please number 0 - 3');
    }
    console.log(this);

    this.displayResults();
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const runOnce = function () {
  console.log('Only one');
};

runOnce();

(function () {
  console.log('This wll never run again');
})();
*/

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
