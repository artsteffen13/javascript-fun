// // Find the sum of all the multiples of 3 or 5 below 1000 --------------
//
// let finalNumber3 = 0;
// let finalNumber5 = 0;
//
// let number = 0;
// let number2 = 0;
//
// for (let i = 0 ; i <= 1000 ; i++) {
//     if (number <= 1000) {
//         number = 3 * i;
//         finalNumber3 = number + finalNumber3;
//     }
// }
//
// for (let x = 0 ; x <= 1000 ; x++) {
//     if (number2 <= 1000) {
//         number2 = 5 * x;
//         finalNumber5 = number2 + finalNumber5;
//     }
// }
//

// console.log(`The final number is ${finalNumber5 + finalNumber3}`);

// Sum of even fibonacci numbers under 4 million -----------------

// let a = 1;
// let b = 2;
// let x = 0;
// let y = 0;
//
// const isEven = (z) => {
//     return z % 2 == 0;
// };
//
// for (let i = 0; i <= 4000000; i++) {
//     y = a + b;
//     if (y <= 4000000) {
//         a = b;
//         b = y;
//         x = isEven(y) ? x = x + y : x;
//     }
// }
//
// console.log(x);

// Array of factors for any given number  --------------
// ---------------------------------------------------------------------
//
// let i = 2;
// let array = [];
//
//
// for (i ; i <= 13195 ; i++) {
//     if (13195 % i == 0) {
//         array.push(i);
//     }
// }
//
// console.log(array);



// What is the smallest positive number that is evenly divisible by all of the #s between 1-20

// let x = 0;
//
// for (let i = 1 ; x == 0 ; i++) {
//     for(let a = 2; a <= 20; a++) {
//         if (i % a == 0) {
//             if (a === 20) {
//                 x = i;
//             }
//         } else {
//             a = 21;
//         }
//     }
// }
//
// console.log(x);

// Diff between the sum of the squares and square of the sum first 100 numbers

// let sumOfSquares = 0;
// let addedNumbers = 0;
// let squareOfSum = 0;
// let difference = 0;
//
// for (let i = 1 ; i <= 100 ; i++) {
//     sumOfSquares = sumOfSquares + (i * i);
//     addedNumbers = addedNumbers + i;
//     squareOfSum = addedNumbers * addedNumbers;
// }
//
// difference = squareOfSum - sumOfSquares;
//
// console.log(`The difference between the square of the sum and the sum of the square is ${difference}`);

// const array = [];
//
// const prime = (number) => {
//   for (let i = 2 ; i < number ; i++) {
//       if (number % i == 0) {
//           return false
//       }
//   }
//   return true;
// };
//
// for (let x = 2 ; array.length <= 10000; x++) {
//     if (prime(x)) {
//         array.push(x);
//     }
// }
//
// console.log(array[10000]);

//Find the thirteen adjacent digits in the 1000-digit number that have the greatest product.

// const number = '73167176531330624919225119674426574742355349194934' +
//     '96983520312774506326239578318016984801869478851843' +
//     '85861560789112949495459501737958331952853208805511' +
//     '12540698747158523863050715693290963295227443043557' +
//     '66896648950445244523161731856403098711121722383113' +
//     '62229893423380308135336276614282806444486645238749' +
//     '30358907296290491560440772390713810515859307960866' +
//     '70172427121883998797908792274921901699720888093776' +
//     '65727333001053367881220235421809751254540594752243' +
//     '52584907711670556013604839586446706324415722155397' +
//     '53697817977846174064955149290862569321978468622482' +
//     '83972241375657056057490261407972968652414535100474' +
//     '82166370484403199890008895243450658541227588666881' +
//     '16427171479924442928230863465674813919123162824586' +
//     '17866458359124566529476545682848912883142607690042' +
//     '24219022671055626321111109370544217506941658960408' +
//     '07198403850962455444362981230987879927244284909188' +
//     '84580156166097919133875499200524063689912560717606' +
//     '05886116467109405077541002256983155200055935729725' +
//     '71636269561882670428252483600823257530420752963450';
//
// let answer = 0;
// let answerArray = [];
//
// const sliced = (start, finish) => {
//     const newNumber =number.slice(start, finish);
//     let finalNumber = 1;
//     let numArray = [];
//     newNumber.split('').map(number => numArray.push(parseInt(number)));
//     for (let i = 0 ; i < numArray.length ; i++) {
//         let multipliedNumber = finalNumber * numArray[i];
//         finalNumber = multipliedNumber;
//         if (multipliedNumber > answer) {
//             answer = multipliedNumber;
//             answerArray = numArray;
//         }
//     }
// };
//
// for (let x = 0 ; x <= 1000 ; x++){
//     sliced(x, (x+7))
// }
//
// console.log(answer);
// console.log(answerArray);

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.

// let answer = 0;
// let answerArray = null;
//
// for (let i = 1 ; answer == 0 ; i++) {
//     for (let x = 1 ; x <= 100 ; x++) {
//         for (let y = 1 ; y <= 100 ; y++) {
//            let iSquared = i * i;
//            let xSquared = x * x;
//            let ySquared = y * y;
//            let squaredTotal = iSquared + xSquared + ySquared;
//            if (squaredTotal == 1000) {
//                answerArray = `${i.toString()} ${x.toString()} ${y.toString()}`;
//                answer = squaredTotal;
//            }
//         }
//     }
// }
//
// console.log(answer, answerArray);

