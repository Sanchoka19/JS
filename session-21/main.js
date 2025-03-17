// ----------------TASK 1-------

// Story: Gandalf the Grey and Dumbledore are having a friendly magic duel. They decide to compare their 
// magic power using JavaScript!
// Instructions:
// Declare variables for their magic power.
// Boost Gandalf’s magic and weaken Dumbledore slightly.
// Print their new power levels.
// Compare and log who is stronger.

// const gandalfVsDumbledore = (min, max) => {
//     let gendalf = Math.floor((Math.random() * (max - min)) + min);
//     let dumbledore = Math.floor((Math.random() * (max - min)) + min);

//     if (gendalf > dumbledore) {
//         console.log(`Winner is Gendalf with ${gendalf} score`);
//     } else {
//         console.log(`Winner is Dumbldore with ${dumbledore} score`);
//     }
// }

// gandalfVsDumbledore(20, 15);



// ------------TASK2----------------

// Story: A pirate named Captain Codebeard has discovered a treasure chest, but the items inside are of different types!
// Instructions:
// Declare variables for a gold coin count (number), a treasure map (string), and a cursed amulet (boolean).
// Log the type of each variable using typeof.
// Change the treasure map description and reassign it.



// const gold = 266.59;
// let treasure = "Treasuere is in the island named Madagaskar";
// treasure = "For now treasure is in Maldives";
// const amulet = true;

// console.log(treasure);

// console.log(typeof gold);
// console.log(typeof treasure);
// console.log(typeof amulet);



// ------------TASK3----------------

// Story: A wizard runs a potion shop. Customers buy potions, and prices vary.
// Instructions:
// Declare variables for potion prices.
// Calculate total cost if a customer buys three health potions and two mana potions.
// Apply a discount if the total is above 50 gold coins.


// const customer = [
//     {
//         name: "Gendalf",
//         potion: "OMEGA3",
//         price: 50,
//         quantity: 4
//     }, {
//         name: "Bilbo",
//         potion: "Noshpa",
//         price: 25,
//         quantity: 5
//     }, {
//         name: "Legolas",
//         potion: "AZIMAKI",
//         price: 40,
//         quantity: 1
//     }
// ]

// const discountPotion = customer
//     .map(item => ({
//         ...item,
//         totalPrice: item.price * item.quantity
//     }))
//     .filter(item => item.totalPrice > 50)
//     .map(item => ({
//         ...item,
//         priceAfterDiscount: item.totalPrice * 0.90
//     }));


// console.log(discountPotion);


// ------------TASK4----------------

// Story: A knight named Sir Debugalot is preparing for a quest.
// Instructions:
// Declare variables for his sword’s attack power (number), armor name (string), and whether he has a shield (boolean).
// Print a battle-ready message using template literals.

// let attackPower = Math.floor(Math.random() * (40 - 20) + 20);
// let armorName = "Dragonbane Plate";
// console.log(armorName.length);

// if (!hasShield) {
//     console.log(`you are not ready for fight because your ${armorName} is borken beacuse he got a hit sword which has ${attackPower} attack power`);
// } else {
//     console.log(`you are ready for fight, your armor ${armorName} wait for warior`);
// }




// ------------ TASK 5 ----------------

// Story: A bakery sells loaves of bread and cakes.You need to track earnings.
// Instructions:
// Declare variables for bread price, cake price, and daily sales.
// Calculate the bakery's earnings for the day.
// Log the earnings using a template literal.


// const bakery = [
//     {
//         name: "bread",
//         price: 1.5,
//         quantity: 125
//     },
//     {
//         name: "cacke",
//         price: 50,
//         quantity: 20
//     }
// ];


// const dailySalary = bakery.map(item => ({ ...item, dailySalaryfrom: item.price * item.quantity }));

// const totalSalary = dailySalary.reduce((acc, item) => {
//     acc.totalSalary += item.dailySalary;
//     return acc;
// }, { totalSalary: 0 });


