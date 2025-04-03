// ---------------------- TASK 1 -------

// The evil sorcerer has trapped you in a dungeon with a magical countdown lock. To escape, 
// you need to write a JavaScript function that counts down from n to 1. If you succeed, the lock will open, and you’ll be free!
// Instructions:
// Write a function countDownFrom(n) that prints numbers from n to 1 using a for loop.
// Example:
// countDownFrom(5); // Output: 5, 4, 3, 2, 1


// const countdown = (num) => {
//     for (let i = num; i >= 1; i--) {
//         console.log(i);
//     }
// }

// countdown(5);

// const countdown = (num) => {
//     let tmpArr = [];
//     for (let i = num; i >= 1; i--) {
//         tmpArr.push(i);
//     }

//     return tmpArr;
// }


// console.log(countdown(5));








// ---------------------- TASK 2 -------

// You’re a chef preparing a fruit salad for a royal banquet. The king has given you a list of fruits, and you need to display 
// each one on a golden platter. Use a for...of loop to print each fruit from the array.
// Instructions:
// Write a function printArrayElements(arr) that prints each element of an array using a for...of loop.
// Example:
// printArrayElements(["Apple", "Banana", "Cherry"]); // Output: Apple, Banana, Cherry

// const printArrayElements = (arr) => {
//     for (const item of arr) {
//         console.log(item);
//     }
// }

// printArrayElements(["Apple", "Banana", "Cherry"]);



// ---------------------- TASK 3 -------


// You’re a treasure hunter exploring an ancient cave. The cave has n golden coins scattered around. Use a while loop to calculate the total value of all the coins.
// Instructions:
// Write a function sumNumbersUpTo(n) that calculates the sum of numbers from 1 to n using a while loop.
// Example:


// const sumNumbersUpTo = (n) => {
//     let sum = 0;

//     while (n > 0) {
//         sum += n;
//         n--;
//     }

//     return sum;
// }

// const rez = sumNumbersUpTo(5); // Output: 15 (1 + 2 + 3 + 4 + 5)

// console.log(rez);



// ---------------------- TASK 4 ----------

// Story:
// You’re a wizard casting a spell to create a magical shield. The spell requires you to repeat an incantation n times. Use a do...while loop to ensure the spell is cast correctly.
// Instructions:
// Write a function repeatString(str, n) that repeats a string n times using a do...while loop.
// Example:


// const repeatString = (str, n) => {

//     do {
//         console.log(str);
//         n--;
//     } while (n >= 1)

// }

// repeatString("Hello", 3); // Output: HelloHelloHello



// ---------------------- TASK 5 ----------

// Story:
// You’re a detective investigating a mysterious object. The object has hidden properties, and you need to uncover them using a for...in loop.
// Instructions:
// Write a function printObjectKeys(obj) that prints all the keys of an object using a for...in loop.
// Example:


// const printObjectKeys = (elem) => {
//     for (const key in elem) {
//         console.log(key);
//     }
// }

// printObjectKeys({ name: "Alice", age: 25 });



// MEDIUM LEVEL

// ---------------------- TASK 6 ----------



// Story:
// You’re a scientist analyzing a dataset of numbers. Your task is to filter out all the even numbers to focus on the odd ones. Use a for loop to achieve this.
// Instructions:
// Write a function filterOdds(numbers) that removes all even numbers from an array using a for loop.
// Example:


// const filterOdds = (arr) => {
//     let tmpArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 1) {
//             tmpArr.push(arr[i]);
//         }
//     }

//     return tmpArr;
// }

// let rez = filterOdds([1, 2, 3, 4, 5]); // Output: [1, 3, 5]

// console.log(rez);



// ---------------------- TASK 7 ----------

// Story:
// You’re a treasure hunter searching for the most valuable gem in a cave. The gems are stored in an array, and you need to find the one with the highest value. Use a for...of loop to solve this.
// Instructions:
// Write a function findMaxValue(numbers) that finds the maximum value in an array using a for...of loop.
// Example:


// const findMaxValue = (arr) => {
//     let rez = arr.reduce((acc, item) => {
//         return acc > item ? acc : item;
//     }, 0)

//     return rez;
// }


// console.log(findMaxValue([10, 20, 5, 30]));




// ---------------------- TASK 7 ----------


// You’re a spy decoding a secret message. The message is encrypted in reverse, and you need to use a while loop to decode it.
// Instructions:
// Write a function reverseString(str) that reverses a string using a while loop.
// Example:


// const reverseString = (str) => {
//     let tmp = "";
//     let i = str.length - 1;

//     while (i >= 0) {
//         tmp += str[i];

//         i--;
//     }

//     return tmp;
// }

// let rez = reverseString("Hello"); // Output: olleH

// console.log(rez);



// ---------------------- TASK 8 ----------


// Story:
// You’re a gatekeeper guarding a magical portal. The portal only opens if the user enters a 
// number between 1 and 10. Use a do...while loop to keep asking until the user provides a valid input.
// Instructions:
// Write a function getValidInput() that repeatedly asks the user for a number between 1 and 10 using prompt(). The function should only stop when a valid input is given.
// Example:



// const getValidInput = () => {
//     let validNum = prompt("Enter a number from 1 to 10");
//     let rez = Number(validNum);

//     while (rez <= 1 || rez >= 10) {
//         validNum = prompt("Invalid input, try again (Enter a number from 1 to 10)");
//         rez = Number(validNum);
//     }

//     return rez;
// };

// let userInput = getValidInput();
// console.log("Valid input:", userInput);

// getValidInput(); 


// LEVELL HARD


// ---------------------- TASK 9 ----------


// Story:
// You’re a wizard participating in a magical tournament. The tournament rules are based on the FizzBuzz game, but with a twist! Use loops to print numbers from 1 to 50 with special rules.
// Instructions:
// Write a function fizzBuzzTwist() that prints numbers from 1 to 50 with the following rules:
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// If the number contains the digit 3 (e.g., 13, 23), print "Almost Fizz".
// Example:


// const fizzBuzzTwist = () => {
//     for (let i = 0; i <= 50; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else if (i.toString().includes("3")) {
//             console.log("Almost Fizz");
//         }
//     }
// }


// fizzBuzzTwist(); 



// ---------------------- TASK 10 ----------


// Story:
// You’re a math wizard creating a magical multiplication table for your spellbook. Use nested for loops to generate the table up to n.
// Instructions:
// Write a function printMultiplicationTable(n) that prints the multiplication table up to n using nested for loops.
// Example:
// printMultiplicationTable(5); // Output: 1x1=1, 1x2=2, ..., 5x5=25


// const printMultiplicationTable = (n) => {
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             console.log(`${i}x${j}=${i * j}`);
//         }
//     }
// }

// printMultiplicationTable(5);



// ---------------------- TASK 11 ----------


// Story:
// You’re a time traveler fixing a corrupted timeline. The timeline is represented as an array with duplicate events. Use loops to remove duplicates and restore the timeline.
// Instructions:
// Write a function removeDuplicates(arr) that removes duplicate elements from an array while looping through it. Be careful not to skip elements!
// Example:


// const removeDuplicates = (arr) => {
//     const rez = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!rez.includes(arr[i])) {
//             rez.push(arr[i]);
//         }
//     }

//     return rez;
// }


// let result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]); // Output: [1, 2, 3, 4, 5]

// console.log(result);
