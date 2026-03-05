//Ticket02 Assignemnt
//Accept a numeric score (0-100)
 //Calculate letter grade based on score
 //Display score and corresponding letter grade
 //Use if/else or else if statements

 // Accept a numeric score
let score = 45;
let grade;

// Calculate letter grade
if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80 ) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else if (score > 100) {grade = "Invalid Score";
} else {
    grade = "F"
}


// Display result
console.log("Score: " + score);
console.log("Grade: " + grade);