// ----------- Task1-----------

// const gothamCity = (signalOn) => {
//     if (signalOn) {
//         return "Batman is on patrol";
//     } else {
//         return "Gotham is quit tonight";
//     }
// }

// const gothamCity = (signalOn) => signalOn ? "Batman is on patrol" : "Gotham is quit tonight";

// console.log(gothamCity(true));
// console.log(gothamCity(!true));


// ----------- Task2-----------

// const avalibleAvangers = (avangers) => avangers.filter(item => item);

// console.log(avalibleAvangers(["Iron Man", "", null, "Thor", undefined]));


// ----------- Task3-----------

// const canRemoveMask = (peopleAround) => peopleAround ? "Safe to remove mask!" : "Keep the mask on";

// console.log(canRemoveMask(0));
// console.log(canRemoveMask(2));



// ----------- Task4-----------

// const chakraChakra = (level) => level > 80 ? "Full Power" : level >= 50 ? "Still Fighting" : "Need Ramen Recharge";

// console.log(chakraChakra(90));
// console.log(chakraChakra(60));
// console.log(chakraChakra(30));


// ----------- Task5-----------

// const isJediMaster = (angerLevel, wisdomLevel) => angerLevel < 30 && wisdomLevel > 70 ? true : false;


// console.log(isJediMaster(20, 80)); // true
// console.log(isJediMaster(50, 90)); // false


// ----------- Task6-----------

// const isTreasureSpot = (param) => param === "gold";

// console.log(isTreasureSpot("gold")); // true
// console.log(isTreasureSpot(0)); // false


// ----------- Task7-----------

// const strangePasscode = (code1, code2) => code1 !== code2;

// console.log(strangePasscode(null, undefined)); // true
// console.log(strangePasscode("0", 0)); // true
// console.log(strangePasscode(0, false)); // true
// console.log(strangePasscode(0, 0)); // false


// ----------- Task8-----------
// Story: Loki creates magical duplicates of himself. The Avengers must check if two Loki instances are actually the same.
// Task: Write a function isSameLoki(loki1, loki2) that:
// Returns true if both objects reference the same instance.
// Returns false otherwise.
// Example:

// let lokiA = { name: "Loki" };
// let lokiB = { name: "Loki" };
// let lokiC = lokiA;

// const isSameLoki = (loki1, loki2) => loki1 === loki2 ? true : false;

// console.log(isSameLoki(lokiA, lokiB)); // false
// console.log(isSameLoki(lokiA, lokiC)); // true

// ----------- Task9-----------

// Story: Schrödinger’s Cat is in a box, but until observed, it is both alive and dead.Can JavaScript express this paradox ?
//     Task : Write a function schrodingerCat(state1, state2) that:
// Returns true if state1 and state2 are both truthy or both falsy.
// Returns false otherwise.
//     Example:


// const schrodingerCat = (state1, state2) => state1 && state2 ? true : false;


// console.log(schrodingerCat("alive", "dead")); // true
// console.log(schrodingerCat(10, undefined)); // false
// console.log(schrodingerCat(1, "yes")); // true
// console.log(schrodingerCat("cat", 0)); // false