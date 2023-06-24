'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let str = '01234567';

//Slice
// console.log(arr.slice(1, 2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

//Splice
// console.log(arr.splice(1, 2));
// console.log(arr);

//Reverse
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
let arr2 = ['j', 'i', 'h', 'g'];
// console.log(arr2.reverse());

//Concat
const letters = arr.concat(arr2);
// console.log(letters);

//Join
console.log(letters.join('-'));


const arr = [23, 11, 64, 99];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.splice(-1)[0]);
console.log(arr.at(0));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   console.log(i, movement);
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// for (let i = 0; i < movements.length; i++) {
//   if (movements[i] > 0) {
//     console.log(`You deposited ${movements[i]}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movements[i])}`);
//   }
// }

movements.forEach(function (movement, index) {
  console.log(index);
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'PLN', 'EUR', 'USD']);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
  console.log(map);

});
*/

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const dispayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}$</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
dispayMovements(account1.movements);

//Challenge

const dataJulia = [3, 5, 2, 12, 7];
const dataKate = [4, 1, 15, 8, 3];

// const deleteCat = dataJulia.splice(1);
// console.log(deleteCat);

// dataJulia.forEach(function (age, i) {
//   const adult = age > 3 ? 'adult' : 'puppy';
//   if (adult === 'adult') {
//     console.log(`Dog number ${i + 1} is an ${adult}, and is ${age} years old`);
//   } else {
//     console.log(`Dog number ${i + 1} is still a ${adult}`);
//   }
// });

const checkDog = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach(function (age, i) {
    const adult = age >= 3 ? 'adult' : 'puppy';
    if (adult === 'adult') {
      console.log(
        `Dog number ${i + 1} is an ${adult}, and is ${age} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a ${adult}`);
    }
  });
};
checkDog(dataJulia, dataKate);
