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
*/

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
console.log(lufthansa);

lufthansa.book(230, 'Jonas');
lufthansa.book(230, 'Emily');

const eurowings = { airline: 'Eurowings', iataCode: 'WE', booking: [] };
const book = lufthansa.book;

book.call(eurowings, 23, 'David');
book.call(lufthansa, 234, 'Johny');

const swis = {
  airline: 'Swiss Air',
  iataCode: 'MM',
  booking: [],
};

book.call(swis, 88, 'Patryk');

const flightData = [522, 'George'];
book.call(swis, ...flightData);
console.log(swis);
