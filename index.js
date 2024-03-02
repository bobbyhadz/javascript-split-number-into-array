// EXAMPLE 1 - Split a Number into an Array in JavaScript

const number = 1234;

const arrOfDigits = Array.from(String(number), Number);
console.log(arrOfDigits); // 👉️ [1, 2, 3, 4]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using the `Array.map()` method manually instead

// const number = 1234;

// // 👇️ ['1', '2', '3', '4']
// const arrOfStr = Array.from(String(number));

// const arrOfNum = arrOfStr.map(str => Number(str));
// console.log(arrOfNum); // 👉️ [1, 2, 3, 4]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Split a number into an Array using String.split()

// const number = 1234;

// const arr = String(number)
//   .split('')
//   .map(str => Number(str));

// console.log(arr); // 👉️ [1, 2, 3, 4]

// ------------------------------------------------------------------

// // EXAMPLE 4 - Split a number into an array with a reusable function

// function splitNumber(num) {
//   return String(num)
//     .split('')
//     .map(str => Number(str));
// }

// console.log(splitNumber(1234)); // 👉️ [ 1, 2, 3, 4 ]
// console.log(splitNumber(123)); // 👉️ [ 1, 2, 3 ]
// console.log(splitNumber(12)); // 👉️ [ 1, 2 ]
// console.log(splitNumber(1)); // 👉️ [ 1 ]