// console.log(dailySalary);
// console.log(totalSalary);


// ------------ TASK 6 ----------------

// Story: Astronauts are preparing for launch but need to check fuel levels.
// Instructions:
// Declare variables for the spaceship’s fuel capacity and current fuel.
// Check if the spaceship has enough fuel (fuel must be above 80% of capacity).
// Print a launch status message.


// let capacity = 100;
// let burnedFuel = Math.round(Math.random() * (30 - 10) + 10);


// const difference = (a, b) => a - b;
// let res = difference(capacity, burnedFuel);

// if (res > 80) {
//     console.log(`you can go for a lunch, fuel level is ${res}%`);
// } else {
//     console.log(`you have to fill, fuel level is ${res}%`);
// }


// ------------ TASK 7 ----------------

// Story: A scientist builds a time machine and wants to measure time jumps accurately.
// Instructions:
// Use new Date() to get the current year.
// Create a variable for years jumped forward or backward.
// Calculate and log the new year after the time jump.

// let curantDate = new Date().getFullYear();
// let ranDate = Math.floor(Math.random() * (4000, 2026) + 2026);


// console.log(`You are in ${curantDate + ranDate}, you jumoped with ${ranDate - curantDate}`);




// ------------ TASK 8 ----------------

// Story: A wizard’s spells have different strengths. Let’s compare them.
// Instructions:
// Declare three spell power variables.
// Compare them using >, <, and === operators.
// Log which spell is strongest.

// let spel1 = "Expelliarmus"; // From Harry poter
// let spel2 = "Fireball"; // from Dungeon
// let spel3 = "Avada Kedavra"; //from Harry Poter



// Declare three spell power variables
// let fireSpellPower = 75;
// let iceSpellPower = 60;
// let lightningSpellPower = 90;

// // Compare the spells and determine the strongest one
// if (fireSpellPower > iceSpellPower && fireSpellPower > lightningSpellPower) {
//     console.log("Fire spell is the strongest!");
// } else if (iceSpellPower > fireSpellPower && iceSpellPower > lightningSpellPower) {
//     console.log("Ice spell is the strongest!");
// } else if (lightningSpellPower > fireSpellPower && lightningSpellPower > iceSpellPower) {
//     console.log("Lightning spell is the strongest!");
// } else {
//     console.log("There is a tie between spells!");
// }




// ------------ TASK 9 ----------------


// Story: A group of friends cautiously enters a small haunted house with just two rooms: the Kitchen and the Living Room. 
// They want to quickly check if both rooms are clear of ghosts to know if the house is safe to proceed further.
// Instructions:
// Declare boolean variables for two rooms:


// kitchenHasGhost - Set it to true if there's a ghost in the kitchen, or false if it's clear. Let's start 
// by setting it to true for this example. (e.g., true)
// livingRoomHasGhost - Set it to true or false for the living room. Let's set it to false for this example. (e.g., false)
// Determine if the house is safe:


// The house is considered safe only if both the kitchen AND the living room are clear of ghosts (meaning both 
// kitchenHasGhost and livingRoomHasGhost are false).
// Use the logical AND operator (&&) to check if both kitchenHasGhost is false and livingRoomHasGhost is false.
// Store the safety result in a variable:


// Store the result of your logical AND operation (which will be true or false) in a variable called isHouseSafe.
// Print a message indicating if the house is safe:


// Use an if/else statement based on the value of isHouseSafe:
// If isHouseSafe is true, print: "The house is safe! No ghosts in the Kitchen or Living Room."
// Else (if isHouseSafe is false), print: "Danger! The house is NOT safe. Ghosts detected!"


// let kitchenHasGhost = true;
// let livingRoomHasGhost = false;

// let isHouseSafe = kitchenHasGhost && !livingRoomHasGhost;

// if (isHouseSafe) {
//     console.log(`House is safe!, No Ghost in the Kithchen or Living Room.`);
// } else {
//     console.log(`House isn't safe`);
// }



