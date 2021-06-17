// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// The variable <name> is equal to the value of the string 'Dane'
// The program evaluates if the variable <name> is the equal to the string data type 'Mary'
// If <name> is equal to 'Mary', the console will log "Hi, Mary!"
// Otherwise, the console will log "How do you do?"
// The variable <name> is assigned the string data type 'Dane', so the console will log "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// You have a non-initialized variable called <secret> and a variable called <code> that assigned the value of the number 123
// The program that runs says if the variable <code> is equal to 123, the variable <secret> will be assigned the string 'super' and the variable <code> will be multiplied by 2 (246). The console will log 'super'.
// If the first block would happen to not be true -- the program would move onto the second block.
// The second block tells us that if the variable <code> is greater than 250, the variable <secret> will be assigned the string 'duper' and the console will log 'duper'.
//The first block is true; therefore, the console logs 'super'


//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// In this program, you're evaluating if the following statments are true.
// In the first block you are evaluating if the variable <isStudent> is of the value true AND the zip code is 80000.
// Both of the statments must be true for the the text in the console.log to run.
// Only the <isStudent> assignment is true, so this block won't run.
// In the next statement, you're evaluating if <isStudent> is false OR if <age> is less than 30. Neither of those are true, so that block of code does not run.
// In the next statement, you're evaluating if <isStudent> is set to the boolean value true. It is set to true, so the console will log "Welcome to Prime!"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'


// FIX - The instructions set colorOne to 'blue' and colorTwo to 'red'. Below, the code is set in the opposite manner
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - colorTwo set to 'purple' is missing from this block. Include colorTwo set to 'purple' below colorOne
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - the comparison operator should be && not || according to the instructions.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;


// FIX - The instructions state that the program checks if age is greater than or equal to minAge; however, because the values are both 21, one will never be greater than the other. So, one potential solution is to change the variable <age> to 22 so that one value is greater than the other and the console logs 'enter'.

let age = 22;
const minAge = 21;

// Also, the program below checks for the opposite condition: if age is less than or equal to minAge. To fix this change the symbol to >= to reflect the instructions.

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