// Find the sum of all the primes below two million.

// let answer = 0;
//
// const prime = (number) => {
//   for (let i = 2 ; i < number ; i++) {
//       if (number % i == 0) {
//           return false
//       }
//   }
//   return true;
// };
//
// let i = 2;
// while (i <= 2000000) {
//     if (prime(i)) {
//         answer = answer + i;
//     }
//     i++
// }
//
// console.log(answer);

// What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally)

// let numbers = '08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08 ' +
//     '49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00 ' +
//     '81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65 ' +
//     '52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91 ' +
//     '22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80 ' +
//     '24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50 ' +
//     '32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70 ' +
//     '67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21 ' +
//     '24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72 ' +
//     '21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95 ' +
//     '78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92 ' +
//     '16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57 ' +
//     '86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58 ' +
//     '19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40 ' +
//     '04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66 ' +
//     '88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69 ' +
//     '04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36 ' +
//     '20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16 ' +
//     '20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54 ' +
//     '01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48';
//
// const numArray = [];
//
// const convert = () => {
//     const newArray = numbers.split(' ');
//     newArray.map(num => numArray.push(parseInt(num)));
// };
//
// convert();
//
// let answer = 0;
// let answerArray = [];
// let whichFunction = '';
// let arrayPosition = 0;
//
// let array = [];
// let total;
//
// const forward = () => {
//     let i = 0;
//     while (i <= 400) {
//         total = 1;
//         array = numArray.slice(i, (i + 4));
//         array.map(number => {
//             total = total * number;
//         });
//         if (total > answer) {
//             answer = total;
//             answerArray = array;
//             whichFunction = 'forward';
//             arrayPosition = i;
//         }
//         i++
//     }
//     reverse();
// };
//
// const reverse = () => {
//     let i = 0;
//     while (i <= 400) {
//         total = 1;
//         array = numArray.slice(i, (i + 4));
//         array.reverse();
//         array.map(number => {
//             total = total * number;
//         });
//         if (total > answer) {
//             answer = total;
//             answerArray = array;
//             whichFunction = 'reverse';
//             arrayPosition = i;
//         }
//         i++
//     }
//     down();
// };
//
// const down = () => {
//   let i = 0;
//   while (i <=400) {
//       total = 1;
//       array = [numArray[i], numArray[(i + 20)], numArray[(i + 40)], numArray[(i + 60)]];
//       array.map(number => {
//           total = total * number;
//       });
//       if (total > answer) {
//           answer = total;
//           answerArray = array;
//           whichFunction = 'down';
//           arrayPosition = i;
//       }
//       i++
//   }
//   up();
// };
//
// const up = () => {
//     let i = 0;
//     while (i <=400) {
//         total = 1;
//         array = [numArray[i], numArray[(i + 20)], numArray[(i + 40)], numArray[(i + 60)]];
//         array.reverse();
//         array.map(number => {
//             total = total * number;
//         });
//         if (total > answer) {
//             answer = total;
//             answerArray = array;
//             whichFunction = 'up';
//             arrayPosition = i;
//         }
//         i++
//     }
//     diagRightDown();
// };
//
// const diagRightDown = () => {
//     let i = 0;
//     while (i <=400) {
//         total = 1;
//         array = [numArray[i], numArray[(i + 21)], numArray[(i + 42)], numArray[(i + 63)]];
//         array.map(number => {
//             total = total * number;
//         });
//         if (total > answer) {
//             answer = total;
//             answerArray = array;
//             whichFunction = 'diagRightDown';
//             arrayPosition = i;
//         }
//         i++
//     }
//     diagUpLeft();
// };
//
// const diagUpLeft = () => {
//     let i = 0;
//     while (i <=400) {
//         total = 1;
//         array = [numArray[i], numArray[(i + 21)], numArray[(i + 42)], numArray[(i + 63)]];
//         array.reverse();
//         array.map(number => {
//             total = total * number;
//         });
//         if (total > answer) {
//             answer = total;
//             answerArray = array;
//             whichFunction = 'diagUpLeft';
//             arrayPosition = i;
//         }
//         i++
//     }
//     diagLeftDown();
// };
//
// const diagLeftDown = () => {
//     let i = 3;
//     while (i <=400) {
//         total = 1;
//         array = [numArray[i], numArray[(i + 19)], numArray[(i + 38)], numArray[(i + 57)]];
//         array.map(number => {
//             total = total * number;
//         });
//         if (total > answer) {
//             answer = total;
//             answerArray = array;
//             whichFunction = 'diagLeftDown';
//             arrayPosition = i;
//         }
//         i++
//     }
//     diagUpRight();
// };
//
// const diagUpRight = () => {
//     let i = 3;
//     while (i <=400) {
//         total = 1;
//         array = [numArray[i], numArray[(i + 19)], numArray[(i + 38)], numArray[(i + 57)]];
//         array.reverse();
//         array.map(number => {
//             total = total * number;
//         });
//         if (total > answer) {
//             answer = total;
//             answerArray = array;
//             whichFunction = 'diagUpRight';
//             arrayPosition = i;
//         }
//         i++
//     }
// };
//
//
//
//
// forward();
//
// console.log(answer);
// console.log(answerArray);
// console.log(whichFunction);
// console.log(arrayPosition);