// ------------ TASK 10 ----------------


// Story: A robot named Bolt needs enough battery power to complete tasks.
//     Instructions:
// Set a battery level variable.
// Use an if statement to check if the battery is above 30 %.
//     Print "Low battery" or "Battery sufficient" based on the value.


// let name = "Bolt";
// let battery = 40;

// if (battery > 30) {
//     console.log(`Battery sufficient, it has ${battery}%`);
// } else {
//     console.log(`Low battery: ${battery}%`);
// }





// ------------ TASK 11 ----------------


// Story: A dragon is in a simple battle. A knight makes a single, basic attack, and we need to see how much
//  health the dragon loses.
// Instructions:
// Declare a variable for the dragon's starting health:


// dragonHealth - Set it to a starting number like 100.
// Declare a variable for the knight's attack damage:

// knightAttackDamage - Set it to a number representing the damage, like 25.
// Reduce the dragon's health:


// Use the -= operator to subtract the knightAttackDamage from the dragonHealth. (e.g., dragonHealth -= knightAttackDamage;)
// Print the dragon's remaining health:


// Use console.log() to display the dragonHealth after the attack. Label it clearly so it's easy to understand. For example: 
// "Dragon's Health After Attack: [health value]". Use a template literal to include the dragonHealth in the message.


// let dragonHealth = 100;
// let nightAttakeDamage = 25;
// dragonHealth -= nightAttakeDamage;


// console.log(`Dragon's Health After Attack: ${dragonHealth}`);



// ------------ TASK 12 ----------------

// Story: A race car driver is on the track, starting slow and then speeding up. We need to check if they exceed the
//  speed limit after speeding up.

// Instructions:
// Declare a variable for the speed limit:

// speedLimit - set it to a number like 50 (representing 50 mph, km/h, etc.).
// Declare a variable for the car's initial speed:

// carSpeed - set it to a number lower than the speed limit, like 30.
// Increase the car's speed:


// Use the += operator to increase carSpeed by a set amount, for example, increase it by 25. (e.g., carSpeed += 25;)
// Check if the car's speed exceeds the speed limit:


// Use an if statement to compare carSpeed with speedLimit. Check if carSpeed is greater than speedLimit.
// Print a warning or an "okay" message:

// If the carSpeed is greater than speedLimit, print a simple warning message to the console like: "Speed Warning: 
// You are going too fast!".
// Else (if the speed is not over the limit), print a message like: "Speed is okay."
// Always print the current car speed:


// After checking the speed limit, print the final carSpeed to the console, so we can see the car's speed. Label it 
// clearly, like: "Current Speed: [speed value]". Use a template literal to include the carSpeed value in the message.



// let speedLimit = 100;
// let carSpeed = 90;
// carSpeed += 25;

// if (carSpeed > speedLimit) {
//     console.log(`Speed warning you are going too fast! Your exceed speed with ${carSpeed - speedLimit}km/h`);
// } else {
//     console.log(`Speed is okay your speed is ${carSpeed}km/h`);
// }

// console.log(`Current Spped: ${carSpeed}kh/h`);



// ------------ TASK 13 ----------------


// Story: A classic showdown! Superhero "Valiant" and the notorious villain "Malakor" are testing their strength. We need to determine not just who is stronger, but by how much and announce the results with appropriate flair!
// Instructions:
// Declare Variables for Strength Levels:


// heroStrength: Set to a number representing Valiant's strength (e.g., 95).
// villainStrength: Set to a number representing Malakor's strength (e.g., 90).
// Introduce Strength Difference Categories:



// We'll categorize the strength difference to provide more detailed outcomes:
// "Decisive Victory": If one character's strength is greater than the other by more than 10 points.
// "Close Call": If one character's strength is greater by 10 points or less.
// "Stalemate": If their strength levels are exactly equal.
// Compare Strength Levels and Determine the Outcome:


