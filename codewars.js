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

//return input.length;
