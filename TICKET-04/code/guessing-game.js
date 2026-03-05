//Ticket 04 Assignement
//Compare guess to a secret number (1-100)
// Return feedback: "Too high", "Too low", or "Correct!

// Secret number
let secretNumber = 50;

// Function to check guess
function checkGuess(guess) {
    if (guess > secretNumber) {
        return "Too high";
    } else if (guess < secretNumber) {
        return "Too low";
    } else {
        return "Correct!";
    }
}

// Test the function with multiple guesses
console.log("Guess 30:", checkGuess(30));
console.log("Guess 70:", checkGuess(70));
console.log("Guess 50:", checkGuess(50));