// Use if, else if, and else statements along with comparison operators (>, <, >=, <=, ===) to 
// determine the outcome of the strength test based on the categories defined in step 2.
// Consider these comparisons:
// Is heroStrength greater than villainStrength by more than 10? (Decisive Hero Victory?)
// Is villainStrength greater than heroStrength by more than 10? (Decisive Villain Victory?)
// Is heroStrength exactly equal to villainStrength? (Stalemate?)
// If none of the above are decisively true, then it's a "Close Call". You'll need to figure out in the "else" or 
// "else if" branches who is slightly stronger in a close call scenario.
// Print Descriptive Output Messages:


// Use console.log() and template literals to print messages that reflect the determined outcome with a bit of story-like flair. 
// For example:
// For a Decisive Hero Victory: "Valiant triumphs decisively! Malakor is utterly outmatched!"
// For a Decisive Villain Victory: "Malakor's power is overwhelming! Valiant is soundly defeated!"
// For a Stalemate: "It's a strength stalemate! Neither Valiant nor Malakor can overpower the other."
// For a Close Call Hero Victory: "Valiant barely edges out! A close call victory against Malakor!"
// For a Close Call Villain Victory: "Malakor narrowly prevails! A hard-fought win over Valiant!"

// let heroStrength = 95;
// let villainStrength = 90;

// let strengthDifference = heroStrength - villainStrength;

// if (strengthDifference > 10) {
//     console.log("Valiant triumphs decisively! Malakor is utterly outmatched!");
// } else if (strengthDifference < -10) {
//     console.log("Malakor's power is overwhelming! Valiant is soundly defeated!");
// } else if (strengthDifference == 0) {
//     console.log("It's a strength stalemate! Neither Valiant nor Malakor can overpower the other.");
// } else if (strengthDifference > 0) {
//     console.log("Valiant barely edges out! A close call victory against Malakor!");
// } else {
//     console.log("Malakor narrowly prevails! A hard-fought win over Valiant!");
// }




// ------------ TASK 14 ----------------

// Story: An intrepid adventurer, Alex, is on a quest for a legendary hidden treasure. Finding it isn't just
//  about having a clue, but having the right combination of clues. Let's help determine if Alex has enough to succeed!
// Instructions:
// Declare Boolean Variables for Multiple Clues:


// hasTreasureMap: Does Alex possess an ancient treasure map? (e.g., true)
// foundAncientKey: Has Alex discovered an ancient key? (e.g., false)
// solvedRiddleScroll: Did Alex successfully solve a riddle from a cryptic scroll? (e.g., true)
// hasCompass: Does Alex have a reliable compass? (e.g., true)
// isFullMoon: Is it currently a full moon, as mentioned in legends? (e.g., false)
// Define the Condition for Finding the Treasure:

// To find the treasure, Alex needs to meet a combination of conditions. Here’s the tricky rule: Alex can find the
//  treasure if they have both:


// The Treasure Map AND
// EITHER (The Ancient Key OR (Solved the Riddle Scroll AND Has a Compass))
// Let's break down this condition:


// Core Requirement: They must have the hasTreasureMap.
// Alternative Paths: To proceed beyond the map, they need at least one of these:
// foundAncientKey is enough by itself.
// If they don't have the key, they must have both solvedRiddleScroll and hasCompass.
// Use Logical Operators to Determine Success:


// Write a JavaScript expression using the boolean variables and logical operators (&&, ||, !) to represent the combined
// condition described in step 2.
// Store the result of this expression (which will be true or false) in a variable called canFindTreasure.
// Print the Outcome:


// Use an if/else statement based on the value of canFindTreasure to print a message to the console:
// If canFindTreasure is true, print: "Success! Alex can find the legendary treasure!"
// If canFindTreasure is false, print: "Alas, Alex is missing crucial clues and cannot find the treasure yet."


