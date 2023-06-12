// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const maxTemp = [17, 21, 23];
const maxTemp2 = [12, 5, -5, 0, 4];

const printForecast = function (tempArr) {
  let string = "";

  for (let i = 0; i < tempArr.length; i++) {
    const data = ` ${tempArr[i]} in ${i + 1} days ...`;
    string += data;
  }
  return console.log("..." + string);
};

printForecast(maxTemp);
printForecast(maxTemp2);
