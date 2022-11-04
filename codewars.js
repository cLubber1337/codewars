"use strict";
// Task №1. String repeat
/*
function repeatStr(n, s) {
  let repeatedString = "";
  while (n > 0) {
    repeatedString += s;
    n--;
  }
  return repeatedString;
}
console.log(repeatStr(5, "ha"));


function repeatStr(n, s) {
  return new Array(n + 1).join(s);
}
console.log(repeatStr(5, "L"));
*/
/*
function repeatStr(n, s) {
  return s.repeat(n);
}
console.log(repeatStr(5, "S"));
*/

// Task №2. Grasshopper - Personalized Message
/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
Use conditionals to return the proper message:
case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/
/*
function  (name, owner) {
  if (name === owner) {
    return "Hello boss"
  }
    return "Hello guest"
}
*/

//Task №3 Even or Odd.Создайте функцию, которая принимает целое число в качестве аргумента и
//возвращает "Even" для четных чисел или "Odd" для нечетных чисел.
//РЕШЕНИЕ:
/*function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
*/
/* Task 4 Count of positives / sum of negatives.
Дан массив целых чисел.
Возвращает массив, где первый элемент — это количество положительных чисел, а второй элемент — сумма отрицательных чисел
0 не является ни положительным, ни отрицательным.
Если вход представляет собой пустой массив или имеет значение null, верните пустой массив.
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].*/
/*
function countPositivesSumNegatives(input) {
  let positive = 0;
  let negative = 0;
  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach((num) => (num > 0 ? positive++ : (negative += num)));
  }
  return [positive, negative];
}
countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
*/
/*
Вы получаете массив чисел, возвращаете сумму всех положительных.
Пример [1,-4,7,12] => 1 + 7 + 12 = 20
Примечание: если суммировать нечего, сумма по умолчанию равна 0
*/
/*
function positiveSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[1] >= 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));
*/

//Task.  Type of sum

//function betterThanAverage(classPoints, yourPoints) {}

//console.log([100, 40, 34, 57, 29, 72, 57, 88], 75);
/*
function perebor(a) {
  a = a.reduce(function (sum, elem) {
    return sum + elem;
  }, -3);
  return a;
}
console.log(perebor([1, 1, 1, 5]));

let a = [1, 2, 3, 4, 7];
console.log(a.length);
*/
/*
let a = [1, 2, 5, 4, 3,];

let max = a[0];
for (let i = 0; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i];
  }
}
//console.log(max);

let c = a.reduce(function (prev, item) {
  if (prev < item) {
    return item;
  } else {
    return prev;
  }
},);
console.log(c);
*/

//Counting sheep. True is a sheep.
/*
function countSheeps(arrayOfSheep) {
  let sum = 0;
  arrayOfSheep.reduce((previousValue, currentValue) => {
    if (currentValue === true) {
      return (sum += currentValue);
    } else if (currentValue === null || currentValue == undefined) {
      return previousValue;
    }
  }, 0);
  return sum;
}
console.log(countSheeps([true, true, true, false, false, false, true, true]));
*/
/*

function getCount(str) {
  const VOWEL = "aeiou";
  let vowelsCount = 0;
  str.split("").forEach((item) => {
    if (VOWEL.indexOf(item) !== -1) {
      vowelsCount++;
    }
  });
  return vowelsCount;
}
//console.log(getCount("abracadabraa"));

let test = "abccbd";
test.split("");

*/
// Highest and Lowest
/*
function highAndLow(numbers) {
  const arr = numbers.split(" ");
  let lowest = +arr[0];
  let highest = +arr[0];
  for (let n of arr) {
    if (+n < lowest) {
      lowest = +n;
    }
    if (+n > highest) {
      highest = +n;
    }
  }
  return `${highest} ${lowest}`;
}

console.log(highAndLow("1 2 3 4 5"));
*/
//Will there be enough space?
/*
function enough(cap, on, wait) {
  let away = on + wait;
  if (cap >= away) {
    return 0;
  }
  return away - cap;
}

console.log(enough(100, 50, 50));
*/
// Will you make it?
/*
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distanceToPump) {
    return true;
  }
  return false;
};
console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);
*/
//If you can't sleep, just count sheep!!
/*
var countSheep = function (num) {
  let sheepSrting = "";
  for (let i = 1; i <= num; i++) {
    sheepSrting += i + " sheep...";
  }
  return sheepSrting;
};
console.log(countSheep(0));
*/

//Disemvowel Trolls
/*
function disemvowel(str) {
  return str.replace(/[ioeau]/gi, "");
}
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
);
*/