// let hasTreasureMap = true;
// let foundAncientKey = false;
// let solvedRiddleScroll = true;
// let hasCompass = true;
// let isFullMoon = false;

// let canFindTreasure = hasTreasureMap && (foundAncientKey || (solvedRiddleScroll && hasCompass));


// if (canFindTreasure) {
//     console.log("Success! Alex can find the legendary treasure!");
// } else {
//     console.log("Alas, Alex is missing crucial clues and cannot find the treasure yet.");
// }


// ------------ TASK 15 ----------------

// Story: "Scoops & Smiles" ice cream shop wants to calculate their daily earnings for cones and sundaes.
// They also want to implement a simple volume discount to encourage larger purchases!
// Instructions:
// Define Prices for Ice Cream Items:


// "Ice Cream Cone": $4.00
// "Ice Cream Sundae": $8.00
// Store Daily Sales Data:


// Declare variables to store the number of each item sold today:
// conesSoldToday = (e.g., 250)
// sundaesSoldToday = (e.g., 120)
// Implement a Volume Discount:


// "Scoops & Smiles" offers a 5% discount on the entire daily earnings if the total earnings before discount are $1000 or more.
// Calculate Total Earnings:


// Calculate the earnings from cones sales (cone price * cones sold).
// Calculate the earnings from sundaes sales (sundae price * sundaes sold).
// Calculate the total daily earnings before any discount by adding cone earnings and sundae earnings.
// Check for discount: Use an if statement to check if the total daily earnings (before discount) 
// are greater than or equal to $1000.
// Apply discount if applicable: If the condition is true, calculate the 5% discount amount and subtract it from the total 
// earnings to get the final daily earnings. (Hint: A 5% discount means you keep 95% of the original price. You can multiply by 0.95).
// If the discount does not apply, then the final daily earnings are the same as the total earnings before discount.
// Log the Results:

// Use template literals to display the following in the console:
// Total earnings before discount.
// The amount of discount applied (if any, otherwise log $0).
// Final total daily earnings after discount (or with no discount applied).
// A message indicating if a volume discount was applied (e.g., "Volume Discount Applied: Yes/No").

// let iceCreamCone = 4;
// let iceCreamSundae = 8;

// let conesSoldToday = 250;
// let sundaesSoldToday = 120;

// let conCalculate = iceCreamCone * conesSoldToday;
// let sundaesCalculate = sundaesSoldToday * iceCreamSundae;

// let totalDailyEarning = conCalculate + sundaesCalculate;

// console.log(`You earn ${totalDailyEarning} Gel`);


// if (totalDailyEarning >= 1000) {
//     console.log(`after discount you earn ${totalDailyEarning *= 0.95} GEl`);
// } else {
//     console.log(`you earn ${totalDailyEarning}`);
// }


// ------------ TASK 16 ----------------


// Story: A music band needs to calculate their concert earnings and see if they made a profit after covering costs. 
// Instructions:
// Declare variables:
// ticketPrice set to 20.
// ticketsSold set to 500.
// concertCosts set to 8000.
// Calculate the totalEarnings from ticket sales.
// Calculate the profit (or loss) by subtracting concertCosts from totalEarnings.
// Use an if/else statement to check if the band made a profit:
// If profit is greater than 0, print a message like "Concert Profit: $2000. Great success!". 
// (Use a template literal to include the calculated profit).
// Otherwise (else), print a message indicating a loss or break-even, like "Concert did not cover costs. 
// Earnings: $8000, Costs: $8000." (Use template literals to show earnings and costs).


// let ticketPrice = 20;
// let ticketsSold = 100;
// let concertCosts = 8000;

// let totalEarnings = ticketsSold * ticketPrice;
// let earning = totalEarnings - concertCosts;

// if (earning > 0) {
//     console.log(`Concert Profit: ${earning}$. Great success!`);
// } else {
//     console.log(`Concert did not cover costs. Earnings: ${earning}$, Costs: $${concertCosts}.`);
// }