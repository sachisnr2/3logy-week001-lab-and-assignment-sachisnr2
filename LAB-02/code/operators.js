//Lab02 Assignment
//Calculate the sum of two numbers
//Calculate the product of two numbers
//Calculate the remainder of division 
// Calculate the (modulo)

let number1 = 200;
let number2 = 100;

console.log(`\nArithemetic Operations:`);
console.log(`Sum: ${number1 + number2}`);       
console.log(`Subtraction: ${number1 - number2}`);    
console.log(`Product: ${number1 * number2}`); 
console.log(`Division: ${number1 / number2}`);       
console.log(`Remainder (Modulo): ${number1 % number2}`);

// Declare two numbers
// Compare if two numbers are equal
// Compare if two numbers are not equal
// Compare if one number is greater than another
// Compare if one number is less than another

const num1 = 10;
const num2 = 5;

console.log(`Are the numbers Equal? ${num1 === num2}`)
console.log(`Are the numbers not equal? ${num1 !== num2}`);
console.log(`Is num1 greater than num2? ${num1 > num2}`);
console.log(`Is num1 less than num2? ${num1 < num2}`);

// Declare two numbers
// AND (&&) operator
// Returns true only if BOTH conditions are true
// OR (||) operator
// Returns true if AT LEAST ONE condition is true
// NOT (!) operator
// Reverses the boolean value

const no1 = 10;
const no2 = 5;

console.log(`AND result: ${(no1 > 5) && (no2 < 10)}`);
console.log(`OR result: ${(no1 < 5) || (no2 < 10)}`);
console.log(`NOT result:${!(no1 > no2)}`);