// --------------- TASK 1 --------------

// Pokémon Battle – Function Basics
// Story:
// Ash and Gary are having a fierce Pokémon battle. Pikachu and Charizard are facing off, but Ash isn’t sure
// who has the higher attack power. Can you help him decide which Pokémon is stronger?
// Instructions:
// Create a function compareAttack(pokemon1, attack1, pokemon2, attack2).
// It should return:
// "Pikachu is stronger!" if Pikachu has a higher attack.
// "Charizard is stronger!" if Charizard has a higher attack.
// Call the function with compareAttack("Pikachu", 55, "Charizard", 84).


// const compareAttack = (pokemon1, attack1, pokemon2, attack2) => {
//     if (attack1 > attack2) {
//         console.log(`${pokemon1}is stronger`);
//     } else {
//         console.log(`${pokemon2}is stronger`);
//     }
// }

// compareAttack("Pikachu", 55, "Charizard", 84);




// --------------- TASK 2 --------------


// Story:
// Hermione is dueling Draco Malfoy in a spell-casting battle. She needs a function to announce what spell she is casting. 
// Help her write a function that properly declares her spell attacks!
// Instructions:
// Create a function castSpell(spell, wizard).
// It should return "Wizard casts Spell!", e.g., "Hermione casts Expelliarmus!".
// Call the function with "Expelliarmus", "Hermione".



// const castSpell = (spell, wizard) => {
//     return `${spell} casts ${wizard}`;
// }

// console.log(castSpell("Expelliarmus", "Hermione"));



// --------------- TASK 3 --------------

// Story:
// Luffy just defeated a powerful enemy, and the World Government has increased his bounty! But he’s too busy eating meat to do the calculations. 
// Can you help him figure out his new bounty?
// Instructions:
// Create a function calculateBounty(currentBounty, increase).
// It should return the new bounty after the increase.
// Call it with 1_500_000_000, 500_000_000 and log the result.


// const calculateBounty = (currentBounty, increase) => currentBounty + increase;


// console.log(calculateBounty(1_500_000_000, 500_000_000));



// --------------- TASK 4 --------------

// Story:
// Master Yoda is training young Padawans, but some of them don’t have assigned strength levels yet. He needs your help to set their 
// default power level if they don’t provide one!
// Instructions:
// Create a function trainJedi(name, strength = 50).
// Return "Jedi Name has Strength Power" (e.g., "Luke has 100 Power").
// Call it with "Luke", 100 and "Rey" (without strength).


// const trainJedi = (name, strength = 50) => `${name} has ${strength} Power`;

// console.log(trainJedi("Luke", 100));
// console.log(trainJedi("Rey"));


// --------------- TASK 5 --------------


// Story:
// Gollum is obsessed with the One Ring and repeats “My precious” over and over. Write a function to make Gollum sound like his usual self!
// Instructions:
// Create a function gollumSays(phrase).
// It should return the phrase three times, separated by "... ".
// Call it with: "My precious" (output: "My precious... My precious... My precious...").


// const gollumSays = (phrase) => phrase.repeat(3);

// console.log(gollumSays(" My precious... "));


// --------------- TASK 6 --------------

// Story:
// Mario has just found a mysterious Super Mushroom, and he feels his jumping power doubling! Write a 
// function to calculate his new jump height after eating the mushroom.
// Instructions:
// Create a function expression powerUp that multiplies jumpHeight by 2.
// Call powerUp(5) and log the result.


// const powerUp = (jumpHeight) => jumpHeight * 2;

// console.log(powerUp(5));



// --------------- TASK 7 --------------


// Story:
// Naruto is preparing for an intense battle, but he needs more shadow clones! The more chakra he uses, the more clones he creates.
// Can you write a function to calculate his clones?
// Instructions:
// Create an arrow function shadowClone(count) => count * 5.
// Call it with 10 (Output: "50 clones created!").

// let shadowClone = (count) => `${count * 5} clones created!`;


// console.log(shadowClone(10));



// --------------- TASK 8 --------------


// Story:
// The Sorting Hat at Hogwarts is about to sort new students into their houses, but it needs a helper function to determine 
// which house each student belongs to. The Sorting Hat is an old magical object, and instead of choosing houses itself, it calls a 
// separate function (a callback function) to decide where each student goes.
// Your job is to help the Sorting Hat by passing in a function that assigns a student to a house.

// Instructions:
// Create a function sortStudent(name, callback).
// The function should log: "Sorting [name] into..." and then call callback().
// The callback function should return a random house ("Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff").
// Call sortStudent("Harry", () => "Gryffindor") and log the result.

// const sortStudent = (name, callback) => {
//     console.log(`Sorting ${name} into...`);

//     return callback();
// }

// let arr = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

// const randomHouse = () => arr[Math.floor(Math.random() * arr.length)];

// console.log(sortStudent("Harry", randomHouse));



// --------------- TASK 9 --------------


// Thanos is about to snap his fingers, but before he does, he needs to check if he has all six Infinity Stones. However, 
// since he keeps his stones hidden inside a secret function, his assistants can’t access the stones directly!
// Your task is to write a function that holds the number of Infinity Stones inside it and allows another function inside it to access this number.

// Instructions:
// Create a function snapFingers().
// Inside snapFingers(), declare a variable stones = 6.
// Inside snapFingers(), define another function checkStones() that logs: "Thanos has 6 stones. The universe trembles!"
// Call checkStones() inside snapFingers() to verify the stones before snapping.



// const snapFingers = () => {
//     let stones = 6;

//     function checkStones() {
//         `Thanos has ${stones} stones`
//     }

//     return checkStones();
// }

// console.log(snapFingers());



// --------------- TASK 10 --------------

// Story:
// Hermione Granger accidentally used the Time-Turner incorrectly, causing a function to be called before it is even defined. 
// Surprisingly, JavaScript allows this!
// Your task is to write a function, call it before it’s defined, and explain why JavaScript lets this happen.
// Instructions:
// Call the function first, before defining it.
// Define a function turnBackTime() that logs "Going back in time!".
// Explain why it still works (Hint: Function Hoisting).

// turnBackTime();

// function turnBackTime() {
//     console.log("Goint back in time!");
// }



// --------------- TASK 11 --------------


// Gotham City’s criminals are desperately trying to uncover Batman’s true identity. But Bruce Wayne is smart—he has 
// stored his identity inside a function closure, making it impossible to access unless called correctly.
// Your task is to create a function that hides Batman’s identity inside it and only reveals it when called properly.
// Instructions:
// Create a function batman().
// Inside batman(), create another function that returns "I am Batman!".
// Return the inner function from batman().
// Store the result of batman() in a variable and call it.


// function batman() {
//     return function () {
//         return "I am Batman!";
//     };
// }

// const revealBatman = batman();

// console.log(revealBatman());



// --------------- TASK 12 --------------

// Story:
// In a hidden chamber of a mystical castle, there is an Enchanted Mirror that speaks only in uppercase
// letters. The mirror allows visitors to ask one question, but it transforms their words before answering.
// Your task is to write a higher-order function that takes a message and a transformation function, then applies 
// the transformation before returning the mirror’s reply.

// Instructions:
// Write a function magicMirror(message, transformFunction).
// Inside magicMirror(), apply the transformFunction to message.
// Return:
// "The mirror says: [transformed message]".
// Call magicMirror("Will I be rich?", str => str.toUpperCase()).

// function magicMirror(message, transformFunction) {
//     transformedMessage = transformFunction(message);
//     return `The mirror says: ${transformedMessage}`;
// }

// console.log(magicMirror("Will i be rich?", str => str.toUpperCase()));