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
*/

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
