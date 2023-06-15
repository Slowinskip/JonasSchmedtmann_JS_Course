'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = [`mon`, `thu`, `wed`, `thu`, `fri`, `sun`, `sat`];

const openingHours = {
  [weekdays[2]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours,
  orderDelivery: function ({ starterIndex, mainIndex, time, addres }) {
    console.log(starterIndex, mainIndex, time, addres);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(`Main ${mainIng} and other ${otherIng}`);
  },
};

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);
/*
for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(open);
}

console.log(restaurant.order?.(0, 1) ?? 'not exist');

const users = [{ name: 'Jonas' }];
console.log(users[0]?.name ?? 'User array empty');



const rest1 = {
  name: `Capri`,
  numGests: 0,
};

const rest2 = {
  name: `Sap`,
  owner: `Giovani`,
};

// rest1.numGests = rest1.numGests || 10;
// rest2.numGests = rest2.numGests || 10;

// rest1.numGests ||= 10;
// rest2.numGests ||= 10;

rest1.numGests ??= 10;
rest2.numGests ??= 10;

// rest1.owner = rest1.owner && 'No one';
// rest2.owner = rest2.owner && 'No one';
rest1.owner &&= 'No one';
rest2.owner &&= 'No one';

console.log(rest1);
console.log(rest2);

restaurant.orderDelivery({
  time: `22:30`,
  addres: `WWa`,
  mainIndex: 2,
  starterIndex: 2,
});


const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [q, w, e] = arr;
console.log(q, w, e);
console.log(arr);

let [main, , seccond] = restaurant.categories;

// const temp = main;
// main = seccond;
// seccond = temp;

[main, seccond] = [seccond, main];

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , x] = nested;
// console.log(i, x);

const [g, , [n, m]] = nested;
console.log(g, n, m);

const [p = 1, k = 1, r = 1] = [8, 9];
console.log(p, k, r);
const { name, openingHours, categories } = restaurant;

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = `Jonas`;
const letters = [...str, `S`];
console.log(letters);

// const ingredients = [
//   prompt(`Lets make pasta, 1?`),
//   prompt(`Lets make pasta, 2?`),
//   prompt(`Lets make pasta, 3?`),
// ];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

const arr = [1, 2, ...[3, 4]];
// console.log(arr);

const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b);
// console.log(others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('olives', `mushrooms`, 'cheese');
restaurant.orderPizza('olives');

console.log(`Jonas` || 3);


console.log(1 && 2 && 3);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mus', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('muss');

// restaurant.numGuests = 5;
const guest = restaurant.numGuests || 20;
console.log(guest);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
// console.log(players1, players2);
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const players1Final = [...players1, `Thiago`, `Coutingo`, `Perisic`];
// console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

function printGoals(...players) {
  console.log(`${players.length} goals were scored`);
}
printGoals(...game.scored);

console.log(
  team1 < team2 ? `Team 1 bigest chance to win` : `Team 2 bigest chance to win`
);


// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menu);

// // for (const item of menu.entries()) console.log(item);

// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
const properties = Object.keys(openingHours);
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
// console.log(openStr);

const values = Object.values(openingHours);
// console.log(values);

const entObj = Object.entries(openingHours);
console.log(entObj);

for (const [key, { open, close }] of entObj)
  console.log(`On ${key} we open at ${open} and close at ${close}`);

Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [key, value] of game.scored.entries()) {
  console.log(`Gol ${key + 1} Player: ${value}`);
}

let av = 0;

for (const value of Object.values(game.odds)) {
  av += value;
}
console.log(av / Object.entries(game.odds).length);

const {
  team1,
  team2,
  odds: { team1: team1Od, x, team2: team2Od },
} = game;

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

const ordersSet = new Set(['Pasta', 'Pizza', `Pizza`, `Risotto`, `Pasta`]);
// console.log(ordersSet);

const rest = new Map();
rest.set('name', 'Classico');
rest.set(1, 'London');

const x = rest
  .set('categories', ['Focaccia', 'Bruschetta', 'Garlic Bread'])
  .set('open', 11)
  .set('close', 23);
// console.log(rest.get('name'));

const question = new Map([
  ['question', 'What is the best?'],
  [1, 'c'],
  [2, 'Java'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

// console.log(question);
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answet = Number(prompt('Your answer'));

console.log(question.get(question.get('correct') === answet));
*/
