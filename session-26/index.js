// --------------------------Task 1 ------------------------


// Hogwarts needs a digital Sorting Hat! Create an array of student names and randomly assign them to one of the four houses using the `map()` method.
// Example input: `['Harry', 'Hermione', 'Ron', 'Draco']`
// Expected output: `['Harry - Gryffindor', 'Hermione - Ravenclaw', 'Ron - Gryffindor', 'Draco - Slytherin']`



// const characterArr = ['Harry', 'Hermione', 'Ron', 'Draco'];
// const familyArr = ["Gryffindor", "Ravenclaw", "Gryffindor", "Slytherin"];

// const rez = characterArr.map((item, index) => {
//     return item + " - " + familyArr[index];
// })

// console.log(rez);

// --------------------------Task 2------------------------

// The Pokémon Filter
// Given an array of Pokémon with their combat power (CP), filter out Pokémon with CP less than 500 using the `filter()` method.
// Example input: `[ {name: 'Pikachu', CP: 320}, {name: 'Charizard', CP: 900} ]`
// Expected output: `[ {name: 'Charizard', CP: 900} ]`


// const objArr = [{ name: 'Pikachu', CP: 320 }, { name: 'Charizard', CP: 900 }]

// const res = objArr.filter(item => item.CP > 500);

// console.log(res);




// --------------------------Task 3------------------------


// Avengers Assemble (Reduce)
// The Avengers need funding. Use the `reduce()` method to sum up the total budget required for each Avenger’s mission.
// Example input: `[ {hero: 'Iron Man', budget: 5000}, {hero: 'Hulk', budget: 2000} ]`
// Expected output: `Total budget: 7000`



// const avangers = [{ hero: 'Iron Man', budget: 5000 }, { hero: 'Hulk', budget: 2000 }];

// const res = avangers.reduce((acc, item) => {

//     acc.TotalBudget += item.budget
//     return acc;

// }, { TotalBudget: 0 })


// console.log(res);



// --------------------------Task 4 ------------------------

// The Lost Treasure Map
// A pirate captain needs help finding treasure! Convert an array of directions into a list of formatted instructions using `map()`.
// Example input: `['left', 'right', 'forward']`
// Expected output: `['Move left', 'Move right', 'Move forward']`



// let arr = ['left', 'right', 'forward'].map(item => `Move ${item}`);

// console.log(arr);





// --------------------------Task 5 ------------------------



// The Jedi Archives
// Create an array of Jedi names and search for 'Yoda' using the `find()` method. If found, return ‘Master found!’
// Example input: `['Luke', 'Obi-Wan', 'Yoda', 'Anakin']`
// Expected output: `'Master found!'`


// let arr = ['Luke', 'Obi-Wan', 'Yoda', 'Anakin'].find(item => item === "Yoda");

// console.log(`Maseter ${arr} found!`);



// --------------------------Task 6 ------------------------

// The One Ring Inventory
// Frodo needs to keep track of his inventory. Implement an array where items can be added with `push()` and removed with `pop()`.
// Example actions: `push('Lembas Bread')`, `push('Ring')`, `pop()`



// let arr = [];

// const addElem = (arrName, item) => { arrName.push(item) };
// const delElem = (arrName, item) => { arr.includes(item) ? arrName.pop(item) : "Elem does not exist" };



// addElem(arr, "Lion");
// addElem(arr, "Tiger");
// delElem(arr, "Tiger");

// console.log(arr);



// --------------------------Task 7 ------------------------


// Spider - Man’s Web of Crime
// Given an array of crime locations, sort them alphabetically using`sort()`.
// Example input: `['Times Square', 'Central Park', 'Brooklyn']`
// Expected output: `['Brooklyn', 'Central Park', 'Times Square']`



// let arr = ['Times Square', 'Central Park', 'Brooklyn'].sort();

// console.log(arr);



// --------------------------Task 8 ------------------------


// The Time Stone(Array Slicing)
// Doctor Strange wants to revisit only the last 3 events from an array of mystical occurrences.Use `slice()` to retrieve them.
// Example input: `[ 'Dormammu Attack', 'Multiverse Glitch', 'Ancient One’s Warning', 'Time Loop', 'Portal Opening' ]`
// Expected output: `['Ancient One’s Warning', 'Time Loop', 'Portal Opening']`


// let arr = ['Dormammu Attack', 'Multiverse Glitch', 'Ancient One Warning', 'Time Loop', 'Portal Opening'];

// let lastElem = arr.length;
// let res = arr.slice(2, lastElem);

// console.log(res);




// --------------------------Task 9 ------------------------

// Matrix Reloaded: Data Processing
// A hacker needs to process data from the Matrix. Given an array of numbers, transform each into binary format using `map()`, and then find the highest value using `reduce()`.
// Example input: `[3, 7, 15, 22]`
// Expected output (binary conversion): `['11', '111', '1111', '10110']`
// Expected output (highest value): `22`


// const arr = [3, 7, 15, 22];

// const binaryMode = arr.map(item => item.toString(2));

// console.log(binaryMode);







// --------------------------Task 10 ------------------------


// Cyberpunk City Data Processing
// A cyber-detective is analyzing risk levels in a futuristic city. Use multiple array methods to process the risk levels.
// 1. Use `map()` to convert each risk level to hexadecimal.
// 2. Use `filter()` to extract levels above 100.
// 3. Use `reduce()` to calculate the total risk level.
// 4. Use `find()` to locate the first risk level above 150.
// 5. Use `splice()` to remove corrupt data (risk levels below 80).
// Example input: `[99, 135, 76, 200, 150, 89]`
// Expected output:
// Hex values: `['63', '87', '4c', 'c8', '96', '59']`
// Filtered high risks: `[135, 200, 150]`
// Total risk level: `749`
// First risk above 150: `200`
// Cleaned data (after removing <80): `[99, 135, 200, 150, 89]`


// const arr = [99, 135, 76, 200, 150, 89];

// const hexValues = arr.map(num => num.toString(16).padStart(2, '0'));

// const levelAboveHundred = arr.filter(item => item > 100);

// const totalRistLevel = arr.reduce((acc, item) => {
//     acc.totalRistLevel += item;
//     return acc;
// }, { totalRistLevel: 0 })

// const levelAboveHundredFifty = arr.find(item => item > 150);

// const riskLevelBelowEighten = (arrName) => {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] < 80) {
//             arr.splice(i, 1); 
//         }
//     }

//     return arrName;
// }



// console.log(hexValues);
// console.log(levelAboveHundred);
// console.log(totalRistLevel);
// console.log(`First risk above 150: ${levelAboveHundredFifty}`);
// console.log(riskLevelBelowEighten(arr));