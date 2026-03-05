//Lab04 Assignemnt
// Simple Function
// Function with Return
// Function with Logic
//greet user
function greetUser(name) {
    console.log("Hello, " + name + "! Welcome.");
}

//add number
function addNumbers(num1, num2) {
    return num1 + num2;
}

//check if the number is even
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// call greeting function
greetUser("Alice");

// call sum function
let sum = addNumbers(66, 7);
console.log("Sum is:", sum);

// Call even check function
let result = isEven(7);
console.log("Is the number even?", result);