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
