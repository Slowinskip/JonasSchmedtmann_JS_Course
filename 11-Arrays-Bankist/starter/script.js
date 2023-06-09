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

const eurToUsd = 1.1;

const movementsUSD = account1.movements.map(mov => mov * eurToUsd);

console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of account1.movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

const movfenetsDescription = account1.movements.map((mov, i, arr) => {
  if (mov > 0) {
    console.log(`${i + 1} You deposited ${mov}`);
  } else {
    console.log(`${i + 1} You withdrew ${Math.abs(mov)}`);
  }
});
console.log(deposits);

const depositFor = [];
for (const mov of account1.movements) {
  if (mov > 0) depositFor.push(mov);
}
console.log(depositFor);


const dogAge = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (dogArr) {
  const transformateDogAge = dogArr.map(age => {
    if (age <= 2) {
      return age * 2;
    } else if (age > 2) {
      return 16 + age * 4;
    }
  });
  console.log(transformateDogAge);
  const adult = transformateDogAge.filter(age => age >= 18);
  console.log(adult);

  const averageAge = adult.reduce((acc, sur) => (acc += sur)) / adult.length;

  console.log(averageAge);
};
console.log(calcAverageHumanAge(dogAge));

const eurToUsd = 1.1;

const totalDepositsUSD = account1.movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, sur) => (acc += sur));
console.log(totalDepositsUSD);

const dogAge = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (dogArr) {
  const transformateDogAge = dogArr
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, sur, i, arr) => acc + sur / arr.length, 0);
  return transformateDogAge;
};
console.log(calcAverageHumanAge(dogAge));
//
const deposits = account1.movements.filter(mov => mov > 0);
const withdraw = account1.movements.filter(mov => mov < 0);
const balance = account1.movements.reduce((acc, cur) => (acc += cur), 0);
const max = account1.movements.reduce((acc, cur) => {
  if (cur > acc) acc = cur;
  return acc;
});
const min = account1.movements.reduce((acc, cur) => {
  if (cur < acc) acc = cur;
  return acc;
}, account1.movements[0]);
//
// console.log(account1.movements.includes(-130));

const anyDeposits = account1.movements.some(mov => mov > 1000);
console.log(anyDeposits);

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const balance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, sur) => (acc += sur), 0);
console.log(balance);

const balance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, sur) => (acc += sur), 0);
console.log(balance2);

const owners = ['Jonas', 'Zac', 'Adam', 'Marta'];
console.log(owners.sort());

const number = [100, 5, 3, 20];
console.log(number.sort((a, b) => a - b));


// const x = new Array(0, 1, 2, 3, 4, 5);
// // console.log(x.splice(0, 3));

// // console.log(Array.from({ length: 7 }, () => 1));

// // const z = Array.from(
// //   { length: 7 },
// //   (curr, i) => i + Math.trunc(Math.random() * 100) + 1
// // );
// // console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movenentsUI = Array.from(
//     document.querySelectorAll('.movements__value')
//   );
//   const movValue = movenentsUI.map(el =>
//     Number(el.textContent.replace('$', ''))
//   );
//   console.log(movValue);
// });

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

const dispayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movSort = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movSort.forEach(function (mov, i) {
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

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, sur) => (acc += sur));
  labelSumIn.textContent = `${incomes}$`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, sur) => (acc += sur));
  labelSumOut.textContent = `${Math.abs(out)}$`;

  const insert = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, sur) => (acc += sur));
  labelSumInterest.textContent = `${insert}$`;
};

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUserName(accounts);

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => (acc += cur), 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

let currentAccount;

const updateUI = function (acc) {
  dispayMovements(acc.movements);
  calcDisplaySummary(acc);
  calcPrintBalance(acc);
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const login = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);

  const currentAccount = accounts.find(acc => acc.username === login);

  if (currentAccount?.pin === pin) {
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome back ${currentAccount.owner}`;
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
    console.log(currentAccount);

    btnTransfer.addEventListener('click', function (e) {
      e.preventDefault();
      const amount = Number(inputTransferAmount.value);
      const receiverAcc = accounts.find(
        acc => acc.username === inputTransferTo.value
      );
      inputTransferAmount.value = inputTransferTo.value = '';

      if (
        amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username
      ) {
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
        updateUI(currentAccount);
      }
    });

    btnLoan.addEventListener('click', function (e) {
      e.preventDefault();
      const amount = Number(inputLoanAmount.value);
      if (
        amount > 0 &&
        currentAccount.movements.some(mov => mov >= amount * 0.1)
      ) {
        currentAccount.movements.push(amount);
        updateUI(currentAccount);
        inputLoanAmount.value = '';
      }
    });

    btnClose.addEventListener('click', function (e) {
      e.preventDefault();

      if (
        currentAccount.username === inputCloseUsername.value &&
        currentAccount.pin === Number(inputClosePin.value)
      ) {
        const index = accounts.findIndex(
          acc => acc.username === currentAccount.username
        );
        accounts.splice(index, 1);
        containerApp.style.opacity = 0;
        labelWelcome.textContent = `Log in to get started`;
        inputCloseUsername.value = inputClosePin.value = '';
      }
    });

    let sorted = false;

    btnSort.addEventListener('click', function (e) {
      e.preventDefault();
      dispayMovements(currentAccount.movements, !sorted);
      sorted = !sorted;
    });
  }
});

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and 
add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: 
recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have 
multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all 
owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat 
too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order 
(keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). 
Basically, the current portion should be between 90% and 110% of the recommended portion.
GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// 1
const recommendedFood = dogs.forEach(function (dog) {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// 2
const saraDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  saraDog.curFood > saraDog.recommendedFood
    ? 'Sara dog eats to more'
    : 'Sara dog eats to less'
);

// 3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();

//4
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat to much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat to much!`);

//5
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

//6
// current > (recommended * 0.90) && current < (recommended * 1.10)
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkEatingOkay));

//7
console.log(dogs.filter(checkEatingOkay));

//8
const sortDogs = dogs
  .slice('')
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortDogs);
