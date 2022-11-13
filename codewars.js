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
// Parse nice int from char problem
/*
function getAge(inputString) {
  return Array.from(inputString).reduce((a) => parseInt(a));
}
*/
// Difference of Volumes of Cuboids
/*
function findDifference(a, b) {
  a = a.reduce((p, c) => {
    return p * c;
  });
  b = b.reduce((p, c) => {
    return c * p;
  });
  return a > b ? a - b : b - a;
}

console.log(findDifference([3, 2, 5], [1, 4, 4]));
*/
// Calculate BMI
/*
function bmi(weight, height) {
  if (weight / (height * height) <= 18.5) {
    return "Underweight";
  } else if (weight / (height * height) <= 25) {
    return "Normal";
  } else if (weight / (height * height) <= 30) {
    return "Overweight";
  } else if (weight / (height * height) > 30) {
    return "Obese";
  }
}

console.log(bmi(80, 1.8));
*/
//Is it even?
/*
function testEven(n) {
  if ((n % 2 < 1 && n < Math.floor(n)) || n == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(testEven(0.5));
*/
//Categorize New Member
/*
function openOrSenior(data) {
  return data.map((item) => {
    if (item[0] >= 55 && item[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
}
console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
); // ["Open", "Senior", "Open", "Senior"]  // 55 , 7
*/
//Opposites Attract
/*
function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(lovefunc(2, 2));
*/
//Rock Paper Scissors!
/*
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

console.log(rps("scissors", "rock"));
console.log(rps("paper", "paper"));
*/

//Remove String Spaces
/*
function noSpace(x) {
  return x
    .split("")
    .filter((elem) => elem !== " ")
    .join("")
    .trim();
}
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")); // 8j8mBliB8gimjB8B8jlB
*/

//Cat years, Dog years
/*
var humanYearsCatYearsDogYears = function (humanYears) {
  let respectiveAges = [humanYears];
  if (humanYears == 1) {
    for (let i = 0; i <= 1; i++) {
      respectiveAges.push(15);
    }
    return respectiveAges;
  } else if (humanYears == 2) {
    for (let i = 0; i <= 1; i++) {
      respectiveAges.push(24);
    }
  } else if (humanYears == 3) {
    for (let i = 0; i <= 1; i++) {
      respectiveAges[1] = 28;
      respectiveAges[2] = 29;
    }
  } else if (humanYears >= 4) {
    respectiveAges[1] = 28;
    respectiveAges[2] = 29;
    let cat = 4;
    let dog = 5;
    for (let i = 0; i < humanYears - 3; i++) {
      respectiveAges[1] += cat;
      respectiveAges[2] += dog;
    }
  }
  return respectiveAges;
};

console.log(humanYearsCatYearsDogYears(5)); // [2,24,24]
*/
//Student's Final Grade

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

console.log(finalGrade(79, 5)); // 90


