/*
This is a JavaScript project that converts human age into dog years.

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
*/

// Start with age as a number
const myAge = 25

// The value below will change
let earlyYears = 2

earlyYears *= 10.5

// The first two years are accounted for
// The value below will change
let laterYears = myAge - 2

// Calculate the number of dog years accounted for by the later years
laterYears *= 4

// Uncomment to check earlyYears and laterYears
// console.log(earlyYears);
// console.log(laterYears);

// Now add earlyYears and laterYears
const myAgeInDogYears = earlyYears + laterYears

// Write name
const myName = 'Stella McCartney'.toLowerCase()

// Write statement that displays name and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
